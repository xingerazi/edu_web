<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import type { log_rule_form } from '@/type/login'
import { ElMessage, type FormRules } from 'element-plus';
import { judge_identity, sub_log_form_servive } from '@/api/login'
import { useUserStore } from '@/stores';
import { ArrowLeft } from '@element-plus/icons-vue'
const router = useRouter()
const userStore = useUserStore()
//表单校验
const log_form_ref = ref()
const log_form = reactive<log_rule_form>({
    phone: '',
    password: '',
})
const log_form_rules = reactive<FormRules<log_rule_form>>({
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
    ]
})

const sub_log_form = async () => {
    await log_form_ref.value.validate()
    console.log(log_form);
    const test = await sub_log_form_servive(log_form)
    if (test.data.code === 200) {
        ElMessage('登录成功')
        console.log(test.data.data);

        userStore.setToken(test.data.data.token)
        userStore.getUser(test.data.data.user)
        judge_identity()
    } else if (test.data.code === 2) {
        ElMessage.error('密码错误')
    } else if (test.data.code === 1002) {
        ElMessage.error('该手机号未注册')
    } else {
        ElMessage.error('网络繁忙')
    }
}
</script>



<template>
    <div class="log_area">
        <h3 class="log_area_title">书生·万卷 登录</h3>
        <el-page-header :icon="ArrowLeft" class="back_main_page" @click="router.push('/')">
            <template #content>
                <span class="text-large font-600 mr-3"> 返回主页面 </span>
            </template>
        </el-page-header>
        <el-form :model="log_form" label-width="auto" style="max-width: 600px" class="reg_area_form"
            :rules="log_form_rules" ref="log_form_ref">
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="log_form.phone" placeholder="请输入您的手机号码" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="log_form.password" placeholder="请输入密码" type="password" />
            </el-form-item>
            <el-form-item>
                <el-button style="margin-left: 25%;" class="sub_btn"
                    @click="router.push('/login/regiesterpage')">去注册</el-button>
                <el-button type="primary" @click="sub_log_form" class="sub_btn">去登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style scoped lang="less">
.log_area {
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .reg_area_form {
        margin-bottom: 10%;

        .el-form-item {
            margin-bottom: 40px;
        }

        .sub_btn {
            width: 30%;
        }
    }

}
</style>
