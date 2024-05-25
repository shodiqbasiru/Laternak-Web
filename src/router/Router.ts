import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/Home/Home.vue')
    },
    {
        path:'/login',
        name: 'login',
        component: () => import('../pages/Auth/Login.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;