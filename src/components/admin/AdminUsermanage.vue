<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { checkUserInfo } from '@/api/admin'
import type { UserInfo, UserInfoItem } from '@/type/admin'
import { Search } from '@element-plus/icons-vue'
const userpara = ref<UserInfo>({
  page: '1',
  size: '10'
})
const userList = ref<UserInfoItem[]>([])


onMounted(async () => {
  const res = await checkUserInfo(userpara.value)
  userList.value = res.data.data
  userList.value.forEach((item) => (item.flag === 1 ? (item.flag = '教师') : (item.flag = '学生')))
})
</script>

<template>
  <el-card class="">
    <div class="tit" style="display: flex; flex-direction: row">
      用户管理
      <el-button :icon="Search" circle @click=""/>
      <el-input placeholder="请搜索" clearable type="text" style="width: 200px"> </el-input>
    </div>
    <el-table :data="userList" style="width: 620px">
      <el-table-column fixed prop="id" label="ID" width="50" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="email" label="email" width="200" />
      <el-table-column prop="phone" label="phone" width="120" />
      <el-table-column prop="flag" label="性别" width="0" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default>
          <el-button link type="primary" size="small">Detail</el-button>
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<style lang="less" scoped></style>
