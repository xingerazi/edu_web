export type getCourse={
    page:number,
    size:number,
    name?:string
}

export type CourseItemInfo = {
    /** 课程id*/
    id: number
    /** 名字 */
    courseName: string
    /** 创造者 */
    instructor: string
    /** 学期 */
    semester: string
    /** 教师 */
    classroom: string
    /** 课程 */
    daysOfWeek: string
    /** 教师id */
    teacherId: number
}



/**新增课程 */
export type AddCourseInfo = {
    courseName:string
    instructor:string
    startTime:Date
    endTime:Date
    classroom:string
    daysOfWeek:string
    semester:string
    teacherId:string
}