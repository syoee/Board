import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import AboutPage from "./views/AboutPage.vue";
// import ErrorPage from "./views/ErrorPage.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomePage,
	},
	{
		path: "/about",
		name: "AboutPage",
		component: AboutPage,
	},
	// {
	// 	path: "*",
	// 	name: "ErrorPage",
	// 	component: ErrorPage,
	// },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
