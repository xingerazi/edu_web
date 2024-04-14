<script setup lang="ts">
import * as echarts from 'echarts'
import { computed, onMounted, reactive, ref } from 'vue'
import { checkUserInfo } from '@/api/admin'
import type { UserInfo, UserInfoItem } from '@/type/admin'
import { Search } from '@element-plus/icons-vue'
const userpara = ref<UserInfo>({
  page: '1',
  size: '20'
})
const userList = ref<UserInfoItem[]>([])

//饼状图
const state = reactive({
  option: {
    title: {
      text: '用户构成'
    },
    legend: {
      x: 'center',
      y: 'bottom'
    },
    tooltip: {
      trigger: 'item', // axis   item   none三个值
      formatter: '{b}:{d}%'
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        label: {
          show: true,
          formatter: '{b}:{d}%'
        },
        labelLine: { show: true },
        data: [
          {
            value: 1256,
            name: '教师'
          },
          {
            value: 1505,
            name: '学生'
          }
        ]
      }
    ]
  }
})
const initeCharts = () => {
  let myChart = echarts.init(document.getElementById('myChart'))
  // 绘制图表
  myChart.setOption(state.option)
}

const chart = ref(null)
const makeChart = () => {
  // 获取 DOM 元素
  const chartContainer = chart.value

  // 创建 echarts 实例
  const myChart = echarts.init(chartContainer)

  // 设置图表配置项和数据
  const option = {
    title: {
      text: '用户增量'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [5, 7, 4, 9, 6, 2, 9],
        type: 'bar'
      }
    ]
  }
  myChart.setOption(option)
}

onMounted(async () => {
  initeCharts()
  makeChart()
  const res = await checkUserInfo(userpara.value)
  userList.value = res.data.data
  userList.value.forEach((item) => (item.flag === 1 ? (item.flag = '教师') : (item.flag = '学生')))
})
</script>

<template>
  <div class="app-container">
    <el-table :data="userList" border fit highlight-current-row style="height: 90vh; width: auto">
      <el-table-column fixed prop="id" label="ID" width="50" />
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="email" label="邮箱" width="220" />
      <el-table-column prop="phone" label="电话" width="200" />
      <el-table-column prop="flag" label="身份" width="120" />
      <el-table-column fixed="right" label="Operations" width="200">
        <template #default>
          <el-button type="primary" size="small">Detail</el-button>
          <el-button type="info" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="chartarea">
      <div id="myChart" style="width: 600px; height: 400px"></div>
      <div ref="chart" style="width: 600px; height: 400px"></div>
    </div>
  </div>
</template>

<style scoped lang="less">
.app-container {
  display: flex;
  .chartarea{
    margin-left: 30px;
  }
}
</style>
