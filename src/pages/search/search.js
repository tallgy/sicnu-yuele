export default {
	data() {
		return {
			searchValue: '最开',
			searchImgUrl: '../../static/search-box/searchImg.png',
			historyText: [
				"卫衣",
				"红米k40",
				"iPhone12",
				"电脑"
			],
			
		};
	},
	methods: {
		searchInput(event) {
			console.log(event.detail.value);
		},
		
	},
}