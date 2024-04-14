import type { CourseItemInfo } from "@/type/thing";
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
    /**课程 */
    const courseId=ref(0)
    const courseItem=ref<CourseItemInfo>({
      id: 1,
      courseName: '',
      instructor: '',
      semester: '',
      classroom: '',
      daysOfWeek: '',
      teacherId: 1
    })
    /**用户 */
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
    const setCourseinfo=(data:CourseItemInfo)=>{
      courseItem.value=data
    }
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
    const setCourse=(id:any)=>{
      courseId.value=id
    }

    return {
      courseItem,
      courseId,
      imgCode,
      token,
      user,
      setToken,
      removeToken,
      getUser,
      setUser,
      deleteAll,
      setCourse,
      setCourseinfo
    }
  },
  {
    persist: true
  }
)
