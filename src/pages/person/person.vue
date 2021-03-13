<template>
	<view>
		<!-- 头像，名称，签名，签到 -->
		<view class="horizontal-layout padding-t50 bg-light-yellow">
			<image src="../../static/login/account.png" class="square-110 margin-l30 radius-circle"></image>
			<view class="width-48p">
				<p class="font-weight-600">昵称: {{nickName}}</p>
				<p class="">签名: {{autograph}}</p>
			</view>
			<view class="horizontal-layout">
				<image :src="imgUrl" class="square-40 "></image>
				<p>每日签到</p>
			</view>
		</view>
		
		<!-- 我的关注，关注我的，我的金币，我的等级 -->
		<view class="horizontal-layout">
			<view>
				<p>我的关注</p>
				<image src="../../static/login/account.png"></image>
				<p>12</p>
			</view>
			<view>
				<p>关注我的</p>
				<image src="../../static/login/account.png"></image>
				<p>12</p>
			</view>
			<view>
				<p>我的金币</p>
				<image src="../../static/login/account.png"></image>
				<p>12</p>
			</view>
			<view>
				<p>我的等级</p>
				<image src="../../static/login/account.png"></image>
				<p>12</p>
			</view>
		</view>
		
		<!-- 我的课程，我的收藏，我的消息，我的订单，会员中心，我的设置，我的帮助 -->
		<view>
			<view>
				<p>我的课程</p>
			</view>
			<view>
				<p>我的收藏</p>
			</view>
			<view>
				<p>我的消息</p>
			</view>
			<view>
				<p>我的订单</p>
			</view>
			<view>
				<p>会员中心</p>
			</view>
			<view>
				<p>我的设置</p>
			</view>
			<view>
				<p>我的帮助</p>
			</view>
		</view>
	</view>
	
	
	
	<!--本页面由uniapp切片工具生成，uni-app切片-可视化设计工具(一套代码编译到7个平台iOS、Android、H5、小程序)，软件下载地址：http://www.ymznkf.com/new_view_669.htm -->
	<!-- <view class="YmContent">
		<view class="info_96">
			<view class="info_61">
				<text decode="true" class="info_62">我的头像</text>
				<image v-on:click="photo_63_click()" :src="imgUrl" mode="scaleToFill" border="0" class="photo"></image>
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">姓名</text>
				<text decode="true" class="name">{{userinfo.name}}</text>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">备注</text>
				<text decode="true" class="name">{{userinfo.note}}</text>
				<image v-on:click="info_68_68_click()" src="/static/info/images/info_68_68.jpg" mode="scaleToFill" border="0" class="info_68"></image>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">学工号</text>
				<text decode="true" class="name">{{userinfo.id}}</text>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">性别</text>
				<text decode="true" class="name">{{userinfo.sex}}</text>
				<image v-on:click="info_68_68_click()" src="/static/info/images/info_68_68.jpg" mode="scaleToFill" border="0" class="info_68"></image>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">出生日期</text>
				<text decode="true" class="name">{{userinfo.birth_date}}</text>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">身份证号</text>
				<text decode="true" class="name">{{userinfo.id_number}}</text>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">电话号码</text>
				<text decode="true" class="name">{{userinfo.phone}}</text>
				<image v-on:click="info_68_68_click()" src="/static/info/images/info_68_68.jpg" mode="scaleToFill" border="0" class="info_68"></image>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">电子邮箱</text>
				<text decode="true" class="name">{{userinfo.email}}</text>
				<image v-on:click="info_68_68_click()" src="/static/info/images/info_68_68.jpg" mode="scaleToFill" border="0" class="info_68"></image>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">所属学院</text>
				<text decode="true" class="name">{{userinfo.college_name}}</text>
				<image v-on:click="info_68_68_click()" src="/static/info/images/info_68_68.jpg" mode="scaleToFill" border="0" class="info_68"></image>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">权限</text>
				<text decode="true" class="name">{{userinfo.identity}}</text>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">职位</text>
				<text decode="true" class="name">{{userinfo.post}}</text>
			</view>
			<view class="info_83">
			</view>
			<view v-on:click="row4_65_click()" class="row4">
				<text decode="true" class="info_66">注册日期</text>
				<text decode="true" class="name">{{userinfo.register}}</text>
			</view>
			<view class="info_83">
			</view>
			<view class="row4 margin-b100">
				<cc-button width="300rpx" height="90rpx" color="#fff" bgcolor="#ff0000;"
				:loading="isloading" @cctap="exit" fontsize="34rpx">退出</cc-button>
			</view>
		</view>
	</view> -->
</template>

<script src="./person.js">
</script>

<style lang="scss">
	@import url("./person.css");
</style>
