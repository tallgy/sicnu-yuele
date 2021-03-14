export default {
	data() {
		return {
			// 游戏，列表下面的图片
			backgroundImgUrl: '../../static/family/background.jpg',
			// 家庭,列表的点击的flag设置,false为家庭,true为列表
			buttonFlag: false,
			// 家庭的列表的信息
			familyList: [{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '爸爸',
					lastInfo: '过完整个夏天',
				},
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '妈妈',
					lastInfo: '忧伤并没有好一些',
				},
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '爷爷',
					lastInfo: '唱不完一首歌',
				},
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '奶奶',
					lastInfo: '疲倦还剩下黑眼圈',
				},
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '姐姐',
					lastInfo: '依然记得从你口中说出再见坚决如铁',
				},
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '弟弟',
					lastInfo: '爱情如永夜',
				},
			],
			// 好友的列表的信息
			friendList: [
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '黄昏',
					lastInfo: '恼春风',
				},
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '黄昏的地平线',
					lastInfo: '说不出，借酒相送',
				},
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '李香兰',
					lastInfo: '夜雨中',
				},
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '雨滴照射在照片中',
					lastInfo: '啊啊啊啊，这花虽为红',
				},
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '却又无数的话',
					lastInfo: '可惜我听不懂',
				},
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '是杯酒渐浓',
					lastInfo: '何以感震动',
				},
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '那可以投照片中',
					lastInfo: '时间裂缝',
				},
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '夜风中',
					lastInfo: '回头也是梦',
				},
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '啊啊啊啊啊啊啊',
					lastInfo: '这花虽未红',
				},
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '如冰虽不冻',
					lastInfo: '可惜我听不懂',
				},
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '噢噢噢噢哦哦哦',
					lastInfo: 'mom 蓝心羽',
				},
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '天空是蔚蓝色',
					lastInfo: '窗外有千纸鹤',
				},
				{
					imgUrl: '../../static/person/headPortrait.jpg',
					name: '爱与交响曲',
					lastInfo: '晴天-周杰伦',
				},
			],

		};
	},
	methods: {
		// 游戏按钮的点击
		buttonGameClick() {
			console.log("点击了游戏按钮");
		},
		//列表的点击
		buttonListClick() {
			console.log("点击了好友的列表");
		},
		// 家庭的列表的点击
		buttonFamiyClick() {
			this.buttonFlag = false;
			console.log("点击了家庭按钮");
		},
		//好友列表的点击
		buttonFriendClick() {
			this.buttonFlag = true;
			console.log("点击了好友按钮");
		},
		//好友的点击
		chatInfoClick() {
			console.log("点击了");
		},


		clickItem(data) {
			console.log(data)
		},
	},
}
