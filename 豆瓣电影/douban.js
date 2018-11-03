var top1LSpanListArr = [
{link:"https://www.douban.com/",name:"豆瓣"},
{link:"https://book.douban.com/",name:"读书"},
{link:"https://movie.douban.com/",name:"电影"},
{link:"https://music.douban.com/",name:"音乐"},
{link:"https://www.douban.com/location",name:"同城"},
{link:"https://www.douban.com/group",name:"小组"},
{link:"https://read.douban.com/?dcs=top-nav&dcm=doubanhttps://douban.fm/?from_=shire_top_nav",name:"阅读"},
{link:"https://douban.fm/?from_=shire_top_nav",name:"FM"},
{link:"https://douban.fm/?from_=shire_top_nav",name:"时间"},
{link:"https://market.douban.com/?utm_campaign=douban_top_nav&utm_source=douban&utm_medium=pc_web",name:"豆品"},
{link:"https://movie.douban.com/#more",name:"更多"}
];
var top1RSpanListArr = [
{link:"https://www.douban.com/doubanapp/app?channel=top-nav",name:"下载豆瓣客户端"},
{link:"https://www.douban.com/accounts/login?source=movie",name:"登录"},
{link:"https://www.douban.com/accounts/register?source=movie",name:"注册"}
];
var topLDiv = document.querySelector(".top1-l");
var topRDiv = document.querySelector(".top1-r");
for (var i = 0; i < top1LSpanListArr.length; i++) {
	// 创建链接
	var top1A = document.createElement("a");
	top1A.className = "top1-name";
	top1A.innerHTML = top1LSpanListArr[i].name;
	top1A.href = top1LSpanListArr[i].link;
	topLDiv.appendChild(top1A);
}	
for (var i = 0; i < top1RSpanListArr.length; i++) {
	// 创建链接
	var top1A = document.createElement("a");
	top1A.className = "top1-name";
	top1A.innerHTML = top1RSpanListArr[i].name;
	top1A.href = top1RSpanListArr[i].link;
	topRDiv.appendChild(top1A);
}

