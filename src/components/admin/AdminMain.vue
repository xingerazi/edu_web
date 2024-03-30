<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top: 20px;">
            <el-card shadow="hover">
                <div class="user">
                    <img src="../../assets/images/ava_img.png" alt="">
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="role">超级管理员</p>
                    </div>
                </div>
                <div class="login_info"> 
                    <p>上次登录时间: <span>2022-7-11</span> </p>
                    <p>上次登录地点: <span>2022-7-11</span> </p>
                </div>
            </el-card>
            <el-card shadow="hover" style="margin-top: 20px; height: 450px;">
                <div>
                    <el-card></el-card>
                </div>
            </el-card>
        </el-col>
        <el-col  :span="16" style="margin-top: 20px;">
            <div class="num">
                <el-card :body-style="{display:'flex' ,padding:0}" v-for="item in countData" :key="item.name">
                    <component :is="item.icon" class="icons" :style="{background:item.color}"></component>
                    <div class="details">
                        <p class="num">${{ item.value }}</p>
                        <p class="txt">${{ item.name }}</p>
                    </div>
                </el-card>
                <el-card style="height: 280px;">
                    <div ref="echart" style="height: 280px;"></div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const countData=ref([
    {
        name:'今日支付订单',
        value:1234,
        icon:'CircleCheck',
        color:'#2ec7c9'
    },
    {
        name:'今日支付订单',
        value:1234,
        icon:'Star',
        color:'#ffb980'
    },
    {
        name:'今日支付订单',
        value:1234,
        icon:'Goods',
        color:'#5ab1ef'
    },
    {
        name:'今日支付订单',
        value:1234,
        icon:'CircleCheck',
        color:'#2ec7c9'
    },
    {
        name:'今日支付订单',
        value:1234,
        icon:'Star',
        color:'#ffb980'
    },
    {
        name:'今日支付订单',
        value:1234,
        icon:'Goods',
        color:'#5ab1ef'
    },
])
</script>

<style lang="less" scoped>
.home{
    .user{
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
        img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-right: 40px;
        }
    }
    .login_info{
        p{
            line-height: 30px;
            font-size: 14px;
            color: #999;
            span{
                color: #666;
                margin-left: 60px;
            }
        }
    }
    .num{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .el-card{
            width: 32%;
            margin-bottom: 20px;
        }
        .icons{
            width: 80px;
            height: 80px;
            font-size: 30px;
            line-height: 80px;
            text-align: center;
            color:#fff
        }
        .details{
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .num{
                font-size: 30px;
                margin-bottom: 10px;
            }
            .txt{
                font-size: 14px;
                text-align: center;
                color:#999
            }
        }
    }
}
</style>