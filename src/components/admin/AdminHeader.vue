<script setup lang='ts'>

</script>


<template>
    <div class="header">
        <div class="l-content">
            <el-button size="small">
                <el-icon :size="20">
                    <Menu />
                </el-icon>
            </el-button>
            <p>管理员界面</p>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img src="@/assets/images/ava_img.png" class="user">
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>

    </div>
</template>

<style scoped lang="less">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 0 20px;
}
.l-content{
    display: flex;
    color: #e0dada;
    & > .el-button{
        margin-right: 20px;
    }
}

.r-content {
    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}
</style>