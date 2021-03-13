export default {
	data() {
		return {
			// 轮播图
			imgList: [{
				imgUrl: '../../static/slideshow/slideshow_1.jpg',
				requestUrl: 'url 第一个',
				id: 1
			}, {
				imgUrl: '../../static/slideshow/slideshow_2.jpg',
				requestUrl: 'url 第二个',
				id: 2
			}, {
				imgUrl: '../../static/slideshow/slideshow_3.jpg',
				requestUrl: 'url 第三个',
				id: 3
			}, {
				imgUrl: '../../static/slideshow/slideshow_4.jpg',
				requestUrl: 'url 第四个',
				id: 4
			}],

			//几个按钮的文字
			buttonText: ["数码影音", "乐谱推荐", "精选乐器", "音乐演出"],

			//为你推荐的info
			productRecommendationInfo: [{
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'url 第一个',
				},
				{
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'url 第二个',
				},
				{
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'url 第三个',
				},
				{
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'url 第四个',
				},
				{
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'url 第五个',
				},
			],

			//抢购的info
			flashSale: [{
					imgUrl: '../../static/login/apple.png',
					shoppingName: '苹果12',
					beginDate: '3月25日 18:00',
					maxNumber: 100,
					buyNumber: 43,
				},
				{
					imgUrl: '../../static/login/apple.png',
					shoppingName: '小米11s',
					beginDate: '3月12日 18:00',
					maxNumber: 100,
					buyNumber: 53,
				},
				{
					imgUrl: '../../static/login/apple.png',
					shoppingName: '华为手机',
					beginDate: '3月11日 18:00',
					maxNumber: 100,
					buyNumber: 13,
				},
				{
					imgUrl: '../../static/login/apple.png',
					shoppingName: '魅族18pro',
					beginDate: '3月23日 18:00',
					maxNumber: 100,
					buyNumber: 65,
				},
			],

			//音乐演唱会的info
			musicalShow: [{
					name: '万般留恋',
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'url 1',
					flag: false,
				},
				{
					name: '我愿感叹于世界之大',
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'url 2',
					flag: false,
				},
				{
					name: '以爱之名，你还愿意吗',
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'url 3',
					flag: false,
				},
				{
					name: '我愿将青春还给她',
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'url 4',
					flag: false,
				},
			],
			
			//乐谱推荐的info
			musicScoreRecommendation: [
				{
					name: 'your body',
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'url 1',
					flag: false
				},
				{
					name: 'your body defendy',
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'url 2',
					flag: false
				},
				{
					name: 'your body you are tounyh love ',
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'url 3',
					flag: false
				},
				{
					name: 'your body ohohoh ohohoh ican see your staty',
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'url 4',
					flag: false
				},
			],
			
			//数码影音的info
			digitalVideo: [
				{
					name: 'here you hreate before ',
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'url 1',
					flag: false
				},
				{
					name: 'your eveymore your my tount',
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'url 2',
					flag: false
				},
				{
					name: 'think see this before',
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'url 3',
					flag: false
				},
				{
					name: 'i can see you staty honey',
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'url 4',
					flag: false
				},
			],

			// 精选乐器的info
			selectedMusicalInstruments: [
				{
					name: 'so many signs',
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'uel  1',
					flag: false
				},
				{
					name: 'exile 给我一个理由忘记 ',
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'uel  2',
					flag: false
				},
				{
					name: '夏天的风 ',
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'uel  3',
					flag: false
				},
				{
					name: '七月的风，兰兰的，炼狱都变热热的',
					imgUrl: '../../static/login/apple.png',
					requestUrl: 'uel  4',
					flag: false
				},
			],
			

		};
	},
	methods: {
		//输入带 json对象的数组， json里面有 text 文本，判断文本超过len便使flag为true，可以用于滚动
		isScrollText(info, len) {
			for (var i = 0; i < info.length; i++) {
				if (info[i].name.length >= len) {
					info[i].flag = true;
				}
			}
		},

		//轮播图的事件
		selectedBanner(item, index) {
			console.log("轮播图请求:" + item.requestUrl);
		},

		//分类的按钮的序号判断
		classificationButtonClick(index) {
			console.log("分类的按钮的序号： " + index);
		},

		//为你推荐的图片的信息点击
		productRecommendationClick(requestUrl) {
			console.log("为你推荐的点击  " + requestUrl);
		},

		//商城页面的查看更多
		GetMoreInfo(index) {
			if (index == 0) {
				console.log("限时抢购查看更多点击");
			} else if (index == 1) {
				console.log("音乐演出查看更多点击");
			} else if (index == 2) {
				console.log("乐谱推荐查看更多点击");
			} else if (index == 3) {
				console.log("数码影音查看更多点击");
			} else if (index == 4) {
				console.log("精选乐器查看更多点击");
			} else {
				console.log("意外出错的点击");
			}
		},

		//抢购按钮的点击
		snapButtonClick(index) {
			console.log("抢购按钮的点击  " + index);
		},

		//音乐演出的点击事件
		musicalShowButtonClick(requestUrl) {
			console.log("音乐演出的点击url " + requestUrl);
		},
		
		//乐谱推荐的点击
		musicScoreRecommendationButtonClick(requestUrl) {
			console.log("乐谱推荐的点击url " + requestUrl);
		},
		
		//数码影音的点击
		digitalVideoButtonClick(requestUrl) {
			console.log("数码影音的点击url " + requestUrl);
		},
		
		//精选乐器的点击
		selectedMusicalInstrumentsButtonClick(requestUrl) {
			console.log("精选乐器的点击url " + requestUrl);
		},

		

	},
	components: {

	},
	onLoad: function() {
		//音乐演出
		this.isScrollText(this.musicalShow, 10);
		//乐谱推荐
		this.isScrollText(this.musicScoreRecommendation, 10);
		// 数码影音
		this.isScrollText(this.digitalVideo, 10);
		// 精选乐器
		this.isScrollText(this.selectedMusicalInstruments, 10);
	},
}
