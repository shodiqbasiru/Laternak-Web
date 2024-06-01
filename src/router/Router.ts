import {createRouter, createWebHistory} from "vue-router";
import Home from "@pages/Home/Home.vue";
import Login from "@pages/Auth/Login.vue";
import Register from "@pages/Auth/Register.vue";
import DashboardMain from "@pages/Dashboard/DashboardMain.vue";
import DashboardHome from "@pages/Dashboard/DashboardHome/DashboardHome.vue";
import NotFound from "@pages/NotFound.vue";
import DashboardProduct from "@pages/Dashboard/DashboardProduct/DashboardProduct.vue";
import DashboardOrder from "@pages/Dashboard/DashboardOrder/DashboardOrder.vue";
import AuthServices from "@services/AuthServices.ts";

const authService = AuthServices();
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: "/register",
        name: "register",
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },

    {
        path:'/dashboard-admin',
        component: DashboardMain,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'dashboard-admin',
                component: DashboardHome
            },
            {
                path:'products',
                name:'dashboard-product',
                component: DashboardProduct,
            },
            {
                path:'orders',
                name: 'dashboard-order',
                component: DashboardOrder
            }

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

router.beforeEach(async (to,_,next) => {
    const isValid = await authService.validateToken();

    if (to.name === 'login' && isValid) {
        next({name: 'dashboard-admin'});
    } else if (to.matched.some(record => record.meta.requiresAuth) && !isValid) {
        next({name:"login"});
    } else {
        next();
    }
})

export default router;