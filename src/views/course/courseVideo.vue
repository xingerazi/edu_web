<template>
  <div class="video-container">
    <div class="video_page">
      <div class="video_header">
        <div class="header_title">{{ info.courseName }}</div>
        <div class="header_info">
          <div class="inner">
            <div class="item">{{ info.instructor }}</div>
            <div class="item">{{ info.semester }}</div>
            <div class="item">{{ info.classroom }}</div>
            <div class="item">{{ info.daysOfWeek }}</div>
          </div>
        </div>
      </div>
      <video controls autoplay :src="videoUrl" class="video"></video>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCourseVideo } from '@/api/course'
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/stores'
const userStore = useUserStore()
const info = userStore.courseItem
const videoUrl = ref('')
onMounted(async () => {
  const res = await getCourseVideo(1)
  console.log(res)
  videoUrl.value = URL.createObjectURL(new Blob([res.data]))
})
</script>

<style lang="less" scoped>
.video-container {
  background-color: rgb(238, 242, 248);
  width: 100%;
  height: 100vh; /* 使用 vh 单位以确保填满整个视口 */
  display: flex;
  justify-content: center;
  align-items: center;
  .video_header {
    --keep-blank-space: 30px;
    position: relative;
    height: 104px;
    box-sizing: border-box;
    padding-top: 22px;
    .header_title {
      display: flex;
      align-items: center;
      overflow: hidden;
      position: relative;
      flex-shrink: 0;
      font-size: 30px;
      font-weight: 500;
      color: #18191c;
      line-height: 28px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .header_info {
      margin-top: 6px;
      position: relative;
      display: flex;
      align-items: center;
      .inner {
        font-size: 13px;
        color: #9499a0;
        display: flex;
        align-items: center;
        height: 24px;
        overflow: hidden;
        box-sizing: border-box;
        flex: 1;
        .item {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
          margin-right: 20px;
          overflow: hidden;
        }
      }
    }
  }
  .video_page {
    width: 1000px;
    height: 700px;
    
  }
}

.video {
  width: 800px;
  height: 500px;
  object-fit: cover; /* 填充父容器并保持原始宽高比 */
}
</style>
