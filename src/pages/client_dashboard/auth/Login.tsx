import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "./schemas"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import Api from "@/services/api.service"
import { toast } from "sonner"
import { useState } from "react" // Import useState
import { Eye, EyeOff, LoaderCircle } from "lucide-react" // Import eye icons
import { useAppDispatch } from "@/store/hooks"
import { setCredentials } from "@/store/authSlice"

type LoginFormValues = z.infer<typeof loginSchema>
const Page = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false) // State for password visibility

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: ""
    },
    mode: "onChange"
  })

  const loginMutation = useMutation({
    mutationFn: async (payload: LoginFormValues) => {
      const { username, password } = payload;
      try {
        const { data } = await Api.post('auth/login', { username, password })
        return data
      }
      catch (error: any) {
        if (error.code === "ERR_NETWORK") {
          throw error?.message
        }
        throw error?.response?.data
      }

    },
    onSuccess: (data) => {
      dispatch(setCredentials(data))
      toast.success("Logged In",{
        toasterId:"login_success"
      })
      navigate('/')

    },
    onError: (error: any) => {
      toast.error(error?.detail, {toasterId:"login_failed" })
    }
  })

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await loginMutation.mutateAsync(data)
    }
    catch {
      // already handled in mutation
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup className="gap-2">
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="text"
                  placeholder="m@example.com"
                  {...register("username")}
                />
                {errors.username && (
                  <p className="text-sm text-red-500">{errors.username.message}</p>
                )}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className="relative">
                  <Input 
                    id="password" 
                    placeholder="*********" 
                    type={showPassword ? "text" : "password"} 
                    {...register("password")} 
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
              </Field>
              <Field>
                <Button type="submit" disabled={isSubmitting}>
                  Login {isSubmitting && <LoaderCircle size={30} className="animate-spin"/>}
                  </Button>
                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link to="/register">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Page