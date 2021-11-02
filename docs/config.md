module.exports = {
	head: [
		['link', {
			rel: 'shortcut icon',
			type: "image/x-icon",
			href: `./favicon.ico`
		}]
	],
	title: '文档',
	description: '多年的工作学习笔记.',
	host: '0.0.0.0',
	port: 8888,
	serviceWorker: true,
	themeConfig: {
		repo: 'leixwang/vuepress',
		docsDir: 'vuepress',
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
		sidebar: [{
				title: '计算机语言',
				collapsable: true,
				children: [
					'/markdown/lang/javascript',
					'/markdown/lang/swift',
					'/markdown/lang/golang',
					'/markdown/lang/markdown',				]
			},
			{
				title: '服务器配置',
				collapsable: true,
				children: [
					"/markdown/server/centos",
					"/markdown/server/conter-mysql",
					"/markdown/server/install-ubuntu",
					"/markdown/server/mac-osx",
					"/markdown/server/meteor",
					"/markdown/server/mongodb",
					"/markdown/server/nodejs",
					"/markdown/server/redis",
					"/markdown/server/sh",
					"/markdown/server/shadowsocket",
					"/markdown/server/ubuntu-command",
					"/markdown/server/Ubuntu-install-ReactNative-env",
					"/markdown/server/Ubuntu-Server-Wi-Fi",
					"/markdown/server/pptpconfig",
					"/markdown/server/jenkins",

				]
			},
			{
				title: '免费电子书',
				collapsable: true,
				children: [
					'/markdown/freebook/',
				]
			},
			{
				title: 'Linux 驱动开发',
				collapsable: true,
				children: [
					'/markdown/kernel/driver',
				]
			},
			{
				title: '常用工具文档',
				collapsable: true,
				children: [
					'/markdown/tools/github',
					'/markdown/tools/vmware',
					'/markdown/tools/atom',
					'/markdown/tools/vscode',
				]
			},
			{
				title: 'WEB 文档',
				collapsable: true,
				children: [
					'/markdown/web/hexo',
					'/markdown/web/html5',
				]
			},
			{
				title: '管理学',
				collapsable: true,
				children: [
					'/markdown/psychology/36ask',
				]
			},
			{
				title: '常用的工具',
				collapsable: true,
				children: [
					'/markdown/tools/python',
					'/markdown/tools/github',
					'/markdown/tools/vscode',
					'/markdown/tools/GitBlit',
				]
			},
			{
				title: '大数据分析',
				collapsable: true,
				children: [
					'/markdown/big-data/src',
					'/markdown/big-data/linux',
				]
			},
		]
	}
}