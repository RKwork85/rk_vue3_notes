import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        // alias:'/home',
        alias:['/home','/index'],

        component: () => import('@/views/index.vue')
        
    },

    {
        path:'/content',
        component: () => import("@/views/contentPage.vue"),

    },
    {
        // 动态路由，用于处理带有随机对话 ID 的路径
        path: '/chat/:id',
        component: () => import('@/views/contentPage.vue'),
    },

]

const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router