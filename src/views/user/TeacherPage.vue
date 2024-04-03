<script setup lang='ts'>
import HomePageFooter from '@/components/HomePageFooter.vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/index'
import { onMounted, ref } from 'vue';
import { getImg } from '@/api/info';
const router = useRouter()
const userStore = useUserStore()
const imgCode = ref('')

//退出登录
const exitlogin=()=>{
  userStore.deleteAll()
  router.push('/')
}

onMounted(async () => {
  const res = await getImg()
  imgCode.value = URL.createObjectURL(res.data)
})
</script>


<template>
  <el-affix :offset="100" style="height: 0;">
    <el-button style="margin-left: 50px;" @click="exitlogin">退出登录</el-button>
  </el-affix>
  <div class="stu_page">
    <div class="stu_page_navbar">
      <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" style="width: 100%;">
      </el-menu>
    </div>
    <div class="stu_page_maincontainer">
      <el-card class="stu_main_info_card" shadow="hover">
        <div class="stu_main_info">
          <div class="stu_main_info_img">
            <el-avatar :size="120" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              v-if="!Boolean(imgCode)" />
            <el-avatar :size="120" :src="imgCode" v-else />
            <div class="stu_main_info_intro">
              <h2>{{ userStore.user.name }}</h2>
              <el-text class="mx-1" type="info">{{ userStore.user.flag == 1 ? '教师' : '学生' }}</el-text>
            </div>
          </div>
          <div class="stu_page_time">
            <div class="stu_page_time_box">
              <p class="stu_page_time_title">打卡次数:</p>
              <p class="stu_page_time_cont">26天</p>
            </div>
            <div>
              <p class="stu_page_time_title">教学所属:</p>
              <p class="stu_page_time_cont">书生万卷</p>
            </div>
          </div>
          <div class="stu_main_info_others">
            <el-button @click="router.push('/user/changeinfo')">更改个人信息</el-button>
          </div>
        </div>
      </el-card>
      <el-card class="stu_page_func" style="margin-top: 20px;">
        <div>
          <div class="selector">
            <el-menu default-active="/user/myself" class="el-menu-demo" mode="horizontal" @select=""
              text-color="	#696969" active-text-color="#00A3DB" router>
              <el-menu-item index="/teacher/myself" style="font-size: 18px;">我的空间</el-menu-item>
              <el-menu-item index="/teacher/visteacher" style="font-size: 18px;">智能批改</el-menu-item>
              <el-menu-item index="/user/teacher/sportscoring" style="font-size: 18px;">体育评分</el-menu-item>
              <el-menu-item index="/user/chatai" style="font-size: 18px;">智能问答</el-menu-item>
            </el-menu>
          </div>
          <router-view></router-view>
        </div>
      </el-card>
    </div>
  </div>
  <HomePageFooter></HomePageFooter>
</template>

<style lang="less" scoped>
.stu_page {
  min-height: 100vh;
  background-color: rgb(238, 242, 248);

  .stu_page_maincontainer {
    box-sizing: border-box;
    margin-top: 30px;
    margin-left: 25%;
    min-width: 800px;
    width: 50%;
    min-height: 100vh;

    .stu_main_info_card {
      .stu_main_info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .stu_page_time {
          display: flex;

          .stu_page_time_box {
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid #D3D3D3;
          }

          .stu_page_time_title {
            color: black;
            font-size: 20px;
            font-weight: 400;
          }

          .stu_page_time_cont {
            margin-top: 5px;
            color: #A9A9A9;
          }
        }

        .stu_main_info_others {}

        .stu_main_info_img {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-left: 10%;
          width: 30%;

          .stu_main_info_intro {
            min-height: 70px;
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }
        }
      }

      width: 100%;

      .stu_page_func {
        margin-top: 30px;
      }
    }
  }
}
</style>