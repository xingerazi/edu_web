<template>
  <div class="notfoundview">
    <el-result icon="warning" title="404NotFound" sub-title="你找的页面走丢了">
      <template #extra>
        <el-button type="primary" @click="$router.push('/')">
          回到首页
        </el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup lang='ts'>

</script>

<style>
.notfoundview {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>