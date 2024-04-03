<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top: 20px">
            <el-card shadow="hover">
                <div class="user">
                    <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" />
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="role">超级管理员</p>
                    </div>
                </div>
                <div class="login_info">
                    <p>上次登录时间: <span>2022-7-11</span></p>
                    <p>上次登录地点: <span>2022-7-11</span></p>
                </div>
            </el-card>
            <el-card shadow="hover" style="margin-top: 20px; height: 660px">
                <div>
                    <el-card :body-style="{padding:0}">
                        <el-calendar/>
                    </el-card>
                </div>
            </el-card>
        </el-col>
        <el-col :span="16" style="margin-top: 20px">
            <div class="num">
                <el-card :body-style="{ display: 'flex', padding: 0 }" v-for="item in countData" :key="item.name">
                    <component :is="item.icon" class="icons" :style="{ background: item.color }"></component>
                    <div class="details">
                        <p class="num">${{ item.value }}</p>
                        <p class="txt">${{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card :body-style="{minHeight:'60vh',marginTop:'50px'}">
                <div class="echartsArea">
                    <div id="myChart" style="width: 400px; height: 400px"></div>
                    <div id="chart" style="width: 400px; height: 400px;"></div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import * as echarts from 'echarts'
const countData = ref([
    {
        name: '课程上新',
        value: 1234,
        icon: 'CircleCheck',
        color: '#2ec7c9'
    },
    {
        name: '课程上新',
        value: 1234,
        icon: 'Star',
        color: '#ffb980'
    },
    {
        name: '课程上新',
        value: 1234,
        icon: 'Goods',
        color: '#5ab1ef'
    },
    {
        name: '课程上新',
        value: 1234,
        icon: 'CircleCheck',
        color: '#2ec7c9'
    },
    {
        name: '课程上新',
        value: 1234,
        icon: 'Star',
        color: '#ffb980'
    },
    {
        name: '课程上新',
        value: 1234,
        icon: 'Goods',
        color: '#5ab1ef'
    }
])
const state = reactive({
    option: {
        title: {
            text: '用户新增比率'
        },
        legend: {
            x: 'center',
            y: 'bottom'
        },
        tooltip: {
            trigger: 'item', // axis   item   none三个值
            formatter: '{b}:{d}%'
        },
        series: [
            {
                type: 'pie',
                radius: '50%',
                label: {
                    show: true,
                    formatter: '{b}:{d}%'
                },
                labelLine: { show: true },
                data: [
                    {
                        value: 1866,
                        name: '一年级'
                    },
                    {
                        value: 1725,
                        name: '二年级'
                    },
                    {
                        value: 1535,
                        name: '三年级'
                    },
                    {
                        value: 1505,
                        name: '四年级'
                    },
                    {
                        value: 1414,
                        name: '五年级'
                    }
                ]
            }
        ]
    }
})
const state1 = reactive({
    options: {
        title: {
            text: '用户新增数量'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line',
            smooth: true
        }]
    }
})
const initeCharts = () => {
    let myChart = echarts.init(document.getElementById('myChart'))
    // 绘制图表
    myChart.setOption(state.option)
}
const initeCharts2 = () => {
    let myChart = echarts.init(document.getElementById('chart'))
    // 绘制图表
    myChart.setOption(state1.options)
}
onMounted(() => {
    initeCharts()
    initeCharts2()
})
</script>

<style lang="less" scoped>
.home {
    .user {
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

    .login_info {
        p {
            line-height: 30px;
            font-size: 14px;
            color: #999;

            span {
                color: #666;
                margin-left: 60px;
            }
        }
    }

    .num {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .el-card {
            width: 32%;
            margin-bottom: 20px;
        }

        .icons {
            width: 80px;
            height: 80px;
            font-size: 30px;
            line-height: 80px;
            text-align: center;
            color: #fff;
        }

        .details {
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .num {
                font-size: 30px;
                margin-bottom: 10px;
            }

            .txt {
                font-size: 14px;
                text-align: center;
                color: #999;
            }
        }
    }

    .echartsArea {
        min-height: 60vh;
        height: 100%;
        display: flex;
        flex-wrap: nowrap;
        justify-content:space-around;
        align-items:center;
    }
}
</style>
