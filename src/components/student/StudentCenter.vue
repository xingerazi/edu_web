<template>
  <div>
    <div class="homework_pub">
      <div class="pub_inner">
        <div class="pub_top">
          <div class="pub_title">成绩曲线</div>
          <div class="pub_subtitle">在此记录了您的近期学习成绩</div>
          <el-button style="margin-left: 30px;" @click="fankui">成绩反馈</el-button>
        </div>
        <div
          ref="chart"
          style="width: 600px; height: 400px; margin-left: 20%; margin-top: 20px"
        ></div>
      </div>
      <div class="homework_pigai">
        <div class="pigai_inner">
          <div class="pigai_top">
            <div class="pigai_title">作业列表</div>
            <div class="pigai_subtitle">请完成以下布置的作业</div>
          </div>
          <div class="pigai_content">
            <div v-infinite-scroll="load" class="homework_list" style="overflow: auto">
              <div v-for="i in mockData" :key="i.name" class="homework_list_item">
                <div class="item_title">
                  <div>
                    <div class="title_inner">
                      <img src="../../assets/images/yuangong1.jpg" alt="" />
                      <div class="name">{{ i.name }}</div>
                      <div class="title_des">老师的作业等待您的完成</div>
                    </div>
                    <div class="title_time">{{ i.time }}</div>
                  </div>
                </div>
                <div class="pigai_btn">
                  <el-button @click="downloadData">
                    下载作业<el-icon class="el-icon--right"><Download /></el-icon>
                  </el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pub_inner">
        <div class="pub_top">
          <div class="pub_title">上传作业</div>
          <div class="pub_subtitle">上传作业后，自动发送到教师端</div>
        </div>
        <div class="pub_to">
          <el-input
            v-model="teacherName"
            style="width: 240px"
            placeholder="请输入教师姓名"
            clearable
          />
          <el-upload
            :on-error="success_send"
            class="upload-demo"
            drag
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
          >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
            <template #tip>
              <div class="el-upload__tip">请上传作业文件 大小不超过2mb!</div>
            </template>
          </el-upload>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Download, EditPen, UploadFilled } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { ElMessage } from 'element-plus'
/**图表 */
const chart = ref(null)
const tubiao = () => {
  const chartContainer = chart.value
  const myChart = echarts.init(chartContainer)
  const data = {
    computerScience: [3.5, 4, 4, 3, 4.5], // 计算机科学
    mathematics: [4, 3.5, 4, 4, 3.5], // 数学
    physics: [4.5, 4, 4.5, 4, 4], // 物理
    english: [4.5, 4.5, 4, 3.5, 4] // 英语
  }
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['计算机科学', '数学', '物理', '英语']
    },
    xAxis: {
      type: 'category',
      data: ['作业1', '作业2', '作业3', '作业4', '作业5']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '计算机科学',
        type: 'line',
        data: data.computerScience
      },
      {
        name: '数学',
        type: 'line',
        data: data.mathematics
      },
      {
        name: '物理',
        type: 'line',
        data: data.physics
      },
      {
        name: '英语',
        type: 'line',
        data: data.english
      }
    ]
  }
  myChart.setOption(option)
}
onMounted(() => {
  tubiao()
})

const mockData = ref([
  { name: '李', time: '5分钟前' },
  { name: '王梅', time: '3小时前' }
])
const count = ref(2)
const load = () => {
  count.value += 2
}
/**作业 */
const downloadData = () => {
  let dom = document.createElement('a')
  dom.href = '/public/total.docx'
  dom.download = '第一章练习.docx'
  document.body.appendChild(dom)
  // 点击下载
  dom.click()
  document.body.removeChild(dom)
}
const teacherName = ref('')
const success_send = () => {
  mockData.value.shift()
  ElMessage.success('上传成功!')
  teacherName.value=''
}
/**反馈 */
const fankui=()=>{
  let dom = document.createElement('a')
  dom.href = '/public/suggest.txt'
  dom.download = 'suggest.txt'
  document.body.appendChild(dom)
  // 点击下载
  dom.click()
  document.body.removeChild(dom)
}
</script>

<style lang="less" scoped>
.pub_inner {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  border-radius: 10px;
  background-color: #ffffff;
  margin-bottom: 10px;
  padding: 24px 20px;
  padding-bottom: 24px;
  overflow: hidden;
  .pub_top {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    .pub_title {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      font-size: 22px;
      color: #191b1f;
      line-height: 24px;
      font-weight: 500;
    }
    .pub_subtitle {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      margin-left: 8px;
      font-size: 14px;
      color: #9196a1;
      line-height: 20px;
    }
  }
  .pub_to {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    margin-left: -5px;
    margin-right: -5px;
    margin-top: 30px;
  }
}
.pigai_inner {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  border-radius: 10px;
  background-color: #ffffff;
  margin-bottom: 10px;
  padding: 24px 20px;
  padding-bottom: 24px;
  overflow: hidden;
  .pigai_top {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    .pigai_title {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      font-size: 22px;
      color: #191b1f;
      line-height: 24px;
      font-weight: 500;
    }
    .pigai_subtitle {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      margin-left: 8px;
      font-size: 14px;
      color: #9196a1;
      line-height: 20px;
    }
  }
  .pigai_content {
    .homework_list {
      height: 200px;
      padding: 0;
      margin: 20px;
      .homework_list_item {
        box-sizing: border-box;
        margin: 0px;
        min-width: 0px;
        padding-top: 15px;
        padding-bottom: 15px;
        display: flex;
        -webkit-box-align: center;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid rgb(235, 236, 237);
        .item_title {
          box-sizing: border-box;
          margin: 0px;
          min-width: 0px;
          flex-basis: 380px;
          flex-shrink: 0;
          display: flex;
          .title_inner {
            box-sizing: border-box;
            margin: 0px;
            min-width: 0px;
            -webkit-box-align: center;
            align-items: center;
            font-size: 14px;
            display: flex;
            img {
              box-sizing: border-box;
              margin: 0px 8px 0px 0px;
              min-width: 0px;
              max-width: 100%;
              width: 20px;
              height: 20px;
              border-radius: 50%;
            }
            .name {
              box-sizing: border-box;
              margin: 0px;
              min-width: 0px;
              color: rgb(55, 58, 64);
            }
            .title_des {
              box-sizing: border-box;
              margin: 0px 0px 0px 3px;
              min-width: 0px;
              color: rgb(145, 150, 161);
            }
          }
          .title_time {
            box-sizing: border-box;
            margin: 8px 0px 0px;
            min-width: 0px;
            font-size: 12px;
            color: rgb(145, 150, 161);
            padding-left: 28px;
            line-height: 18px;
          }
        }
        .pigai_btn {
          box-sizing: border-box;
          margin: 0px;
          min-width: 0px;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: end;
          justify-content: flex-end;
          flex-basis: 216px;
          flex-shrink: 0;
          display: flex;
        }
      }
    }
  }
}
</style>
