<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import type { reg_rule_form } from '@/type/login'
import type { FormRules } from 'element-plus';
import { sub_reg_form_servive } from '@/api/login'
import axios from 'axios';
const router = useRouter()

//表单校验
const reg_form_ref = ref()
const reg_form = reactive<reg_rule_form>({
    phone: '',
    password: '',
    repassword: '',
    name: '',
    flag: 1,
    sex: 0,
    email: ''
})
const reg_form_rules = reactive<FormRules<reg_rule_form>>({
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        {
            pattern: /^[1-9]\d{10}$/,
            message: '请输入正确的手机号码',
            trigger: 'blur'
        }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        {
            pattern: /^\S{6,12}$/,
            message: '密码必为6-12位',
            trigger: "blur"
        }
    ],
    email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
        {
            pattern: /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/,
            message: '请输入正确格式的邮箱',
            trigger: 'blur'
        }
    ],
    repassword: [
        { required: true, message: '请确认密码', trigger: 'blur' },
        {
            validator: (_, value, callback) => {
                if (value !== reg_form.password) {
                    callback(new Error('两次输入密码不一致'))
                } else {
                    callback() // 就算校验成功，也需要callback
                }
            },
            trigger: 'blur'
        }
    ],
    flag: [
        { required: true, message: '请输入您的身份', trigger: 'blur' },
    ]
})

const sub_reg_form = async () => {
    await reg_form_ref.value.validate()
    console.log(reg_form);
    console.log(reg_form.phone);
    await sub_reg_form_servive(reg_form);
    // axios.post('/user', {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    // })
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
}
</script>



<template>
    <div class="reg_area">
        <h3 class="reg_area_title">书生·万卷 注册</h3>
        <el-form :model="reg_form" label-width="auto" style="max-width: 600px" class="reg_area_form"
            :rules="reg_form_rules" ref="reg_form_ref">
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="reg_form.phone" placeholder="请输入您的手机号码" />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="reg_form.email" placeholder="用于找回密码" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="reg_form.password" placeholder="请输入密码" type="password" />
            </el-form-item>
            <el-form-item label="确认密码" prop="repassword">
                <el-input v-model="reg_form.repassword" placeholder="请确认密码" type="password" />
            </el-form-item>
            <el-form-item label="身份" prop="flag">
                <el-select v-model="reg_form.flag" placeholder="请选择您的身份">
                    <el-option label="学生" :value=2 />
                    <el-option label="老师" :value=1 />
                </el-select>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="reg_form.sex">
                    <el-radio :value=0>男</el-radio>
                    <el-radio :value=1>女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button style="margin-left: 25%;" class="sub_btn"
                    @click="router.push('/login/loginpage')">返回</el-button>
                <el-button type="primary" @click="sub_reg_form" class="sub_btn">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped lang="less">
.reg_area {
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .reg_area_form {
        .sub_btn {
            width: 30%;
        }
    }

}
</style>
