import { lazy } from "react"

export { default as MainLayout } from "./layout"
export { default as AuthLayout } from "././auth/layout"


// 

export const LoginPage = lazy(() => import('./auth/Login'))
export const RegisterPage = lazy(() => import('./auth/Register'))
export const ForgotPasswordPage = lazy(() => import('./auth/ForgotPassword'))
export const ResetPasswordPage = lazy(() => import('./auth/ResetPassword'))


export const HomePage = lazy(() => import('./home'))
export const RecipePage = lazy(() => import('./recipes'))
export const ChefsPage = lazy(() => import('./chefs'))
export const CategoriesPage = lazy(() => import('./categories'))
export const OccasionsPage = lazy(() => import('./occasions'))