export default {
	data() {
		return {
			// 上面的主要按钮
			mainButton: [{
					imgUrl: '../../static/index/music.png',
					name: '胎教',
				},
				{
					imgUrl: '../../static/index/music.png',
					name: '婴幼儿',
				},
				{
					imgUrl: '../../static/index/music.png',
					name: '育儿',
				},
				{
					imgUrl: '../../static/index/music.png',
					name: '学生',
				},
				{
					imgUrl: '../../static/index/music.png',
					name: '职场',
				},
				{
					imgUrl: '../../static/index/music.png',
					name: '退休',
				},
			],
			showSubInfo: 0,
			// 下面的每个按钮点击显示的主要信息
			subInfo: [{
					imgUrl: '../../static/index/music.png',
					name: '胎教音乐',
					info: '合适宝宝的音乐',
					flag: 0,
				},
				{
					imgUrl: '../../static/index/music.png',
					name: '婴幼儿音乐',
					info: '快一起来听音乐吧',
					flag: 1,
				},
				{
					imgUrl: '../../static/index/music.png',
					name: '育儿音乐',
					info: '培养孩子的兴趣的开始',
					flag: 2,
				},
				{
					imgUrl: '../../static/index/music.png',
					name: '学生音乐',
					info: '让学生有一个更加专注的时间',
					flag: 3,
				},
				{
					imgUrl: '../../static/index/music.png',
					name: '职场音乐',
					info: '在一天的工作后放松自我',
					flag: 4,
				},
				{
					imgUrl: '../../static/index/music.png',
					name: '退休音乐',
					info: '时刻都能放松自我',
					flag: 5,
				},
			],
			// 每个按钮点击出来的歌曲,点击一个主按钮再进行一次请求
			music: [{
					// 音乐收藏按钮
					collectionFlag: false,
					collectionOffImgUrl: '../../static/musicZone/collectionOff.png',
					collectionOnImgUrl: '../../static/musicZone/collectionOn.png',
					name: '致爱丽丝',
					info: '胎教音乐',
				},
				{
					// 音乐收藏按钮
					collectionFlag: true,
					collectionOffImgUrl: '../../static/musicZone/collectionOff.png',
					collectionOnImgUrl: '../../static/musicZone/collectionOn.png',
					name: 'flower dance',
					info: '胎教音乐',
				},
			],


		};
	},
	methods: {
		// 主按钮的界面的切换
		mainButtonClick(index) {
			this.showSubInfo = index;
		},
		//收藏爱心的点击的切换
		collectionChange(item) {
			item.collectionFlag = !item.collectionFlag;
		},
	},
}
