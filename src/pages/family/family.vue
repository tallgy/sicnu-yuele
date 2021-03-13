<template>
	<view>
		<!-- 搜索框 -->
		<view class="search-box">搜索框</view>

		<!-- 图片按钮分布 左1大，右上2小，右下1中 -->
		<view class="horizontal-layout submain-box margin-10">
			<!-- 轮播图 -->
			<view class="rectangle-w350-h305 bg-red margin-5"></view>
			<view class="vertical-layout">
				<view class="horizontal-layout">
					<view class="rectangle-w172-h150 bg-light-blue margin-5">
						<p class="in-box-center width-height-100p font-weight-600">游戏</p>
					</view>
					<view class="rectangle-w172-h150 bg-pink margin-5">
						<p class="in-box-center width-height-100p font-weight-600">列表</p>
					</view>
				</view>
				<image class="rectangle-w350-h150 margin-5" :src="imgUrl"></image>
			</view>
		</view>

		<!-- 家庭，好友的按钮 -->
		<view class="submain-box">
			<view class="horizontal-layout rectangle-w300-h70">
				<button class="radius-10 bg-red">家庭</button>
				<button class="radius-10">好友</button>
			</view>
		</view>

		<!-- 横线 -->
		<view class="horizontal-line margin-t30"></view>

		<!-- 好友列表 -->
		<view class="submain-box">
			<view v-for="i in 10" :class="i==0 ? '' : 'margin-t20' ">
				<view class="horizontal-layout">
					<image src="../../static/login/account.png" class="radius-circle square-90"></image>
					<view class="margin-l30">
						<p class="font-weight-600 font-40">家庭</p>
						<p class="font-25 margin-t5 chat-text">早上好</p>
					</view>
				</view>
				<view class="horizontal-line margin-t15"></view>
			</view>
		</view>
	</view>
</template>

<script src="./family.js">
</script>

<style>
	@import url("./family.css");
</style>
