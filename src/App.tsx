import { BrowserRouter } from "react-router-dom"
import Router from "./router"
import { useAppDispatch } from "./store/hooks"
import { useEffect } from "react"
import { initDarkMode } from "./store/darkModeSlice"
import { Toaster } from "./components/ui/sonner"
import useGetCurrentUser from "./hooks/useGetCurrentUser"
import { logout, setUser } from "./store/authSlice"
import { Loader } from "./components/custom/HelperComponents"


function App() {
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useGetCurrentUser()
  useEffect(() => {
    dispatch(initDarkMode())


    if (data) {
      dispatch(setUser(data))
    }
    if (error) {
      dispatch(logout())
    }

  }, [dispatch, data, error])
  return (
    <BrowserRouter>
      <Router />
      <Toaster />
      {isLoading && <Loader />}
    </BrowserRouter>
  )
}

export default App
