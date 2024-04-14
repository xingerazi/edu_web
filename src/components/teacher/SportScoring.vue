<template>
  <div class="scoringpage">
    <div class="scoring_intro" v-if="scoring_status === 0">
      <div class="title">使用说明:</div>
      <el-steps style="max-width: 1000px; margin: 20px" :active="activeSteps">
        <el-step title="Step 1" description="上传视频" />
        <el-step title="Step 2" description="等待响应" />
        <el-step title="Step 3" description="查看评分" />
        <el-button :icon="Bottom" circle @click="stepsGo" />
      </el-steps>
      <div class="scoring_intro_steps" v-if="activeSteps === 1">
        <div class="subtitle">上传视频</div>
        <!-- <video autoplay controlsList="nodownload" disablePictureInPicture loop>
          <source src="../../assets/images/zhanshi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> -->
        <img src="../../assets/images/zhanshi.png"  alt="">
      </div>
      <div class="scoring_intro_steps" v-if="activeSteps === 2">
        <div class="subtitle">等待响应</div>
        <!-- <video autoplay controlsList="nodownload" disablePictureInPicture loop>
          <source src="../../assets/images/zhanshi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> -->
        <!-- <video src="../../assets/images/zhanshi.mp4"></video> -->
        <img src="../../assets/images/zhanshi1.png"  alt="">
      </div>
      <div class="scoring_intro_steps" v-if="activeSteps === 3">
        <div class="button_list">
          <el-button type="info" @click="scoring_status = 1">立即使用</el-button>
          <el-button type="primary" @click="activeSteps = 1">重复一遍</el-button>
        </div>
        <!-- <video autoplay controlsList="nodownload" disablePictureInPicture loop src="../../assets/images/zhanshi.mp4" >
        </video> -->
        <img src="../../assets/images/zhanshi1.png"  alt="">
      </div>
    </div>
    <div class="scoring_use" v-else>
      <el-input
        v-model="upload_text"
        style="width: 240px; margin: 20px 0"
        placeholder="请输入想要判别的动作"
        clearable
      />
      <el-upload
        :on-success="uploadvideo_hooks"
        class="upload-demo"
        drag
        action="http://113.54.237.43:5000/upload_and_process_video"
        :data="{ Sport_type: upload_text, is_open: 'close' }"
        name="video"
        multiple
      >
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
          <em>拖拽或点击上传</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">视频需小于50MB</div>
        </template>
      </el-upload>
      <div class="judge_box">动作评价：{{ judge }}</div>
      <el-button @click="downloadVideo()">点击下载生成训练视频</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Bottom, UploadFilled } from '@element-plus/icons-vue'
import axios from 'axios'
//控制步骤条
const activeSteps = ref(1)
const stepsGo = () => {
  if (activeSteps.value <= 2) {
    activeSteps.value = activeSteps.value + 1
  } else {
    activeSteps.value = 1
  }
}
//控制显示说明还是功能
const scoring_status = ref(0)
/**上传视频相关 */
const upload_text = ref()
const uploadvideo_hooks = (res: any) => {
  console.log(res)
  judge.value = res.generated_text
}
const videoUrl = ref('')
const downloadVideo = async () => {
  try {
    const res = await axios.get('http://113.54.237.43:5000/download_processed_video', {
      responseType: 'blob'
    })

    // 处理后端返回的数据，确保其是正确的视频数据
    const videoBlob = res.data
    if (videoBlob.type === 'video/mp4') {
      // 使用 Blob 对象创建视频的临时 URL
      const videoUrl = URL.createObjectURL(videoBlob)
      const downloadElement = document.createElement('a')
      downloadElement.style.display = 'none'
      downloadElement.href = videoUrl
      downloadElement.download = 'video.mp4'
      document.body.appendChild(downloadElement)
      downloadElement.click()
      document.body.removeChild(downloadElement)

      // 释放临时 URL
      URL.revokeObjectURL(videoUrl)
    } else {
      console.error('The response is not a valid MP4 video.')
    }
  } catch (error) {
    console.error('There was a problem with the request:', error)
  }
}
const judge = ref('暂无')

/**返回视频 */

onMounted(() => {})
</script>

<style lang="less" scoped>
.scoringpage {
  min-height: 100vh;
  .title {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 16px;
    height: 40px;
    width: 100%;
    color: #000;
    font-size: 30px;
    font-weight: 600;
  }
  .subtitle {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 26px;
    height: 40px;
    width: 100%;
    color: #26244c;
    font-size: 25px;
    font-weight: 500;
  }
  .scoring_intro_steps {
    display: flex;
    flex-direction: column;
    text-align: center;
    video {
      width: 80%;
      max-width: 800px;
      display: block;
      margin: 0 auto;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
}
.button_list {
  .el-button {
    margin-bottom: 30px;
  }
}
.judge_box {
  margin: 20px;
  font-size: 18px;
}
.video_container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
