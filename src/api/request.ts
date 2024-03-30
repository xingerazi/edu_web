import axios from 'axios'
import { useUserStore } from '@/stores';
const token=useUserStore().token

const baseURL = 'https://47.109.109.72:443'

const http = axios.create({
  baseURL,
  timeout: 8000
})


http.interceptors.request.use(
  (config) => {
    if(token){
      config.headers['token']=token
    }
    
    return config
  },
  (err) => Promise.reject(err)
)

http.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default http