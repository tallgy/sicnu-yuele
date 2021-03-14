<template>
	<view>
		<!-- 头像，名称，签名，签到 -->
		<view class="bg-light-yellow">

			<view class="horizontal-layout padding-t50">
				<view class="horizontal-layout width-70p" @click="personInfoClick">
					<image :src="userInfo.imgUrl" class="square-110 margin-l30 radius-circle"></image>
					<view class="width-70p margin-l30 margin-t10">
						<p class="font-weight-600 margin-10">昵称: {{userInfo.nickName}}</p>
						<p class="font-25 margin-10">签名: {{userInfo.autograph}}</p>
					</view>
				</view>
				<view class="vertical-line margin-l10-r10"></view>
				<view class="horizontal-layout vertical-center" @click="signInClick">
					<image :src="calendarImgUrl" class="square-40 margin-5"></image>
					<p>每日签到</p>
				</view>
			</view>

			<!-- 我的关注，关注我的，我的金币，我的等级 -->
			<view class="horizontal-layout margin-t30 padding-b10">
				<view class="horizontal-center button-box" @click="buttonHorFourClick(1)">
					<p class="button-text radius-20">{{myFollow.name}}</p>
					<image class="square-60 button-img" :src="myFollow.imgUrl"></image>
					<p>{{myFollow.number}}</p>
				</view>
				<view class="horizontal-center button-box" @click="buttonHorFourClick(2)">
					<p class="button-text radius-20">{{followMe.name}}</p>
					<image class="square-60 button-img" :src="followMe.imgUrl"></image>
					<p>{{followMe.number}}</p>
				</view>
				<view class="horizontal-center button-box" @click="buttonHorFourClick(3)">
					<p class="button-text radius-20">{{myGoldCoin.name}}</p>
					<image class="square-60 button-img" :src="myGoldCoin.imgUrl"></image>
					<p>{{myGoldCoin.number}}</p>
				</view>
				<view class="horizontal-center button-box" @click="buttonHorFourClick(4)">
					<p class="button-text radius-20">{{myLevel.name}}</p>
					<image class="square-60 button-img" :src="myLevel.imgUrl"></image>
					<p>{{myLevel.number}}</p>
				</view>
			</view>

		</view>

		<!-- 我的课程，我的收藏，我的消息，我的订单，会员中心，我的设置，我的帮助 -->
		<view>
			<view class="vertical-center-one-line button-list" @click="buttonListClick(1)">
				<p class="font-weight-500 font-40 margin-l30">我的课程</p>
			</view>
			<view class="vertical-center-one-line button-list" @click="buttonListClick(2)">
				<p class="font-weight-500 font-40 margin-l30">我的收藏</p>
			</view>
			<view class="vertical-center-one-line button-list" @click="buttonListClick(3)">
				<p class="font-weight-500 font-40 margin-l30">我的消息</p>
			</view>
			<view class="vertical-center-one-line button-list" @click="buttonListClick(4)">
				<p class="font-weight-500 font-40 margin-l30">我的订单</p>
			</view>
			<view class="vertical-center-one-line button-list" @click="buttonListClick(5)">
				<p class="font-weight-500 font-40 margin-l30">会员中心</p>
			</view>
			<view class="vertical-center-one-line button-list" @click="buttonListClick(6)">
				<p class="font-weight-500 font-40 margin-l30">我的设置</p>
			</view>
			<view class="vertical-center-one-line button-list" @click="buttonListClick(7)">
				<p class="font-weight-500 font-40 margin-l30">我的帮助</p>
			</view>
		</view>
		
		<!-- 切换账户，退出登录 -->
		<view>
			<view class="vertical-center-one-line button-list" @click="buttonExchangeClick">
				<p class="font-40 exit-exchange-button">切换账户</p>
			</view>
			<view class="vertical-center-one-line button-list" @click="buttonExitClick">
				<p class="font-40 exit-exchange-button">退出登录</p>
			</view>
		</view>
	</view>

</template>

<script src="./person.js">
</script>

<style lang="scss">
	@import url("./person.css");
</style>
