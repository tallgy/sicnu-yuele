export default {
	data() {
		return {
			// 乐曲库
			songBook: {
				imgUrl: '../../static/musicScoreRecommendation/songBook.png',
				name: '乐曲库'
			},
			// 打谱
			score: {
				imgUrl: '../../static/musicScoreRecommendation/score.png',
				name: '打谱'
			},
			//推荐的信息
			recommend: [
				{
					imgUrl: '../../static/slideshow/slideshow_1.jpg',
					name: '克罗地亚狂想曲',
					author: 'weiyizhou',
					info: '克罗地亚狂想曲',
					money: 25.00
				},
				{
					imgUrl: '../../static/slideshow/slideshow_1.jpg',
					name: '肖邦-黑键练习曲',
					author: '潘小生',
					info: '肖邦-黑键练习曲',
					money: 30.00
				},
				{
					imgUrl: '../../static/slideshow/slideshow_1.jpg',
					name: '哀愁-火影忍者',
					author: '五线',
					info: '哀愁-火影忍者',
					money: 33.00
				},
			],
			
		};
	},
	methods: {
		// 乐曲库的按钮的点击
		songBookButtonClick() {
			console.log("乐曲库的按钮的点击");
		},
		// 打谱的按钮的点击
		scoreButtonClick() {
			console.log("打谱的按钮的点击");
		}
	}
}