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
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { resetPasswordSchema } from "./schemas"
import { useForm } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { LoaderCircle } from "lucide-react"
import { useMutation } from "@tanstack/react-query"
import Api from "@/services/api.service"
import { toast } from "sonner"
import { getMessageForToast } from "@/components/custom/HelperComponents"
import { useEffect } from "react"


type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
const Page = () => {

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      toast.error("Invalid reset link",{id:"invalid_token_link"})
      navigate('/login')
    }
  }, [token, navigate])
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
    mode: "onChange", // Validate on every change
  })

  const resetPasswordMutation = useMutation({
    mutationFn: async (payload: ResetPasswordFormValues) => {
      const { password, password_confirmation } = payload;
      try {
        const { data } = await Api.post('auth/reset-password', { password, password_confirmation, token })
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

      toast.success(data.message)
      navigate('/login')

    },
    onError: (error: any) => {
      console.log("in error", error);

      toast.error(getMessageForToast(error?.detail))
    }
  })

  const onSubmit = async (data: ResetPasswordFormValues) => {
    try {
      await resetPasswordMutation.mutateAsync(data)
    }
    catch {
      // already handled in mutation
    }
  }



  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription>
            please enter password to update
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">

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
                Update Password {isSubmitting && <LoaderCircle size={30} className="animate-spin" />}

              </Button>
            </div>
            <div className="mt-4 text-sm flex gap-2 justify-center">
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