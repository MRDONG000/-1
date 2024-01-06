<template>
	<div class="nav-swiper">
		<div class="nav-swiper-main">
			<div class="swiper-t">
				<ul  @mouseleave="mouseOut()">
					<li :class='item.id ==currentIndex ?"active":""' v-for="item in firstList" :key="item.id" @mouseenter="mouseHover(item.id)">
							<span>{{item.categoryName}}</span>
							<el-icon><ArrowRight /></el-icon>
					</li>
					<div class="active-r " v-if="isShow">
						<div class="active-r-t">
							<h3 class="active-title">基础知识</h3>
							<div>
								<div>知识点:</div>
								<ul>
									<li v-for="(item,index) in secondList" :key="item.id">{{item.categoryName}}</li>
								</ul>
							</div>
						</div>
						<div class="active-r-b">
							<ul>
								<li v-for="item in courseList">
									<img :src="item.courseCover" alt="">
									<div>
										<div class="active-course-title">{{item.courseName}}</div>
										<div class="active-course-type">{{courseTypeFn(item.courseLeval)}}·{{item.clicks}}人报名</div>
										<div class="active-course-price">免费学习</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</ul>
				<div>
					   <el-carousel >
					      <el-carousel-item v-for="item in sliderList" :key="item.id" v-if="sliderList.length>0">
					       <img :src="item.imageUrl" alt="">
					      </el-carousel-item>
					    </el-carousel>
				</div>
			</div>
			<ul class="swiper-b">
				<li>
						<h3>
							<img src="@/assets/img/chuji.png" alt="">
						</h3>
						<div>
							<h4>初级课程</h4>
							<span>入门快，岗位多</span>
						</div>
				</li>
				<li>
						<h3>
							<img src="@/assets/img/chuji.png" alt="">
						</h3>
						<div>
							<h4>初级课程</h4>
							<span>入门快，岗位多</span>
						</div>
				</li>
				<li>
						<h3>
							<img src="@/assets/img/chuji.png" alt="">
						</h3>
						<div>
							<h4>初级课程</h4>
							<span>入门快，岗位多</span>
						</div>
				</li>
				<li>
						<h3>
							<img src="@/assets/img/chuji.png" alt="">
						</h3>
						<div>
							<h4>初级课程</h4>
							<span>入门快，岗位多</span>
						</div>
				</li>
				<li>
						<h3>
							<img src="@/assets/img/chuji.png" alt="">
						</h3>
						<div>
							<h4>初级课程</h4>
							<span>入门快，岗位多</span>
						</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
	// mixin
	import courseType from '@/mixins/courseType.js'
	let {courseTypeFn} = courseType();
	// 鼠标移入
	const mouseHover=(id)=>{
		isShow.value = true;
		currentIndex.value = id
		// 获取二级分类
		getSecondCategorys({
			categoryId:id
		}).then(res=>{
			secondList.value = res.data.list
			// console.log(res);
		})
		// 获取课程
		courseSearch({
			pageNum:1,
			pageSize:4,
			entity:{
				firstCategory:id
			}
		}).then(res=>{
			courseList.value= res.data.pageInfo.list
			console.log(res);
		})
	}
	const mouseOut=()=>{
		isShow.value = false;
		currentIndex.value = ""
	}
	 import {ArrowRight} from '@element-plus/icons-vue'
	 import {getSliders } from '@/utils/api/slider'
	 import {getFirstCategorys,getSecondCategorys,courseSearch} from '@/utils/api/course.js'
	 let sliderList = ref([])
	 // 一级分类数据
	 let firstList = ref([])
	 // 二级分类数据
	 let secondList = ref([])
	 // 课程的数据
	 let courseList = ref([]);
	 // 控制li的显示class
	 let currentIndex = ref('')
	 // 右侧数据切换
	 let isShow = ref(false)
	 onBeforeMount(()=>{
		 // 轮播图数据
		 getSliders().then(res=>{
			 let {data} = res
			 // console.log(data.list);
			 sliderList.value=data.list
		 })
		 // 一级分类
		 getFirstCategorys().then(res=>{
			 firstList.value = res.data.list;
			 // console.log(res);
		 })
	 })
