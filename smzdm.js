/**
 * 什么值得买 盖楼程序
 * xuess<wuniu2010@126.com>
 * 2018-6-10
 */
const request = require('./lib/request_https');
const { getRandom } = require('./lib/utils'); //工具类
const { cookieListValKey, commitList, postId, commitType } = require("./config"); //配置文件


console.log('评论盖楼专用', new Date());


/**
 * 什么值得买 评论 盖楼专用
 * @param {Object} cookies cookie信息
 * @param {Object} type 类型 3=发现，11=晒单
 * @param {Object} postId 评论的文章ID
 */
function smzdmGailouCommit(cookies, type, postId) {
	let num = getRandom(100, 900);
	let commitConent = commitList[Math.floor(Math.random() * commitList.length)] + num;
	let cookie = cookies;
	let referer = 'https://zhiyou.smzdm.com/user/submit/';
	let options = {
		url: 'https://zhiyou.smzdm.com/user/comment/ajax_set_comment?callback=jQuery111006551744323225079_' + new Date().getTime() + '&type=' + type + '&pid=' + postId + '&parentid=0&vote_id=0&vote_type=&vote_group=&content=' + encodeURI(commitConent) + '&_=' + new Date().getTime(),
		type: 'GET'
	}
	
	new Promise((resolve, reject) => {
		options.callback = (data, _setCookie) => {
			if(data.indexOf('"error_code":0') != -1) {
				console.log(`评论成功  内容--> ${commitConent}`);
			}
		}
		request(options, cookie, referer);
	});
}

//发评论延迟
let sendCommit = (cookies, type, postId) => {
	setTimeout(() =>  {
		smzdmGailouCommit(cookies, type, postId);
	}, getRandom(100, 2000));
}


//评论 10s 执行一次 执行3000 次
let commitSettimeout = (timeNum = 1) => {
	if(timeNum == 3000) {
		return;
	}
	console.log(`-----------------${new Date().Format("yyyy-MM-dd hh:mm:ss")}-----------------${timeNum}-----------------`);
	//循环执行！
	for(let i = 0; i < cookieListValKey.length; i++) {
		//执行
		sendCommit(cookieListValKey[i].cookies, commitType, postId);
	}

	setTimeout(() =>  {
		timeNum++;
		commitSettimeout(timeNum);
	}, getRandom(12000, 14000));

}

commitSettimeout();