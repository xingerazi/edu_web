<script setup lang='ts'>
import { computed, onMounted, ref } from 'vue';
import { showCourseList } from '@/api/course'
import type { CourseItemInfo, getCourse } from '@/type/thing';

const courseList = ref<getCourse>({
    page: 1,
    size: 10
})
const courseListItem = ref<CourseItemInfo[]>([])
const courseListItemfit = computed(() => {
    return courseListItem.value.slice(0, 8)
})
onMounted(async () => {
    const res = await showCourseList(courseList.value)
    console.log(res.data.data);
    courseListItem.value = res.data.data
})
</script>


<template>
    <div class="course_list_page">
        <el-carousel :interval="3000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
                <h3 text="2xl" justify="center">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <h3>好课推荐</h3>
        <div class="course_list">
            <el-card style="width: 35%;min-height: 200px;" shadow="hover" v-for="item in courseListItemfit"
                :key="item.id" :body-style="{ padding: 0 }">
                <img src="`@/assets/images/class/class1.jpg`" alt="">
                <div class="details">
                    <h4>{{ item.courseName }}</h4>
                    <p class="author">{{ item.instructor }}</p>
                    <p class="days">{{ item.daysOfWeek }}</p>
                    <div class="bottom_details">
                        <div class="now">
                            <img src="@/assets/class.png" alt="">
                            <p>正在进行中</p>
                        </div>
                        <div style="margin-right: 5px; float: right;">{{item.semester}}</div>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<style lang="less" scoped>
.course_list_page {
    text-align: center;

    h3 {
        font-size: 30px;
        margin-top: 30px
    }

    .el-carousel {
        margin-top: 50px;

        .el-carousel__item h3 {
            color: #475669;
            opacity: 0.75;
            line-height: 200px;
            margin: 0;
            text-align: center;
        }

        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n + 1) {
            background-color: #d3dce6;
        }
    }

    .course_list {
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        img {
            width: 100%;
            height: 160px;
        }

        .el-card {
            margin: 30px 10px;
            border-radius: 5%;
            cursor: pointer;
            .details {
                padding: 10px 12px;
                height: 126px;
                text-align: left;

                h4 {
                    font-size: 22px;

                }

                .author {
                    height: 12px;
                    line-height: 12px;
                    font-size: 12px;
                    margin-top: 6px;
                    color: #666;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .days {
                    width: 100%;
                    height: 17px;
                    line-height: 17px;
                    margin: 8px 0 0 0;
                    font-size: 12px;
                    color: #999;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .bottom_details {
                    font-size: 12px;
                    height: 12px;
                    line-height: 12px;
                    font-size: 12px;
                    color: #999;
                    bottom: 10px;
                    margin-top: 20px;
                    .now {
                        display: flex;
                        color: #53B880;
                        width: 100px;
                        float: left;
                        img {
                            position: relative;
                            top: -1px;
                            display: inline-block;
                            width: 15px;
                            height: 15px;
                            margin-right: 3px;
                            vertical-align: top;
                        }
                    }
                }
            }
        }
    }

}
</style>