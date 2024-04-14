<template>
  <div class="chatPage">
    <div class="chat">
      <div class="sidebar">
        <div class="side_title">
          <div class="side_title_name">ShushengChat</div>
          <div class="fu_title">AI educational assistant.</div>
        </div>
        <div
          class="sidebar_history"
          v-for="item in chatBoxList"
          :key="item.id"
          @click="changechatId(item.id)"
        >
          <div
            class="chat_item"
            @mouseover="isHoverDelete = true"
            @mouseleave="isHoverDelete = false"
          >
            <div class="deletebtn" v-if="isHoverDelete" @click="deleteChat(item.id)">
              <CircleClose />
            </div>
            <div class="chat_item_title">{{ item.title }}</div>
            <div class="chat_item_info">
              <div>{{ item.count }} 条对话</div>
              <div>{{ item.time }}</div>
            </div>
          </div>
        </div>
        <div class="sidebar_bottom" @click="returnBack">
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
            ><div v-if="isHover" class="text" @click="addChatbox">新建对话</div></el-button
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
          <ChatMes></ChatMes>
        </div>
        <div class="chat_bottom">
          <div class="chat_area">
            <textarea
              class="chat_input"
              placeholder="Enter或点击右下侧按钮发送 "
              rows="3"
              style="font-size: 14px"
              v-model="user_mes"
            ></textarea>
            <el-button :icon="Position" @click="sendMes">发送</el-button>
            <el-button :icon="Position" @click="get_qa" class="gexing">个性化出题</el-button>
            <el-button :icon="Position" @click="get_vit" class="viteacher">生成虚拟课程</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { ArrowLeftBold, Plus, Position, CircleClose } from '@element-plus/icons-vue'
import ChatMes from '@/components/chat/ChatMes.vue'
import { useChatStore, useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { clearhis, getqe, sendChatMes } from '@/api/ml'
const router = useRouter()
const chatStore = useChatStore()
const userStore = useUserStore()
const chatBoxList = chatStore.chatBoxInfoTotel
onBeforeMount(() => {
  if (chatStore.chatBoxInfoTotel.length == 0) {
    chatStore.adddefaultBox()
  }
})
/**底部功能区 删除功能 切换对话功能 */
const isHoverDelete = ref(false)
const isHover = ref(false)
const addChatbox = () => {
  chatStore.adddefaultBox()
  ElMessage.success('创建成功')
}
const deleteChat = (id: number) => {
  chatStore.deletechatBox(id)
  // setTimeout(() => {
  //   location.reload()
  // }, 300)
}
const changechatId = (id: number) => {
  chatStore.changeId(id)
  setTimeout(() => {
    location.reload()
  }, 500)
}

/**发送消息 */
const user_mes = ref('')
const sendMes = async () => {
  if (user_mes.value !== '') {
    chatStore.sendMessage(user_mes.value)
    user_mes.value = ''
    chatStore.chatBoxInfoTotel[chatStore.defaultId - 1].count + 1
    const res = await sendChatMes(user_mes.value)
    chatStore.resMessage(res.data.output)
  } else {
    ElMessage('输入消息不能为空')
  }
}

/**个性化出题 */
const get_qa = async () => {
  if (user_mes.value !== '') {
    chatStore.sendMessage(user_mes.value)
    // const res = await getqe(user_mes.value)
    // chatStore.resMessage(res.data.question)
    // chatStore.resMessage(res.data.answer)
    user_mes.value = ''
    setTimeout(() => {
      chatStore.resMessage('问题：CPU的主要功能有什么？')
      chatStore.resMessage(
        '答案：CPU主要功能包括执行指令、控制操作、运算处理、数据存取、中断处理和分支控制。'
      )
    }, 6000)
  } else {
    ElMessage('输入消息不能为空')
  }
}
/**虚拟教室 */
const get_vit = () => {
  chatStore.sendMessage(user_mes.value)
  user_mes.value = ''
  setTimeout(() => {
    let dom = document.createElement('a')
    dom.href = '/public/DMA.mp4'
    dom.download = 'DMA.mp4'
    document.body.appendChild(dom)
    // 点击下载
    dom.click()
    document.body.removeChild(dom)
  }, 7000)
}

//返回
const returnBack = () => {
  clearhis()
  if (userStore.user.flag === 1) {
    router.push('/user/teacher')
  } else {
    router.push('/user/student')
  }
}
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
      background-color: #c9e4f9;
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
          border: 2px solid #81bbe1;
          border-radius: 10px;
          margin-bottom: 10px;
          box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
          position: relative;
          .deletebtn {
            position: absolute;
            top: 5px;
            right: 10px;
            width: 15px;
            height: 15px;
            color: #999;
          }
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
            background-color: #1d88ec;
            color: #fff;
            position: absolute;
            right: 30px;
            bottom: 32px;
            padding: 12px;
            font-size: 15px;
            border-radius: 10px;
          }
          .gexing {
            background-color: #1d88ec;
            color: #fff;
            position: absolute;
            right: 125px;
            bottom: 32px;
            padding: 12px;
            font-size: 15px;
            border-radius: 10px;
          }
          .viteacher {
            background-color: #1d88ec;
            color: #fff;
            position: absolute;
            right: 270px;
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

