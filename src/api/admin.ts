import type { UserInfo, UserInfoItem } from '@/type/admin';
import http from './request';


export const checkUserInfo=(data:UserInfo)=>{
    return http.post("/admin/api/get/users",data)
}
