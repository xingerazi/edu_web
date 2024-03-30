import http from '../api/request'
import type { reset_form } from '@/type/login';
import { useUserStore } from '@/stores';

const userStore=useUserStore()
const user=userStore.user
//修改信息
export const changeInfo=(info:reset_form)=>{
    if(info.sex=='男'){
        info.sex=0
        return http.put('/user/api/update/infos',{
            ...info
        })
    }
    else{
        info.sex=1
        return http.put('/user/api/update/infos',{
            ...info
        })
    }

}


/**
 * 发送邮箱验证码
 * @returns 
 */
export const sendpwdCode=()=>{
    return http.get(`/user/api/email/sendCode/${user.email}`)
}


export const getImg=()=>{
    return http.get(`/user/api/get_img/${user.phone}`, { responseType: 'blob' }
    )
}
