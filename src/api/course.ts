import type { AddCourseInfo, getCourse } from '@/type/thing';
import http from './request';

export const showCourseList=(data:getCourse)=>{
    return http.post(`/course/api/page`,data)
}


export const addCourse=(data: { courseName: string; instructor: string; startTime: string; endTime: string; classroom: string; daysOfWeek: string; semester: string; teacherId: string; })=>{
    return http.post(`/admin/api/add/course`,data)
}

export const deleteCourse=(id:string)=>{
    return http.delete(`/admin/api/delete/course?id=${id}`)
}


/** 获取课程视频*/

export const getCourseVideo=(id:any)=>{
    return http.get(`/course/api/video?file=example${id}.mp4`, { responseType: 'blob' })
}