var top2BDiv = document.querySelector("#top2-b");
var top2BSpanListArr = [
{link:"https://movie.douban.com/cinema/nowplaying/",name:"影讯&购票"},
{link:"https://movie.douban.com/explore",name:"选电影"},
{link:"https://movie.douban.com/tv/",name:"电视剧"},
{link:"https://movie.douban.com/chart",name:"排行榜"},
{link:"https://movie.douban.com/tag/",name:"分类"},
{link:"https://movie.douban.com/review/best/",name:"影评"},
{link:"https://movie.douban.com/annual/2017?source=navigation",name:"2017年度榜单"},
{link:"https://movie.douban.com/standbyme/2017?source=navigation",name:"2017观影报告"},
];
for (var i = 0; i < top2BSpanListArr.length; i++) {
	var top2B = document.createElement("a");
	top2B.className = "top2-name";
	top2B.innerHTML = top2BSpanListArr[i].name;
	top2B.href = top2BSpanListArr[i].link;
	top2BDiv.appendChild(top2B);
}
// Body!!!
var hotArr = [
{link:"https://movie.douban.com/subject/26425063/?from=showing",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535096871.webp",name:"无双",grade:"8.1",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F342166%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/27140071/?from=showing",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2534471408.webp",name:"找到你",grade:"7.4",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1209159%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/26999424/?from=showing",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533822396.webp",name:"我的间谍前男友",grade:"6.4",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1203678%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/4864908/?from=showing",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530513100.webp",name:"影",grade:"7.4",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1203437%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/30140571/?from=showing",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535365481.webp",name:"嗝嗝老师",grade:"7.5",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1229020%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/27039069/?from=showing",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531326284.webp",name:"宝贝儿",grade:"5.6",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1229749%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/26944582/?from=showing",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2535550507.webp",name:"雪怪大冒险",grade:"7.6",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1205514%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/27092785/?from=showing",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533384240.webp",name:"李茶的妈妈",grade:"5.1",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1217402%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/27102569/?from=showing",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2529701498.webp",name:"悲伤逆流成河",grade:"5.8",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1217236%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/27149818/?from=showing",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2526215398.webp",name:"胖子的行动",grade:"3.8",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1210830%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/30259493/?from=showing",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2533904688.jpg",name:"黑暗深处之惊魂夜",grade:"暂无评分",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/26929835/?from=showing",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536466873.jpg",name:"跨越8年的新娘",grade:"7.0",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1199020%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/26384292/?from=showing",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537032871.jpg",name:"无敌原始人",grade:"6.3",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F367845%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/30128986/?from=showing",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536678812.jpg",name:"午夜幽灵",grade:"暂无评分",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1217141%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/26649627/?from=showing",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2534696059.jpg",name:"超能泰坦",grade:"4.6",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F342412%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/1306505/?from=showing",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536679956.webp",name:"红高粱",grade:"8.3",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F961%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/30320057/?from=showing",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535297332.webp",name:"新灰姑娘",grade:"4.2",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227585%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/26794854/?from=showing",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2536748718.webp",name:"帝企鹅日记2：召唤 L'empereur",grade:"7.1",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F368109%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/30208004/?from=showing",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2534091010.webp",name:"阿凡提之奇缘历险",grade:"5.2",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F560411%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/26857964/?from=showing",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535438301.webp",name:"向阳的日子",grade:"暂无评分",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1132399%3F_v_%3Dyes%26merCode%3D1000011"},
{link:"https://movie.douban.com/subject/30255138/?from=showing",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535726164.webp",name:"张艺谋和他的“影”",grade:"7.0",buylink:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1235235%3F_v_%3Dyes%26merCode%3D1000011"},
// {link:"",img:"",name:"",grade:"",buylink:""},
// {link:"",img:"",name:"",grade:"",buylink:""},
];
var hotShowLeft = document.querySelector(".hot-show-left")
var hotShowRight = document.querySelector(".hot-show-right")
var hotShowDiv = document.querySelector("#hot-show");
for (var i = 0; i < hotArr.length; i++) {
	var hotBeShowDiv = document.createElement("div");
	hotBeShowDiv.className = "hot-be-show";
	hotShowDiv.appendChild(hotBeShowDiv);

	var hotShowImgA = document.createElement("a");
	hotShowImgA.href = hotArr[i].link;
	hotBeShowDiv.appendChild(hotShowImgA);

		var hotShowImg = document.createElement("img");
		hotShowImg.className = "hot-show-img";
		hotShowImg.src = hotArr[i].img;
		hotShowImgA.appendChild(hotShowImg);

	var hotShowname = document.createElement("a");
	hotShowname.className = "hot-show-name";
	hotShowname.href = hotArr[i].link;
	hotShowname.innerHTML = hotArr[i].name;
	hotBeShowDiv.appendChild(hotShowname);

	var hotShowGrade = document.createElement("p");
	hotShowGrade.className = "hot-show-grade";
	hotShowGrade.innerHTML = hotArr[i].grade;
	hotBeShowDiv.appendChild(hotShowGrade);

	var hotShowBuylink = document.createElement("a");
	hotShowBuylink.className = "hot-show-buylink";
	hotShowBuylink.href = hotArr[i].buylink;
	hotShowBuylink.innerHTML = "选座购票";
	hotBeShowDiv.appendChild(hotShowBuylink);
}
function changeHotShowDiv(index){
	hotShowDiv.style.transform = "translateX(-" + 675*index + "px)";
	for (var i = 0; i < hotShowDiv.length; i++) {
	}
}
var currentIndex = 0;
function buttonHotShowDivLeft(){
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = hotShowDiv.length - 1;
	}
	changeHotShowDiv(currentIndex);
}
function buttonHotShowDivRight(){
	currentIndex++;
	if (currentIndex > hotShowDiv.length - 1) {
		currentIndex = 0;
	}
	changeHotShowDiv(currentIndex);
}
// setInterval(buttonHottingShowDivRight,10000);
// 底部
var bottomRSpan = document.querySelector("#bottom-r");
var bottomRSpanListArr = [
{link:"https://www.douban.com/about",name:"关于豆瓣"},
{link:"https://www.douban.com/jobs",name:"在豆瓣工作"},
{link:"https://www.douban.com/about?topic=contactus",name:"联系我们"},
{link:"https://www.douban.com/about?policy=disclaimer",name:"免责声明"},
{link:"https://help.douban.com/?app=movie",name:"帮助中心"},
{link:"https://www.douban.com/doubanapp/",name:"移动应用"},
{link:"https://www.douban.com/partner/",name:"豆瓣广告"},
];
for (var i = 0; i < bottomRSpanListArr.length; i++) {
	var bottomA = document.createElement("a");
	bottomA.className = "bottom-name";
	bottomA.innerHTML = bottomRSpanListArr[i].name;
	bottomA.href = bottomRSpanListArr[i].link;
	bottomRSpan.appendChild(bottomA);
}
// 最近热门电影
// new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png",
var persentHotFilmList1 = [
{link:"https://movie.douban.com/subject/27615441/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2528018780.jpg",name:"网络迷踪",grade:"8.7",new:""},
{link:"https://movie.douban.com/subject/26985127/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529571873.jpg",name:"一出好戏",grade:"7.2",new:""},
{link:"https://movie.douban.com/subject/26847068/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2528816969.jpg",name:"狂野生活",grade:"7.2",new:""},
{link:"https://movie.douban.com/subject/25969461/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2535094487.jpg",name:"加尔维斯顿",grade:"6.8",new:""},
{link:"https://movie.douban.com/subject/27059080/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530565381.jpg",name:"幼儿园教师",grade:"7.7",new:""},
{link:"https://movie.douban.com/subject/26636712/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2529389608.jpg",name:"蚁人2：黄蜂女现身",grade:"7.4",new:""},
{link:"https://movie.douban.com/subject/26925317/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2525528688.jpg",name:"动物世界",grade:"7.3",new:""},
{link:"https://movie.douban.com/subject/30122633/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531080870.jpg",name:"快把我哥带走",grade:"6.9",new:""},
{link:"https://movie.douban.com/subject/26972258/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533283770.jpg",name:"江湖儿女",grade:"7.7",new:""},
{link:"https://movie.douban.com/subject/26426194/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530572643.jpg",name:"巨齿鲨",grade:"5.8",new:""},
{link:"https://movie.douban.com/subject/26336252/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg",name:"碟中谍6：全面瓦解",grade:"8.2"},
{link:"https://movie.douban.com/subject/26725678/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2525020357.jpg",name:"解除好友2：暗网",grade:"7.9"},
{link:"https://movie.douban.com/subject/26804147/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2527484082.jpg",name:"摩天营救",grade:"6.4"},
{link:"https://movie.douban.com/subject/26683421/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2528281606.jpg",name:"特工",grade:"8.3"},
{link:"https://movie.douban.com/subject/27072795/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521583093.jpg",name:"幸福的拉扎罗",grade:"8.7"},
{link:"https://movie.douban.com/subject/27201353/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2528842218.jpg",name:"大师兄",grade:"5.2"},
{link:"https://movie.douban.com/subject/30146756/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530872223.jpg",name:"风咒语",grade:"6.9"},
{link:"https://movie.douban.com/subject/25882296/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2526405034.jpg",name:"狄仁杰之四大天王",grade:"6.2"},
{link:"https://movie.douban.com/subject/26630714/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530591543.jpg",name:"精灵旅社3：疯狂假期",grade:"6.8"},
{link:"https://movie.douban.com/subject/27040853/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530394864.jpg",name:"协商",grade:"6.9"},
{link:"https://movie.douban.com/subject/26607969/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533833822.jpg",name:"未择之路",grade:"6.8",new:""},
{link:"https://movie.douban.com/subject/26979199/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2527725378.jpg",name:"喜欢，轻吻，快跑",grade:"7.8",new:""},
{link:"https://movie.douban.com/subject/27110363/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2537037239.jpg",name:"名侦探柯南：零的执行人",grade:"6.0",new:""},
{link:"https://movie.douban.com/subject/24773958/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg",name:"复仇者联盟3：无限战争",grade:"8.2",new:""},
{link:"https://movie.douban.com/subject/27003543/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2527205786.jpg",name:"与神同行2：因与缘",grade:"7.5",new:""},
{link:"https://movie.douban.com/subject/26842702/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520095279.jpg",name:"燃烧",grade:"7.9",new:""},
{link:"https://movie.douban.com/subject/27172891/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511811355.jpg",name:"大象席地而坐",grade:"8.1",new:""},
{link:"https://movie.douban.com/subject/26654269/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508259902.jpg",name:"瞒天过海：美人鱼",grade:"6.8",new:""},
{link:"https://movie.douban.com/subject/26588308/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2521499639.jpg",name:"死侍2",grade:"7.5",new:""},
{link:"https://movie.douban.com/subject/27621727/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518865763.jpg",name:"遗传厄运",grade:"7.1",new:""},
{link:"https://movie.douban.com/subject/27184199/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536598700.jpg",name:"7月22日",grade:"7.6",new:""},
{link:"https://movie.douban.com/subject/11584016/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2500130777.jpg",name:"与神同行：罪与罚",grade:"7.7",new:""},
{link:"https://movie.douban.com/subject/27093707/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531034314.jpg",name:"升级",grade:"8.1",new:""},
{link:"https://movie.douban.com/subject/26787574/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507709428.jpg",name:"奇迹男孩",grade:"8.6",new:""},
{link:"https://movie.douban.com/subject/30201003/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533613106.jpg",name:"寄宿学校",grade:"7.3",new:""},
{link:"https://movie.douban.com/subject/26974993/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2527013868.jpg",name:"不留痕迹",grade:"7.6",new:""},
{link:"https://movie.douban.com/subject/27133303/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520331478.jpg",name:"超时空同居",grade:"6.9",new:""},
{link:"https://movie.douban.com/subject/26654498/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2523592367.jpg",name:"爱你，西蒙",grade:"8.3",new:""},
{link:"https://movie.douban.com/subject/26908051/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529568683.jpg",name:"使徒",grade:"6.3",new:""},
{link:"https://movie.douban.com/subject/27608785/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535799024.jpg",name:"沉默的教室",grade:"8.3",new:""},
{link:"https://movie.douban.com/subject/4920389/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516578307.jpg",name:"头号玩家",grade:"8.7",new:""},
{link:"https://movie.douban.com/subject/26416062/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522069454.jpg",name:"侏罗纪世界",grade:"6.7",new:""},
{link:"https://movie.douban.com/subject/30299345/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2536561659.jpg",name:"康斯坦丁：恶魔之城 电影版",grade:"7.5",new:""},
{link:"https://movie.douban.com/subject/26411377/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529385973.jpg",name:"你的婚礼",grade:"7.1",new:""},
{link:"https://movie.douban.com/subject/6874741/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.jpg",name:"无问西东",grade:"7.6",new:""},
{link:"https://movie.douban.com/subject/26384741/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516914607.jpg",name:"湮灭",grade:"7.2",new:""},
{link:"https://movie.douban.com/subject/26640371/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518856022.jpg",name:"犬之岛",grade:"8.3",new:""},
{link:"https://movie.douban.com/subject/26861685/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514119443.jpg",name:"红海行动",grade:"8.3",new:""},
{link:"https://movie.douban.com/subject/26654146/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503544593.jpg",name:"解忧杂货店",grade:"5.0",new:""},
{link:"https://movie.douban.com/subject/26698897/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511355624.jpg",name:"唐人街探索",grade:"6.7",new:""},
];
var persentHotFilmList2 = [
{link:"https://movie.douban.com/subject/25969461/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2535094487.jpg",name:"加尔维斯顿",grade:"6.8",new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"},
{link:"https://movie.douban.com/subject/26753452/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2511807828.jpg",name:"好孩子",grade:"6.7",new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"},
{link:"https://movie.douban.com/subject/26711092/?tag=%E6%9C%80%E6%96%B0&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2450978738.jpg",name:"哈顿花园大劫案",grade:"5.5",new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"},
{link:"https://movie.douban.com/subject/27043736/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2515218929.jpg",name:"三角草的春天",grade:"5.8",new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"},
{link:"https://movie.douban.com/subject/27059080/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530565381.jpg",name:"幼儿园教师",grade:"7.7",new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"},
{link:"https://movie.douban.com/subject/30205168/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520295126.jpg",name:"冠军",grade:"7.2",new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"},
{link:"https://movie.douban.com/subject/26740543/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536851432.jpg",name:"野小子们",grade:"7.1",new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"},
{link:"https://movie.douban.com/subject/27109219/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536854774.jpg",name:"地狱铁匠",grade:"6.2",new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"},
{link:"https://movie.douban.com/subject/30183666/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2517839159.jpg",name:"102岁不落伍",grade:"8.0",new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"},
{link:"https://movie.douban.com/subject/30170375/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2516416600.jpg",name:"真爱百分百",grade:"7.5",new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"},
{link:"https://movie.douban.com/subject/25864719/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535452413.jpg",name:"嗜人之夜",grade:"6.9",new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"},
{link:"https://movie.douban.com/subject/27008105/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2525918935.jpg",name:"最终行动",grade:"6.3",new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"},
{link:"https://movie.douban.com/subject/27087294/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2499521127.jpg",name:"匪医诺克",grade:"6.6",new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"},
{link:"https://movie.douban.com/subject/26925164/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511174410.jpg",name:"别担心，他不会走远的",grade:"5.9",new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"},
{link:"https://movie.douban.com/subject/27040853/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530394864.jpg",name:"协商",grade:"6.9",new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"},
{link:"https://movie.douban.com/subject/26942853/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535338885.jpg",name:"镜中人",grade:"5.9",new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"},
{link:"https://movie.douban.com/subject/27129755/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503036414.jpg",name:"人言可畏",grade:"7.6",new:""},
{link:"https://movie.douban.com/subject/26985996/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536784711.jpg",name:"私人生活",grade:"7.7",new:""},
{link:"https://movie.douban.com/subject/26784898/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507984247.jpg",name:"花牌情缘：结",grade:"8.1",new:""},
{link:"https://movie.douban.com/subject/30199575/?tag=%E6%9C%80%E6%96%B0&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533276654.jpg",name:"让我怎么相信你",grade:"5.3",new:""},
{link:"https://movie.douban.com/subject/21652678/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2497149675.jpg",name:"忠诚",grade:"5.7",new:""},
{link:"https://movie.douban.com/subject/26908051/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529568683.jpg",name:"使徒",grade:"6.3",new:""},
{link:"https://movie.douban.com/subject/26682880/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2512965888.jpg",name:"过境",grade:"7.1",new:""},
{link:"https://movie.douban.com/subject/26986357/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518088873.jpg",name:"超越边境",grade:"5.1",new:""},
{link:"https://movie.douban.com/subject/27165968/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2513656628.jpg",name:"少年泰坦出击电影版",grade:"8.0",new:""},
{link:"https://movie.douban.com/subject/26894325/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511524625.jpg",name:"奇迹赛季",grade:"6.6",new:""},
{link:"https://movie.douban.com/subject/30299345/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2536561659.jpg",name:"康斯坦丁：恶魔之城 电影版",grade:"7.5",new:""},
{link:"https://movie.douban.com/subject/27184199/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536598700.jpg",name:"7月22日",grade:"7.6",new:""},
{link:"https://movie.douban.com/subject/26918750/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2402478921.jpg",name:"天赐的礼物",grade:"7.8",new:""},
{link:"https://movie.douban.com/subject/27608785/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535799024.jpg",name:"沉默的教室",grade:"8.3",new:""},
{link:"https://movie.douban.com/subject/11524958/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510857223.jpg",name:"快乐王子",grade:"7.3",new:""},
{link:"https://movie.douban.com/subject/30140571/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535365481.jpg",name:"嗝嗝老师",grade:"7.5",new:""},
{link:"https://movie.douban.com/subject/26389835/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2532664197.jpg",name:"海鸥",grade:"7.1",new:""},
{link:"https://movie.douban.com/subject/27168151/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529567560.jpg",name:"上流社会",grade:"5.4",new:""},
{link:"https://movie.douban.com/subject/27065128/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2493601045.jpg",name:"听说爷爷去世了",grade:"6.8",new:""},
{link:"https://movie.douban.com/subject/26979208/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504096291.jpg",name:"文豪野犬 Dead Apple",grade:"7.4",new:""},
{link:"https://movie.douban.com/subject/27109323/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2528124539.jpg",name:"小意大利",grade:"6.3",new:""},
{link:"https://movie.douban.com/subject/30204085/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520201822.jpg",name:"果戈里·恶灵",grade:"6.5",new:""},
{link:"https://movie.douban.com/subject/26629145/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531466441.jpg",name:"黑暗杀机",grade:"5.8",new:""},
{link:"https://movie.douban.com/subject/26288143/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2525729485.jpg",name:"黑暗心灵",grade:"5.2",new:""},
{link:"https://movie.douban.com/subject/27126264/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2526177736.jpg",name:"终点的婚礼",grade:"5.9",new:""},
{link:"https://movie.douban.com/subject/26936006/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2408819491.jpg",name:"毕业班",grade:"5.4",new:""},
{link:"https://movie.douban.com/subject/30317800/?tag=%E6%9C%80%E6%96%B0&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533963360.jpg",name:"怪兽",grade:"5.2",new:""},
{link:"https://movie.douban.com/subject/26411377/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529385973.jpg",name:"你的婚礼",grade:"7.1",new:""},
{link:"https://movie.douban.com/subject/30295005/?tag=%E6%9C%80%E6%96%B0&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530404335.jpg",name:"心之界限",grade:"6.2",new:""},
{link:"https://movie.douban.com/subject/26437223/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520254064.jpg",name:"22英里",grade:"6.5",new:""},
{link:"https://movie.douban.com/subject/27072838/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510734904.jpg",name:"八四年夏天",grade:"5.9",new:""},
{link:"https://movie.douban.com/subject/26951710/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535605402.jpg",name:"动物奇缘",grade:"6.2",new:""},
{link:"https://movie.douban.com/subject/27017673/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520156309.jpg",name:"犬舍惊魂",grade:"6.9",new:""},
{link:"https://movie.douban.com/subject/26876142/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2381765082.jpg",name:"毛坯",grade:"5.7",new:""},	
];
var persentHotFilmList3 = [
{link:"https://movie.douban.com/subject/26336252/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg",name:"碟中谍6：全面瓦解",grade:"8.2"},
{link:"https://movie.douban.com/subject/24773958/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg",name:"复仇者联盟3：无限战争",grade:"8.2",new:""},
{link:"https://movie.douban.com/subject/30183666/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2517839159.jpg",name:"102岁不落伍",grade:"8.0",new:"https://img3.doubanio.com/f/movie/caa8f80abecee1fc6f9d31924cef8dd9a24c7227/pics/movie/ic_new.png"},
{link:"https://movie.douban.com/subject/1295644/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg",name:"这个杀手不太冷",grade:"9.4",new:""},
{link:"https://movie.douban.com/subject/26387939/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2457983084.jpg",name:"摔跤吧！爸爸",grade:"9.1",new:""},
{link:"https://movie.douban.com/subject/4920389/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516578307.jpg",name:"头号玩家",grade:"8.7",new:""},
{link:"https://movie.douban.com/subject/1292052/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",name:"肖申克的救赎",grade:"9.6",new:""},
{link:"https://movie.douban.com/subject/1291546/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910813120.jpg",name:"霸王别姬",grade:"9.6",new:""},
{link:"https://movie.douban.com/subject/1292720/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p510876377.jpg",name:"阿甘正传",grade:"9.4",new:""},
{link:"https://movie.douban.com/subject/3541415/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p513344864.jpg",name:"盗梦空间",grade:"9.3",new:""},
{link:"https://movie.douban.com/subject/3011091/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p524964016.jpg",name:"忠犬八公的故事",grade:"9.3",new:""},
{link:"https://movie.douban.com/subject/26683290/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2395733377.jpg",name:"你的名字。",grade:"8.4",new:""},
{link:"https://movie.douban.com/subject/3742360/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1512562287.jpg",name:"让子弹飞",grade:"8.7",new:""},
{link:"https://movie.douban.com/subject/20495023/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2503997609.jpg",name:"寻梦环游记",grade:"9.0",new:""},
{link:"https://movie.douban.com/subject/27615441/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2528018780.jpg",name:"网络迷踪",grade:"8.7",new:""},
{link:"https://movie.douban.com/subject/1889243/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2206088801.jpg",name:"星际穿越",grade:"9.2",new:""},
{link:"https://movie.douban.com/subject/1292064/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p479682972.jpg",name:"楚门的世界",grade:"9.2",new:""},
{link:"https://movie.douban.com/subject/3793023/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p579729551.jpg",name:"三傻大闹宝莱坞",grade:"9.2",new:""},
{link:"https://movie.douban.com/subject/1292722/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p457760035.jpg",name:"泰坦尼克号",grade:"9.3",new:""},
{link:"https://movie.douban.com/subject/1291549/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910824951.jpg",name:"放牛班的春天",grade:"9.2",new:""},
{link:"https://movie.douban.com/subject/25662329/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2315672647.jpg",name:"疯狂动物城",grade:"9.1",new:""},
{link:"https://movie.douban.com/subject/26861685/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514119443.jpg",name:"红海行动",grade:"8.3",new:""},
{link:"https://movie.douban.com/subject/26325320/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2398141939.jpg",name:"血战钢锯岭",grade:"8.7",new:""},
{link:"https://movie.douban.com/subject/3319755/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p663036666.jpg",name:"怦然心动",grade:"9.0",new:""},
{link:"https://movie.douban.com/subject/1929463/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1784592701.jpg",name:"少年派的奇幻旅行",grade:"9.0",new:""},
{link:"https://movie.douban.com/subject/1307914/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2233971046.jpg",name:"无间道",grade:"9.1",new:""},
{link:"https://movie.douban.com/subject/27024903/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2501863104.jpg",name:"天才枪手",grade:"8.2",new:""},
{link:"https://movie.douban.com/subject/1291561/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1606727862.jpg",name:"千与千寻",grade:"9.3",new:""},
{link:"https://movie.douban.com/subject/1292213/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2455050536.jpg",name:"大话西游之大圣娶亲",grade:"9.2",new:""},
{link:"https://movie.douban.com/subject/1849031/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1312700744.jpg",name:"当幸福来敲门",grade:"9.0",new:""},
{link:"https://movie.douban.com/subject/26580232/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2498971355.jpg",name:"看不见的客人",grade:"8.7",new:""},
{link:"https://movie.douban.com/subject/4739952/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1505312273.jpg",name:"初恋那点小事",grade:"8.3",new:""},
{link:"https://movie.douban.com/subject/2131459/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1461851991.jpg",name:"机器人总动员",grade:"9.3",new:""},
{link:"https://movie.douban.com/subject/2129039/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2364094053.jpg",name:"飞屋历险记",grade:"8.9",new:""},
{link:"https://movie.douban.com/subject/26607693/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2494950714.jpg",name:"敦刻尔克",grade:"8.4",new:""},
{link:"https://movie.douban.com/subject/1652587/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p492458287.jpg",name:"阿凡达",grade:"8.6",new:""},
{link:"https://movie.douban.com/subject/26611804/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2510081688.jpg",name:"三块广告牌",grade:"8.7",new:""},
{link:"https://movie.douban.com/subject/4920528/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1062824805.jpg",name:"那些年，我们一起追的女孩",grade:"8.1",new:""},
{link:"https://movie.douban.com/subject/1309046/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1465235231.jpg",name:"V字仇杀队",grade:"8.8",new:""},
{link:"https://movie.douban.com/subject/25921812/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2393044761.jpg",name:"驴得水",grade:"8.3",new:""},
{link:"https://movie.douban.com/subject/1299398/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1280323646.jpg",name:"大话西游之月光宝盒",grade:"8.9",new:""},
{link:"https://movie.douban.com/subject/1292063/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p510861873.jpg",name:"美丽人生",grade:"9.5",new:""},
{link:"https://movie.douban.com/subject/25934014/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2425658570.jpg",name:"爱乐之城",grade:"8.3",new:""},
{link:"https://movie.douban.com/subject/5912992/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1363250216.jpg",name:"熔炉",grade:"9.2",new:""},
{link:"https://movie.douban.com/subject/1293839/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2189265085.jpg",name:"罗马假日",grade:"9.0",new:""},
{link:"https://movie.douban.com/subject/1292215/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p803896904.jpg",name:"天使爱美丽",grade:"8.7",new:""},
{link:"https://movie.douban.com/subject/1292001/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p511146807.jpg",name:"海上钢琴师",grade:"9.2",new:""},
{link:"https://movie.douban.com/subject/1297447/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2414157745.jpg",name:"倩女幽魂",grade:"8.6",new:""},
{link:"https://movie.douban.com/subject/1851857/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p462657443.jpg",name:"蝙蝠侠：黑暗骑士",grade:"9.1",new:""},
{link:"https://movie.douban.com/subject/1866479/?tag=%E8%B1%86%E7%93%A3%E9%AB%98%E5%88%86&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1524904031.jpg",name:"复仇者联盟",grade:"8.1",new:""},
];
var persentHotFilmList4 = [
{link:"https://movie.douban.com/subject/27608785/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535799024.jpg",name:"沉默的教室",grade:"8.3"},
{link:"https://movie.douban.com/subject/26784898/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507984247.jpg",name:"画派结缘",grade:"8.1"},
{link:"https://movie.douban.com/subject/30183666/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2517839159.jpg",name:"102岁不落伍",grade:"8.0"},
{link:"https://movie.douban.com/subject/27165968/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2513656628.jpg",name:"少年泰坦出击电影版",grade:"8.0"},
{link:"https://movie.douban.com/subject/26636126/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2509012048.jpg",name:"啊！设计",grade:"9.4"},
{link:"https://movie.douban.com/subject/26710657/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2358296290.jpg",name:"芬妮的旅程",grade:"8.3"},
{link:"https://movie.douban.com/subject/27052274/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509844695.jpg",name:"中二病也要谈恋爱！剧场版-Take",grade:"8.4"},
{link:"https://movie.douban.com/subject/10558422/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2189263614.jpg",name:"盘丝洞",grade:"8.2"},
{link:"https://movie.douban.com/subject/26936217/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520545137.jpg",name:"一袋子弹",grade:"8.2"},
{link:"https://movie.douban.com/subject/26887055/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2518143759.jpg",name:"霹雳奇幻 生死一剑",grade:"8.1"},
{link:"https://movie.douban.com/subject/26920182/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518242401.jpg",name:"机动战士高达THE ORIGIN VI 赤色彗星诞生",grade:"8.7"},
{link:"https://movie.douban.com/subject/1306830/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1263506579.jpg",name:"血色清晨",grade:"8.0"},
{link:"https://movie.douban.com/subject/6722730/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1918431707.jpg",name:"五月的四天",grade:"8.6"},
{link:"https://movie.douban.com/subject/26694491/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2461788317.jpg",name:"大红灯笼高高挂",grade:"8.7"},
{link:"https://movie.douban.com/subject/26934285/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503166245.jpg",name:"妄想学生会 剧场版",grade:"8.1"},
{link:"https://movie.douban.com/subject/5155577/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2406854085.jpg",name:"流浪的尤莱克",grade:"8.4"},
{link:"https://movie.douban.com/subject/24857754/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2037132488.jpg",name:"无极出租：百老汇 剧场版",grade:"9.0"},
{link:"https://movie.douban.com/subject/1304953/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1893376830.jpg",name:"与安德烈晚餐",grade:"8.2"},
{link:"https://movie.douban.com/subject/26923131/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2499190654.jpg",name:"代号基亚斯：翻盘的鲁路修1之兴道",grade:"8.0"},
{link:"https://movie.douban.com/subject/1302637/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2233892203.jpg",name:"我这样过了一生",grade:"8.2"},
{link:"https://movie.douban.com/subject/1904606/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509224206.jpg",name:"炼狱",grade:"8.5"},
{link:"https://movie.douban.com/subject/1303637/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2304629928.jpg",name:"红柿子",grade:"8.8"},
{link:"https://movie.douban.com/subject/1466243/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2230837721.jpg",name:"罗马11时",grade:"9.1"},
{link:"https://movie.douban.com/subject/1306426/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p787880217.jpg",name:"血腥星期天",grade:"8.0"},
{link:"https://movie.douban.com/subject/26675621/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2327065799.jpg",name:"亚人2：冲突",grade:"8.3"},
{link:"https://movie.douban.com/subject/27198137/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2509629907.jpg",name:"第68届NHK红白歌会",grade:"8.3"},
{link:"https://movie.douban.com/subject/1937998/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2393018482.jpg",name:"阿弥陀堂讯息",grade:"8.6"},
{link:"https://movie.douban.com/subject/27081074/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2479070167.jpg",name:"葛饰北斋：为画痴狂",grade:"8.1"},
{link:"https://movie.douban.com/subject/1296067/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p978240555.jpg",name:"影子大地",grade:"8.6"},
{link:"https://movie.douban.com/subject/25928148/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2224933614.jpg",name:"罗密欧与朱丽叶",grade:"9.4"},
{link:"https://movie.douban.com/subject/26990713/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2442222550.jpg",name:"我的上高",grade:"8.1"},
{link:"https://movie.douban.com/subject/3037329/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2510977248.jpg",name:"要往南方的童年",grade:"9.2"},
{link:"https://movie.douban.com/subject/26420808/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2266474793.jpg",name:"绿地黄花",grade:"8.1"},
{link:"https://movie.douban.com/subject/1296976/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2458238800.jpg",name:"飞行员的妻子",grade:"8.1"},
{link:"https://movie.douban.com/subject/1300520/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2176187973.jpg",name:"温柔的怜悯",grade:"8.2"},
{link:"https://movie.douban.com/subject/1962665/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p740452252.jpg",name:"银河铁道之夜",grade:"8.5"},
{link:"https://movie.douban.com/subject/4262249/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p862943814.jpg",name:"豆满江",grade:"8.1"},
{link:"https://movie.douban.com/subject/25964201/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2407018702.jpg",name:"查理三世",grade:"8.5"},
{link:"https://movie.douban.com/subject/1299608/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2196201162.jpg",name:"疤面人",grade:"8.2"},
{link:"https://movie.douban.com/subject/1299125/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2204849337.jpg",name:"诸神的欲望",grade:"8.2"},
{link:"https://movie.douban.com/subject/1294885/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2432523358.jpg",name:"小王子",grade:"8.2"},
{link:"https://movie.douban.com/subject/26550176/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2298735591.jpg",name:"欢乐时光",grade:"8.2"},
{link:"https://movie.douban.com/subject/1302666/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1330130588.jpg",name:"草房子",grade:"8.2"},
{link:"https://movie.douban.com/subject/1303174/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2259550975.jpg",name:"灰烬与钻石",grade:"8.3"},
{link:"https://movie.douban.com/subject/1421676/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2246439495.jpg",name:"新女性",grade:"8.3"},
{link:"https://movie.douban.com/subject/1292996/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2155091605.jpg",name:"伸张正义",grade:"7.2"},
{link:"https://movie.douban.com/subject/1779498/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1890647993.jpg",name:"叛逆边缘",grade:"8.0"},
{link:"https://movie.douban.com/subject/24877005/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2217617033.jpg",name:"伊丽莎白",grade:"9.6"},
{link:"https://movie.douban.com/subject/1296798/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2217617033.jpg",name:"台风俱乐部",grade:"8.0"},
{link:"https://movie.douban.com/subject/3369426/?tag=%E5%86%B7%E9%97%A8%E4%BD%B3%E7%89%87&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2502295771.jpg",name:"T省的八四、八五年",grade:"8.5"},
];
var persentHotFilmList5 = [
{link:"https://movie.douban.com/subject/26985127/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529571873.jpg",name:"一出好戏",grade:"7.2"},
{link:"https://movie.douban.com/subject/26925317/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2525528688.jpg",name:"动物世界",grade:"7.3"},
{link:"https://movie.douban.com/subject/27133303/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520331478.jpg",name:"超时空同居",grade:"6.9"},
{link:"https://movie.douban.com/subject/1291546/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910813120.jpg",name:"霸王别姬",grade:"9.6"},
{link:"https://movie.douban.com/subject/3742360/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1512562287.jpg",name:"让子弹飞",grade:"8.7"},
{link:"https://movie.douban.com/subject/26862829/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg",name:"芳华",grade:"7.7"},
{link:"https://movie.douban.com/subject/26363254/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2494701965.jpg",name:"战狼2",grade:"7.1"},
{link:"https://movie.douban.com/subject/26861685/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514119443.jpg",name:"红海行动",grade:"8.3"},
{link:"https://movie.douban.com/subject/6874741/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.jpg",name:"无问西东",grade:"7.6"},
{link:"https://movie.douban.com/subject/26972258/?tag=%E5%8D%8E%E8%AF%AD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533283770.jpg",name:"江湖儿女",grade:"7.7"},
{link:"https://movie.douban.com/subject/1307914/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2233971046.jpg",name:"无间道",grade:"9.1"},
{link:"https://movie.douban.com/subject/30122633/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531080870.jpg",name:"快把我哥带走",grade:"6.9"},
{link:"https://movie.douban.com/subject/1292213/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2455050536.jpg",name:"大话西游之大圣娶亲",grade:"9.2"},
{link:"https://movie.douban.com/subject/25964071/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2264377763.jpg",name:"夏洛特烦恼",grade:"7.5"},
{link:"https://movie.douban.com/subject/25827935/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2378140502.jpg",name:"七月与安生",grade:"7.6"},
{link:"https://movie.douban.com/subject/4920528/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1062824805.jpg",name:"那些年，我们一起追的女孩",grade:"8.1"},
{link:"https://movie.douban.com/subject/25921812/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2393044761.jpg",name:"驴得水",grade:"8.3"},
{link:"https://movie.douban.com/subject/1299398/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1280323646.jpg",name:"大话西游之月光宝盒",grade:"8.9"},
{link:"https://movie.douban.com/subject/26698897/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511355624.jpg",name:"唐人街探案2",grade:"6.7"},
{link:"https://movie.douban.com/subject/26311973/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2302930556.jpg",name:"唐人街探案",grade:"7.5"},
{link:"https://movie.douban.com/subject/1297447/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2414157745.jpg",name:"倩女幽魂",grade:"8.6"},
{link:"https://movie.douban.com/subject/11529526/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1959304567.jpg",name:"中国合伙人",grade:"7.6"},
{link:"https://movie.douban.com/subject/1306249/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1946455272.jpg",name:"唐伯虎点秋香",grade:"8.5"},
{link:"https://movie.douban.com/subject/25805741/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2195469915.jpg",name:"后会无期",grade:"7.1"},
{link:"https://movie.douban.com/subject/5350027/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2530249558.jpg",name:"妖猫传",grade:"6.9"},
{link:"https://movie.douban.com/subject/1297574/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2504997087.jpg",name:"英雄本色",grade:"8.6"},
{link:"https://movie.douban.com/subject/10574622/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1793720172.jpg",name:"人在囧途之泰囧",grade:"7.4"},
{link:"https://movie.douban.com/subject/25882296/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2526405034.jpg",name:"狄仁杰之四大天王",grade:"6.2"},
{link:"https://movie.douban.com/subject/26647117/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517333671.jpg",name:"暴裂无声",grade:"8.2"},
{link:"https://movie.douban.com/subject/1292328/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1982176012.jpg",name:"东邪西毒",grade:"8.6"},
{link:"https://movie.douban.com/subject/1292365/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513253791.jpg",name:"活着",grade:"9.1"},
{link:"https://movie.douban.com/subject/1291543/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.jpg",name:"功夫",grade:"8.1"},
{link:"https://movie.douban.com/subject/4873490/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1252876266.jpg",name:"失恋33天",grade:"7.3"},
{link:"https://movie.douban.com/subject/26270502/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2492665487.jpg",name:"绣春刀II：修罗战场",grade:"7.2"},
{link:"https://movie.douban.com/subject/24719063/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2262236348.jpg",name:"烈日灼心",grade:"7.9"},
{link:"https://movie.douban.com/subject/27038183/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2499793218.jpg",name:"羞羞的铁拳",grade:"6.9"},
{link:"https://movie.douban.com/subject/25815034/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2380677316.jpg",name:"湄公河行动",grade:"8.0"},
{link:"https://movie.douban.com/subject/1862151/?tag=%E5%8D%8E%E8%AF%AD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p712241453.jpg",name:"疯狂的石头",grade:"8.3"},
{link:"https://movie.douban.com/subject/25917973/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2275298525.jpg",name:"心迷宫",grade:"8.7"},
{link:"https://movie.douban.com/subject/24751756/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2292976849.jpg",name:"老炮儿",grade:"7.8"},
{link:"https://movie.douban.com/subject/1302425/?tag=%E5%8D%8E%E8%AF%AD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1043597424.jpg",name:"喜剧之王",grade:"8.6"},
{link:"https://movie.douban.com/subject/4237879/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p500548437.jpg",name:"人在囧途",grade:"7.5"},
{link:"https://movie.douban.com/subject/25798222/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2199507156.jpg",name:"亲爱的",grade:"8.4"},
{link:"https://movie.douban.com/subject/26662193/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2508926717.jpg",name:"前任3：再见前任",grade:"5.5"},
{link:"https://movie.douban.com/subject/1291999/?tag=%E5%8D%8E%E8%AF%AD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2242058421.jpg",name:"重庆森林",grade:"8.7"},
{link:"https://movie.douban.com/subject/26366465/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2285115802.jpg",name:"我的少女时代",grade:"7.8"},
{link:"https://movie.douban.com/subject/3821067/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2217557172.jpg",name:"一代宗师",grade:"7.9"},
{link:"https://movie.douban.com/subject/5308265/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1856385532.jpg",name:"西游降魔篇",grade:"7.1"},
{link:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p584021784.jpg",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p584021784.jpg",name:"青蛇",grade:"8.5"},
{link:"https://movie.douban.com/subject/3649049/?tag=%E5%8D%8E%E8%AF%AD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1322247572.jpg",name:"金陵十三衩",grade:"8.0"},
];
var persentHotFilmList6 = [
{link:"https://movie.douban.com/subject/26336252/?tag=%E6%AC%A7%E7%BE%8E&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg",name:"碟中谍6：全面瓦解",grade:"8.2"},
{link:"https://movie.douban.com/subject/24773958/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg",name:"复仇者联盟3：无限战争",grade:"8.2"},
{link:"https://movie.douban.com/subject/25969461/?tag=%E6%AC%A7%E7%BE%8E&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2535094487.jpg",name:"加尔维斯顿",grade:"6.8"},
{link:"https://movie.douban.com/subject/27059080/?tag=%E6%AC%A7%E7%BE%8E&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530565381.jpg",name:"幼儿园教师",grade:"7.6"},
{link:"https://movie.douban.com/subject/1295644/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg",name:"这个杀手不太冷",grade:"9.4"},
{link:"https://movie.douban.com/subject/26636712/?tag=%E6%AC%A7%E7%BE%8E&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2529389608.jpg",name:"蚁人2：黄蜂女现身",grade:"7.4"},
{link:"https://movie.douban.com/subject/4920389/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516578307.jpg",name:"头号玩家",grade:"8.7"},
{link:"https://movie.douban.com/subject/1292052/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",name:"肖申克的救赎",grade:"9.6"},
{link:"https://movie.douban.com/subject/1292720/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p510876377.jpg",name:"阿甘正传",grade:"9.4"},
{link:"https://movie.douban.com/subject/3541415/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p513344864.jpg",name:"盗梦空间",grade:"9.3"},
{link:"https://movie.douban.com/subject/3011091/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p524964016.jpg",name:"忠犬八公的故事",grade:"9.3"},
{link:"https://movie.douban.com/subject/20495023/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2503997609.jpg",name:"寻梦环游记",grade:"9.0"},
{link:"https://movie.douban.com/subject/27615441/?tag=%E6%AC%A7%E7%BE%8E&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2528018780.jpg",name:"网络迷踪",grade:"8.7"},
{link:"https://movie.douban.com/subject/1889243/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2206088801.jpg",name:"星际穿越",grade:"9.2"},
{link:"https://movie.douban.com/subject/1292064/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p479682972.jpg",name:"楚门的世界",grade:"9.2"},
{link:"https://movie.douban.com/subject/1292722/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p457760035.jpg",name:"泰坦尼克号",grade:"9.3"},
{link:"https://movie.douban.com/subject/1291549/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910824951.jpg",name:"放牛班的春天",grade:"9.2"},
{link:"https://movie.douban.com/subject/25662329/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2315672647.jpg",name:"疯狂动物城",grade:"9.1"},
{link:"https://movie.douban.com/subject/26325320/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2398141939.jpg",name:"血战钢锯岭",grade:"8.7"},
{link:"https://movie.douban.com/subject/3319755/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p663036666.jpg",name:"怦然心动",grade:"9.0"},
{link:"https://movie.douban.com/subject/1929463/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1784592701.jpg",name:"少年派的奇幻旅行",grade:"9.0"},
{link:"https://movie.douban.com/subject/26999424/?tag=%E6%AC%A7%E7%BE%8E&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533822396.jpg",name:"我的间谍前男友",grade:"6.4"},
{link:"https://movie.douban.com/subject/1849031/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1312700744.jpg",name:"当幸福来敲门",grade:"9.0"},
{link:"https://movie.douban.com/subject/26580232/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2498971355.jpg",name:"看不见的客人",grade:"8.7"},
{link:"https://movie.douban.com/subject/2131459/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1461851991.jpg",name:"机器人总动员",grade:"9.3"},
{link:"https://movie.douban.com/subject/2129039/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2364094053.jpg",name:"飞屋历险记",grade:"8.9"},
{link:"https://movie.douban.com/subject/26607693/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2494950714.jpg",name:"敦刻尔克",grade:"8.4"},
{link:"https://movie.douban.com/subject/1652587/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p492458287.jpg",name:"阿凡达",grade:"8.6"},
{link:"https://movie.douban.com/subject/26611804/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2510081688.jpg",name:"三块广告牌",grade:"8.7"},
{link:"https://movie.douban.com/subject/26426194/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530572643.jpg",name:"巨齿鲨",grade:"5.8"},
{link:"https://movie.douban.com/subject/1309046/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1465235231.jpg",name:"V字仇杀队",grade:"8.8"},
{link:"https://movie.douban.com/subject/1292063/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p510861873.jpg",name:"美丽人生",grade:"9.5"},
{link:"https://movie.douban.com/subject/25934014/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2425658570.jpg",name:"爱乐之城",grade:"8.3"},
{link:"https://movie.douban.com/subject/1293839/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2189265085.jpg",name:"罗马假日",grade:"9.0"},
{link:"https://movie.douban.com/subject/1292215/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p803896904.jpg",name:"天使爱美丽",grade:"8.7"},
{link:"https://movie.douban.com/subject/1292001/?tag=%E6%AC%A7%E7%BE%8E&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p511146807.jpg",name:"海上钢琴师",grade:"9.2"},
{link:"https://movie.douban.com/subject/1851857/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p462657443.jpg",name:"蝙蝠侠：黑暗骑士",grade:"9.1"},
{link:"https://movie.douban.com/subject/3025375/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2388501883.jpg",name:"奇异博士",grade:"7.6"},
{link:"https://movie.douban.com/subject/1866479/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1524904031.jpg",name:"复仇者联盟",grade:"8.1"},
{link:"https://movie.douban.com/subject/1292343/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2209066019.jpg",name:"蝴蝶效应",grade:"8.7"},
{link:"https://movie.douban.com/subject/1293172/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p452088641.jpg",name:"末代皇帝",grade:"9.0"},
{link:"https://movie.douban.com/subject/6786002/?tag=%E6%AC%A7%E7%BE%8E&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1454261925.jpg",name:"触不可及",grade:"9.2"},
{link:"https://movie.douban.com/subject/1298624/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p925123037.jpg",name:"闻香识女人",grade:"9.0"},
{link:"https://movie.douban.com/subject/1295124/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p492406163.jpg",name:"辛德勒的名单",grade:"9.5"},
{link:"https://movie.douban.com/subject/25864085/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2280097442.jpg",name:"火星救援",grade:"8.4"},
{link:"https://movie.douban.com/subject/1292402/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792400696.jpg",name:"西西里的美丽神话",grade:"8.8"},
{link:"https://movie.douban.com/subject/1907966/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1867084027.jpg",name:"疯狂原始人",grade:"8.7"},
{link:"https://movie.douban.com/subject/21318488/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2221768894.jpg",name:"消失的爱人",grade:"8.7"},
{link:"https://movie.douban.com/subject/26799731/?tag=%E6%AC%A7%E7%BE%8E&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505525050.jpg",name:"请以你的名字呼唤我",grade:"8.8"},
{link:"https://movie.douban.com/subject/11525673/?tag=%E6%AC%A7%E7%BE%8E&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2178872593.jpg",name:"布达佩斯大饭店",grade:"8.8"},
];
var persentHotFilmList7 = [
{link:"https://movie.douban.com/subject/5912992/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1363250216.jpg",name:"熔炉",grade:"9.2"},
{link:"https://movie.douban.com/subject/4917726/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1374786017.jpg",name:"阳光姐妹淘",grade:"8.8"},
{link:"https://movie.douban.com/subject/27040853/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530394864.jpg",name:"协商",grade:"6.9"},
{link:"https://movie.douban.com/subject/21937445/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2158166535.jpg",name:"辩护人",grade:"9.2"},
{link:"https://movie.douban.com/subject/21360417/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2016930906.jpg",name:"恐怖直播",grade:"8.7"},
{link:"https://movie.douban.com/subject/25986180/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2360940399.jpg",name:"釜山行",grade:"8.3"},
{link:"https://movie.douban.com/subject/26842702/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520095279.jpg",name:"燃烧",grade:"7.9"},
{link:"https://movie.douban.com/subject/21937452/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2118532944.jpg",name:"素媛",grade:"9.1"},
{link:"https://movie.douban.com/subject/11584016/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2500130777.jpg",name:"与神同行：罪与罚",grade:"7.7"},
{link:"https://movie.douban.com/subject/26683421/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2528281606.jpg",name:"特工",grade:"8.3"},
{link:"https://movie.douban.com/subject/1300299/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p480225538.jpg",name:"杀人回忆",grade:"8.7"},
{link:"https://movie.douban.com/subject/10777687/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1816276065.jpg",name:"7号房的礼物",grade:"8.7"},
{link:"https://movie.douban.com/subject/1304073/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p479746811.jpg",name:"假如爱有天意",grade:"8.2"},
{link:"https://movie.douban.com/subject/1292286/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p489336497.jpg",name:"我的野蛮闺蜜",grade:"8.1"},
{link:"https://movie.douban.com/subject/3071441/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173648321.jpg",name:"雪国列车",grade:"7.3"},
{link:"https://movie.douban.com/subject/27003543/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2527205786.jpg",name:"与神同行2：因与缘",grade:"7.5"},
{link:"https://movie.douban.com/subject/25977027/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2355555424.jpg",name:"小姐",grade:"8.0"},
{link:"https://movie.douban.com/subject/10437779/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507486724.jpg",name:"新世界",grade:"8.6"},
{link:"https://movie.douban.com/subject/6057942/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1947401961.jpg",name:"隐秘而伟大",grade:"7.8"},
{link:"https://movie.douban.com/subject/26945085/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513360824.jpg",name:"昆池岩",grade:"6.1"},
{link:"https://movie.douban.com/subject/25823132/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2265025290.jpg",name:"暗杀",grade:"8.0"},
{link:"https://movie.douban.com/subject/26863778/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505050710.jpg",name:"铁雨",grade:"8.1"},
{link:"https://movie.douban.com/subject/1308865/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2166892850.jpg",name:"老男孩",grade:"8.2"},
{link:"https://movie.douban.com/subject/1308804/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p465680286.jpg",name:"我脑中的橡皮擦",grade:"7.8"},
{link:"https://movie.douban.com/subject/27018285/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2514384737.jpg",name:"现在去见你",grade:"8.1"},
{link:"https://movie.douban.com/subject/4826419/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p596526266.jpg",name:"金福南杀人事件始末",grade:"8.4"},
{link:"https://movie.douban.com/subject/3006309/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2496896804.jpg",name:"追击者",grade:"8.4"},
{link:"https://movie.douban.com/subject/1433360/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p479188725.jpg",name:"雏菊",grade:"8.0"},
{link:"https://movie.douban.com/subject/3743114/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1075586949.jpg",name:"黄海",grade:"8.4"},
{link:"https://movie.douban.com/subject/6844868/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2159648145.jpg",name:"狼少年",grade:"7.8"},
{link:"https://movie.douban.com/subject/5502697/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1761853840.jpg",name:"夺宝联盟",grade:"7.1"},
{link:"https://movie.douban.com/subject/26410594/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2358109451.jpg",name:"隧道",grade:"7.7"},
{link:"https://movie.douban.com/subject/5908478/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1075591188.jpg",name:"我爱你",grade:"9.0"},
{link:"https://movie.douban.com/subject/1763134/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p452546089.jpg",name:"汉江怪物",grade:"7.3"},
{link:"https://movie.douban.com/subject/27000061/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2498433749.jpg",name:"我能说",grade:"8.8"},
{link:"https://movie.douban.com/subject/6019180/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p892692364.jpg",name:"开心家族",grade:"8.5"},
{link:"https://movie.douban.com/subject/24879820/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2162863558.jpg",name:"奇怪的她",grade:"8.3"},
{link:"https://movie.douban.com/subject/26235839/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2248466858.jpg",name:"内在美",grade:"7.5"},
{link:"https://movie.douban.com/subject/10432911/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2029391129.jpg",name:"流感",grade:"7.8"},
{link:"https://movie.douban.com/subject/25817534/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2339592703.jpg",name:"哭声",grade:"7.1"},
{link:"https://movie.douban.com/subject/4136036/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1486436454.jpg",name:"晚秋",grade:"6.9"},
{link:"https://movie.douban.com/subject/4249355/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1187020899.jpg",name:"孤胆特工",grade:"8.1"},
{link:"https://movie.douban.com/subject/2037796/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1765318197.jpg",name:"丑女大翻身",grade:"7.1"},
{link:"https://movie.douban.com/subject/26445216/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2462745948.jpg",name:"军舰岛",grade:"7.7"},
{link:"https://movie.douban.com/subject/1412579/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p617645155.jpg",name:"亲切的金子",grade:"7.6"},
{link:"https://movie.douban.com/subject/25859495/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2256702287.jpg",name:"思悼",grade:"8.3"},
{link:"https://movie.douban.com/subject/26411377/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529385973.jpg",name:"你的婚礼",grade:"7.1"},
{link:"https://movie.douban.com/subject/26877492/?tag=%E9%9F%A9%E5%9B%BD&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512152196.jpg",name:"小森林",grade:"7.3"},
{link:"https://movie.douban.com/subject/1306664/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1603485241.jpg",name:"共同警备区",grade:"8.7"},
{link:"https://movie.douban.com/subject/6900092/?tag=%E9%9F%A9%E5%9B%BD&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1854317752.jpg",name:"建筑学概论",grade:"7.5"},
];
var persentHotFilmList8 = [
{link:"https://movie.douban.com/subject/25969461/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2535094487.jpg",name:"加尔维斯顿",grade:"6.8"},
{link:"https://movie.douban.com/subject/26753452/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2511807828.jpg",name:"好孩子",grade:"6.7"},
{link:"https://movie.douban.com/subject/26711092/?tag=%E6%9C%80%E6%96%B0&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2450978738.jpg",name:"哈顿花园大劫案",grade:"5.5"},
{link:"https://movie.douban.com/subject/27043736/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2515218929.jpg",name:"三角草的春天",grade:"5.8"},
{link:"https://movie.douban.com/subject/27059080/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530565381.jpg",name:"幼儿园教师",grade:"7.6"},
{link:"https://movie.douban.com/subject/30205168/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520295126.jpg",name:"冠军",grade:"7.1"},
{link:"https://movie.douban.com/subject/26740543/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536851432.jpg",name:"野小子们",grade:"7.0"},
{link:"https://movie.douban.com/subject/27109219/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536854774.jpg",name:"地狱铁匠",grade:"6.2"},
{link:"https://movie.douban.com/subject/30183666/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2517839159.jpg",name:"102岁不落伍",grade:"8.0"},
{link:"https://movie.douban.com/subject/30170375/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2516416600.jpg",name:"真爱百分百",grade:"7.5"},
{link:"https://movie.douban.com/subject/25864719/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535452413.jpg",name:"嗜人之夜",grade:"6.9"},
{link:"https://movie.douban.com/subject/27008105/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2525918935.jpg",name:"最终行动",grade:"6.3"},
{link:"https://movie.douban.com/subject/27087294/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2499521127.jpg",name:"匪医诺克",grade:"6.6"},
{link:"https://movie.douban.com/subject/26925164/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511174410.jpg",name:"别担心，他不会走远的",grade:"5.9"},
{link:"https://movie.douban.com/subject/27040853/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530394864.jpg",name:"协商",grade:"6.9"},
{link:"https://movie.douban.com/subject/26942853/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535338885.jpg",name:"镜中人",grade:"5.9"},
{link:"https://movie.douban.com/subject/27129755/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503036414.jpg",name:"人言可畏",grade:"7.6"},
{link:"https://movie.douban.com/subject/26985996/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536784711.jpg",name:"私人生活",grade:"7.6"},
{link:"https://movie.douban.com/subject/26784898/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507984247.jpg",name:"花牌情缘：结",grade:"8.1"},
{link:"https://movie.douban.com/subject/30199575/?tag=%E6%9C%80%E6%96%B0&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533276654.jpg",name:"让我怎么相信你",grade:"5.3"},
{link:"https://movie.douban.com/subject/21652678/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2497149675.jpg",name:"忠诚",grade:"5.7"},
{link:"https://movie.douban.com/subject/26908051/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529568683.jpg",name:"使徒",grade:"6.3"},
{link:"https://movie.douban.com/subject/26682880/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2512965888.jpg",name:"过境",grade:"7.1"},
{link:"https://movie.douban.com/subject/26986357/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518088873.jpg",name:"超越边缘",grade:"5.1"},
{link:"https://movie.douban.com/subject/27165968/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2513656628.jpg",name:"少年泰坦出击电影版",grade:"8.0"},
{link:"https://movie.douban.com/subject/26894325/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511524625.jpg",name:"奇迹赛季",grade:"6.6"},
{link:"https://movie.douban.com/subject/30299345/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2536561659.jpg",name:"康斯坦丁：恶魔之城 电影版",grade:"7.5"},
{link:"https://movie.douban.com/subject/27184199/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536598700.jpg",name:"7月22日",grade:"7.6"},
{link:"https://movie.douban.com/subject/26918750/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2402478921.jpg",name:"天赐的礼物",grade:"7.8"},
{link:"https://movie.douban.com/subject/27608785/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535799024.jpg",name:"沉默的教室",grade:"8.3"},
{link:"https://movie.douban.com/subject/11524958/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510857223.jpg",name:"快乐王子",grade:"7.3"},
{link:"https://movie.douban.com/subject/30140571/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535365481.jpg",name:"嗝嗝老师",grade:"7.5"},
{link:"https://movie.douban.com/subject/26389835/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2532664197.jpg",name:"海鸥",grade:"7.1"},
{link:"https://movie.douban.com/subject/27168151/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529567560.jpg",name:"上流社会",grade:"5.4"},
{link:"https://movie.douban.com/subject/27065128/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2493601045.jpg",name:"听说爷爷去世了",grade:"6.8"},
{link:"https://movie.douban.com/subject/26979208/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504096291.jpg",name:"文豪野犬 Dead Apple",grade:"7.4"},
{link:"https://movie.douban.com/subject/27109323/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2528124539.jpg",name:"小意大利",grade:"6.3"},
{link:"https://movie.douban.com/subject/30204085/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520201822.jpg",name:"果戈里·恶灵",grade:"6.5"},
{link:"https://movie.douban.com/subject/26629145/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531466441.jpg",name:"黑暗杀机",grade:"5.8"},
{link:"https://movie.douban.com/subject/26288143/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2525729485.jpg",name:"黑暗心灵",grade:"5.2"},
{link:"https://movie.douban.com/subject/27126264/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2526177736.jpg",name:"终点的婚礼",grade:"9.0"},
{link:"https://movie.douban.com/subject/26936006/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2408819491.jpg",name:"毕业班",grade:"8.8"},
{link:"https://movie.douban.com/subject/30317800/?tag=%E6%9C%80%E6%96%B0&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533963360.jpg",name:"怪兽",grade:"8.7"},
{link:"https://movie.douban.com/subject/26411377/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529385973.jpg",name:"你的婚礼",grade:"7.1"},
{link:"https://movie.douban.com/subject/30295005/?tag=%E6%9C%80%E6%96%B0&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530404335.jpg",name:"心之界限",grade:"6.2"},
{link:"https://movie.douban.com/subject/26437223/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520254064.jpg",name:"22英里",grade:"6.6"},
{link:"https://movie.douban.com/subject/27072838/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510734904.jpg",name:"八四年夏天",grade:"5.9"},
{link:"https://movie.douban.com/subject/26951710/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535605402.jpg",name:"动物奇缘",grade:"6.2"},
{link:"https://movie.douban.com/subject/27017673/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2520156309.jpg",name:"犬舍惊魂",grade:"6.9"},
{link:"https://movie.douban.com/subject/26876142/?tag=%E6%9C%80%E6%96%B0&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2381765082.jpg",name:"猫皮",grade:"5.7"},
];
var persentHotFilmListArr = [
{name:"热门",persentHotFilmList:persentHotFilmList1},
{name:"最新",persentHotFilmList:persentHotFilmList2},
{name:"豆瓣高分",persentHotFilmList:persentHotFilmList3},
{name:"冷门佳作",persentHotFilmList:persentHotFilmList4},
{name:"华语",persentHotFilmList:persentHotFilmList5},
{name:"欧美",persentHotFilmList:persentHotFilmList6},
{name:"韩国",persentHotFilmList:persentHotFilmList7},
{name:"日本",persentHotFilmList:persentHotFilmList8},
];
var persentHotFilmTopSpan = document.querySelector("#persentHotFilm-topSpan");
var persentHotFilmShow = document.querySelector(".persentHotFilm-show");
for (var i = 0; i < persentHotFilmListArr.length; i++) {
	var persentHotFilmTopIndex = document.createElement("span");
	persentHotFilmTopIndex.className = "persentHotFilm-top-span";
	persentHotFilmTopIndex.innerHTML = persentHotFilmListArr[i].name;
	persentHotFilmTopSpan.appendChild(persentHotFilmTopIndex);

	var persentHotFilmListDiv = document.createElement("div")
	persentHotFilmListDiv.className = "persentHotFilm-list";
	persentHotFilmShow.appendChild(persentHotFilmListDiv);
	for (var j = 0; j < persentHotFilmListArr[i].persentHotFilmList.length; j++) {
		var persentHotFilmA = document.createElement("a");
		persentHotFilmA.href = persentHotFilmListArr[i].persentHotFilmList[j].link;
		persentHotFilmListDiv.appendChild(persentHotFilmA);

		var persentHotFilmContent = document.createElement("div");
		persentHotFilmContent.className = "persentHot-list-content";
		persentHotFilmA.appendChild(persentHotFilmContent);

		var persentHotFilmContentImg = document.createElement("img");
		persentHotFilmContentImg.src = persentHotFilmListArr[i].persentHotFilmList[j].img;
		persentHotFilmContent.appendChild(persentHotFilmContentImg);
		
		var persentHotFilmContentName = document.createElement("span");
		persentHotFilmContentName.className = "persentHot-list-content-name";
		persentHotFilmContentName.innerHTML = persentHotFilmListArr[i].persentHotFilmList[j].name;
		persentHotFilmContent.appendChild(persentHotFilmContentName);
		
		var persentHotFilmContentgrade = document.createElement("span");
		persentHotFilmContentgrade.className = "persentHot-list-content-grade";
		persentHotFilmContentgrade.innerHTML = persentHotFilmListArr[i].persentHotFilmList[j].grade;
		persentHotFilmContent.appendChild(persentHotFilmContentgrade);
	}
}
var	persentHotFilmListDiv = document.querySelectorAll(".persentHotFilm-list");
var persentHotFilmTopIndex = document.querySelectorAll(".persentHotFilm-top-span");
var persentHotFilmBottomSpan = document.querySelectorAll(".persentHotFilm-bottom-Span")
function persentHotFilmShowY(index){
	for (var i = 0; i < persentHotFilmTopIndex.length; i++) {
		persentHotFilmTopIndex[i].style.color = "#9B9B9B";
	}
	persentHotFilmTopIndex[index].style.color = "#000000";
	for (var i = 0; i < persentHotFilmListDiv.length; i++) {
		persentHotFilmListDiv[i].style.display = "none";
	}
	persentHotFilmListDiv[index].style.display = "inline";
}
persentHotFilmShowY(0);
for (var i = 0; i < persentHotFilmTopIndex.length; i++) {
	persentHotFilmTopIndex[i].onclick = function(g){
		return function(){
			persentHotFilmShowY(g);
		}
	}(i);
}
function persentHotFilmShowXPosition(index){
	persentHotFilmShow.style.transform = "translateX(-" + 675*index + "px)";
	for (var i = 0; i < persentHotFilmBottomSpan.length; i++) {
		persentHotFilmBottomSpan[i].style.backgroundColor = "#c0c0c0";
	}
	persentHotFilmBottomSpan[index].style.backgroundColor = "#6f98d0";
}
persentHotFilmShowXPosition(0);
for (var i = 0; i < persentHotFilmBottomSpan.length; i++) {
	persentHotFilmBottomSpan[i].onclick = function(h){
		return function(){
			persentHotFilmShowXPosition(h);
		}
	}(i);
}
var persentHotFilmBottomLeft = document.querySelector("#persentHotFilm-bottom-left");
var persentHotFilmBottomRight = document.querySelector("#persentHotFilm-bottom-right");
function persentHotFilmBottomLeft(){
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = persentHotFilmBottomSpan.length - 1;
	}
	persentHotFilmShowXPosition(currentIndex);
}
function persentHotFilmBottomRight(){
	currentIndex++;
	if (currentIndex > persentHotFilmBottomSpan.length - 1) {
		currentIndex = 0;
	}
	persentHotFilmShowXPosition(currentIndex);
}
// 最近热门电视剧
var persentHotTVList1 = [
{link:"https://movie.douban.com/subject/25812730/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2460165077.jpg",name:"如懿传",grade:"7.4"},
{link:"https://movie.douban.com/subject/30290917/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537556934.jpg",name:"我们无法成为野兽",grade:"8.6"},
{link:"https://movie.douban.com/subject/30329149/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2537878359.jpg",name:"下一秒传奇",grade:"6.§"},
{link:"https://movie.douban.com/subject/30227464/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2534905816.jpg",name:"奇妙的食光",grade:"7.8"},
{link:"https://movie.douban.com/subject/30289519/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2534823959.jpg",name:"主厨的餐桌 第五季",grade:"7.8"},
{link:"https://movie.douban.com/subject/30228909/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2534020405.jpg",name:"奇葩说 第五季",grade:"7.1"},
{link:"https://movie.douban.com/subject/26999852/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509891341.jpg",name:"延禧攻略",grade:"7.2"},
{link:"https://movie.douban.com/subject/30304024/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2533929218.jpg",name:"奇遇人生",grade:"9.2"},
{link:"https://movie.douban.com/subject/27001001/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2535085957.jpg",name:"生活大爆炸 第十二季",grade:"9.4"},
{link:"https://movie.douban.com/subject/26920281/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512135753.jpg",name:"香蜜沉沉烬如霜",grade:"7.7"},
{link:"https://movie.douban.com/subject/30290642/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2534713930.jpg",name:"心动信号",grade:"7.4"},
{link:"https://movie.douban.com/subject/26954253/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533307834.jpg",name:"美国恐怖故事：启示录 第八季",grade:"8.6"},
{link:"https://movie.douban.com/subject/26665352/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2462599629.jpg",name:"创业时代",grade:"3.5"},
{link:"https://movie.douban.com/subject/30337114/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536542410.jpg",name:"一本好书",grade:"9.3"},
{link:"https://movie.douban.com/subject/27036972/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533356303.jpg",name:"橙红年代",grade:"6.7"},
{link:"https://movie.douban.com/subject/26752700/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2392150879.jpg",name:"漂亮的李慧珍",grade:"3.3"},
{link:"https://movie.douban.com/subject/27016554/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2534588882.jpg",name:"鬼入侵",grade:"8.6"},
{link:"https://movie.douban.com/subject/30183785/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2530377549.jpg",name:"我是大哥大",grade:"8.7"},
{link:"https://movie.douban.com/subject/27187829/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2527870040.jpg",name:"中国好声音 第五季",grade:"6.2"},
{link:"https://movie.douban.com/subject/30269039/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2534573970.jpg",name:"内在美",grade:"8.5"},
{link:"https://movie.douban.com/subject/30284854/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535742933.jpg",name:"大恋爱：将于我忘记的你",grade:"8.7"},
{link:"https://movie.douban.com/subject/27163287/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2532494138.jpg",name:"贴身保镖",grade:"8.6"},
{link:"https://movie.douban.com/subject/30325398/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2534078057.jpg",name:"锵锵行天下",grade:"9.1"},
{link:"https://movie.douban.com/subject/26877848/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522104204.jpg",name:"娘道",grade:"2.6"},
{link:"https://movie.douban.com/subject/26761328/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530496815.jpg",name:"天盛长歌",grade:"8.3"},
{link:"https://movie.douban.com/subject/27119722/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2534179397.jpg",name:"发现巫女",grade:"8.3"},
{link:"https://movie.douban.com/subject/30291583/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536589132.jpg",name:"我们由奇迹构成",grade:"8.3"},
{link:"https://movie.douban.com/subject/26958599/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2533297798.jpg",name:"我们这一天 第三季",grade:"9.7"},
{link:"https://movie.douban.com/subject/30145638/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531860054.jpg",name:"客",grade:"8.1"},
{link:"https://movie.douban.com/subject/30231957/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2534172628.jpg",name:"新西游记 第五季",grade:"9.6"},
{link:"https://movie.douban.com/subject/27623506/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2535092199.jpg",name:"小谢尔顿 第二季",grade:"9.4"},
{link:"https://movie.douban.com/subject/27073039/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535199473.jpg",name:"正阳门下小女人",grade:"8.1"},
{link:"https://movie.douban.com/subject/27194302/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529096681.jpg",name:"无耻之徒(美版)第九季",grade:"9.7"},
{link:"https://movie.douban.com/subject/20258941/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2186299818.jpg",name:"战长沙",grade:"9.2"},
{link:"https://movie.douban.com/subject/27041245/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536550461.jpg",name:"摩登家庭 第十季",grade:"9.5"},
{link:"https://movie.douban.com/subject/27140017/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2510604929.jpg",name:"非自然死亡",grade:"9.3"},
{link:"https://movie.douban.com/subject/2137327/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535356302.jpg",name:"泰坦 第一季",grade:"8.7"},
{link:"https://movie.douban.com/subject/26302614/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2272563445.jpg",name:"请回答1988",grade:"9.7"},
{link:"https://movie.douban.com/subject/26753904/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2534046653.jpg",name:"疯子",grade:"8.4"},
{link:"https://movie.douban.com/subject/26955946/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2527546112.jpg",name:"你 第一季",grade:"8.3"},
{link:"https://movie.douban.com/subject/26774173/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533819695.jpg",name:"凉生，我们可不可以不忧伤",grade:"6.1"},
{link:"https://movie.douban.com/subject/30271160/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2534721370.jpg",name:"Hi 室友",grade:"6.8"},
{link:"https://movie.douban.com/subject/30232260/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529175001.jpg",name:"人生删除事务所",grade:"8.5"},
{link:"https://movie.douban.com/subject/26841619/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2534675103.jpg",name:"超胆侠 第三季",grade:"9.4"},
{link:"https://movie.douban.com/subject/27199574/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2532100958.jpg",name:"万福",grade:"8.6"},
{link:"https://movie.douban.com/subject/30214439/?tag=%E7%83%AD%E9%97%A8&from=gaia_video",img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2533842667.jpg",name:"我就是演员",grade:"7.1"},
{link:"https://movie.douban.com/subject/30317773/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535742426.jpg",name:"Legal V~前律师·小鸟游翔子",grade:"7.5"},
{link:"https://movie.douban.com/subject/27623045/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2532889996.jpg",name:"天赋异禀 第二季",grade:"7.4"},
{link:"https://movie.douban.com/subject/30168028/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531984454.jpg",name:"百日的郎君",grade:"8.4"},
{link:"https://movie.douban.com/subject/30290059/?tag=%E7%83%AD%E9%97%A8&from=gaia",img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2534209694.jpg",name:"金装律师",grade:"7.2"},
];
var persentHotTVList2 = [
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
];
var persentHotTVList3 = [
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
];
var persentHotTVList4 = [
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
];
var persentHotTVList5 = [
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
];
var persentHotTVList6 = [
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
];
var persentHotTVList7 = [
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
];
var persentHotTVList8 = [
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
{link:"",img:"",name:"",grade:""},
];
// var persentHotTVListArr = [
// {name:"热门",persentHotTVList:persentHotTVList1},
// {name:"国产剧",persentHotTVList:persentHotTVList2},
// {name:"综艺",persentHotTVList:persentHotTVList3},
// {name:"美剧",persentHotTVList:persentHotFTVList4},
// {name:"日剧",persentHotTVList:persentHotTVList5},
// {name:"韩剧",persentHotTVList:persentHotTVList6},
// {name:"日本动画",persentHotTVList:persentHotTVList7},
// {name:"纪录片",persentHotTVList:persentHotTVList8},
// ];
// var persentHotTVTopSpan = document.querySelector("#persentHotTV-topSpan");
// var persentHotTVShow = document.querySelector(".persentHotTV-show");
// for (var i = 0; i < persentHotTVListArr.length; i++) {
// 	var persentHotTVTopIndex = document.createElement("span");
// 	persentHotTVTopIndex.className = "persentHotTV-top-span";
// 	persentHotTVTopIndex.innerHTML = persentHotTVListArr[i].name;
// 	persentHotTVTopSpan.appendChild(persentHotTVTopIndex);

// 	var persentHotTVListDiv = document.createElement("div")
// 	persentHotTVListDiv.className = "persentHotTV-list";
// 	persentHotTVShow.appendChild(persentHotTVListDiv);
// 	for (var j = 0; j < persentHotTVListArr[i].persentHotTVList.length; j++) {
// 		var persentHotTVA = document.createElement("a");
// 		persentHotTVA.href = persentHotTVListArr[i].persentHotTVList[j].link;
// 		persentHotTVListDiv.appendChild(persentHotTVA);

// 		var persentHotTVContent = document.createElement("div");
// 		persentHotTVContent.className = "persentHot-list-content";
// 		persentHotTVA.appendChild(persentHotTVContent);

// 		var persentHotTVContentImg = document.createElement("img");
// 		persentHotTVContentImg.src = persentHotTVListArr[i].persentHotTVList[j].img;
// 		persentHotTVContent.appendChild(persentHotTVContentImg);
		
// 		var persentHotTVContentName = document.createElement("span");
// 		persentHotTVContentName.className = "persentHot-list-content-name";
// 		persentHotTVContentName.innerHTML = persentHotTVListArr[i].persentHotTVList[j].name;
// 		persentHotTVContent.appendChild(persentHotTVContentName);
		
// 		var persentHotTVContentgrade = document.createElement("span");
// 		persentHotTVContentgrade.className = "persentHot-list-content-grade";
// 		persentHotTVContentgrade.innerHTML = persentHotTVListArr[i].persentHotTVList[j].grade;
// 		persentHotTVContent.appendChild(persentHotTVContentgrade);
// 	}
// }