</script>

<style scoped>
	.nav-swiper{
		background: url('@/assets/img/transitionbg.png') no-repeat;
		width: 100%;
		height: 600px;
	}
	.nav-swiper-main{
		width: 1000px;
		padding: 47px 0;
		margin: 0 auto;
		/* background: dodgerblue; */
	}
	.swiper-t{
		display: flex;
		height: 373px;
		/* background: yellow; */
		border-radius: 11px 11px 0px 0px;
	}
	.swiper-t>ul{
		position: relative;
		display: flex;
		flex-direction: column;
	  justify-content: space-around;
		width: 160px;
		height: 100%;
		border-radius: 11px 0px 0px 0px;
		background: #2b283d;
	}
	.swiper-t>ul>li{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20px;
		width: 120px;
		height: 37px;
		/* background: green; */
		
		font-size: 16px;
		color: #f2f2f2;
		cursor: pointer;
	}
	
	.active{
		background: linear-gradient(90deg, #3FE5FF 0%, rgba(62, 222, 255, 0.93) 2%, rgba(60, 203, 255, 0.73) 9%, rgba(58, 186, 255, 0.56) 17%, rgba(57, 172, 255, 0.41) 25%, rgba(55, 160, 255, 0.28) 33%, rgba(54, 150, 255, 0.18) 43%, rgba(53, 142, 255, 0.1) 53%, rgba(53, 137, 255, 0.04) 64%, rgba(53, 133, 255, 0.01) 77%, rgba(53, 133, 255, 0) 100%);
	}
	.active-r{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: absolute;
		top: 0;
		left: 160px;
		z-index: 999;
		width: 724px;
		height: 373px;
		background: #ffffff;
		border-radius: 11px 11px 0px 0px;
	}
	.active-r-t{
		padding: 23px 30px;
	}
	.active-r-t>div{
		display: flex;
		margin-top: 11px;
	}
	.active-r-t>div ul{
		display: flex;
		flex-wrap: wrap;
		margin-left: 7px;
	}
	.active-r-t>div ul li+li{
		margin-left: 20px;
	}
	.active-r-b{
		width: 724px;
		height: 217px;
		background: #f3f5f6;
	
	}
	.active-r-b >ul{
			display: flex;
				flex-wrap: wrap;
				align-items: center;
				height: 100%;
				padding: 0px 30px;
	}
	.active-r-b >ul li{
		display: flex;
		width: 50%;
	}
	.active-r-b >ul li img{
		width: 140px;
		height: 81px;
		
	}
	.active-r-b >ul li>div{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 4px;
	}
	.active-course-title{
		font-size: 14px;
		color: #333333;

	}
	.active-course-type{
		font-size: 12px;
		color: #808080;
	}
	.active-course-price{
		font-size: 12px;
		color: #3586ff;
	}
	.swiper-t > div{
		width: 840px;
		height: 373px;
	}
	.el-carousel{
		height: 373px;
	}
	.el-carousel img{
		width: 100%;
		height: 373px;
	}
	::v-deep .el-carousel__container{
	  height: 373px;
	}
/* 下边 */
.swiper-b{
	display: flex;
}

.swiper-b li{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 213px;
	height: 133px;
	/* background: burlywood; */
	border-radius: 0px 0px 0px 11px;
	cursor: pointer;
}
.swiper-b li img{
	width: 64px;
	height: 64px;
}
.swiper-b li div{
	margin-left: 11px;
}
.swiper-b li div h4{
	font-size: 16px;
	color: #333333;
}
.swiper-b li div span{
	font-size: 12px;
	color: #808080;
}
</style>