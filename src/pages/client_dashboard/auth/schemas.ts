import * as z from "zod"

export const loginSchema = z.object({
  username: z.string().nonempty("Username Is Required"),
  password: z.string().nonempty("Password Is Required")
})

export const registerSchema = z.object({
  username: z.string()
    .min(5,"Username must be at least 5 character")
    .regex(/^[a-z0-9]+$/,"Username must be lowercase and contains no spacial character")
    .transform((val) => val.toLowerCase()),
  email: z.string().email("Please Enter A Valid Email"),
  password: z.string().min(8, "Password Must be at least 8 characters"),
  password_confirmation: z.string(),
}).refine((data) => data.password === data.password_confirmation, {
  message: "Passwords don't match",
  path: ["password_confirmation"]
})

