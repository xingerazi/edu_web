<template>
  <div>
    <div class="homework_pub">
      <div class="homework_pigai">
        <div class="pigai_inner">
          <div class="pigai_top">
            <div class="pigai_title">批改作业</div>
            <div class="pigai_subtitle">请批改以下学生的作业</div>
          </div>
          <div class="pigai_content">
            <div v-infinite-scroll="load" class="homework_list" style="overflow: auto">
              <div v-for="i in homeworklist" :key="i.title" class="homework_list_item">
                <div class="item_title">
                  <div>
                    <div class="title_inner">
                      <img src="../../assets/images/yuangong1.jpg" alt="" />
                      <div class="name">{{ i.title }}</div>
                      <div class="title_des">的作业等待您的批改</div>
                    </div>
                    <div class="title_time">{{i.time}}</div>
                  </div>
                </div>
                <div class="pigai_btn">
                  <el-button @click="downloadData">
                    下载作业<el-icon class="el-icon--right"><Download /></el-icon>
                  </el-button>
                  <el-button type="primary" @click="pingfendialog = true ">
                    作业评分<el-icon class="el-icon--right"><EditPen /></el-icon>
                  </el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pub_inner">
        <div class="pub_top">
          <div class="pub_title">发布作业</div>
          <div class="pub_subtitle">发布作业后，自动发送到学生端</div>
        </div>
        <div class="pub_to">
          <el-upload
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
    <el-dialog v-model="pingfendialog" title="打分" width="500" align-center style="min-height: 200px;">
      <el-rate
        clearable
        v-model="rate"
        :texts="['较差', '一般', '不错', '较好', '极致']"
        show-text
      />
      <div class="rate_form">
        <el-alert title="CPU中ALU的组成" type="info" />
        <el-alert title="http与https的关系" type="info" />
        <el-alert title="CPU的功能" type="info" />
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="hwcomplete2">错题反馈</el-button>
          <el-button type="primary" @click="hwcomplete"> 批改完成 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { Download, EditPen, UploadFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
import { ref } from 'vue'
const count = ref(2)
const load = () => {
  count.value += 2
}
const pingfendialog = ref(false)
/**评分作业 */
const rate = ref()
const downloadData = () => {
  let dom = document.createElement('a')
  dom.href = '/public/todo.txt'
  dom.download = 'homework.txt'
  document.body.appendChild(dom)
  // 点击下载
  dom.click()
  document.body.removeChild(dom)
}

const homeworklist=ref([
{ title:'xinger',time:'10分钟前'}, { title:'lxd',time:'1小时前'}, { title:'lxz',time:'1小时前'}, { title:'xiaoxinger',time:'2小时前'} ,{ title:'刘福林',time:'1小时前'}
])
const hwcomplete=()=>{
  homeworklist.value.shift()
  pingfendialog.value = false
  ElMessage.success('批改完成')
}
const hwcomplete2=()=>{
  homeworklist.value.shift()
  ElMessage.success('反馈成功')
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
      height: 300px;
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
.rate_form{
  display: flex;
  flex-direction: column;
  .pingyu{
      font-size: 20px;
      margin-top: 20px;
    }
  .el-alert{

    margin-top: 20px;
  }
}
</style>
