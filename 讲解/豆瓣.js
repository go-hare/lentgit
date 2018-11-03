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
console.log(shuZhu);
var topDiv = document.querySelector(".top");
for (var i = 0; i < shuZhu.length; i++) {
	var aDiv = document.createElement("div");
aDiv.className = "a";
aDiv.innerHTML = shuZhu[i].name;
topDiv.appendChild(aDiv);
}
var zhong = [
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535096871.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2534471408.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2533822396.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530513100.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535365481.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531326284.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2535550507.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2529701498.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2529701498.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2526215398.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2533904688.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536466873.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537032871.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536678812.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2534696059.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2536679956.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535297332.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2536748718.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2534091010.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535438301.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"},
{img:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535726164.webp",ming:"无双",xX:"暂无评价",link:"https://movie.douban.com/subject/26425063/?from=showing",link1:"https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F1227002%3F_v_%3Dyes%26merCode%3D1000011"}
]
console.log(zhong);
var zhong5Div = document.querySelector(".zhong5");

var zhong61Div = document.createElement("div");
zhong61Div.className = "zhong61";
zhong5Div.appendChild(zhong61Div);

for (var i = 0; i <= 4; i++) {


var zhong6Div = document.createElement("div");
zhong6Div.className = "zhong6";
zhong61Div.appendChild(zhong6Div);


img = document.createElement("img");
img.src = zhong[i].img;
zhong6Div.appendChild(img);
var zhong7Div = document.createElement("div");
zhong7Div.className = "zhong7";
zhong6Div.appendChild(zhong7Div);
var a1 = document.createElement("a");
a1.className = "a1";
a1.href = zhong[i].link;
a1.innerHTML = zhong[i].ming;
zhong7Div.appendChild(a1);
var zhong8Div = document.createElement("div");
zhong8Div.className = "zhong8";
zhong8Div.innerHTML = zhong[i].xX;
zhong6Div.appendChild(zhong8Div);
var zhong9Div = document.createElement("div");
zhong9Div.className = "zhong9";
zhong6Div.appendChild(zhong9Div);
var a2 = document.createElement("a");
a2.className = "a2";
a2.href = zhong[i].link1;
a2.innerHTML = "选坐购票"
zhong9Div.appendChild(a2);
}
var zhong61Div = document.createElement("div");
zhong61Div.className = "zhong61";
zhong5Div.appendChild(zhong61Div);

for (var i = 0; i <= 4; i++) {


var zhong6Div = document.createElement("div");
zhong6Div.className = "zhong6";
zhong61Div.appendChild(zhong6Div);


img = document.createElement("img");
img.src = zhong[i].img;
zhong6Div.appendChild(img);
var zhong7Div = document.createElement("div");
zhong7Div.className = "zhong7";
zhong6Div.appendChild(zhong7Div);
var a1 = document.createElement("a");
a1.className = "a1";
a1.href = zhong[i].link;
a1.innerHTML = zhong[i].ming;
zhong7Div.appendChild(a1);
var zhong8Div = document.createElement("div");
zhong8Div.className = "zhong8";
zhong8Div.innerHTML = zhong[i].xX;
zhong6Div.appendChild(zhong8Div);
var zhong9Div = document.createElement("div");
zhong9Div.className = "zhong9";
zhong6Div.appendChild(zhong9Div);
var a2 = document.createElement("a");
a2.className = "a2";
a2.href = zhong[i].link1;
a2.innerHTML = "选坐购票"
zhong9Div.appendChild(a2);
}

var zhong61Div = document.createElement("div");
zhong61Div.className = "zhong61";
zhong5Div.appendChild(zhong61Div);

for (var i = 0; i <= 4; i++) {


var zhong6Div = document.createElement("div");
zhong6Div.className = "zhong6";
zhong61Div.appendChild(zhong6Div);


img = document.createElement("img");
img.src = zhong[i].img;
zhong6Div.appendChild(img);
var zhong7Div = document.createElement("div");
zhong7Div.className = "zhong7";
zhong6Div.appendChild(zhong7Div);
var a1 = document.createElement("a");
a1.className = "a1";
a1.href = zhong[i].link;
a1.innerHTML = zhong[i].ming;
zhong7Div.appendChild(a1);
var zhong8Div = document.createElement("div");
zhong8Div.className = "zhong8";
zhong8Div.innerHTML = zhong[i].xX;
zhong6Div.appendChild(zhong8Div);
var zhong9Div = document.createElement("div");
zhong9Div.className = "zhong9";
zhong6Div.appendChild(zhong9Div);
var a2 = document.createElement("a");
a2.className = "a2";
a2.href = zhong[i].link1;
a2.innerHTML = "选坐购票"
zhong9Div.appendChild(a2);
}
var zhong61Div = document.createElement("div");
zhong61Div.className = "zhong61";
zhong5Div.appendChild(zhong61Div);

for (var i = 0; i <= 4; i++) {


var zhong6Div = document.createElement("div");
zhong6Div.className = "zhong6";
zhong61Div.appendChild(zhong6Div);


img = document.createElement("img");
img.src = zhong[i].img;
zhong6Div.appendChild(img);
var zhong7Div = document.createElement("div");
zhong7Div.className = "zhong7";
zhong6Div.appendChild(zhong7Div);
var a1 = document.createElement("a");
a1.className = "a1";
a1.href = zhong[i].link;
a1.innerHTML = zhong[i].ming;
zhong7Div.appendChild(a1);
var zhong8Div = document.createElement("div");
zhong8Div.className = "zhong8";
zhong8Div.innerHTML = zhong[i].xX;
zhong6Div.appendChild(zhong8Div);
var zhong9Div = document.createElement("div");
zhong9Div.className = "zhong9";
zhong6Div.appendChild(zhong9Div);
var a2 = document.createElement("a");
a2.className = "a2";
a2.href = zhong[i].link1;
a2.innerHTML = "选坐购票"
zhong9Div.appendChild(a2);
}
var zhong61Div = document.createElement("div");
zhong61Div.className = "zhong61";
zhong5Div.appendChild(zhong61Div);

for (var i = 0; i <1; i++) {


var zhong6Div = document.createElement("div");
zhong6Div.className = "zhong6";
zhong61Div.appendChild(zhong6Div);


img = document.createElement("img");
img.src = zhong[20].img;
zhong6Div.appendChild(img);
var zhong7Div = document.createElement("div");
zhong7Div.className = "zhong7";
zhong6Div.appendChild(zhong7Div);
var a1 = document.createElement("a");
a1.className = "a1";
a1.href = zhong[i].link;
a1.innerHTML = zhong[i].ming;
zhong7Div.appendChild(a1);
var zhong8Div = document.createElement("div");
zhong8Div.className = "zhong8";
zhong8Div.innerHTML = zhong[i].xX;
zhong6Div.appendChild(zhong8Div);
var zhong9Div = document.createElement("div");
zhong9Div.className = "zhong9";
zhong6Div.appendChild(zhong9Div);
var a2 = document.createElement("a");
a2.className = "a2";
a2.href = zhong[i].link1;
a2.innerHTML = "选坐购票"
zhong9Div.appendChild(a2);
}

