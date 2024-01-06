<template>
	<Header></Header>
	<div class="course-filter">
		<div class="filter-main">
			<div class="filter-item">
				<div class="item-title">课程方向：</div>
				<ul>
					<li class="filter-all">全部</li>
					<li>前端开发</li>
					<li>前端开发</li>
					<li>前端开发</li>
					<li>前端开发</li>
				</ul>
			</div>
			<div class="filter-item">
				<div class="item-title">课程方向：</div>
				<ul>
					<li class="filter-all">全部</li>
					<li>前端开发</li>
					<li>前端开发</li>
					<li>前端开发</li>
					<li>前端开发</li>
				</ul>
			</div>
			<div class="filter-item">
				<div class="item-title">课程方向：</div>
				<ul>
					<li class="filter-all">全部</li>
					<li>前端开发</li>
					<li>前端开发</li>
					<li>前端开发</li>
					<li>前端开发</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="course-list">
		<div class="list-main">
			<div class="list-t">
				<ul>
					<li>综合</li>
					<li>|</li>
					<li>最新课程</li>
					<li>|</li>
					<li>最多购买</li>
					<li>|</li>
					<li>价格</li>
					<li>|</li>
				</ul>
				<div>
					<el-checkbox label="免费课程" />
					<el-checkbox label="会员免费课程" />
				</div>
			</div>
			<div class="list-c"></div>
			<div class="list-b"></div>
		</div>
	</div>
	<Footer></Footer>
</template>

<script setup>
	import Header from '@/components/common/Header.vue'
	import Footer from '@/components/common/Footer.vue'
</script>

<style scoped lang="scss">
	.course-filter{
		width: 100%;
		height: 197px;
		background: #f3f5f9;
		.filter-main{
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			height: 197px;
			width: 1000px;
			margin: 0 auto;
			.filter-item{
				display: flex;
				align-items: center;
				ul{
					display: flex;
					justify-content: center;
					align-items: center;
					li{
						margin-right: 30px;
						font-size: 14px;
						font-weight: 400;
						color: #515759;
					}
					.filter-all{
						width: 50px;
						line-height: 30px;
						text-align: center;
						color:#388fff;
						font-size: 14px;
						background: rgba(44, 128, 255, .1);
					}
				}
				.item-title:{
					margin-left: 20px;
					font-size: 14px;
					font-weight: bold;
					color: #333333;
				}
			}
		}
	}
	.course-list{
		padding: 50px 0;
		background: #fff;
		.list-main{
			width: 1000px;
			margin: 0 auto;
			.list-t{
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				ul{
					display: flex;
					li{
						
					}
				}
			}
		}
	}

</style>