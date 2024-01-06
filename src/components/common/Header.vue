<template>
	<header>
		<div class="header-main">
			<div class="header-l">
				<h1 class="logo">
					<img src="@/assets/img/logo.png" alt="">
				</h1>
				<ul>
					<li class="active">首页</li>
					<li>
						 <router-link to="/course">课 程</router-link>
					</li>
					<li>会员</li>
				</ul>
			</div>
			<div class="header-r">
				<div class="search">
					<input type="text" placeholder="搜素要想的课程">
					<el-icon color="ccc" :size="20"><Search/></el-icon>
				</div>
				<div class="shop">
					<el-icon color="ccc" :size="20"><ShoppingCart/></el-icon>
				</div>
				<div class="login">登录/注册</div>
			</div>
		</div>
	</header>
</template>

<script setup>
import { Delete, Edit, Search, Share, Upload,ShoppingCart } from '@element-plus/icons-vue'
</script>

<style scoped>
	header{
		width: 100%;
		height: 80px;
		box-shadow: 0px 2px 4px rgba(0,0,0,0.1600);
		position: relative;
		z-index: 999;
	}
	.header-main{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 1000px;
		height: 80px;
		margin: 0 auto; 
		/* background: red; */
	}
	.header-l {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo{
		width: 127px;
		height: 50px;
		margin-right: 51px;
	}
	.logo img{
		width: 100%;
		height: 100%;
	}
	.header-l ul{
		display: flex;
		height: 50px;
	}
	.header-l ul li {
		line-height: 50px;
		font-weight: 500;
		cursor:pointer;
	}
	.header-l ul li + li{
		margin-left: 79px;
		font-style: 16px;
		color: #808080;
	}
	.active{
		position: relative;
		color: #3585ff;
		
	}
	.active:after{
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 140%;
		height: 3px;
		background: #3585ff;
		margin-left: -20%;
	}
	.header-r{
		display: flex;
		align-items: center;
	}
	.header-r .search{
		display: flex;
		align-items: center;
		padding: 0 10px;
		width: 320px;
		height: 43px;
		background: #f0f2f4;
		border-radius: 5px;
		
	}
	.header-r .search input{
		width: 270px;
		height: 43px;
		border: none;
		background: transparent;
		outline: none;
	}
	.header-r .shop{
		display: flex;
		align-items: center;
		margin-left: 42px;
	}
	.header-r .login{
		margin-left: 39px;
		font-style: 16px;
		color: #808080;
		cursor:pointer
	}
</style>