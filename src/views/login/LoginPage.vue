<script setup lang="ts">
import { ref,watch } from 'vue'
import { useRouter } from 'vue-router'

const router=useRouter()

</script>
<template>
  <div class="loginPage">
    <el-row class="loginview">
      <el-col :span="12" class="bg" />
      <el-col :span="12" class="formView">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.back_main_page{
  position: absolute;
  top: 200px;
  left: 150px;
}
.loginPage {
  height: 100vh;
  overflow: hidden;
  background-color: rgb(238, 242, 248);
  display: flex;
  justify-content: center;
  align-items: center;

  .loginview {
    overflow: hidden;
    background-color: #fff;
    width: 45%;
    height: 45%;
    min-height: 400px;
    min-width: 600px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

    .bg {
      background: url("../../assets/images/class/coursebanner4.jpg") no-repeat 100% center;
      background-size: cover;
      height: 100%;
    }

    .formView {
      background: linear-gradient(to right, #f0f0f0, #ececec);
      height: 100%;
    }
  }
}
</style>
