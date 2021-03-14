var _self, page = 1,
	timer = null;

export default {
	data() {
		return {

			userInfo: {
				imgUrl: '../../static/person/headPortrait.jpg',
				nickName: '小叮当', //昵称
				autograph: '不会啊沙发沙发撒啊啊啊啊', //个性签名
			},
			//每日签到的图片
			calendarImgUrl: '../../static/person/calendar.png',



			//我的关注
			myFollow: {
				name: '我的关注',
				imgUrl: '../../static/person/myFollow.png',
				number: 12,
			},
			//关注我的
			followMe: {
				name: '关注我的',
				imgUrl: '../../static/person/followMe.png',
				number: 32,
			},
			//我都金币
			myGoldCoin: {
				name: '我的金币',
				imgUrl: '../../static/person/goldCoin.png',
				number: 3214,
			},
			//我的等级
			myLevel: {
				name: '我的等级',
				imgUrl: '../../static/person/level.png',
				number: 21,
			},

		}
	},
	components: {

	},
	onLoad(options) {
		// 信息处理
		this.onLoadDealInfo();

		_self = this;

		//检查是否登录参考代码,需要用的时候，可以把注释取掉
		//if(this.checkLogin()==false){
		//	return;
		//}
		//this.getLaction();//得到gps
		this.page = 0;
		//检测有没有传入id参数
		if (options.id != null && options.id != "") {
			this.id = options.id;
		}
		//执行初始化,需要用的时候，可以把注释取掉
		//this.Refresh("init");
	},
	onShow() {
		console.log("on show");
		//if(this.checkLogin()==false){
		//	return;
		//}

		//执行初始化,需要用的时候，可以把注释取掉
		//this.Refresh("init");
	},
	onPullDownRefresh: function() {
		//下拉刷新的时候请求一次数据
		this.Refresh();
	},
	methods: {
		//加载的信息处理
		onLoadDealInfo() {
			this.dealAutograph();
		},
		//签名的处理，把超过的字简化成... 最长12个
		dealAutograph() {
			var len = this.userInfo.autograph.length;
			if (len >= 12) {
				var result = this.userInfo.autograph.substr(0, 11);
				result += '...';
				console.log(result);
				this.userInfo.autograph = result;
			}
		},
		//个人信息的点击
		personInfoClick() {
			console.log("个人信息的点击");
		},
		//每日签到的点击
		signInClick() {
			console.log("每日签到的点击");
		},
		//我的关注，关注我的，我的金币，我的等级 的按钮的点击
		buttonHorFourClick(index) {
			if (index == 1) {
				console.log("横向布局的四个按钮的点击" + index);
			} else if (index == 2) {
				console.log("横向布局的四个按钮的点击" + index);
			} else if (index == 3) {
				console.log("横向布局的四个按钮的点击" + index);
			} else if (index == 4) {
				console.log("横向布局的四个按钮的点击" + index);
			} else {
				console.log("意外错误的点击");
			}
		},
		//我的课程，我的收藏，我的消息，我的订单，会员中心，我的设置，我的帮助 的按钮的点击
		buttonListClick(index) {
			if (index == 1) {
				console.log("一堆的按钮的点击 " + index);
			} else if (index == 2) {
				console.log("一堆的按钮的点击 " + index);
			} else if (index == 3) {
				console.log("一堆的按钮的点击 " + index);
			} else if (index == 4) {
				console.log("一堆的按钮的点击 " + index);
			} else if (index == 5) {
				console.log("一堆的按钮的点击 " + index);
			} else if (index == 6) {
				console.log("一堆的按钮的点击 " + index);
			} else if (index == 7) {
				console.log("一堆的按钮的点击 " + index);
			} else {
				console.log("意外错误的点击 ");
			}
		},
		//切换账户点击
		buttonExchangeClick() {
			console.log("切换账户的点击");
		},
		//退出登录的点击
		buttonExitClick() {
			console.log("退出登录的点击");
		},


		exit() {
			uni.showModal({
				title: '提示',
				content: '是否要退出并删除信息',
				success: function(res) {
					if (res.confirm) {
						console.log('用户点击确定');
						uni.setStorage({
							key: 'token',
							data: null,
						});
						uni.setStorage({
							key: 'userId',
							data: null,
						});
						uni.navigateTo({
							url: '/pages/login/login',
						});
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		//刷新数据
		Refresh: function(_action) {
			//提交到服务器

		},

	}
}
