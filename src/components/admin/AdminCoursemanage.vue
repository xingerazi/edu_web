<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { checkUserInfo } from '@/api/admin'
import type { UserInfo, UserInfoItem } from '@/type/admin'
import { addCourse, deleteCourse, showCourseList } from '@/api/course'
import type { AddCourseInfo, CourseItemInfo, getCourse } from '@/type/thing'
import type { data } from '@/utils/data'
import { Search } from '@element-plus/icons-vue'
import * as echarts from 'echarts';
import { ElMessage } from 'element-plus'
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
const dateString = new Date('2024-06-15 09:00:00')
const addCourseItem = reactive({
  courseName: '',
  instructor: '',
  startTime: '2024-04-09 09:00:00',
  endTime: '2024-06-15 09:00:00',
  classroom: '',
  daysOfWeek: '',
  semester: 'Summer 2024',
  teacherId: '7'
})

const addtheCourse = async () => {
  console.log(addCourseItem)
  const res = await addCourse(addCourseItem)
  dialogVisible.value=false
  ElMessage.success('增添成功!')
}

/**搜索课程 */
const searchkey = ref('')
const searchCourse = async () => {
  coursepara.value.name = searchkey.value
  const res = await showCourseList(coursepara.value)
  courseList.value = res.data.data
}

//新增课程
const dialogVisible = ref(false)

/**图标 */
const chart = ref(null);
const set=()=>{
  const chartContainer = chart.value;

  // 创建 echarts 实例
  const myChart = echarts.init(chartContainer);
  const data = [];
  for (let i = 0; i < 4; i++) {
    const month = i + 1;
    const count = Math.floor(Math.random() * 10) + 1;
    data.push([`${month} 月`, count]);
  }

  // 设置图表配置项
  const option = {
    title: {
      text: '课程增量'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: data.map(item => item[0]),
      axisLabel: {
        interval: 0,
        rotate: 45 // x 轴标签旋转角度
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: data.map(item => item[1]),
      type: 'bar',
      label: {
        show: true,
        position: 'top'
      }
    }, {
      data: data.map(item => item[1]),
      type: 'line',
      smooth: true
    }]
  };

  // 使用配置项和数据渲染图表
  myChart.setOption(option);
}
const chart2 = ref(null);
const set2=()=>{
  const chartContainer = chart2.value;

// 创建 echarts 实例
const myChart = echarts.init(chartContainer);

// 模拟数据
const data = [
  { value: 335, name: 'Math' },
  { value: 310, name: 'Science' },
  { value: 234, name: 'History' },
  { value: 135, name: 'English' },
  { value: 548, name: 'Art' }
];

// 设置图表配置项
const option = {
  title: {
    text: '用户与不同种类课程的关系',
    bottom: 'bottom',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 10,
    data: data.map(item => item.name)
  },
  series: [
    {
      name: '课程类别',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '30',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: data
    }
  ]
};

// 使用配置项和数据渲染图表
myChart.setOption(option);
}

onMounted(async () => {
  set()
  set2()
  const res = await showCourseList(coursepara.value)
  courseList.value = res.data.data
})

const deleteit=async(item: any)=>{
  console.log(item.row.id);
  const res=await deleteCourse(item.row.id)
  console.log(res.data);
}
</script>

<template>
  <div class="view">
    <el-card>
      <div class="tit">
        <el-button :icon="Search" circle @click="searchCourse()" style="margin-right: 20px" />
        <el-input
          placeholder="请搜索课程"
          clearable
          type="text"
          style="width: 200px"
          v-model="searchkey"
        >
        </el-input>
        <el-button @click="dialogVisible = true" style="margin-left: 30px">新增课程</el-button>
      </div>
      <el-table :data="courseList" style="width: 100%" stripe slot-scope="scope">
        <el-table-column fixed prop="id" label="ID" width="80" />
        <el-table-column prop="courseName" label="courseName" width="180" />
        <el-table-column prop="daysOfWeek" label="days of Week" width="280" />
        <el-table-column prop="instructor" label="instructor" width="180" />
        <el-table-column prop="semester" label="semester" width="180" />
        <el-table-column fixed="right" label="Operations" width="150">
          <template #default="scope">
            <el-button type="primary" link size="small" @click="deleteit(scope)">删除</el-button>
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
    <div>
      <div ref="chart" style="width: 400px; height: 400px;"></div>
      <div ref="chart2" style="width: 400px; height: 400px;"></div>
    </div>
  </div>
  <el-dialog v-model="dialogVisible" title="课程上传" width="500">
      <el-form
        :model="addCourseItem"
        label-width="auto"
        style="max-width: 600px"
        class="reg_area_form"
        ref="reg_form_ref"
      >
        <el-form-item label="教室" prop="classroom">
          <el-input v-model="addCourseItem.classroom" placeholder="请输入教室" />
        </el-form-item>
        <el-form-item label="课程名" prop="courseName">
          <el-input v-model="addCourseItem.courseName" placeholder="请输入课程名" />
        </el-form-item>
        <el-form-item label="排课时间" prop="daysOfWeek">
          <el-input v-model="addCourseItem.daysOfWeek" placeholder="请输入排课时间" />
        </el-form-item>
        <el-form-item label="创建者" prop="instructor">
          <el-input v-model="addCourseItem.instructor" placeholder="请输入创建者" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="addtheCourse"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>
</template>

<style lang="less" scoped>
.view {
  display: flex;
  .el-card {
    margin-left: 30px;
    margin-top: 30px;
    height: 80vh;
    max-width: 1000px;
    .tit {
      margin-top: 20px;
      margin-bottom: 40px;
    }
    .el-table {
      margin-left: 20px;
    }
    .pagechangebtn {
      margin-top: 20px;
      margin-left: 30%;
    }
    .el-table__row{
      height: 50px;
    }
  }
}
</style>
