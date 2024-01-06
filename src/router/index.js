import {createRouter,createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
	{
		path:'/',
		name:"Home",
		component:Home
	},
	{
		path:'/about',
		name:"About",
		component:()=>import('@/views/About.vue')
	},
	{
		path:'/course',
		name:"Course",
		component:()=>import('@/views/Course.vue') // 文件名写全
	},
];

const router = createRouter({
	history:createWebHistory(),
	routes
})

export default router;