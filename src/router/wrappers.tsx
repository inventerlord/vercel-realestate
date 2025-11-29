import { LazyLoader, Loader } from "@/components/custom/HelperComponents"
import useGetCurrentUser from "@/hooks/useGetCurrentUser"
import { getAuthToken } from "@/store/authSlice"
import { useAppSelector } from "@/store/hooks"
import { Navigate } from "react-router-dom"



export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useAppSelector(getAuthToken)
  const { isLoading } = useGetCurrentUser()

  if (!token) return <Navigate to={'/login'} replace />

  if (isLoading) return <Loader />

  return <LazyLoader>{children}</LazyLoader>

}
export const GuestRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useAppSelector(getAuthToken)
  const { data:user } = useGetCurrentUser()

  if (token && user) return <Navigate to={'/'} replace />


  return <LazyLoader>{children}</LazyLoader>

}