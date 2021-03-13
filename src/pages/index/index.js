export default {
	data() {
		return {
			// 轮播图
			imgList: [{
				imgUrl: '../../static/slideshow/slideshow_1.jpg',
				requestUrl: '第一个',
				id: 1
			}, {
				imgUrl: '../../static/slideshow/slideshow_2.jpg',
				requestUrl: '第二个',
				id: 2
			}, {
				imgUrl: '../../static/slideshow/slideshow_3.jpg',
				requestUrl: '第三个',
				id: 3
			}, {
				imgUrl: '../../static/slideshow/slideshow_4.jpg',
				requestUrl: '第四个',
				id: 4
			}],

			// 首页的几个主要按钮
			buttonText: [{
					imgUrl: '../../static/index/music.png',
					text: '音乐专区',
				},
				{
					imgUrl: '../../static/index/musicScore.png',
					text: '乐谱推荐',
				},
				{
					imgUrl: '../../static/index/community.png',
					text: '社区广场',
				},
				{
					imgUrl: '../../static/index/course.png',
					text: '课程学习',
				},
				{
					imgUrl: '../../static/index/VIPMember.png',
					text: '会员专区',
				},
			],

			//推荐课程
			recommendationImgText: [{
					imgUrl: '../../static/login/apple.png',
					text: '苹果推荐',
					flag: false,
				},
				{
					imgUrl: '../../static/login/apple.png',
					text: '手机推荐',
					flag: false,
				},
				{
					imgUrl: '../../static/login/apple.png',
					text: '这是一个很长很长的文字',
					flag: false,
				},
				{
					imgUrl: '../../static/login/apple.png',
					text: '这是一个非常长非常长的文字',
					flag: false,
				},
				{
					imgUrl: '../../static/login/apple.png',
					text: '我的天哪，学废了，学废了，立马冲过去找个富婆',
					flag: false,
				},
			],

			//我的学习
			myStudy: [{
					imgUrl: '../../static/login/apple.png',
					text: '这是一个非常长非常长的文字',
					flag: false,
				},
				{
					imgUrl: '../../static/login/apple.png',
					text: '这是一个非常长非常长的文字',
					flag: false,
				},
			],

			//课堂直播
			liveBroadcast: [{
					imgUrl: '../../static/login/apple.png',
					text: '这是一个非常长非常长的文字',
					flag: false,
				},
				{
					imgUrl: '../../static/login/apple.png',
					text: '这是一个非常长非常长的文字',
					flag: false,
				},
			],

			//人气好课
			popularClass: [{
					imgUrl: '../../static/login/apple.png',
					text: '这是一个非常长非常长的文字',
					flag: false,
				},
				{
					imgUrl: '../../static/login/apple.png',
					text: '这是一个非常长非常长的文字',
					flag: false,
				},
			],

			//音乐播放
			songName: 'My Heart Will Go On', //歌曲名称
			songLyricList: '', //所有歌词
			songLyricCurrent: 'You\'re here there’s nothing I fear', //当前播放的歌词位置
			playImgUrl: '../../static/index/play.png', //播放图片
			stopImgUrl: '../../static/index/stop.png', //暂停图片
			playlistImgUrl: '../../static/index/playlist.png', //播放列表图片
			//播放暂停的标记符号， false为暂停，true为播放
			playSongFlag: false,


		};
	},
	methods: {
		//轮播图的事件
		selectedBanner(item, index) {
			console.log("轮播图请求:" + item.requestUrl);
		},

		// 按钮的点击事件的序号判断
		subMainButtonClick(index) {
			console.log("四个主按钮" + index);
		},

		//输入带 json对象的数组， json里面有 text 文本，判断文本超过len便使flag为true，可以用于滚动
		isScrollText(info, len) {
			for (var i = 0; i < info.length; i++) {
				if (info[i].text.length >= len) {
					info[i].flag = true;
				}
			}
		},
		
		//每日推荐的点击
		recommendationClick(index) {
			console.log("每日推荐" + index);
		},
		
		//最近在学
		myStudyClick(index) {
			console.log("最近在学" + index);
		},
		
		//课堂直播
		liveBroadcastClick(index) {
			console.log("课堂直播" + index);
		},
		
		//人气好课
		popularClassClick(index) {
			console.log("人气好课" + index);
		},
		
		//查看更多的点击
		GetMoreInfo(index) {
			if (index == 0) {
				console.log("每日推荐查看更多点击");
			} else if (index == 1) {
				console.log("最近在学查看更多点击");
			} else if (index == 2) {
				console.log("课堂直播查看更多点击");
			} else if (index == 3) {
				console.log("人气好课查看更多点击");
			} else {
				console.log("意外出错的点击");
			}
		},

		//播放暂停的点击事件
		playSong() {
			this.playSongFlag = !this.playSongFlag;
			if (this.playSongFlag) {
				console.log("播放");
			} else {
				console.log("暂停");
			}
		}



	},
	onLoad: function() {
		//每日推荐
		this.isScrollText(this.recommendationImgText, 10);
		//最近在学
		this.isScrollText(this.myStudy, 10);
		// 课堂直播
		this.isScrollText(this.liveBroadcast, 10);
		// 人气好课
		this.isScrollText(this.popularClass, 10);
	},
	components: {}
}
