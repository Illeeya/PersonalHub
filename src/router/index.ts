import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/taskList",
            name: "taskList",
            component: () => import("../views/TaskListView.vue"),
        },
        {
            path: "/timers",
            name: "timers",
            component: () => import("../views/TimersView.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/",
        },
    ],
});

export default router;
