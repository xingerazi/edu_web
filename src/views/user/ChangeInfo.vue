<script lang="ts" setup>
import type { reset_form } from '@/type/login';
import { onMounted, reactive, ref } from 'vue'
import { ElButton, ElDrawer, ElMessage, type UploadProps } from 'element-plus'
import { CircleCloseFilled } from '@element-plus/icons-vue'
import router from '@/router';
import { useUserStore } from '@/stores';
import { computed } from 'vue'
import { changeInfo, sendpwdCode, getImg } from '@/api/info'

const userStore = useUserStore()
const user = userStore.user
const token = userStore.token
//修改头像
const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = async (
    response,
    uploadFile
) => {
    imageUrl.value = URL.createObjectURL(uploadFile.raw!)
    ElMessage.success('上传成功')
    const res = await getImg()
    imgCode.value = URL.createObjectURL(res.data) 
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('头像请使用jpg格式~')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('请上传的头像大小小于2mb!')
        return false
    }
    return true
}

const imgexsit=ref('')
onMounted(async()=>{
  const res = await getImg()
  imgexsit.value = URL.createObjectURL (res.data) 
})
//修改密码，修改头像
const dialogVisible = ref(false)
const drawerVisible = ref(false)
const isDisabled = ref(false)
const headers = ref({
    'token': token
})
const imgCode=ref('')
//info框
let sex = computed<string>(() => {
    return user.flag == 1 ? '教师' : '学生'
})

const resetForm = reactive<reset_form>({
    phone: user.phone,
    name: user.name,
    sex: user.sex == 0 ? '男' : '女',
    email: user.email,
})

const submitInfo = async () => {
    const { data } = await changeInfo(resetForm)

    if (data.code == 200) {
        ElMessage.success('更改成功')
        user.email = resetForm.email!
        user.name = resetForm.name!
    } else {
        ElMessage.error('网络繁忙')
    }
}
//密码修改
const verifyCode = ref('')
const password = ref('')
const verify_abled = ref(false)
const sendVerify = async () => {
    const res = await sendpwdCode()
    console.log(res);
}
</script>



<template>
    <div class="change_info_page">
        <el-card style="width: 580px;height: 600px;" shadow="hover" class="card">
            <div class="title">信息修改</div>
            <el-form :model="resetForm" label-width="auto" style="max-width: 400px;margin-left: 80px;">
                <el-form-item label="用户名">
                    <el-input v-model="resetForm.name" placeholder="请输入用户名" :disabled="!isDisabled" />
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="resetForm.email" placeholder="请输入邮箱" :disabled="!isDisabled" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input placeholder="*******" :disabled="true" type="password" />
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="resetForm.sex" :disabled="!isDisabled">
                        <el-option label="男" value="女" />
                        <el-option label="女" value="女" />
                    </el-select>
                </el-form-item>
                <el-form-item label="身份">
                    <el-select v-model="sex" :disabled=true>
                        <el-option label="教师" value="教师" />
                        <el-option label="学生" value="学生" />
                    </el-select>
                </el-form-item>
                <div class="change_mode">
                    <span>开启修改模式</span><el-switch v-model="isDisabled" />
                </div>
                <div class="change_info_box">
                    <el-button @click="dialogVisible = true">修改密码</el-button>
                    <el-button @click="drawerVisible = true">修改头像</el-button>
                </div>
                <div class="page_button">
                    <el-button @click=" router.go(-1)">返回</el-button>
                    <el-button type="primary" @click="submitInfo">提交</el-button>
                </div>
            </el-form>
        </el-card>
    </div>
    <el-drawer v-model="drawerVisible" :show-close="false" class="changeavatar">
        <template #header="{ close, titleId, titleClass }">
            <h4 :id="titleId" :class="titleClass">修改头像</h4>
            <el-button type="danger" @click="close">
                <el-icon class="el-icon--left">
                    <CircleCloseFilled />
                </el-icon>
                Close
            </el-button>
        </template>
        <div>
            <el-avatar :size="150" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" v-if="!Boolean(imgexsit)"/>
            <el-avatar :size="150" :src="imgexsit" v-else/>
        </div>
        <div>
            <el-upload class="avatar-uploader" action="https://47.109.109.72:443/user/api/upload_img"
                :data="{ phone: user.phone }" name='img' :headers="headers" :show-file-list="false"
                :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <el-avatar v-if="imageUrl" :src="imageUrl" class="avatar" :size="150" />
                <el-icon v-else class="avatar-uploader-icon">
                    <Plus />
                </el-icon>
            </el-upload>
        </div>
    </el-drawer>
    <el-dialog v-model="dialogVisible" title="修改密码" width="500" center class="changepwdlog">
        <span>
            我们向您的邮箱发送了一条验证码，请查收后输入验证码,并修改密码
        </span>
        <div class="pwd_input">
            <div>
                <el-input v-model="verifyCode" style="width: 240px" placeholder="Please input" />
                <el-button @click="sendVerify" :disabled="verify_abled">发送验证码</el-button>
            </div>
            <el-input v-model="password" style="width: 240px" type="password" placeholder="Please input password"
                show-password />
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogVisible = false">取消修改</el-button>
                <el-button type="primary" @click="dialogVisible = false">
                    确认修改
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>


<style lang="less" scoped>
.change_info_page {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .card {
        position: relative;

        .title {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--el-text-color-regular);
            margin-bottom: 40px;
        }

        .page_button {
            position: absolute;
            bottom: 50px;
            right: 50px;
        }

        .change_mode {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            font-weight: 700;
            color: #7c7e82;

            span {
                margin-right: 20px;
            }
        }

        .change_info_box {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 40px;

            .el-button {
                margin: 0 20px;
            }
        }


    }

}

.changeavatar {
    .avatar-uploader .el-upload {
        border: 1px dashed var(--el-border-color);
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: var(--el-transition-duration-fast);
    }

    .avatar-uploader .el-upload:hover {
        border-color: var(--el-color-primary);
    }

    .el-icon.avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        text-align: center;
    }
}



.changepwdlog {
    .pwd_input {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        .el-input {
            margin: 20px;
        }
    }

    .el-button {
        margin: 30px;
    }
}
</style>