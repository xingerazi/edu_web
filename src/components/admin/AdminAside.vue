<template>
  <div>
    <el-menu
      default-active="/usermanage"
      class="el-menu-vertical-demo"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="height: 100%;"
    >
      <el-menu-item index="/user/admin/main">
        <el-icon>
          <House />
        </el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/user/admin/usermanage">
        <el-icon>
          <Message />
        </el-icon>
        <span>用户管理</span>
      </el-menu-item>
      <el-menu-item index="/user/admin/coursemanage">
        <el-icon>
          <DataAnalysis />
        </el-icon>
        <span>课程管理</span>
      </el-menu-item>
      <el-sub-menu index="/user/admin">
        <template #title>
          <el-icon>
            <Box />
          </el-icon>
          <span>其他</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="/user/admin/othermanage">其他信息</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.el-menu-vertical-demo {
  min-height: 110vh;
  height: 100%;
  .el-menu {
    h3 {
      line-height: 48px;
      color: #fff;
      text-align: center;
    }
  }
}
</style>
