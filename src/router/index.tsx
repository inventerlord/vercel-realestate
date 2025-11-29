import { AuthLayout, CategoriesPage, ChefsPage, ForgotPasswordPage, HomePage, LoginPage, MainLayout, OccasionsPage, RecipePage, RegisterPage, ResetPasswordPage } from "@/pages/client";
import { useRoutes } from "react-router-dom"
import { GuestRoute, ProtectedRoute } from "./wrappers";
import { DashboardLayout, DashboardPage } from "@/pages/client_dashboard";



const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path:"recipes", element: <RecipePage /> },
        { path:"chefs", element: <ChefsPage /> },
        { path:"categories", element: <CategoriesPage /> },
        { path:"occasions", element: <OccasionsPage /> },
      ]
    },
    {
      path: '/front-dashboard',
      element: (
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <DashboardPage /> },
      ]
    },
    {
      path: '/',
      element: (
        <GuestRoute>
          <AuthLayout />
        </GuestRoute>
      ),
      children: [
        { path: "login", element: <LoginPage /> },
        { path: 'register', element: <RegisterPage /> },
        { path: 'forgot-password', element: <ForgotPasswordPage /> },
        { path: 'reset-password', element: <ResetPasswordPage /> }
      ]
    },

  ]);
  return routes
}


export default Router