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
    const imgCode = ref('')
    const setToken = (newToken: string) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }
    const user = ref<User>({
      email: '', flag: 1,
      id: 0,
      image: '',
      name: '',
      phone: '',
      sex: 1,
    })
    const getUser = async (data: {
      image: string;
      phone: string;
      flag: 1 | 2 | 0;
      email: string;
      sex: 0 | 1;
      id: number; name: string;
    }) => {
      user.value.name = data.name
      user.value.email = data.email
      user.value.sex = data.sex
      user.value.flag = data.flag
      user.value.id = data.id
      user.value.phone = data.phone
      user.value.image = data.image
    }
    const setUser = () => {
    }
    const deleteAll = () => {
      token.value = ''
      user.value = {
        email: '', flag: 1,
        id: 0,
        image: '',
        name: '',
        phone: '',
        sex: 1,
      }
    }

    return {
      imgCode,
      token,
      user,
      setToken,
      removeToken,
      getUser,
      setUser,
      deleteAll
    }
  },
  {
    persist: true
  }
)
