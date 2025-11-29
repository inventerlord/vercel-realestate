import axios from "axios"


const getBaseUrl = () => {
  // if (process.env.NODE_ENV === "production") {
  //   return "/api"
  // }

  if (typeof window !== "undefined" && window.env?.NODE_ENV === "development") {
    return `${window.env.SERVER_URI}/api`
  }
  return "/api"
}
const Api = axios.create({
  baseURL: getBaseUrl(),
  timeout: 10000,
  withCredentials: true
})

export default Api;