import type { AddCourseInfo, getCourse } from '@/type/thing';
import http from './request';

export const showCourseList=(data:getCourse)=>{
    return http.post(`/course/api/page`,data)
}


export const addCourse=(data:AddCourseInfo)=>{
    return http.post(`/admin/api/add/course`,data)
}

export const deleteCourse=(id:string)=>{
    return http.delete(`/admin/api/delete/course?id=${id}`)
}
