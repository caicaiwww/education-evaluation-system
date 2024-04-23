//index.ts
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/club',
  },
  {
    path: '/club',
    name: 'club',
    component: () => import('@/components/club.vue')
  },
  {
    path: '/clubindex',
    name: 'ClubIndex',
    component: () => import('@/views/TheClub/clubIndex.vue'),
    meta: {
      title: '社团详情',
    },
    children: [
      {
        path: 'stueva',
        name: 'stuEva',
        component: () => import('@/views/TheClub/stuEva.vue'),
        meta: {
          title: '学生评价',
        },
      },
      {
        path: 'groupeva',
        name: 'groupEva',
        component: () => import('@/views/TheClub/groupEva.vue'),
        meta: {
          title: '小组评价',
        },
      },
      {
        path: 'exammeg',
        name: 'ExamMeg',
        component: () => import('@/views/TheClub/ExamMeg.vue'),
        meta: {
          title: '审批管理',
        },
      },
      {
        path: 'makeann',
        name: 'MakeAnn',
        component: () => import('@/views/TheClub/MakeAnn.vue'),
        meta: {
          title: '发布通知',
        },
      },
      {
        path: 'stulist',
        name: 'stuList',
        component: () => import('@/views/TheClub/StuList.vue'),
        meta: {
          title: '学生列表',
        },
      },
    ],
  },
  {
    path: '/rank',
    name: 'rank',
    component: () => import('@/views/TheRank/rank.vue')
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
})

export default router
