import { createRouter, createWebHashHistory } from 'vue-router'
import { useUserStore } from '@/stores'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: async () => await import('@/views/home/HomePage.vue')
    }, // 登录页
    {
      path: '/login',
      name: 'login',
      component: async () => await import('@/views/login/LoginPage.vue'),
      redirect: '/login/loginpage',
      children: [
        {
          path: 'loginpage',
          name: 'loginpage',
          component: async () => await import('@/components/login/Login.vue')
        },
        {
          path: 'regiesterpage',
          name: 'regiesterpage',
          component: async () => await import('@/components/login/Regiester.vue')
        }
      ]
    },
    {
      path: "/user", name: 'userpage', component: async () => await import('@/views/user/UserPage.vue'), children: [
        {
          path: 'student',
          name: 'student',
          component: async () => await import('@/views/user/StudentPage.vue'),
          children: [
            {
              path: 'course',
              name: 'course',
              component: async () => await import('@/components/student/CourseList.vue')
            },
          ]
        },
        {
          path: 'teacher',
          name: 'teacher',
          component: async () => await import('@/views/user/TeacherPage.vue'),
          children: [
            {
              path: 'sportscoring',
              name: 'sportscoring',
              component: async () => await import('@/components/teacher/SportScoring.vue')
            },
          ]
        },
        {
          path: 'chatai',
          name: 'chatai',
          component: async () => await import('@/views/user/ChatAi.vue'),
        },
        {
          path: 'admin',
          name: 'admin',
          redirect: '/user/admin/main',
          component: async () => await import('@/views/user/AdminPage.vue'),
          children: [
            {
              path: 'main',
              name: 'main',
              component: async () => await import('@/components/admin/AdminMain.vue')
            },
            {
              path: 'usermanage',
              name: 'usermanage',
              component: async () => await import('@/components/admin/AdminUsermanage.vue')
            },
            {
              path: 'coursemanage',
              name: 'coursemanage',
              component: async () => await import('@/components/admin/AdminCoursemanage.vue')
            },
            {
              path: 'othermanage',
              name: 'othermanage',
              component: async () => await import('@/components/admin/AdminOtherInfo.vue')
            }
          ]
        },
        {
          path: 'changeinfo',
          name: 'changeinfo',
          component: async () => await import('@/views/user/ChangeInfo.vue')
        }
      ]
    },

    { path: "/:notFound(.*)", name: 'not-found', component: async () => await import('@/views/notFound/NotFound.vue') },
  ]
})

// 登录访问拦截 => 默认是直接放行的
// 根据返回值决定，是放行还是拦截
// 返回值：
// 1. undefined / true  直接放行
// 2. false 拦回from的地址页面
// 3. 具体路径 或 路径对象  拦截到对应的地址
//    '/login'   { name: 'login' }
// router.beforeEach((from,to,next) => {
//   // 如果没有token, 且访问的是非登录页，拦截到登录，其他情况正常放行
//   const useStore = useUserStore()
//   if (!useStore.token && to.path === '/userpage') return '/login'
// })

export default router
