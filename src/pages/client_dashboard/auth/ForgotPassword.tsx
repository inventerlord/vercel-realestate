import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom"
import { registerSchema } from "./schemas"
import { useForm } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { LoaderCircle } from "lucide-react"
import { useMutation } from "@tanstack/react-query"
import Api from "@/services/api.service"
import { useAppDispatch } from "@/store/hooks"
import { setCredentials } from "@/store/authSlice"
import { toast } from "sonner"
import { getMessageForToast } from "@/components/custom/HelperComponents"


type RegisterFormValues = z.infer<typeof registerSchema>;
const Page = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    mode: "onChange", // Validate on every change
  })

  const registerMutation = useMutation({
    mutationFn: async (payload: RegisterFormValues) => {
      const { username, email, password, password_confirmation } = payload;
      try {
        const { data } = await Api.post('auth/register', { username, email, password, password_confirmation })
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
      toast.success("Register Success")
      navigate('/')

    },
    onError: (error: any) => {
      console.log("in error", error);

      toast.error(getMessageForToast(error?.detail))
    }
  })

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      await registerMutation.mutateAsync(data)
    }
    catch {
      // already handled in mutation
    }
  }
  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Fill your Form to register to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2 relative">
                <Label htmlFor="email">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="john"
                  {...register('username')}
                  autoComplete="username"
                />
                {errors.username && (
                  <p className="text-sm text-red-500">{errors.username.message}</p>
                )}
              </div>
              <div className="grid gap-2 relative">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email")}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-2 relative">
                <Label htmlFor="password">Password</Label>

                <Input id="password" type="password" required autoComplete="new-password" {...register('password')} />

                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div className="grid gap-2 relative">
                <Label htmlFor="password">Confirm Password</Label>

                <Input id="password_confirmation" type="password" required autoComplete="new-password" {...register('password_confirmation')} />

                {errors.password_confirmation && (
                  <p className="text-sm text-red-500">{errors.password_confirmation.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                Register {isSubmitting && <LoaderCircle size={30} className="animate-spin" />}

              </Button>
            </div>
            <div className="mt-4 text-sm flex gap-2 justify-center">
              Already have an account?
              <Link to={"/login"} className="underline underline-offset-4">
                Sign In
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>);
}


export default Page