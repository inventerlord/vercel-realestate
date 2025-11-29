import { lazy } from "react"

export { default as DashboardLayout } from "./layout"
export { default as AuthLayout } from "./auth/layout"


// 

export const LoginPage = lazy(() => import('./auth/Login'))
export const RegisterPage = lazy(() => import('./auth/Register'))
export const ForgotPasswordPage = lazy(() => import('./auth/ForgotPassword'))
export const ResetPasswordPage = lazy(() => import('./auth/ResetPassword'))




export const DashboardPage = lazy(() => import('./home'))
