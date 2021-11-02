module.exports = {
	head: [
		['link', {
			rel: 'shortcut icon',
			type: "image/x-icon",
			href: `./favicon.ico`
		}]
	],
	title: 'Leix Wang',
	description: '多年的笔记文档整理.',
	host: '0.0.0.0',
	port: 8888,
	serviceWorker: true,
	themeConfig: {
		repo: 'leixwang/docs',
		docsDir: 'docs',
		lastUpdated: 'Last Updated',
		// algolia: {
		// 	apiKey: '<API_KEY>',
		// 	indexName: '<INDEX_NAME>'
		// },
		nav: [{
				text: 'Home',
				link: '/'
			},
			{
				text: 'MarkDown',
				link: '/markdown/'
			},
		],
		sidebar: {
			'/markdown/lang/': {
			title: '计算机语言',
			collapsable: true,
			children: [
				'golang',
				'javascript',
				'swift',
				'markdown'
			]},
		},
	}
}