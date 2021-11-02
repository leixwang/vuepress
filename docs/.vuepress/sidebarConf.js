// 文档路径
const docsPath = process.cwd() + '/docs'
const fs = require('fs')

// 获取文件名
function getFileName(root, dir) {
    const path = root + dir
    const fileNames = []
		console.log("111", path)
    fs.readdirSync(path).forEach(file => {
			console.log("222", file)
			// 只处理 .md 文件
			if (/.md$/.test(file)) {
				let name = file.replace(/.md$/, '')
				fileNames.push(dir + name)
			}
    })
    fileNames.sort()
    return fileNames
}

function getLists(){
	const ret = []
	let dirs = [
    {
        path: '/markdown/lang/',
        title: '计算机语言'
    },{
        path: '/markdown/server/',
        title: '服务器配置文档'
    }]

	dirs.forEach((item) => {
		ret.push({
			title: item.title,
			collapsable: true,
			children: getFileName(docsPath, item.path)
		})
	})
	return ret;
}

module.exports = getLists()
