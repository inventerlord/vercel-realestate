import Api from "@/services/api.service";
import { getAuthToken } from "@/store/authSlice"
import { useAppSelector } from "@/store/hooks"
import { useQuery } from "@tanstack/react-query";

const useGetCurrentUser = () => {
  const token = useAppSelector(getAuthToken);

  return useQuery({
    queryKey: ["currentUser", token],
    queryFn: async ({ queryKey }) => {
      const [_key, token] = queryKey;
      try {
        const { data } = await Api.get('auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        })
        return data
      }
      catch (error: any) {
        if (error.code === "ERR_NETWORK") {

          throw error?.message
        }
        throw error?.response?.data?.details
      }

    },
    enabled: !!token,
    retry: false,
    staleTime: Infinity
  })
}


export default useGetCurrentUser