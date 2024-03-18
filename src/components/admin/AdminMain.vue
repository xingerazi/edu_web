<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top: 20px;">
            <el-card shadow="hover">
                <div class="user">
                    <img src="../../assets/images/ava_img.png" alt="">
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="role">超级管理员</p>
                    </div>
                </div>
                <div class="login_info"> 
                    <p>上次登录时间: <span>2022-7-11</span> </p>
                    <p>上次登录地点: <span>2022-7-11</span> </p>
                </div>
            </el-card>
            <el-card shadow="hover" style="margin-top: 20px; height: 450px;">
                <div>
                    <el-card></el-card>
                </div>
            </el-card>
        </el-col>
        <el-col  :span="16" style="margin-top: 20px;"></el-col>
    </el-row>
</template>

<script setup lang='ts'>

</script>

<style lang="less" scoped>
.home{
    .user{
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
        img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-right: 40px;
        }
    }
    .login_info{
        p{
            line-height: 30px;
            font-size: 14px;
            color: #999;
            span{
                color: #666;
                margin-left: 60px;
            }
        }
    }
}
</style>