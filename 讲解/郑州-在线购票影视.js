var shuZhu = [
{link:"https://www.douban.com/",name:"豆瓣"},
{link:"https://book.douban.com/",name:"读书"},
{link:"https://movie.douban.com/",name:"电影"},
{link:"https://music.douban.com/",name:"音乐"},
{link:"https://www.douban.com/location/",name:"同城"},
{link:"https://www.douban.com/group/",name:"小组"},
{link:"https://read.douban.com/?dcs=top-nav&dcm=douban/",name:"阅读"},
{link:"https://douban.fm/?from_=shire_top_nav/",name:"FM"},
{link:"https://time.douban.com/?dt_time_source=douban-web_top_nav/",name:"时间"},
{link:"https://market.douban.com/?utm_campaign=douban_top_nav&utm_source=douban&utm_medium=pc_web/",name:"豆品"},
{name:"更多"},
{link:"https://www.douban.com/doubanapp/app?channel=top-nav/",name:"下载豆瓣客户端"},
{link:"https://www.douban.com/doubanapp/app?channel=qipao/",name:"登录"},
{link:"https://www.douban.com/accounts/login?source=movie/",name:"注册"}
]

var topDiv = document.querySelector(".top");
for (var i = 0; i < shuZhu.length; i++) {
	var aDiv = document.createElement("div");
aDiv.className = "a";
aDiv.innerHTML = shuZhu[i].name;
topDiv.appendChild(aDiv);
}
// 城市的数组
var ZhengReMen = [
{name:"热门",neiRong:"北京  上海   广州 深圳 成都 武汉 杭州 重庆 郑州 南京 西安 苏州 长沙 天津 福州 济南 沈阳 合肥 青岛 哈尔滨 温州 厦门 大连 东莞 长春"},
{name:"A-G",A:"安庆 安阳 鞍山 安康 安顺 阿勒泰 阿克苏 阿坝",B:"北京 保定 宝鸡 包头 滨州 蚌埠 亳州 毕节 本溪 北海 巴彦淖尔 白银 保山 百色 白山 巴中 巴音郭楞 白城 保亭",C:"重庆 成都 长沙 长春 常州 郴州 常德 滁州 沧州 长治 赤峰 承德 朝阳 潮州 昌吉 池州 崇左 楚雄 常熟 澄迈 昌江",D:"东莞 大连 大庆 东营 德阳 德州 大同 达州 丹东 大理 定西 德宏 儋州 东方 大兴安岭 迪庆",E:"恩施 鄂尔多斯 鄂州",F:"佛山 福州 抚州 阜阳 抚顺 防城港 阜新",G:"广州 赣州 贵阳 桂林 广元 广安 甘南 固原 贵港 甘孜"},
{name:"H-L",H:"杭州 合肥 哈尔滨 惠州 邯郸 湖州 海口 淮安 呼和浩特 衡阳 黄冈 河源 菏泽 呼伦贝尔 淮南 黄石 怀化 黄山 红河 衡水 葫芦岛 汉中 黑河 淮北 鹤壁 河池 贺州 鹤岗 海东 海西 哈密 合肥 海南",J:"金华 济南 嘉兴 江门 九江 济宁 荆州 吉安 吉林 晋中 荆门 揭阳 焦作 晋城 酒泉 锦州 景德镇 佳木斯 济源 金昌 鸡西 嘉峪关 吉林",K:"昆明 开封 克拉玛依 喀什 昆山 开平 昆山",L:"临沂 兰州 洛阳 临汾 廊坊 丽水 六安 娄底 聊城 连云港 柳州 吕梁 漯河 乐山 龙岩 临夏 泸州 辽阳 六盘水 陇南 辽源 丽江 凉山 来宾 拉萨 临沧 莱芜 乐东"},
{name:"M-T",M:"绵阳 梅州 马鞍山 茂名 眉山 牡丹江",N:"南京 宁波 南通 南昌 南宁 南充 南阳 宁德 南平 内江 怒江",P:"平顶山 莆田 盘锦 萍乡 平凉 普洱 濮阳 攀枝花",Q:"青岛 泉州 衢州 曲靖 黔南 清远 黔东南 黔西南 秦皇岛 齐齐哈尔 庆阳 钦州 潜江 七台河 琼海",R:"日照",S:"上海 深圳 苏州 石家庄 沈阳 上饶 绍兴 商丘 汕头 宿迁 三明 韶关 邵阳 三亚 绥化 十堰 四平 汕尾 遂宁 宿州 松原 商洛 随州 石嘴山 三门峡 朔州 双鸭山 石河子",T:"天津 台州 泰州 唐山 太原 泰安 通辽 铁岭 通化 铜仁 天水 铜陵 铜川 塔城 天门 屯昌"},
{name:"W-Z",W:"武汉 温州 无锡 潍坊 芜湖 乌鲁木齐 威海 渭南 梧州 乌兰察布 乌海 文山 吴忠 武威 文昌 万宁 吴江区 五指山",X:"西安 厦门 徐州 新乡 襄阳 信阳 湘潭 邢台 宣城 孝感 许昌 西宁 咸宁 咸阳 湘西 忻州 新余 仙桃 兴安盟 锡林郭勒 西双版纳 兴安盟",Y:"烟台 盐城 扬州 宜春 银川 运城 延边 宜昌 阳江 营口 宜宾 永州 榆林 玉林 益阳 岳阳 玉溪 延安 鹰潭 伊犁 阳泉 云浮 雅安 伊春 杨凌区",Z:"郑州 中山 镇江 珠海 株洲 湛江 漳州 淄博 张家口 肇庆 枣庄 遵义 周口 驻马店 舟山 自贡 资阳 张家界 张掖 中卫 昭通"}
]
console.log(ZhengReMen);	
// 找到类名为.Qie-Huan
var QieHuanDiv = document.querySelector(".Qie-Huan");
// 找到类名为.Qie-Huan-Lan的div
var QieHuanLanDiv = document.querySelector(".Qie-Huan-Lan");
// for循环  ZhengReMen 数组
for (var i = 0; i < ZhengReMen.length; i++) {
// 创建一个span
var span = document.createElement("span");
if (i==0) {
	span.className = "Qie-Huan-Lan-Bn Qie-Huan-Lan-Bu";

} else {
	span.className = "Qie-Huan-Lan-Bn";
}
// span的内容数组里面的name
span.innerHTML = ZhengReMen[i].name;
// 追加到 QieHuanLanDiv div中
QieHuanLanDiv.appendChild(span);
}
var QieHuanLunBuTuDiv = document.querySelector(".show");
QieHuanLunBuTuDiv.innerHTML = ZhengReMen[0].neiRong;
// A-G的城市
var ADd = document.querySelector(".A");
ADd.innerHTML = ZhengReMen[1].A;
var BDd = document.querySelector(".B");
BDd.innerHTML = ZhengReMen[1].B;
var CDd = document.querySelector(".C");
CDd.innerHTML = ZhengReMen[1].C;
var DDd = document.querySelector(".D");
DDd.innerHTML = ZhengReMen[1].D;
var EDd = document.querySelector(".E");
EDd.innerHTML = ZhengReMen[1].E;
var FDd = document.querySelector(".F");
FDd.innerHTML = ZhengReMen[1].F;
var GDd = document.querySelector(".G");
GDd.innerHTML = ZhengReMen[1].G;
// H-L的城市
var HDd = document.querySelector(".H");
HDd.innerHTML = ZhengReMen[2].H;
var JDd = document.querySelector(".J");
JDd.innerHTML = ZhengReMen[2].J;
var KDd = document.querySelector(".K");
KDd.innerHTML = ZhengReMen[2].K;
var LDd = document.querySelector(".L");
LDd.innerHTML = ZhengReMen[2].L;
// M-T的城市
var MDd = document.querySelector(".M");
MDd.innerHTML = ZhengReMen[3].M;
var NDd = document.querySelector(".N");
NDd.innerHTML = ZhengReMen[3].N;
var PDd = document.querySelector(".P");
PDd.innerHTML = ZhengReMen[3].P;
var QDd = document.querySelector(".Q");
QDd.innerHTML = ZhengReMen[3].Q;
var RDd = document.querySelector(".R");
RDd.innerHTML = ZhengReMen[3].R;
var SDd = document.querySelector(".S");
SDd.innerHTML = ZhengReMen[3].S;
var TDd = document.querySelector(".T");
TDd.innerHTML = ZhengReMen[3].T;
// M-T的城市
var WDd = document.querySelector(".W");
WDd.innerHTML = ZhengReMen[4].W;
var XDd = document.querySelector(".X");
XDd.innerHTML = ZhengReMen[4].X;
var YDd = document.querySelector(".Y");
YDd.innerHTML = ZhengReMen[4].Y;
var ZDd = document.querySelector(".Z");
ZDd.innerHTML = ZhengReMen[4].Z;




