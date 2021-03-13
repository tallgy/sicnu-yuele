import helper from '../../common/helper.js';

	export default {
		data() {
			return {
				cur: 0,
				user: {
					username: null,
					password: null,
				},
				isloading: false,
				right: null,
			}
		},
		onLoad(res) {
			// console.log(uni.getStorageSync('token'));
			// var token = uni.getStorageSync('token');
			// var userId = uni.getStorageSync('userId');
			// if (token != null) {
			// 	//自动登录，判断token的时间是否过期
			// 	uni.showLoading({
			// 		title: '正在加载。。。'
			// 	})
			// 	uni.request({
			// 		url: this.$api + '/mangerModel/home/assessmentresult',
			// 		method: 'POST',
			// 		data: {
			// 			userId: userId
			// 		},
			// 		header: {
			// 			'authorization': token,
			// 		},
			// 		success: (res) => {
			// 			console.log(res.data)
			// 			uni.hideLoading();
			// 			if (res.data.resultCode == '0') {
			// 				//可以自动登录
			// 				this.loginSuccess();
			// 			} else {
			// 				uni.hideLoading();
			// 				helper.warnPop(this, '登录认证失效，请重新登录', 1500);
			// 			}
			// 		},
			// 		fail: () => {
			// 			uni.hideLoading();
			// 			helper.errorPop(this, '网络或服务器错误！', 1500);
			// 		},
			// 	});
			// }
		},
		methods: {
			login() {
				console.log('登录按钮点击')
				this.isloading = true;
				this.loginSuccess();
				// if (this.user.username == null || this.user.password == null) {
				// 	helper.warnPop(this, '请输入用户名和密码！', 1500)
				// 	this.isloading = false;
				// } else {
				// 	this.loginSuccess()
				// 	// uni.request({
				// 	// 	url: this.$api + '/login', //仅为示例，并非真实接口地址。
				// 	// 	method: 'POST',
				// 	// 	dataType: "json",
				// 	// 	data: {
				// 	// 		username: this.user.username,
				// 	// 		password: this.user.password
				// 	// 	},
				// 	// 	header: {
				// 	// 		"content-type": "application/json"
				// 	// 	},
				// 	// 	success: (res) => {
				// 	// 		console.log(res.data);
				// 	// 		if (res.data.resultCode == '0') {
				// 	// 			//登录成功
				// 	// 			uni.setStorage({
				// 	// 				key: 'token',
				// 	// 				data: res.data.resultMsg
				// 	// 			});
				// 	// 			uni.setStorage({
				// 	// 				key: 'right',
				// 	// 				data: res.data.data
				// 	// 			});
				// 	// 			uni.setStorage({
				// 	// 				key: 'userId',
				// 	// 				data: this.user.username
				// 	// 			});
				// 	// 			this.loginSuccess();
				// 	// 		} else {
				// 	// 			this.isloading = false;
				// 	// 			helper.errorPop(this, '登录失败，账号或密码错误！', 1500);
				// 	// 		}
				// 	// 	},
				// 	// 	fail: (res) => {
				// 	// 		this.isloading = false;
				// 	// 		helper.errorPop(this, '网络错误，请稍后再试');
				// 	// 	}
				// 	// });
				// }
			},
			loginSuccess() {
				helper.successPop(this, '登录成功', 1500)
				this.isloading = false;
				uni.switchTab({
					url: "/pages/index/index"
				})
			},
			forgetPWD() {
				console.log('忘记密码点击')
				uni.navigateTo({
					url: "/pages/changePWD/changePWD"
				})
			},
			wechatLogin() {
				wx.login({
					success(res) {
						console.log(res);
						if (res.code) {
							//发起网络请求
							// wx.request({
							//   url: 'https://test.com/onLogin',
							//   data: {
							//     code: res.code
							//   }
							// })
						} else {
							console.log('登录失败！' + res.errMsg)
						}
					}
				})
			},
		}
	}
