import { ElMessage } from 'element-plus'
import { defineStore } from 'pinia'
import { ref } from 'vue'

type chatBoxinfo = {
  id: number
  title: string
  time: string
  count: number
}

type chatboxMes = {
  id: number
  type: 'ai_mes' | 'user_mes'
  mescontent: string
}

type chatboxList = {
  id: number
  content: chatboxMes[]
}
// 聊天模块
export const useChatStore = defineStore(
  'chat',
  () => {
    /**当前对话的id 控制 */
    const defaultId = ref(1)
    /**左侧选项卡 */
    const chatBoxInfoTotel = ref<chatBoxinfo[]>([])
    /**所有的对话 通过id获取 */
    const chatHistory = ref<chatboxList[]>([])
    const chatmes = ref<chatboxMes[]>([
      {
        id: 1,
        type: 'ai_mes',
        mescontent: '您好 有什么可以帮助你吗'
      }
    ])

    /**change ID */
    const changeId = (id: number) => {
      defaultId.value = id
    }

    /**发送问题 */
    const sendMessage = (data: string) => {
      chatHistory.value[defaultId.value - 1].content.push({
        id: chatHistory.value[defaultId.value - 1].content.length + 1,
        type: 'user_mes',
        mescontent: data
      })
      chatBoxInfoTotel.value[defaultId.value - 1].count++
    }
    const resMessage = (data: string) => {
      chatHistory.value[defaultId.value - 1].content.push({
        id: chatHistory.value[defaultId.value - 1].content.length + 1,
        type: 'ai_mes',
        mescontent: data
      })
      chatBoxInfoTotel.value[defaultId.value - 1].count++
    }
    const getResponse = (data: string) => {
      chatHistory.value[defaultId.value - 1].content.push({
        id: chatHistory.value[defaultId.value - 1].content.length + 1,
        type: 'ai_mes',
        mescontent: data
      })
      chatBoxInfoTotel.value[defaultId.value - 1].count++
    }
    /**增加 删除对话 */
    const adddefaultBox = () => {
      const now = new Date()
      const currentTime = now.toLocaleString()
      addchatBox({
        id: chatBoxInfoTotel.value.length + 1,
        title: '新对话',
        time: currentTime,
        count: 1
      })
    }
    const addchatBox = (data: chatBoxinfo) => {
      chatBoxInfoTotel.value.push(data)
      chatHistory.value.push({
        id: chatHistory.value.length + 1,
        content: chatmes.value
      })
    }
    const deletechatBox = (id: number) => {
      if (id !== 1) {
        chatBoxInfoTotel.value = chatBoxInfoTotel.value.filter((item) => {
          return item.id != id
        })
        chatHistory.value = chatHistory.value.filter((item) => {
          return item.id != id
        })
        ElMessage.info('已删除!')
      } else {
        ElMessage.info('初始对话无法被删除！')
      }
    }
    const deleteAllchatBox = (id: number) => {
      defaultId.value = 1
      chatBoxInfoTotel.value = []
      chatHistory.value = []
      chatmes.value = [
        {
          id: 1,
          type: 'ai_mes',
          mescontent: '您好 有什么可以帮助你吗'
        }
      ]
    }
    return {
      chatBoxInfoTotel,
      chatmes,
      chatHistory,
      defaultId,
      adddefaultBox,
      addchatBox,
      deletechatBox,
      sendMessage,
      changeId,
      getResponse,
      deleteAllchatBox,
      resMessage
    }
  },
  {
    persist: true
  }
)
