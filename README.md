# smzdm-comment

基于nodejs什么值得买盖楼神器

可设置评论条数，评论内容，无人值守，自动评论，奖品都到兜里来。

==首先准备↓==

>1、需要nodejs 运行环境 
> 
>2、什么值得买账号


# 第一步 填写需要评论的文章id

打开 `config.js` 文件  找到  `postId` 参数

```JavaScript
//文章ID  如链接：https://www.smzdm.com/p/9584794/  评论id为：9584794
const postId = '9584794';
```


# 第二步 填写账号cookies

* 1.首先 使用`chrome浏览器`，访问 `什么值得买pc端`， 登陆 `什么值得买` 账号
* 2.打开`开发者工具`, `win`系统 快捷键 `F12` ，`mac` 快捷键 `option + command + i`
* 3.打开`开发者工具` 中的 `Network`选项卡，**刷新页面** ,然后选第一个 `www.smzdm.com`,然后找到右侧的 `Cookie`字段，复制出来。 

如图操作：

![](img/smzdm-cookie.png)


### 填写cookie信息

打开项目文件 `config.js` ，找到`cookie` ，按照下面格式填写

```javascript
	{
		'username': '非必填，用户发送邮件展示',
		'phone': '非必填，用户发送邮件展示',
		'cookies': '必填，取自用户登录后的cookie，获取方法见说明文档'
	},
```

### 配置多账号

> 如配置多个账号，请复制下面代码格式，填写多个。

```javascript
	{
		'username': '非必填，用户发送邮件展示',
		'phone': '非必填，用户发送邮件展示',
		'cookies': '必填，取自用户登录后的cookie，获取方法见说明文档'
	},
```

编辑完成后，如下即可。

```javascript
//用于签到的 账号信息 列表
const cookieListValKey = [
	{
		'username': '用户名1',
		'phone': '手机1',
		'cookies': 'cookie1'
	},
	{
		'username': '用户名2',
		'phone': '手机2',
		'cookies': 'cookie2'
	},
	{
		'username': '用户名3',
		'phone': '手机3',
		'cookies': 'cookie3'
	},
];
```

# 第三步 运行

```bash
# 到项目根目录 执行
node smzdm
```
