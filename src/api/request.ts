import axios from 'axios'

const baseURL = 'http://113.54.233.71:8899'

const http = axios.create({
  baseURL,
  timeout: 8000
})

http.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => Promise.reject(err)
)

http.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    // TODO 5. 处理401错误
    return Promise.reject(err)
  }
)

export default http