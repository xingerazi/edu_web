import axios from 'axios'
const baseURL = 'http://113.54.237.2:5000'

const httpml = axios.create({
  baseURL,
  timeout: 100000
})


httpml.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => Promise.reject(err)
)

httpml.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default httpml