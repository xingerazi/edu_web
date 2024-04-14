<template>
  <div class="assistantPage">
    <div class="container">
      <div class="top">
        <div class="toparea">
          <div class="top_image">书生万卷小助教</div>
          <div class="top_title">一个随身题库，您的博学莘襟</div>
          <div class="button_group">
            <el-button type="primary" @click="uploadFlag = true">
              更换知识库<el-icon class="el-icon--right btn2"><Refresh /></el-icon>
            </el-button>
            <el-button type="primary" @click="uploadFlag = true">
              知识图谱<el-icon class="el-icon--right btn2"><MessageBox /></el-icon>
            </el-button>
            <el-button type="primary" @click="choose_title">
              开始体验<el-icon class="el-icon--right btn1"><Position /></el-icon>
            </el-button>
            <el-button type="primary" @click="uploadFlag = true">
              上传资料<el-icon class="el-icon--right btn2"><Upload /></el-icon>
            </el-button>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom_container">
          <div class="item" v-for="item in mldata[0].slice(0,4)" @click="choose_item($event,item.title)">
            <img :src="item.img" alt="" />
            <div class="item_bottom">
              <div class="title">{{item.title}}</div>
              <div class="subtitle">{{item.subtitle}}</div>
              <div class="content">{{ item.question }}</div>
            </div>
          </div>
        </div>
        <div class="bottom_container">
          <div class="item" v-for="item in mldata[0].slice(4,8)" @click="choose_item($event,item.title)">
            <img :src="item.img" alt="" />
            <div class="item_bottom">
              <div class="title">{{item.title}}</div>
              <div class="subtitle">{{item.subtitle}}</div>
              <div class="content">{{ item.question }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <el-dialog v-model="uploadFlag" title="提交资料到知识库" width="500" center>
    <el-input
      v-model="upload_text"
      style="width: 240px; margin: 10px 0"
      placeholder="请输入想增加资料的数据库"
      clearable
    />
    <el-input
      style="width: 240px; margin: 10px 0"
      placeholder="请输入想添加的URL"
      clearable
    />
    <el-upload
      :on-success="upload_hooks"
      class="upload-demo"
      drag
      action="http://10.252.66.197:5000/add_document"
      :data="{ name: '计算机网络' }"
      name='file'
      multiple
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        <em>拖拽或点击上传</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">文件需小于500kb</div>
      </template>
    </el-upload>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="uploadFlag = false">取消</el-button>
        <el-button type="primary" @click="upLoad"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
import { mldata } from '@/utils/mlrefer';
import { lianjieku } from '@/api/ml';
import { useRouter } from 'vue-router';
const router=useRouter()
const choose_item = (e: any,title:string) => {
  let item_list = document.querySelectorAll('.item')
  let target = e.target.closest('.item') // 获取事件目标元素或其最近的父元素
  if (target) {
    // 移除所有元素的 active 类名
    item_list.forEach((item) => {
      item.classList.remove('active')
    })
    // 在目标元素上添加 active 类名
    target.classList.add('active')
    itemtitle.value=title
  }
}

/**文件上传部分 */
const uploadFlag = ref(false)
const upload_text = ref('')
const upload_hooks=()=>{
  ElMessage.success('上传成功')
}
const upLoad=()=>{
  ElMessage.success('上传成功')
  uploadFlag.value=false
}

/**发送选择题库请求 */
const itemtitle=ref('')
const choose_title=async ()=>{
  if(itemtitle.value){
    // const res=await lianjieku(itemtitle.value)
    // console.log(res);
    router.push('/user/aiassis')
  }else{
    ElMessage.warning('请选择一个题库')
    return
  }
}
</script>

<style lang="less" scoped>
.assistantPage {
  width: 100%;
  height: 100vh;
  background-color: rgb(248, 248, 252);
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    .top {
      position: relative;
      z-index: 100;
      display: flex;
      flex-direction: column;
      .toparea {
        align-items: center;
        display: flex;
        flex-direction: column;
        .top_image {
          align-items: center;
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin-bottom: 16px;
          height: 40px;
          width: 500px;
          color: #26244c;
          font-size: 38px;
          font-weight: 600;
        }
        .top_title {
          -webkit-font-smoothing: antialiased;
          align-items: center;
          color: #26244c;
          display: flex;
          font-size: 38px;
          font-weight: 600;
          height: 54px;
          letter-spacing: 0.08em;
          line-height: 54px;
          width: unset;
          margin-bottom: 24px;
        }
        .button_group {
          display: flex;
          .el-button {
            align-items: center;
            background: linear-gradient(73deg, #2da0e8, #2582ce 181%);
            border-radius: 28px;
            color: linear-gradient(73deg, #2da0e8, #2582ce 181%);
            cursor: pointer;
            display: flex;
            flex-direction: row;
            font-size: 16px;
            height: 56px;
            justify-content: flex-start;
            line-height: 24px;
            padding: 0 28px;
            position: relative;
            margin: 0 40px;
          }
        }
      }
    }

    .bottom {
      position: relative;
      z-index: 100;
      width: 1260px;
      display: flex;
      flex-direction: column;
      margin-top: 65px;
      .bottom_container {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
      }
      .item {
        margin-right: 16px;
        background: #fff;
        border-radius: 32px;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.02);
        cursor: pointer;
        display: flex;
        flex: 1;
        height: 248px;
        padding: 32px;
        position: relative;
        width: 318px;
        box-sizing: border-box;
        img {
          left: 32px;
          position: absolute;
          top: 32px;
          width: 40px;
        }
        .item_bottom {
          align-self: flex-end;
          .title {
            margin-right: 16px;
            color: #26244c;
            font-size: 22px;
            font-weight: 600;
            line-height: 34px;
            margin-bottom: 4px;
          }
          .subtitle {
            margin-right: 16px;
            color: #2da0e8;
            font-size: 14px;
            line-height: 22px;
            margin-bottom: 10px;
          }
          .content {
            -webkit-font-smoothing: antialiased;
            color: #0d0f12;
            font-size: 16px;
            font-weight: 500;
            height: 56px;
            line-height: 24px;
          }
        }
      }
    }
  }
}
.active {
  border: 1px solid #2582ce;
}
</style>
