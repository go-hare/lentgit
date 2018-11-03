// 热门推荐的轮播图
var vDiv = document.querySelector(".v");
var lunDiv = document.createElement("div");
lunDiv.className = "lun-bo-tu";
vDiv.appendChild(lunDiv);
bouDiv = document.createElement("div");
bouDiv.className = "lun-Bo-Tu-Ping-Yi";
lunDiv.appendChild(bouDiv);
for (var i = 0; i < 9; i++) {
	var pingYiDiv = document.createElement("div");
	pingYiDiv.className = "lun-Bo-Tu-Ping-Yi-Jiu-Kuan";
	bouDiv.appendChild(pingYiDiv);
	var a = document.createElement("a");
	a.href = lunBuTu[i].link;
	pingYiDiv.appendChild(a)
	var img = document.createElement("img");
	img.src = lunBuTu[i].img;
	a.appendChild(img);
	var wenZhiDiv = document.createElement("div");
	wenZhiDiv.className = "BiaoTi-DuanLu";
	pingYiDiv.appendChild(wenZhiDiv);
	var h3 = document.createElement("h3");
	h3.innerHTML = lunBuTu[i].biaoTi;
	wenZhiDiv.appendChild(h3);
	var p = document.createElement("p")
	p.innerHTML = lunBuTu[i].dunLu;
	wenZhiDiv.appendChild(p);
}

// 改变样式
var pingYiDivs = document.querySelectorAll(".lun-Bo-Tu-Ping-Yi-Jiu-Kuan");
var spans = document.querySelector(".v2");
var rightBtna = document.querySelector(".zhu-you-fu-hao>.u2");
var leftBtna = document.querySelector(".zhu-you-fu-hao>.n2");
var v2 = document.querySelector(".v2");
function changaaUI(index) {
	for (var i = 0; i < pingYiDivs.length; i++) {
		pingYiDivs[i].style.transform = "translateX(-" + 675 * index + "px)";
	}
	
	for (var i = 0; i < pingYiDivs.length; i++) {
		// v2.className = "0";
	}

	currentSYr = index;
	v2.innerHTML = currentSYr + 1;
}
// for (var i = 0; i < pingYiDivs.length; i++) {
// 	pingYiDivs[i].index = i;
// 	pingYiDivs[i].onclick = function (a) {
// 		changaaUI(a.target.index);
// 	}

var currentSYr = 0;
leftBtna.onclick = function (index) {
	currentSYr = currentSYr - 1;
	if (currentSYr < 0) {
		currentSYr = pingYiDivs.length - 1;

	}
	changaaUI(currentSYr);
}

// 点击热门推荐右边按钮
function reMenTuiJianRightBtnClick(index) {
	currentSYr = currentSYr + 1;
	if (currentSYr > pingYiDivs.length - 1) {
		currentSYr = 0;
	}
	changaaUI(currentSYr);
}
// 给热门推荐右边按钮绑定点击事件
rightBtna.onclick = reMenTuiJianRightBtnClick;

// 开启计时器，每隔 1200ms 执行 reMenTuiJianRightBtnClick
var y = setInterval(reMenTuiJianRightBtnClick,1200);

var div = document.querySelector("div");
div.onmouseover = function () {
	clearInterval(y);
}
div.onmouseleave = function(){
	y = setInterval(reMenTuiJianRightBtnClick,1200);
}


// 评论区域的代码

// 找到ping-lunDiv ；
var pinglunDiv = document.querySelector(".ping-lun");
// 创建一个 h2 
var h2 = document.createElement("h2");
// h2里面的内容
h2.innerHTML = "最受欢迎的评论";
// h2追加到ping-lunDiv里
pinglunDiv.appendChild(h2);
// 创建一个 span 
var span = document.createElement("span");
// 追加到 h2 里
h2.appendChild(span);
// 创建一个 a 链接
var a = document.createElement("a");
//  a 链接 里的网址
a.href = "https://movie.douban.com/review/best/";
// a 链接里的内容
a.innerHTML = "更多热门影评»";
// 追加到span里
span.appendChild(a);




// 再次创建一个span
var span = document.createElement("span");
// 追加到 h2 里
h2.appendChild(span);
// 创建一个 a 链接
var a = document.createElement("a");
//  a 链接 里的网址
a.href = "https://movie.douban.com/review/latest/";
// a 链接里的内容
a.innerHTML = "新片影评»";
// 追加到span里
span.appendChild(a);


