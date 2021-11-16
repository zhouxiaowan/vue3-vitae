import { createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ '../views/index.vue')
    }

]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router
