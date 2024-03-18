<script setup lang='ts'>
import AdminHeader from '@/components/admin/AdminHeader.vue';
import AdminAside from '@/components/admin/AdminAside.vue'
</script>


<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px" class="l_container">
                <AdminAside></AdminAside>
            </el-aside>
            <el-container class="r_container">
                <el-header>
                    <AdminHeader></AdminHeader>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<style lang="less" scoped>
.el-container{
    .r_container {
    flex-wrap: wrap;
    .el-header{
        padding: 0%;
    }
}
}
</style>