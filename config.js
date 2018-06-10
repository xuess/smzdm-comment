/**
 * 项目配置表
 * xuess<wuniu2010@126.com>
 * 2018-6-10
 */

//文章ID  如链接：https://www.smzdm.com/p/9584794/  评论id为：9584794
const postId = '9584794';

//文章评论类型 根据文章类型设置 11=晒单评论  ， 3=发现评论
const commitType = 3;

//用于签到的 账号信息 列表
const cookieListValKey = [
	{
		'username': '非必填，用户发送邮件展示',
		'phone': '非必填，用户发送邮件展示',
		'cookies': '必填，取自用户登录后的cookie，获取方法见说明文档'
	},
	{
		'username': '非必填，用户发送邮件展示',
		'phone': '非必填，用户发送邮件展示',
		'cookies': '必填，取自用户登录后的cookie，获取方法见说明文档'
	},
];


//回复列表 用于发表评论的内容
let commitList = [
	'-------------方法--',
	'~23333333',
	'不错不错，评论了，万一中奖了呢。。。',
];

module.exports = {
	postId,
	commitType,
	cookieListValKey,
	commitList
};