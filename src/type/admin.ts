export type UserInfo = {
    page:string
    size:string
    name?:string
    phone?: string
    flag?: string
}


export type UserInfoItem = {
data: any
    email:string
    id:number
    phone:string
    name: string
    flag: 1|2|'教师'|"学生"
}