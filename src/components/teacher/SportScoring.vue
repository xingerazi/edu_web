<template>
    <div class="scoringpage">
        <div class="scoring_intro" v-if="scoring_status === 0">
            <h2>使用说明:</h2>
            <el-steps style="max-width: 1000px; margin:20px ;" :active="activeSteps">
                <el-step title="Step 1" description="上传视频" />
                <el-step title="Step 2" description="等待响应" />
                <el-step title="Step 3" description="查看评分" />
                <el-button :icon="Bottom" circle @click="stepsGo" />
            </el-steps>
            <div class="scoring_intro_steps" v-if="activeSteps === 1">
                <h3>上传视频</h3>
                <video autoplay controlsList="nodownload" disablePictureInPicture loop>
                    <source src="../../assets/images/stu_func.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="scoring_intro_steps" v-if="activeSteps === 2">
                <h3>等待相应</h3>
                <video autoplay controlsList="nodownload" disablePictureInPicture loop>
                    <source src="../../assets/images/stu_func.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="scoring_intro_steps" v-if="activeSteps === 3">
                <el-button type="info" text @click="scoring_status = 1">我已知晓，立即使用</el-button>
                <el-button type="info" text @click="activeSteps = 1">请重复一遍过程</el-button>
                <video autoplay controlsList="nodownload" disablePictureInPicture loop>
                    <source src="../../assets/images/stu_func.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <div class="scoring_use" v-else>
            <el-upload class="upload-demo" drag action="http://113.54.247.100/upload_video"
                multiple>
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                    Drop file here or <em>click to upload</em>
                </div>
                <template #tip>
                    <div class="el-upload__tip">
                        jpg/png files with a size less than 500kb
                    </div>
                </template>
            </el-upload>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { Bottom, UploadFilled } from '@element-plus/icons-vue'

//控制步骤条
const activeSteps = ref(1)
const stepsGo = () => {
    if (activeSteps.value <= 2) {
        activeSteps.value = activeSteps.value + 1
    } else {
        activeSteps.value = 1
    }
}
//控制显示说明还是功能
const scoring_status = ref(0)
</script>

<style lang="less" scoped>
.scoringpage {
    min-height: 100vh;

    .scoring_intro_steps {
        display: flex;
        flex-direction: column;
        text-align: center;
        .el-button{
            width: 50px;
        }
        video {
            width: 80%;
            max-width: 800px;
            display: block;
            margin: 0 auto;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
    }
}
</style>