<template>
	<view>
		
		<!-- 乐曲库，打谱 -->
		<view class="horizontal-layout bg-grey radius-30 submain-box vertical-center height-300rp">
			<view class="horizontal-center width-50p" @click="songBookButtonClick">
				<image class="square-110 margin-20" :src="songBook.imgUrl"></image>
				<p>{{songBook.name}}</p>
			</view>
			
			<view class="horizontal-center width-50p" @click="scoreButtonClick">
				<image class="square-110 margin-20" :src="score.imgUrl"></image>
				<p>{{score.name}}</p>
			</view>
		</view>
		
		<view class="submain-box">
			<view>
				<b class="font-40 margin-20 font-weight-600">特别推荐</b>
			</view>
			
			<!-- 推荐的显示 -->
			<view class="" v-for="(item, index) in recommend">
				<view class="horizontal-layout">
					<image class="radius-20 recommendImgBox margin-10" :src="item.imgUrl"></image>
					<view class="margin-20">
						<p class="font-weight-600 font-30 margin-5">{{item.name}}</p>
						<p class="margin-5">制谱: {{item.author}}</p>
						<p class="margin-5">￥: {{item.money}}</p>
					</view>
				</view>
				<view v-if="index != recommend.length-1" class="horizontal-line margin-t20-b20"></view>
			</view>
			
		</view>
		
	</view>
</template>

<script src="./musicScoreRecommendation.js">
</script>

<style>
	@import url("./musicScoreRecommendation.css");
</style>