// 找到所有的span
var spans = document.querySelectorAll(".Qie-Huan-Lan-Bn");
// 找到所有的div
var contents = document.querySelectorAll(".content");
// for循环span的个数
for (var a = 0; a < spans.length; a++) {
// span的索引为index
spans[a].index = a;
// 鼠标点击span的类名为空
spans[a].onclick = function (e) {
for (var a = 0; i < spans.length; a++) {
spans[a].className = "";
			
	}
// 鼠标点击的span的类名为Qie-Huan-Lan-Bn Qie-Huan-Lan-Bu
spans[e.target.index].className = "Qie-Huan-Lan-Bn Qie-Huan-Lan-Bu";
// for循环contents的类名为content
for (var a = 0; a < contents.length; a++) {
	contents[a].className = "content";
	}
// 改变contentsdiv的类名为content show
contents[e.target.index].className = "content show";
	}
}
 
function Show_Hidden(obj){
	if(obj.style.display=="none"){
		obj.style.display='block';
	}
	else{
		obj.style.display='none';
	}
}
window.onload = function(){
	var olink=document.getElementById("huan");
	var odiv=document.getElementById("qie");
	olink.onclick=function(){
		Show_Hidden(odiv);
		return false;
 	}
};	
// 正在上映
var shangYing = [
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537399580.webp",biaoTi:"铁血战士",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537871355.webp",biaoTi:"黑暗迷宫",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533173724.webp",biaoTi:"昨日青空",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535096871.webp",biaoTi:"无双",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2534471408.webp",biaoTi:"找到你",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535365481.webp",biaoTi:"隔隔老师",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530513100.webp",biaoTi:"影",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537061691.webp",biaoTi:"功夫联盟",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537681630.webp",biaoTi:"为你写诗",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2535550507.webp",biaoTi:"雪怪大冒险",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2529701498.webp",biaoTi:"悲伤逆流成河",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2534554319.webp",biaoTi:"灵魂契约",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533822396.webp",biaoTi:"我的间谍前男友...",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533384240.webp",biaoTi:"李茶的姑妈",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537238752.webp",biaoTi:"追鹰日记",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535476911.webp",biaoTi:"暮光.巴黎",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531326284.webp",biaoTi:"宝贝儿",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536678812.webp",biaoTi:"午夜幽灵",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2538058163.webp",biaoTi:"阴阳眼之瞳灵公...",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2533904688.webp",biaoTi:"黑暗深处之惊魂...",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2538555285.webp",biaoTi:"滴答屋",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537032871.webp",biaoTi:"无敌原始人",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535257594.webp",biaoTi:"阿拉姜色",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2534696059.webp",biaoTi:"超能泰坦",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536679956.webp",biaoTi:"红高粱",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2534091010.webp",biaoTi:"阿凡提之奇缘..。",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2536748718.webp",biaoTi:"帝企鹅日记2：...",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2526215398.webp",biaoTi:"胖子行动队",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535297332.webp",biaoTi:"新灰姑娘",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"5.6"}
]
// 找到类名为.re-Ying的div
var reYingDiv = document.querySelector(".re-Ying");
for (var i = 0; i < shangYing.length; i++) {
	var pageDiv;
	if (i % 15 == 0) {
		pageDiv = document.createElement("div");
		if (i == 0) {
			pageDiv.className = "page visibility";
		} else {
			pageDiv.className = "page";
		}
		reYingDiv.appendChild(pageDiv);
		
	}
	
	// 创建一个div
	var reYingTopDiv = document.createElement("div");
	// 类名为re-Ying-Top
	reYingTopDiv.className = "re-Ying-Top";
	// 追加到page里面
	pageDiv.appendChild(reYingTopDiv);
	// 创建一个img 
	var img = document.createElement("img");
	// 向img输入数组img地址
	img.src = shangYing[i].img;
	reYingTopDiv.appendChild(img);

	// 创建一个li 并输入数组 biaoti 追加到reYingTopDiv
	var li = document.createElement("li");
	li.innerHTML = shangYing[i].biaoTi;
	reYingTopDiv.appendChild(li);

	// 创建一个div  类名weixing-xiang 追加到reYingTopDiv
	var xingXingDiv = document.createElement("div");
	xingXingDiv.className = "xing-Xing";
	reYingTopDiv.appendChild(xingXingDiv);

	// 创建一个span 追加到xingXingDiv
	span = document.createElement("span");
	xingXingDiv.appendChild(span);

	// 创建一个div类名为xing-Xing-Span 追加到xingXingDiv
	spanDiv = document.createElement("div");
	spanDiv.className = "xing-Xing-Span";
	spanDiv.innerHTML = shangYing[i].pingFen;
	xingXingDiv.appendChild(spanDiv);

	// 创建一个div 类名为xing-Xing-Xuan-Piao 追加到reYingTopDiv
	var xingXingXuanPiaoDiv = document.createElement("div");
	xingXingXuanPiaoDiv.className = "xing-Xing-Xuan-Piao";
	reYingTopDiv.appendChild(xingXingXuanPiaoDiv);

	// 创建一个a 输出数组里面的neirong 追加到xingXingXuanPiaoDiv
	var a = document.createElement("a");
	a.innerHTML = shangYing[i].neiRong;
	xingXingXuanPiaoDiv.appendChild(a);
}

