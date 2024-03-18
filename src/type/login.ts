//注册表单
export interface reg_rule_form{
    phone:string,
    password:string,
    repassword:string,
    name?:string,
    flag:1|2,
    sex:0|1
    email:string,
}

//登录表单
export interface log_rule_form{
    phone:string,
    password:string,
}


