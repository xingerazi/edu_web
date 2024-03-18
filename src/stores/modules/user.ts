import { defineStore } from "pinia";
import { ref } from 'vue'

type User = {
  email: string,
  flag: 2 | 1 | 0,
  id: number
  image: string
  name: string
  phone: string
  sex: 0 | 1
}

// 用户模块 token setToken removeToken
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const setToken = (newToken: string) => {
      token.value = newToken
      console.log(token.value);
    }
    const removeToken = () => {
      token.value = ''
    }
    const user: User = {
      email: '', flag: 1,
      id: 0,
      image: '',
      name: '',
      phone: '',
      sex: 1,
    }
    const getUser = async (data: {
      image: string;
      phone: string;
      flag: 1 | 2 | 0;
      email: string;
      sex: 0 | 1;
      id: number; name: string;
    }) => {
      user.name = data.name
      user.email = data.email
      user.sex = data.sex
      user.flag = data.flag
      user.id = data.id
      user.phone = data.phone
      user.image = data.image
    }
    const setUser = () => {
    }

    return {
      token,
      setToken,
      removeToken,
      user,
      getUser,
      setUser
    }
  },
  {
    persist: true
  }
)
