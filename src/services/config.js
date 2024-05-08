import axios from "axios"

const api = axios.create({baseURL: "https://fakestoreapi.com"})

api.interceptor.responso.use((response)=>response.data, (error)=>Promise.reject(error))

export default api
