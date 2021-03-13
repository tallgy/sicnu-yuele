<template>
	<!-- 首页 -->
	<view>

		<scroll-view scroll-y="true" class="body-box">
			<!-- 搜索框 -->
			<view class="search-box">搜索框</view>

			<!-- 图片轮转 -->
			<view class="carousel-map">
				<vear-carousel :img-list="imgList" url-key="imgUrl" @selected="selectedBanner" class="margin-t50" />
			</view>

			<!-- 四个按钮 -->
			<scroll-view scroll-x="true" class="submain-box horizontal-layout">
				<view v-for="(item, index) in buttonText" @click="subMainButtonClick(index)" class="classification-button">
					<image :src="item.imgUrl" class="button-img"></image>
					<p class="button-text margin-t10">{{item.text}}</p>
				</view>
			</scroll-view>

			<!-- 每日推荐 -->
			<view class="submain-box">
				<view class="horizontal-layout">
					<b class="font-40 margin-20 font-weight-600">每日推荐</b>
					<b class="submain-button" @click="GetMoreInfo(0)">查看更多</b>
				</view>
				<scroll-view scroll-x="true" class="horizontal-layout">
					<view v-for="(item, index) in recommendationImgText" @click="recommendationClick(index)" class="recommendation-border">
						<image :src="item.imgUrl" class="recommendation-box"></image>
						<screenTextScroll :text="item.text" :scroll="item.flag"></screenTextScroll>
					</view>
				</scroll-view>
			</view>

			<!-- 最近在学 -->
			<view class="submain-box">
				<view class="horizontal-layout">
					<b class="font-40 margin-20 font-weight-600">最近在学</b>
					<b class="submain-button" @click="GetMoreInfo(1)">查看更多</b>
				</view>

				<scroll-view scroll-x="true" class="horizontal-layout">
					<view v-for="(item, index) in myStudy" @click="myStudyClick(index)" class="recommendation-border">
						<image :src="item.imgUrl" class="recommendation-box"></image>
						<screenTextScroll :text="item.text" :scroll="item.flag"></screenTextScroll>
					</view>
				</scroll-view>
			</view>

			<!-- 课堂直播 -->
			<view class="submain-box">
				<view class="horizontal-layout">
					<b class="font-40 margin-20 font-weight-600">课堂直播</b>
					<b class="submain-button" @click="GetMoreInfo(2)">查看更多</b>
				</view>

				<scroll-view scroll-x="true" class="horizontal-layout">
					<view v-for="(item, index) in liveBroadcast" @click="liveBroadcastClick(index)" class="recommendation-border">
						<image :src="item.imgUrl" class="recommendation-box"></image>
						<screenTextScroll :text="item.text" :scroll="item.flag"></screenTextScroll>
					</view>
				</scroll-view>
			</view>

			<!-- 人气好课 -->
			<view class="submain-box">
				<view class="horizontal-layout">
					<b class="font-40 margin-20 font-weight-600">人气好课</b>
					<b class="submain-button" @click="GetMoreInfo(3)">查看更多</b>
				</view>

				<scroll-view scroll-x="true" class="horizontal-layout">
					<view v-for="(item, index) in popularClass" @click="popularClassClick(index)" class="recommendation-border">
						<image :src="item.imgUrl" class="recommendation-box"></image>
						<screenTextScroll :text="item.text" :scroll="item.flag"></screenTextScroll>
					</view>
				</scroll-view>
			</view>
		</scroll-view>

		<view class="horizontal-line"></view>

		<!-- 底部 音乐播放 -->
		<view class="bottom-bar horizontal-layout margin-t20">
			<image class="radius-circle square-90 margin-5 margin-l30" src="../../static/login/account.png"></image>
			<view class="margin-l30 margin-t15">
				<view class="font-weight-600">{{songName}}</view>
				<view class="font-weight-300 font-25 margin-t10 lyric">{{songLyricCurrent}}</view>
			</view>
			<image :src="playSongFlag ? playImgUrl: stopImgUrl" @click="playSong" class="song-button-box margin-l30"></image>
			<image :src="playlistImgUrl" class="song-button-box"></image>
		</view>

	</view>
</template>

<script src="./index.js">
</script>

<style>
	@import url("./index.css");
</style>
