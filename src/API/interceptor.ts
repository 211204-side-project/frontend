import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URI}/api/`,
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      }
    }
    return config
  },
  (err) => Promise.reject(err),
)

instance.interceptors.response.use(
  // status === 200
  (response: AxiosResponse) => {
    return response
  },
  // status !== 200
  (err) => Promise.reject(err),
)

export default instance
