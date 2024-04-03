<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
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
  courseList.value = res.data.data
}

//新增课程
const dateString = new Date('2024-03-15 09:00:00')
const addCourseItem = reactive<AddCourseInfo>({
  courseName: 'test',
  instructor: 'test',
  startTime: dateString,
  endTime: dateString,
  classroom: 'Room 111',
  daysOfWeek: 'Monday',
  semester: '1',
  teacherId: '1'
})

const addtheCourse = async () => {
  console.log(addCourseItem)

  const res=await addCourse(addCourseItem)
  console.log(res.data.data);
  
  
}

/**搜索课程 */
const searchkey=ref('')
const searchCourse=async ()=>{
  coursepara.value.name=searchkey.value
  const res = await showCourseList(coursepara.value)
  console.log(res);
  courseList.value=res.data.data
}

//新增课程
const dialogVisible = ref(false)

onMounted(async () => {                                                                                                                                  
  const res = await showCourseList(coursepara.value)
  courseList.value = res.data.data
})
</script>

<template>
  <div class="view">
    <el-card>
      <div class="tit">
        <el-button :icon="Search" circle @click="searchCourse()" style="margin-right: 20px;"/>
        <el-input placeholder="请搜索课程" clearable type="text" style="width: 200px" v-model="searchkey"> </el-input>
        <el-button @click="dialogVisible = true" style="margin-left: 30px">新增课程</el-button>
      </div>
      <el-table :data="courseList" style="width: 100%" stripe>
        <el-table-column fixed prop="id" label="ID" width="80" />
        <el-table-column prop="courseName" label="courseName" width="150" />
        <el-table-column prop="daysOfWeek" label="days of Week" width="300" />
        <el-table-column prop="instructor" label="instructor" width="180" />
        <el-table-column prop="semester" label="semester" width="180" />
        <el-table-column fixed="right" label="Operations" width="150">
          <template #default>
            <el-button type="primary" link size="small" @click="">删除</el-button>
            <el-button type="primary" link size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagechangebtn">
        <el-pagination
          small
          background
          layout="prev, pager, next"
          :total="50"
          class="mt-4"
          @current-change="changePage"
        />
      </div>
    </el-card>
    <el-dialog v-model="dialogVisible" title="课程上传" width="500">
      <el-form ref="addCourseItem" label-width="130px" :model="addCourseItem">
        <el-form-item label="名称">
          <el-input
            v-model="addCourseItem.courseName"
            placeholder="请输入课程名称"
            width="400px"
          ></el-input>
        </el-form-item>
        <el-form-item label="教师名">
          <el-input v-model="addCourseItem.instructor" placeholder="请输入教师名"></el-input>
        </el-form-item>
        <el-form-item label="教室名">
          <el-input v-model="addCourseItem.classroom" placeholder="请输入教室名"></el-input>
        </el-form-item>
        <el-form-item label="每周上课日">
          <el-input v-model="addCourseItem.daysOfWeek" placeholder="请输入每周上课日"></el-input>
        </el-form-item>
        <el-form-item label="学期">
          <el-input v-model="addCourseItem.semester" placeholder="请输入上课学期"></el-input>
        </el-form-item>
        <el-form-item label="学期2">
          <el-input placeholder="请输入上课学期"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="addtheCourse"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped>
.view {
  .el-card {
    margin-left: 30px;
    .tit {
      margin-bottom: 30px;
    }
    .el-table {
      margin-left: 20px;
    }
    .pagechangebtn {
      margin-top: 20px;
      margin-left: 30%;
    }
  }
}
</style>
