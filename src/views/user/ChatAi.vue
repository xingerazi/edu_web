<template>
  <div class="chatPage">
    <div class="chat">
      <div class="sidebar">
        <div class="side_title">
          <div class="side_title_name">ShushengChat</div>
          <div class="fu_title">Build your own AI assistant.</div>
        </div>
        <div class="sidebar_history">
          <div class="chat_item">
            <div class="chat_item_title">新的聊天</div>
            <div class="chat_item_info">
              <div>2条对话</div>
              <div>2024/4/2 20:18</div>
            </div>
          </div>
        </div>
        <div class="sidebar_bottom">
          <el-button
            :icon="ArrowLeftBold"
            circle
            @mouseover="isHover = true"
            @mouseleave="isHover = false"
            :class="{ active: isHover === true }"
            ><div v-if="isHover" class="text">返回主页</div></el-button
          >
          <el-button
            :icon="Plus"
            circle
            @mouseover="isHover = true"
            @mouseleave="isHover = false"
            :class="{ active: isHover === true }"
            ><div v-if="isHover" class="text">新增对话</div></el-button
          >
        </div>
      </div>
      <div class="chat_body">
        <div class="window_header">
          <div class="title_area">
            <div class="title">书生万卷</div>
            <div style="font-size: 14px">ai对话</div>
          </div>
        </div>
        <div class="chat_container">
          <router-view></router-view>
        </div>
        <div class="chat_bottom">
          <div class="chat_area">
            <textarea
              class="chat_input"
              placeholder="Enter或点击右下侧按钮发送 "
              rows="3"
              style="font-size: 14px"
            ></textarea>
            <el-button :icon="Position">发送</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Search, ArrowLeftBold, Plus, Position } from '@element-plus/icons-vue'
onMounted(() => {})
const isHover = ref(false)
</script>

<style lang="less" scoped>
.chatPage {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .chat {
    border: 1px solid #dedede;
    border-radius: 20px;
    box-shadow: 50px 50px 100px 10px rgba(0, 0, 0, 0.1);
    color: #303030;
    background-color: #fff;
    min-width: 600px;
    min-height: 370px;
    max-width: 1200px;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    width: 90vw;
    height: 90vh;
    .sidebar {
      width: 300px;
      background-color: #e7f8ff;
      box-sizing: border-box;
      padding: 20px;
      display: flex;
      flex-direction: column;
      box-shadow: inset -2px 0 2px 0 rgba(0, 0, 0, 0.05);
      position: relative;
      transition: width 0.05s ease;
      .side_title {
        position: relative;
        padding-top: 20px;
        padding-bottom: 20px;
        .side_title_name {
          font-size: 20px;
          font-weight: 700;
        }
        .fu_title {
          font-size: 12px;
          font-weight: 400;
          color: #303030;
          margin-bottom: 5px;
        }
      }
      .sidebar_history {
        .chat_item {
          padding: 10px 14px;
          background-color: #fff;
          border: 2px solid #1d93ab;
          border-radius: 10px;
          margin-bottom: 10px;
          box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
          .chat_item_title {
            font-size: 14px;
            font-weight: bolder;
            display: block;
            width: calc(100% - 15px);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #303030;
          }
          .chat_item_info {
            display: flex;
            justify-content: space-between;
            color: #a6a6a6;
            font-size: 12px;
            margin-top: 8px;
          }
        }
        .chat_item:hover {
          background-color: #f3f3f3;
        }
      }
      .sidebar_bottom {
        position: absolute;
        bottom: 20px;
        display: flex;
        justify-content: space-between;
        width: 260px;
        .active {
          width: 100px;
          background-color: #fff;
          border-radius: 5px;
        }
        .el-button {
          transition: width 0.3s ease;
        }
      }
    }
    .chat_body {
      display: flex;
      flex-direction: column;
      position: relative;
      height: 100%;
      width: calc(100% - 300px);
      color: #303030;
      .window_header {
        padding: 14px 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title_area {
          .title {
            font-size: 20px;
            font-weight: bolder;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
            max-width: 50vw;
          }
        }
      }
      .chat_container {
        flex: 1 1;
        overflow: auto;
        overflow-x: hidden;
        padding: 20px 20px 40px;
        position: relative;
        overscroll-behavior: none;
      }
      .chat_bottom {
        position: relative;
        width: 100%;
        padding: 10px 20px 20px;
        box-sizing: border-box;
        border-top: 1px solid #dedede;
        box-shadow: inset -2px 0 2px 0 rgba(0, 0, 0, 0.05);
        min-height: 150px;
        .chat_area {
          cursor: text;
          display: flex;
          flex: 1 1;
          border-radius: 10px;
          border: 1px solid #dedede;
          height: 100%;
          width: 100%;
          .chat_input {
            height: 100%;
            width: 100%;
            border-radius: 10px;
            border: none;
            box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.03);
            background-color: #fff;
            color: #303030;
            font-family: inherit;
            padding: 10px 90px 10px 14px;
            resize: none;
            outline: none;
            box-sizing: border-box;
            min-height: 68px;
          }
          .el-button {
            background-color: #1d93ab;
            color: #fff;
            position: absolute;
            right: 30px;
            bottom: 32px;
            padding: 12px;
            font-size: 15px;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
</style>