// for 循环 数组 pingLunQu
for (var i = 0; i < pingLunQu.length; i++) {
	// 创建一个div
var diYiGePingLunDiv = document.createElement("div");
// 类名为di-Yi-Ge-Ping-Lun
diYiGePingLunDiv.className = "di-Yi-Ge-Ping-Lun";
// 追加到ping-lunDiv中
pinglunDiv.appendChild(diYiGePingLunDiv);
// 创建 a
var a = document.createElement("a");
// a的链接地址
a.href = pingLunQu[i].dyhref;
// 追加到diYiGePingLunDiv
diYiGePingLunDiv.appendChild(a);
// 创建img
var img  = document.createElement("img");
// img图片地址
img.src = pingLunQu[i].dyimgpath;
// 追加到a
a.appendChild(img);
// 创建一个div
var pingLunWenZhangDiv = document.createElement("div");
// 类名为ping-Lun-Wen-Zhang
pingLunWenZhangDiv.className = "ping-Lun-Wen-Zhang";
// 追加到diYiGePingLunDiv
diYiGePingLunDiv.appendChild(pingLunWenZhangDiv);
// 创建一个h3
var h3 = document.createElement("h3");
// 追加到pingLunWenZhangDiv
pingLunWenZhangDiv.appendChild(h3);
// 创建一个a链接
var a = document.createElement("a");
// a链接的地址
a.href = pingLunQu[i].plhref;
// a链接的标题
a.innerHTML = pingLunQu[i].biaoTi;
// 追加到h3里
h3.appendChild(a);
// 创建一个pingLunWenZhangNeiRongDiv
var pingLunWenZhangNeiRongDiv = document.createElement("div");
// pingLunWenZhangNeiRongDiv的类名为 ping-Lun-Wen-Zhang-Nei-Rong;
pingLunWenZhangNeiRongDiv.className = "ping-Lun-Wen-Zhang-Nei-Rong";
pingLunWenZhangNeiRongDiv.innerHTML = "评论";
// 追加到pingLunWenZhangDiv
pingLunWenZhangDiv.appendChild(pingLunWenZhangNeiRongDiv);
// 创建一个a链接
var a =  document.createElement("a");
// a链接的标题
a.innerHTML = pingLunQu[i].plyname;
// a链接的地址
a.href = pingLunQu[i].plyhref;
// 追加到pingLunWenZhangNeiRongDiv
pingLunWenZhangNeiRongDiv.appendChild(a);
// 在次创建一个a链接
var a =  document.createElement("a");
// a链接的标题
a.innerHTML = pingLunQu[i].dyname;
// a链接的地址
a.href = pingLunQu[i].dyimgpath;
// 追加到pingLunWenZhangNeiRongDiv
pingLunWenZhangNeiRongDiv.appendChild(a);
// 创建一个span
var span = document.createElement("span");
// 追加到pingLunWenZhangNeiRongDiv
pingLunWenZhangNeiRongDiv.appendChild(span);
// 创建一个div
var zhuoZhePingLunDiv = document.createElement("div");
//类名为zhuo-Zhe-Ping-Lun
zhuoZhePingLunDiv.className = "zhuo-Zhe-Ping-Lun";
// 向div中写入数组pingLunQu[i].plcontent;的内容
zhuoZhePingLunDiv.innerHTML = pingLunQu[i].plcontent;
// 追加到pingLunWenZhangDiv
pingLunWenZhangDiv.appendChild(zhuoZhePingLunDiv);
// 创建一个a链接
var a = document.createElement("a");
// 向a链接写入数组链接
a.href = pingLunQu[i].plhref;
// a链接的内容
a.innerHTML = "(全文)";
// 追加到zhuoZhePingLunDiv
zhuoZhePingLunDiv.appendChild(a);
}




// 右边广告部分的 js 


// 找到类名为right-Guang-Gao的div
var rightGuangGaoDiv = document.querySelector(".right-Guang-Gao");
// 创建一个div
var rightGuangGaoTopDiv = document.createElement("div");
// 类名为right-Guang-Gao-Top
rightGuangGaoTopDiv.className = "right-Guang-Gao-Top";
// 追加到rightGuangGaoDiv
rightGuangGaoDiv.appendChild(rightGuangGaoTopDiv);
// 创建一个a链接
var a = document.createElement("a");
// a链接的链接地址
a.href = "https://blog.douban.com/douban/2015/12/18/3060/";
// a链接的内容
a.innerHTML = "豆瓣电影评分八问";
// 追加到rightGuangGaoTopDiv
rightGuangGaoTopDiv.appendChild(a);
// 创建一个div
var rightGuangGaoImgDiv = document.createElement("div");
// 类名right-Guang-Gao-Img
rightGuangGaoImgDiv.className = "right-Guang-Gao-Img";
// 追加到rightGuangGaoDiv
rightGuangGaoDiv.appendChild(rightGuangGaoImgDiv);
// 创建一个img
var img = document.createElement("img");
// img 图片地址
img.src = "https://oimagec7.ydstatic.com/image?id=-3997379059262276306&product=adpublish&w=300&h=250&sc=0&rm=0";
// 追加到rightGuangGaoDiv
rightGuangGaoImgDiv.appendChild(img);
// 创建一个span
var span = document.createElement("span");
// span 的内容
span.innerHTML = "广告";
// 追加到rightGuangGaoImgDiv
rightGuangGaoImgDiv.appendChild(span);	










