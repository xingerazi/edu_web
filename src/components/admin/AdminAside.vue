<template>
    <div>
        <el-menu default-active="/usermanage" class="el-menu-vertical-demo" router background-color="#545c64" text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="/user/admin/main">
                <el-icon>
                    <location />
                </el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/user/admin/usermanage">
                <el-icon>
                    <location />
                </el-icon>
                <span>用户管理</span>
            </el-menu-item>
            <el-sub-menu index="/else">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>其他</span>
                </template>
                <el-menu-item-group title="Group One">
                    <el-menu-item index="/else/1">页面1</el-menu-item>
                    <el-menu-item index="/else/2">页面2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="/else/3">页面3</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="/else/4">
                    <template #title>item four</template>
                    <el-menu-item index="1-4-1">页面4</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script setup lang='ts'>

</script>

<style lang="less" scoped>
.el-menu-vertical-demo{
    min-height: 100vh;
    .el-menu{
    h3{
        line-height: 48px;
        color: #fff;
        text-align: center;
    }
}
}

</style>