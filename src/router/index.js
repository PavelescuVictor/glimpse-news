import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "home",
        component: () =>
            import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    },
    {
        path: "/bookmarks",
        name: "bookmarks",
        component: () =>
            import(/* webpackChunkName: "doctors" */ "../views/Bookmarks.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import(/* webpackChunkName: "lucrari" */ "../views/About.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
