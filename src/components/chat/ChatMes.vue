<template>
  <div class="send">
    <div v-for="item in meslist" :key="item.id" :class="item.type">
      <el-avatar
        v-if="item.type == 'ai_mes'"
        :size="30"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <el-avatar :size="30" :src="imgCode" v-else/>
      <div :class="`${item.type}_info`">
        {{ item.mescontent }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getImg } from '@/api/info';
import { useChatStore } from '@/stores'
import { onMounted, ref } from 'vue'
const imgCode=ref('')
onMounted(async()=>{
  const res = await getImg()
  imgCode.value = URL.createObjectURL (res.data) 
})
const chatStore = useChatStore()
// const meslist=ref(chatStore.chatmes)
// console.log(chatStore.chatHistory[chatStore.defaultId-1].content);
const meslist = ref(chatStore.chatHistory[chatStore.defaultId - 1].content)
</script>

<style lang="less" scoped>
.ai_mes,
.user_mes {
  display: flex;
  margin-top: 20px;
  .ai_mes_info,
  .user_mes_info {
    float: left;
    font-size: 14px;
    box-sizing: border-box;
    max-width: 70%;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 10px;
    font-size: 14px;
    border: 1px solid #dedede;
    margin-left: 10px;
  }
}
.user_mes {
  flex-direction: row-reverse;
  .user_mes_info {
    margin-right: 10px;
  }
}
</style>
