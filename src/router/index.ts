import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../views/index.vue'),
    },
    {
        path: '/about',
        component: () => import('../views/about.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
