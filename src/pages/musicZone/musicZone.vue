<template>
	<view class="main-box">
		<p class="font-weight-600 font-40">专栏</p>

		<view class="horizontal-line margin-t15 margin-b15"></view>

		<scroll-view scroll-x="true" class="submain-box horizontal-layout ">
			<view class="square-110 horizontal-scroll-x" v-for="(item, index) in mainButton" @click="mainButtonClick(index)">
				<image :src="item.imgUrl" class="square-90 margin-10 radius-circle"></image>
				<p class="horizontal-center">{{item.name}}</p>
			</view>
		</scroll-view>

		<view class="horizontal-layout margin-20">
			<image class="square-250" :src="subInfo[showSubInfo].imgUrl"></image>
			<view class="margin-20">
				<p class="font-weight-600 font-40 margin-5">{{subInfo[showSubInfo].name}}</p>
				<p class="margin-5">{{subInfo[showSubInfo].info}}</p>
			</view>
		</view>

		<view class="bg-grey margin-20">
			<view class="horizontal-layout " v-for="(item, index) in music">
				<image class="square-40 margin-r20" :src="item.collectionFlag ? item.collectionOnImgUrl : item.collectionOffImgUrl"
				 @click="collectionChange(item)"></image>
				<p class="width-70p">{{item.name}}</p>
				<p>{{item.info}}</p>
			</view>
		</view>

	</view>
</template>

<script src="./musicZone.js">
</script>

<style>
	@import url("./musicZone.css");
</style>
