import {createRouter, createWebHistory} from "vue-router";
import Home from "@pages/Home/Home.vue";
import Login from "@pages/Auth/Login.vue";
import Register from "@pages/Auth/Register.vue";
import DashboardMain from "@pages/Dashboard/DashboardMain.vue";
import DashboardHome from "@pages/Dashboard/DashboardHome/DashboardHome.vue";
import NotFound from "@pages/NotFound.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path:'/dashboard-admin',
        component: DashboardMain,
        children: [
            {
                path: '',
                name: 'dashboard-admin',
                component: DashboardHome
            },

        ]

    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;