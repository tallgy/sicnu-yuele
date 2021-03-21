<template>
	<view>

		<!-- 自己的部分展示 -->
		<view class="dynamicSelf">
			
		</view>

		<!-- 动态 -->
		<view class="margin-20">
			<view v-for="(item, index) in dynamicInfo">
				<view class="horizontal-layout margin-10">
					<image class="square-90 margin-r10" :src="item.headPortraitImgUrl"></image>
					<view>
						<p class="font-weight-600">{{item.userName}}</p>
						<p class="font-25 margin-t10">{{item.publishTime}}</p>
					</view>
				</view>
				<p class="margin-20">{{item.info}}</p>
				<scroll-view scroll-x="true" class="dynamicImgList horizontal-layout" style="height: 300rpx;">
					<image v-for="(item, index) in item.imgUrl" :src="item" class="square-250 margin-5"></image>
				</scroll-view>
			</view>
		</view>

	</view>
</template>

<script src="./communitySquare.js">
</script>

<style>
	@import url("./communitySquare.css");
</style>
