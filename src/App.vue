<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */

	/* 搜索框 */
	.search-box {
		background-color: #F48F00;
		height: 90rpx;
		width: 94%;
		margin: 3%;
	}

	/* 轮播图 */
	.carousel-map {}

	/* 次盒子 */
	.submain-box {
		background-color: #ffffff;
		width: 94%;
		height: auto;
		margin: 3%;
		white-space: nowrap;
		/* 规定段落文本的换行 */
	}
	
	
	/* 次按钮 */
	.submain-button {
		border: 1px solid #949494;
		border-radius: 30rpx;
		/* 圆角 */
		padding: 10rpx;
		margin-left: 340rpx;
		margin-top: 15rpx;
		margin-bottom: 15rpx;
	}

	/* 横向布局 */
	.horizontal-layout {
		/* 弹性布局 */
		display: flex;
		/* 横向布局 */
		flex-direction: row;
	}

	/* 带换行 */
	.horizontal-layout-wrap {
		/* 弹性布局 */
		display: flex;
		/* 横向布局 */
		flex-direction: row;
		flex-wrap: wrap;
	}

	/* 纵向布局 */
	.vertical-layout {
		display: flex;
		flex-direction: column;
	}

	/* 逆横向布局 */
	.in-horizontal-layout {
		/* 弹性布局 */
		display: flex;
		/* 横向布局 */
		flex-direction: row-reverse;
	}

	.radius-circle {
		border-radius: 50%;
	}

	/* 正方形 */
	.square-40 {
		width: 40rpx;
		height: 40rpx;
	}

	.square-60 {
		width: 60rpx;
		height: 60rpx;
	}

	.square-70 {
		width: 70rpx;
		height: 70rpx;
	}

	.square-90 {
		width: 90rpx;
		height: 90rpx;
	}

	.square-110 {
		width: 110rpx;
		height: 110rpx;
	}

	.square-140 {
		width: 140rpx;
		height: 140rpx;
	}

	.padding-t50 {
		padding-top: 50rpx;
	}

	/* 外边 */
	.margin-5 {
		margin: 5rpx;
	}

	.margin-10 {
		margin: 10rpx;
	}

	.margin-20 {
		margin: 20rpx;
	}

	/* 左边距 */
	.margin-l30 {
		margin-left: 30rpx;
	}

	/* 上边距 */
	.margin-t5 {
		margin-top: 5rpx;
	}

	.margin-t10 {
		margin-top: 10rpx;
	}

	.margin-t15 {
		margin-top: 15rpx;
	}
	
	.margin-t20 {
		margin-top: 20rpx;
	}
	
	.margin-t30 {
		margin-top: 30rpx;
	}

	.margin-t50 {
		margin-top: 50rpx;
	}
	
	/* 下边距 */
	.margin-b5 {
		margin-bottom: 5rpx;
	}

	/* 除了下边距 */
	.margin-t20-l20-r20 {
		margin-top: 20rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
	}

	/* 字体宽度 */
	.font-weight-300 {
		font-weight: 300;
	}

	.font-weight-400 {
		font-weight: 400;
	}

	.font-weight-500 {
		font-weight: bold;
	}

	.font-weight-600 {
		font-weight: 600;
	}

	/* 字体大小 */
	.font-20 {
		font-style: normal;
		font-size: 20rpx;
		font-family: Droid Sans Fallback;
	}

	.font-25 {
		font-style: normal;
		font-size: 25rpx;
		font-family: Droid Sans Fallback;
	}
	
	.font-40 {
		font-style: normal;
		font-size: 40rpx;
		font-family: Droid Sans Fallback;
	}

	/* 横线 */
	.horizontal-line {
		height: 2rpx;
		background-color: #c8c8c8;
	}

	/* 圆边 */
	.radius-10 {
		border-radius: 10rpx;
	}

	.radius-20 {
		border-radius: 20rpx;
	}

	.radius-30 {
		border-radius: 30rpx;
	}

	/* 居中 */
	.horizontal-center {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.vertical-center {
		/* display: flex; */
		/* flex-direction: row; */
		align-items: center;
	}

	.in-box-center {
		/* 设置布局为 flex 布局 */
		display: flex;
		/* 实现水平居中 */
		justify-content: center;
		/* 实现垂直居中 */
		align-items: center;
	}

	/* 字体红色 */
	.font-red {
		color: #ff0000;
	}

	/* 背景红色 */
	.bg-red {
		background-color: #ff0000;
	}
	
	.bg-light-blue {
		background-color: #55aaff;
	}
	
	.bg-pink {
		background-color: #ffaaff;
	}
	
	.bg-light-yellow {
		background-color: #f8e2d8;
	}

	/* 边框 */
	.frame-1-s-red {
		border: 1px solid #ff0000;
	}

	/* 矩形 */
	.rectangle-w100-h50 {
		width: 100rpx;
		height: 50rpx;
	}

	.rectangle-w172-h150 {
		width: 172rpx;
		height: 150rpx;
	}

	.rectangle-w250-h300 {
		width: 250rpx;
		height: 300rpx;
	}

	.rectangle-w300-h70 {
		width: 300rpx;
		height: 70rpx;
	}
	
	.rectangle-w350-h35 {
		width: 350rpx;
		height: 35rpx;
	}

	.rectangle-w350-h305 {
		width: 350rpx;
		height: 305rpx;
	}

	.rectangle-w350-h150 {
		width: 350rpx;
		height: 150rpx;
	}


	/* 宽度 */
	.width-48p {
		width: 48%;
	}

	.width-height-100p {
		/* 设置宽高为父组件的100% */
		width: 100%;
		height: 100%;
	}
</style>
