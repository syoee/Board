import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import BoardPage from "./views/BoardPage.vue";
import ErrorPage from "./views/ErrorPage.vue";
import PostPage from "./views/PostPage.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomePage,
	},
	{
		path: "/board",
		name: "BoardPage",
		component: BoardPage,
	},
	{
		path: "/post",
		name: "PostPage",
		component: PostPage,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "ErrorPage",
		component: ErrorPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
