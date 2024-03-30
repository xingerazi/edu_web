import router from '@/router';
import http from '../api/request'
import type {reg_rule_form,log_rule_form} from '../type/login'
import { useUserStore } from '@/stores';

export const sub_reg_form_servive=(formData:reg_rule_form)=>{
    formData.flag==1? formData.name='teacher':formData.name='student'
    return http.post('/user/api/register',{
        ...formData,
    })
}

export const sub_log_form_servive=(formData:log_rule_form)=>{
    return http.post('/user/api/login',{
        ...formData
    })
}

export const judge_identity=()=>{
    const user=useUserStore()
    if(user.user.flag===1){
        router.push('/user/teacher')
    }
    else if(user.user.flag===2){
        router.push('/user/student')
    }else{
        router.push('/user/admin')
    }
}