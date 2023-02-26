import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./style.css";
import Home from "./pages/Home.vue";
import Characters from "./pages/Characters.vue";
import CharDetails from "./pages/CharDetails.vue";
import NotFound from "./pages/NotFound.vue";
import About from "./pages/About.vue";
import App from "./App.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", component: Home },
		{ path: "/characters", component: Characters },
		{ path: "/characters/:id", component: CharDetails },
		{ path: "/about", component: About },
		{ path: "/:catchAll(.*)", component: NotFound },
	],
});

createApp(App).use(router).use(ElementPlus).mount("#app");
