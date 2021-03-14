<template>
	<view class="search-box" @click="searchClick">
		<image class="search-img" :src="searchImgUrl"></image>
		<p class="search-text">{{searchText}}</p>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchImgUrl: '../../static/search-box/searchImg.png',
				searchText: '搜索',

			};
		},
		methods: {
			searchClick() {
				console.log("点击了搜索框");
			}
		},
	}
</script>

<style>
	.search-box {
		/* background-color: #F48F00; */
		height: 60rpx;
		width: 94%;
		margin: 2%;
		/* border: ; */
		border-radius: 30rpx;
		background: rgba(106, 106, 106, 0.1);
		display: flex;
		align-items: center;
	}
	
	.search-img {
		height: 50rpx;
		width: 50rpx;
		margin: auto 20rpx;
	}
	
	.search-text {
		color: rgba(76, 76, 76, 0.3);
	}
</style>
