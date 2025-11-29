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
import { Link} from "react-router-dom"
import { forgotPasswordSchema } from "./schemas"
import { useForm } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { LoaderCircle } from "lucide-react"
import { useMutation } from "@tanstack/react-query"
import Api from "@/services/api.service"
import { toast } from "sonner"
import { getMessageForToast } from "@/components/custom/HelperComponents"
import { useState } from "react"


type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
const Page = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange", // Validate on every change
  })

  const forgotMutation = useMutation({
    mutationFn: async (payload: ForgotPasswordFormValues) => {
      const { email } = payload;
      try {
        const { data } = await Api.post('auth/forgot-password', { email })
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
      setShowSuccessMessage(data.message)
      toast.success(data.message)
    },
    onError: (error: any) => {
      console.log("in error", error);

      toast.error(getMessageForToast(error?.detail))
    }
  })

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    try {
      await forgotMutation.mutateAsync(data)
    }
    catch {
      // already handled in mutation
    }
  }
  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Forgot Your Password</CardTitle>
          <CardDescription>
            enter your email to get password reset mail
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">

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

              {showSuccessMessage ? (
                <Button type="button" className="w-full">
                  {showSuccessMessage}

                </Button>
              ) : (
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  Send Reset Link {isSubmitting && <LoaderCircle size={30} className="animate-spin" />}

                </Button>
              )}

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