// 找到类名为.xian-Shi 的div
var xianShiDiv = document.querySelector(".xian-Shi"); 
// 鼠标点击事件
xianShiDiv.onclick = function () {
	// 找到第二个page
	var pageDiv2 = document.querySelector(".page:nth-of-type(2)");
	// 类名为page 并显示出来
	pageDiv2.className = "page visibility";
	// xianShiDiv 显示 为 无
	xianShiDiv.style.display = 'none';
};




var jiJiang = [
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535524955.webp",biaoTi:"流浪猫鲍勃",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"11月03日上映"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537214991.webp",biaoTi:"胡桃夹子和四个...",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"11月03日上映"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537133715.webp",biaoTi:"冰封侠：时空行...",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"11月03日上映"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537693782.webp",biaoTi:"飓风行动",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"11月03日上映"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537392122.webp",biaoTi:"你美丽我的人...",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"11月03日上映"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2538045543.webp",biaoTi:"产科男生",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"11月03日上映"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537150173.webp",biaoTi:"国礼",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"11月03日上映"},
{img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2538072547.webp",biaoTi:"台仙魔咒",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"11月03日上映"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530155986.webp",biaoTi:"两只小猪之勇闯...",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"11月03日上映"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2538070121.webp",biaoTi:"八仙",neiRong:"选座购票",link:"https://img3.doubanio.com/f/shire/b8f4c3672ef81106701071831e22422a745d3b74/pics/rating_icons/ic_rating_s.png",pingFen:"11月03日上映"}

]
var jiJiangShangYingDiv = document.querySelector(".ji-Jiang-Shang-Ying");
for (var i = 0; i < jiJiang.length; i++) {
	var shangYingDianYingDiv = document.createElement("div");
	shangYingDianYingDiv.className = "shang-Ying-Dian-Ying";
	jiJiangShangYingDiv.appendChild(shangYingDianYingDiv);

	var img = document.createElement("img");
	img.src = jiJiang[i].img;
	shangYingDianYingDiv.appendChild(img);

	var li = document.createElement("li");
	li.innerHTML = jiJiang[i].biaoTi;
	shangYingDianYingDiv.appendChild(li);

	var li = document.createElement("li");
	li.innerHTML = jiJiang[i].pingFen;
	shangYingDianYingDiv.appendChild(li);

	var shangYingDianYingTopDiv = document.createElement("div");
	shangYingDianYingTopDiv.className = "shang-Ying-Dian-Ying-Top";
	shangYingDianYingDiv.appendChild(shangYingDianYingTopDiv);

	var a = document.createElement("a");
	a.innerHTML = jiJiang[i].neiRong;
	shangYingDianYingTopDiv.appendChild(a);

	
}