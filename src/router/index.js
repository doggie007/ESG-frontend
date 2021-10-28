import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
// import ESG from "../views/ESG.vue";
import Summary from "../views/Summary.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/summarise",
		name: "Summary",
		component: Summary,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	// {
	// 	path: "/learn-esg",
	// 	name: "ESG",
	// 	component: ESG,
	// },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
