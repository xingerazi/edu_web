<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { checkUserInfo } from '@/api/admin'
import type { UserInfo, UserInfoItem } from '@/type/admin'
import { addCourse, deleteCourse, showCourseList } from '@/api/course'
import type { AddCourseInfo, CourseItemInfo, getCourse } from '@/type/thing'
import type { data } from '@/utils/data'
import { Search } from '@element-plus/icons-vue'
const coursepara = ref<getCourse>({
  page: 1,
  size: 10
})

const courseList = ref<CourseItemInfo[]>([])

//分页查询
const changePage = async (page: number) => {
  coursepara.value.page = page
  const res = await showCourseList(coursepara.value)
  console.log(res.data.data)
}

//新增课程
const dateString = new Date('2024-03-15 09:00:00');
const addCourseItem=ref<AddCourseInfo>({
courseName: '111',
instructor: '111',
startTime: dateString,
endTime: dateString,
classroom: '111',
daysOfWeek: '111',
semester: '11',
teacherId: '111'
})
// const addCourseApi =async () => {
//   const res=await addCourse(addCourseItem)
// }

const deleteCourseAPI=async()=>{
  // const res=await deleteCourse()
  console.log();
  
}

onMounted(async () => {
  const res = await showCourseList(coursepara.value)
  console.log(res.data.data)
  courseList.value = res.data.data
})
</script>

<template>
  <div class="">
    <el-card>
      <div class="tit">
        <el-button :icon="Search" circle />
        <el-input placeholder="请搜索课程" clearable type="text" style="width: 200px"> </el-input>
        <el-button @click="">新增课程</el-button>
      </div>
      <el-table :data="courseList" style="width: 100%" stripe>
        <el-table-column fixed prop="id" label="ID" width="50" />
        <el-table-column prop="courseName" label="courseName" width="120" />
        <el-table-column prop="daysOfWeek" label="daysOfWeek" width="280" />
        <el-table-column prop="instructor" label="instructor" width="120" />
        <el-table-column prop="semester" label="semester" width="100" />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default>
            <el-button  type="primary" link size="small" @click="">删除</el-button>
            <el-button  type="primary" link size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="50"
        class="mt-4"
        @current-change="changePage"
      />
    </el-card>
  </div>
</template>

<style lang="less" scoped></style>
