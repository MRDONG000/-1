<template>
	<Header></Header>
	<NavSwiper></NavSwiper>
	<div ref="target">
		<NewCourse v-if="targetIsVisible"></NewCourse>
	</div>
	<Footer></Footer>
</template>

<script setup>
	// 引入异步组件
	import { useIntersectionObserver } from '@vueuse/core'
	
	  const NewGoodCourse = defineAsyncComponent(() =>
	              import('@/components/home/NewCourse.vue')
	            )
	            const target = ref(null);
	            const targetIsVisible = ref(false);
	            const { stop } = useIntersectionObserver(
	              target,
	              ([{ isIntersecting }]) => {
	                if( isIntersecting ) {
	                    targetIsVisible.value = isIntersecting
	                }
	              },
	            )
	
	import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
	// 引入组件
	import Header from '@/components/common/Header.vue'
	import NavSwiper from '@/components/home/NavSwiper.vue'
	import Footer from '@/components/common/Footer.vue'
</script>

<style>
</style>