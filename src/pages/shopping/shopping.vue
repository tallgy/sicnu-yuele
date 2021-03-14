<template>
	<view>

		<!-- 搜索框 -->
		<search-box></search-box>

		<!-- 图片轮转 -->
		<view class="carousel-map">
			<vear-carousel :img-list="imgList" url-key="imgUrl" @selected="selectedBanner" class="margin-t50" />
		</view>

		<!-- 分类 -->
		<scroll-view scroll-x="true" class="submain-box horizontal-layout">
			<view v-for="(item, index) in buttonText" @click="classificationButtonClick(index)" class="text-button">
				<p class="text-center">{{item}}</p>
			</view>
		</scroll-view>

		<!-- 推荐 -->
		<view class="submain-box">
			<view class="font-40 margin-20 font-weight-600">为你推荐</view>
			<view>
				<image class="product-recommendation-big" @click="productRecommendationClick(productRecommendationInfo[0].requestUrl)"
				 :src="productRecommendationInfo[0].imgUrl"></image>
			</view>
			<view class="horizontal-layout">
				<image class="product-recommendation-sm" @click="productRecommendationClick(productRecommendationInfo[1].requestUrl)"
				 :src="productRecommendationInfo[1].imgUrl"></image>
				<image class="product-recommendation-im" @click="productRecommendationClick(productRecommendationInfo[2].requestUrl)"
				 :src="productRecommendationInfo[2].imgUrl"></image>
			</view>
			<view class="horizontal-layout">
				<image class="product-recommendation-im" @click="productRecommendationClick(productRecommendationInfo[3].requestUrl)"
				 :src="productRecommendationInfo[3].imgUrl"></image>
				<image class="product-recommendation-sm" @click="productRecommendationClick(productRecommendationInfo[4].requestUrl)"
				 :src="productRecommendationInfo[4].imgUrl"></image>
			</view>
		</view>

		<!-- 限时抢购 -->
		<view class="submain-box">
			<view class="horizontal-layout">
				<view class="font-40 margin-20 font-weight-600">限时抢购</view>
				<b class="submain-button" @click="GetMoreInfo(0)">查看更多</b>
			</view>
			<view v-for="(item, index) in flashSale" class="horizontal-layout">
				<image :src="item.imgUrl" class="square-110 margin-10"></image>
				<view>
					<p class="margin-10">{{item.shoppingName}}</p>
					<view class="rectangle-w350-h35 bg-red radius-30 margin-10"></view>	<!-- 抢购的数量的比例 -->
					<p class="font-20 horizontal-center font-red">{{item.beginDate}}</p>
				</view>
				<view class="horizontal-layout vertical-center">
					<view @click="snapButtonClick(index)" class="horizontal-layout frame-1-s-red margin-10 radius-10">
						<image class="square-60 bg-red radius-10" src="../../static/shopping/clock.png"></image>
						<p class="font-10 margin-10">立即抢购</p>
					</view>
				</view>
			</view>
		</view>

		<!-- 音乐演出 -->
		<view class="submain-box">
			<view class="horizontal-layout">
				<view class="font-40 margin-20 font-weight-600">音乐演出</view>
				<b class="submain-button" @click="GetMoreInfo(1)">查看更多</b>
			</view>
			<view class="horizontal-layout-wrap">
				<view v-for="(item, index) in musicalShow" @click="musicalShowButtonClick(item.requestUrl)" class="horizontal-center width-48p">
					<image class="rectangle-w250-h300 .margin-t20-l20-r20" :src="item.imgUrl"></image>
					<screenTextScroll style="width: 80%;" :scroll="item.flag" :text="item.name"></screenTextScroll>
				</view>
			</view>
		</view>

		<!-- 乐谱推荐 -->
		<view class="submain-box">
			<view class="horizontal-layout">
				<view class="font-40 margin-20 font-weight-600">乐谱推荐</view>
				<b class="submain-button" @click="GetMoreInfo(2)">查看更多</b>
			</view>
			<view class="horizontal-layout-wrap">
				<view v-for="(item, index) in musicScoreRecommendation" @click="musicScoreRecommendationButtonClick(item.requestUrl)" class="horizontal-center width-48p">
					<image class="rectangle-w250-h300 .margin-t20-l20-r20" :src="item.imgUrl"></image>
					<screenTextScroll style="width: 80%;" :scroll="item.flag" :text="item.name"></screenTextScroll>
				</view>
			</view>
		</view>

		<!-- 数码影音 -->
		<view class="submain-box">
			<view class="horizontal-layout">
				<view class="font-40 margin-20 font-weight-600">数码影音</view>
				<b class="submain-button" @click="GetMoreInfo(3)">查看更多</b>
			</view>
			<view class="horizontal-layout-wrap">
				<view v-for="(item, index) in digitalVideo" @click="digitalVideoButtonClick(item.requestUrl)" class="horizontal-center width-48p">
					<image class="rectangle-w250-h300 .margin-t20-l20-r20" :src="item.imgUrl"></image>
					<screenTextScroll style="width: 80%;" :scroll="item.flag" :text="item.name"></screenTextScroll>
				</view>
			</view>
		</view>

		<!-- 精选乐器 -->
		<view class="submain-box">
			<view class="horizontal-layout">
				<view class="font-40 margin-20 font-weight-600">精选乐器</view>
				<b class="submain-button" @click="GetMoreInfo(4)">查看更多</b>
			</view>
			<view class="horizontal-layout-wrap">
				<view v-for="(item, index) in selectedMusicalInstruments" @click="selectedMusicalInstrumentsButtonClick(item.requestUrl)" class="horizontal-center width-48p">
					<image class="rectangle-w250-h300 .margin-t20-l20-r20" :src="item.imgUrl"></image>
					<screenTextScroll style="width: 80%;" :scroll="item.flag" :text="item.name"></screenTextScroll>
				</view>
			</view>
		</view>

	</view>
</template>

<script src="./shopping.js">
</script>

<style>
	@import url("./shopping.css");
</style>
