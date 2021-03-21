<template>
	<view>

		<view class="VIP-bg-box">
			<view class="VIP-box">
				<view class="horizontal-layout padding-10" style="">
					<image class="square-90 radius-circle bg-red"></image>
					<b class="" style="margin-top: 30rpx; margin-left: 10rpx; width: 330rpx;">用户名</b>
					<b class="radius-30 in-box-center" style="margin-top: 10rpx; height: 60rpx; background-color: #ffaa00; width: 150rpx;">立即加入</b>
				</view>

				<view class="horizontal-line margin-t10-b10"></view>

				<view class="horizontal-layout">
					<view v-for="(item, index) in privilegeList">
						<image class="square-60 radius-circle privilege-box" :src="item.imgUrl"></image>
						<b class="font-20 horizontal-center">{{item.name}}</b>
					</view>
				</view>

			</view>
		</view>

		<view class="horizontal-line"></view>

		<view class="submain-box">
			<view class="horizontal-layout">
				<b class="submain-text">VIP精品课程</b>
				<b class="submain-button1" @click="">查看更多</b>
			</view>
			<view>
				<view class="margin-20" v-for="(item, index) in boutiqueCourse">
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

	</view>
</template>

<script src="./VIPZone.js">
</script>

<style>
	@import url("./VIPZone.css");
</style>
