<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { data } from '@/utils/data';
import HomePageFooter from '@/components/HomePageFooter.vue';
const router = useRouter()
const loginNav = (): void => {
  router.push('/login')
}

const product_intro = ref()
const scrollDown = () => {
  product_intro.value.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

const staffStories = data.staffStories

let log_info = 
` __          __  _                          
 \\ \\        / / | |                         
  \\ \\  /\\  / /__| | ___ ___  _ __ ___   ___ 
   \\ \\/  \\/ / _ \\ |/ __/ _ \\| '_ \` _ \\ / _ \\
    \\  /\\  /  __/ | (_| (_) | | | | | |  __/
     \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|
                                            
`;
       
console.log(log_info)

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="HomePage_header">
        <div class="header_container">
          <el-menu default-active="/home" router class="el-menu-demo" mode="horizontal" :ellipsis="false" >
            <el-menu-item index="0">
              <img style="width: 100px" src="@/assets/images/sswj_logo.jpg" alt="Element logo" />
            </el-menu-item>
            <div class="flex-grow" />
            <div class="rightbar">
              <el-menu-item index="/home">主页</el-menu-item>
              <el-menu-item index="/login">登录</el-menu-item>
              <el-sub-menu index="2">
                <template #title>更多信息</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-sub-menu index="2-4">
                  <template #title>item four</template>
                  <el-menu-item index="2-4-1">item one</el-menu-item>
                  <el-menu-item index="2-4-2">item two</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
            </div>
          </el-menu>
        </div>
      </el-header>
      <el-main class="HomePage_banner">
        <div class="HomePage_banner_video">
          <div class="video_wrapper">
            <video ref="video" class="video" preload="auto" muted loop playsinline autoplay
              poster="//sf3-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/video-poster_1576231362701.png"
              src="//sf1-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/gongquhunjian_1080.min.mp4" tabindex="-1"></video>
          </div>
          <div class="slogan">
            <h4 class="animate__animated animate__bounce">师者 所以传道授业解惑也</h4>
            <div class="slogan_name">书生·万卷</div>
            <div class="login_button" @click="loginNav">登录 login</div>
          </div>
          <div class="bottom_tips">
            <span class="arrow_down" @click="scrollDown">
              <i><el-icon>
                  <Bottom />
                </el-icon></i>
            </span>
          </div>
        </div>
        <div class="product_info" ref="product_intro">
          <div class="byteLife content-item-block">
            <h1 class="byteLife-title"></h1>
            <div class="block-item block-item-one">
              <div class="block-item-column block-item-column-text">
                <h2 class="block-item-column-title">在扁平开放的氛围 里工作</h2>
                <div class="content">
                  <div class="content-item">
                    <h2 class="content-item-title">务实扁平的工作氛围</h2>
                    <p class="content-item-desc">
                      不讲 title
                      和层级，敢于授权新人，专注完成业务目标，没有领地意识
                    </p>
                  </div>
                  <div class="content-item">
                    <h2 class="content-item-title">务实扁平的工作氛围</h2>
                    <p class="content-item-desc">
                      不讲 title
                      和层级，敢于授权新人，专注完成业务目标，没有领地意识
                    </p>
                  </div>
                  <div class="content-item">
                    <h2 class="content-item-title">务实扁平的工作氛围</h2>
                    <p class="content-item-desc">
                      不讲 title
                      和层级，敢于授权新人，专注完成业务目标，没有领地意识
                    </p>
                  </div>
                </div>
              </div>
              <div class="block-item-column block-item-column-image">
                <img src="https://sf3-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/life_1.png" />
              </div>

            </div>
            <div class="block-item block-item-one">
              <div class="block-item-column block-item-column-text">
                <h2 class="block-item-column-title">在扁平开放的氛围 里工作</h2>
                <div class="content">
                  <div class="content-item">
                    <h2 class="content-item-title">务实扁平的工作氛围</h2>
                    <p class="content-item-desc">
                      不讲 title
                      和层级，敢于授权新人，专注完成业务目标，没有领地意识
                    </p>
                  </div>
                  <div class="content-item">
                    <h2 class="content-item-title">务实扁平的工作氛围</h2>
                    <p class="content-item-desc">
                      不讲 title
                      和层级，敢于授权新人，专注完成业务目标，没有领地意识
                    </p>
                  </div>
                  <div class="content-item">
                    <h2 class="content-item-title">务实扁平的工作氛围</h2>
                    <p class="content-item-desc">
                      不讲 title
                      和层级，敢于授权新人，专注完成业务目标，没有领地意识
                    </p>
                  </div>
                </div>
              </div>
              <div class="block-item-column block-item-column-image">
                <img src="https://sf3-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/life_1.png" />
              </div>
            </div>
          </div>
          <div class="main_func">
            <div class="func_stu">
              <div class="func_stu_intro">
                <h1 class="func_stu_intro_title">学生的良师益友</h1>
                <p class="func_stu_intro_main">我们通过进行功能的体验和生活，在学生端，来帮助学生提高学习成绩</p>
              </div>
              <div class="func_stu_contain">
                <div class="func_stu_contain_main">
                  <div class="func_stu_contain_main_card">
                    <div class="func_stu_contain_main_card_img">
                      <img src="../../assets/images/stu_func.png" alt="">
                    </div>
                  </div>
                  <div class="func_stu_contain_main_intro">
                    <span>基于llm</span>
                    <h6>相似的题库推荐</h6>
                    <p>
                      相似的题库推荐相似的题库推荐相似的题库推荐相似的题库推荐相似的题库推荐相似的题库推荐,相似的题库推荐相似的题库推荐相似的题库推荐
                    </p>
                  </div>
                </div>
                <div class="func_stu_contain_main">
                  <div class="func_stu_contain_main_card">
                    <div class="func_stu_contain_main_card_img">
                      <img src="../../assets/images/stu_func.png" alt="">
                    </div>
                  </div>
                  <div class="func_stu_contain_main_intro">
                    <span>基于llm</span>
                    <h6>相似的题库推荐</h6>
                    <p>
                      相似的题库推荐相似的题库推荐相似的题库推荐相似的题库推荐相似的题库推荐相似的题库推荐,相似的题库推荐相似的题库推荐相似的题库推荐
                    </p>
                  </div>
                </div>
                <div class="func_stu_contain_main">
                  <div class="func_stu_contain_main_card">
                    <div class="func_stu_contain_main_card_img">
                      <img src="../../assets/images/stu_func.png" alt="">
                    </div>
                  </div>
                  <div class="func_stu_contain_main_intro">
                    <span>基于llm</span>
                    <h6>相似的题库推荐</h6>
                    <p>
                      相似的题库推荐相似的题库推荐相似的题库推荐相似的题库推荐相似的题库推荐相似的题库推荐,相似的题库推荐相似的题库推荐相似的题库推荐
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="func_tea">
              <div class="func_tea_intro">
                <h1 class="func_tea_intro_title">教师的省心助手</h1>
                <p class="func_tea_intro_main">我们通过进行功能的体验和生活，在教师端，来帮助教学和改卷</p>
              </div>
              <ul class="staffStory-list clearfix">
                <router-link tag="li" :to="`/`" v-for="item in staffStories" :key="item.id" class="staffStory-item">
                  <div class="avatar">
                    <img width="100%" :src="item.avatar" />
                  </div>
                  <div class="text">
                    <h2 class="title">{{ item.title }}</h2>
                    <div class="desc">
                      {{ item.name }}&nbsp;|&nbsp;{{ item.department }}
                    </div>
                    <p class="remark">{{ item.remark }}</p>
                  </div>
                  <div class="circular-button">→</div>
                </router-link>
              </ul>
            </div>
          </div>
        </div>
      </el-main>
      <el-footer class="HomePage_footer">
        <HomePageFooter></HomePageFooter>
      </el-footer>
    </el-container>
    <el-backtop :bottom="170">
      <div style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      ">
        UP
      </div>
    </el-backtop>
  </div>
</template>

<style scoped lang="less">
@keyframes verticalMotion {
  0% {
    transform: translateY(3px);
  }

  50% {
    transform: translateY(-3px);
  }

  100% {
    transform: translateY(3px);
  }
}

.HomePage_header {
  padding: 0;
  margin: 0;
  position: fixed;
  width: 100%;
  z-index: 10;

  .el-menu-demo {
    min-height: 80px;
    padding: 0 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .rightbar {
      display: flex;
    }
  }
}

.HomePage_banner {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;

  .HomePage_banner_video {
    width: 100%;
    height: 100vh;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background: rgba(51, 112, 255, 0.2);

    .video_wrapper {
      width: 100%;
      height: 100vh;
      font-size: 0;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      overflow: hidden;

      .video {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .slogan {
      color: #fff;
      font-size: 50px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      .slogan_name {

        .slogan_name::after,
        .slogan_name::before {
          content: '';
          position: absolute;
          background-image: linear-gradient(270deg,
              hsla(0, 0%, 100%, 0),
              #fff 47%,
              hsla(0, 0%, 100%, 0));
          height: 2px;
          width: 89px;
          top: 50%;
          transform: translateY(-50%);
        }

        .slogan_name:before {
          right: 10px;
        }

        .slogan_name:after {
          left: 10px;
        }

        position: relative;
        margin-top: 20px;
        letter-spacing: 20px;
        font-size: 30px;
      }

      .login_button {
        margin-top: 10%;
        min-height: 50px;
        width: 40%;
        min-width: 200px;
        font-size: 30px;
        color: #fff;
        border: 2px solid #fff;
        border-radius: 6px;
        cursor: pointer;
        background: rgba(29, 47, 62, 0.3);
      }

      .login_button:hover {
        background: rgba(29, 47, 62, 0.6);
      }
    }

    .bottom_tips {
      position: absolute;
      bottom: 30px;
      width: 50px;
      height: 50px;
      flex-shrink: 0;

      text-align: center;

      .arrow_down {
        display: block;
        margin-bottom: 4px;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid #fff;
        text-align: center;
        line-height: 40px;
        color: #fff;
        cursor: pointer;
        font-size: 21px;

        i {
          animation: verticalMotion 1.3s infinite linear;
          display: inline-block;
        }
      }
    }
  }

  .product_info {
    margin-left: 10%;
    width: 80%;
    min-height: 80vh;

    .byteLife {
      p {
        margin: 15px 0;
      }

      .clearfix::before,
      .clearfix::after {
        content: "";
        display: table;
        height: 0;
        clear: both;
      }

      // width:1200px;
      // overflow: hidden;
      &-title {
        margin-bottom: 70px;
      }

      padding-left: 10%;

      .block-item {
        overflow: hidden;
        margin-bottom: 100px;

        &:nth-child(odd) {
          .block-item-column {
            &-text {
              margin-right: 9%;
            }

            float: left;
          }
        }

        &:nth-child(even) {
          .block-item-column {
            &-image {
              margin-right: 9%;
            }

            float: right;
          }
        }

        &-column {
          &-title {
            margin-bottom: 40px;
            padding-bottom: 40px;
            border-bottom: 1px solid #ccc;
          }

          &-text {
            width: 30%;
          }

          &-image {
            height: 400px;
            width: 59%;
            border-radius: 8px;
            overflow: hidden;

            img {
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }

    .main_func {
      .func_stu {
        .func_stu_intro {
          h1 {
            font-size: 4.4rem;
            margin-bottom: 20px;
          }

          p {
            max-width: 600px;
            font-size: 1.6rem;
            color: rgb(101, 110, 122);
            text-align: center;
          }

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .func_stu_contain {
          margin-left: 9%;
          width: 82%;
          height: 50vh;
          display: flex;
          justify-content: space-around;
          align-items: center;

          .func_stu_contain_main {
            width: 26%;
            height: 30vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .func_stu_contain_main_card {
              min-height: 20vh;
              width: 100%;
              border-radius: 4px;
              box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
              margin-bottom: 20px;

              .func_stu_contain_main_card_img {
                width: 100%;

                img {
                  height: 200px;
                  width: 100%;
                }
              }
            }

            .func_stu_contain_main_intro {
              span {
                color: #009dff;
                font-size: 1rem;
              }

              h6 {
                font-size: 1.5rem;
                font-weight: bold;
                margin-bottom: 20px;
              }

              p {
                max-width: 400px;
              }
            }
          }
        }
      }

      .func_tea {
        margin-top: 100px;
        margin-left: 10%;
        width: 80%;

        .func_tea_intro {
          h1 {
            font-size: 4.4rem;
            margin-bottom: 20px;
          }

          p {
            max-width: 600px;
            font-size: 1.6rem;
            color: rgb(101, 110, 122);
            text-align: center;
          }

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .staffStory {
          padding: 0 140px;
          text-decoration: none;

          .title {
            text-align: center;
            margin-bottom: 10px;
          }

          &-list {
            text-align: center;
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
          }

          &-item {
            // height: 450px;
            overflow: hidden;
            padding: 30px;
            width: 30%;
            cursor: pointer;

            &:hover {
              box-shadow: 0 10px 30px 0 rgba(136, 150, 171, 0.15);

              .circular-button {
                color: rgba(136, 150, 171, 0.15);
              }
            }

            .avatar {
              width: 70%;
              margin: auto;
            }

            .text {
              .title {
                color: #1f2329;
                font-weight: 400;
                font-size: 22px;
                margin: 10px 0;
                white-space: nowrap;
              }

              .desc {
                color: #1f2329;
                margin: 12px 0;
                font-size: 14px;
              }

              .remark {
                font-size: 14px;

                color: #606266;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }

            .circular-button {
              border-radius: 50%;
              width: 30px;
              height: 30px;
              border: 1px solid;
              line-height: 30px;

              margin: auto;
              margin-top: 20px;
              color: #ccc;
            }
          }
        }
      }
    }
  }
}

.HomePage_footer {
  padding: 0;
}
</style>
