<template>
	<view>
		<!-- 搜索框 -->
		<search-box></search-box>

		<!-- 图片按钮分布 左1大，右上2小，右下1中 -->
		<view class="horizontal-layout submain-box margin-10">
			<!-- 轮播图 -->
			<view class="rectangle-w350-h305 bg-red margin-5"></view>
			<view class="vertical-layout">
				<view class="horizontal-layout">
					<view class="rectangle-w172-h150 bg-light-blue margin-5" @click="buttonGameClick">
						<p class="in-box-center width-height-100p font-weight-600">游戏</p>
					</view>
					<view class="rectangle-w172-h150 bg-pink margin-5" @click="buttonListClick">
						<p class="in-box-center width-height-100p font-weight-600">列表</p>
					</view>
				</view>
				<image class="rectangle-w350-h150 margin-5" :src="backgroundImgUrl"></image>
			</view>
		</view>

		<!-- 家庭，好友的按钮 -->
		<view class="submain-box">
			<view class="horizontal-layout rectangle-w300-h70">
				<button class="radius-10" :class="buttonFlag ? '' : 'bg-red'" @click="buttonFamiyClick">家庭</button>
				<button class="radius-10" :class="buttonFlag ? 'bg-red' : ''" @click="buttonFriendClick">好友</button>
			</view>
		</view>

		<!-- 横线 -->
		<view class="horizontal-line margin-t30"></view>

		<!-- 家庭，好友列表 -->
		<view v-if="!buttonFlag" class="submain-box">
			<view v-for="(item, index) in familyList" :class="i==0 ? '' : 'margin-t20' ">
				<view class="horizontal-layout" @click="chatInfoClick">
					<image :src="item.imgUrl" class="radius-circle square-90"></image>
					<view class="margin-l30">
						<p class="font-weight-600 font-40">{{item.name}}</p>
						<p class="font-25 margin-t5 chat-text">{{item.lastInfo}}</p>
					</view>
				</view>
				<view class="horizontal-line margin-t15"></view>
			</view>
		</view>
		<view v-else class="submain-box">
			<view v-for="(item, index) in friendList" :class="i==0 ? '' : 'margin-t20' ">
				<view class="horizontal-layout" @click="chatInfoClick">
					<image :src="item.imgUrl" class="radius-circle square-90"></image>
					<view class="margin-l30">
						<p class="font-weight-600 font-40">{{item.name}}</p>
						<p class="font-25 margin-t5 chat-text">{{item.lastInfo}}</p>
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
