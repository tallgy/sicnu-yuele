<template>
	<view>
		
		<scroll-view scroll-x="true" class="horizontal-layout margin-20">
			<view v-for="(item, index) in mainButton" class="square-100 padding-10 courseButton margin-20">
				<image class="square-100" :src="item.imgUrl"></image> 
				<p class="font-25">{{item.name}}</p>
			</view> 
		</scroll-view>
		
		<!-- 新课速递 -->
		<view>
			<b class="font-40 margin-20 font-weight-600">新课速递</b>
			
			<view class="horizontal-line"></view>
			
			<view class="margin-20" v-for="(item, index) in courseList">
				<view class="horizontal-layout">
					<image class="recommendImgBox" :src="item.imgUrl"></image>
					<view class="margin-20 vertical-center">
						<b class="font-weight-600 font-30 margin-5">{{item.name}}</b>
						<view class="horizontal-layout">
							<b class="margin-5 font-25">共计 {{item.courseHours}} 学时</b>
							<view class="vertical-line"></view>
							<b class="margin-5 font-25">{{item.studyPeople}}已学</b> 
						</view>
					</view>
				</view>
				
				<view v-if="index != courseList.length-1" class="horizontal-line margin-20"></view>
			</view>
		</view>
	</view>
</template>

<script src="./courseLearning.js">
</script>

<style>
	@import url("./courseLearning.css");
</style>
