<template>
	<view>
		<!-- 上面的搜索框 -->
		<view class="horizontal-layout search-box">
			<view class="search-input-box">
				<image class="search-img" :src="searchImgUrl"></image>
				<input class="search-text" :value="searchValue" @confirm="searchInput($event)" />
			</view>
			<p class="searc-button radius-30">搜索</p>
		</view>

		<!-- 横线 -->
		<view class="margin-t30 margin-b30 horizontal-line"></view>

		<!-- 搜索的历史和推荐 -->
		<view class="history-box horizontal-layout">
			<view v-for="(item, index) in historyText" class="horizontal-layout history-button" style="width: 80rpx; height: 40rpx; margin: 10rpx;">
				<p class="font-20">{{item}}</p>
			</view>
		</view>

	</view>
</template>

<script src="./search.js">
</script>

<style>
	@import url("./search.css");
</style>
