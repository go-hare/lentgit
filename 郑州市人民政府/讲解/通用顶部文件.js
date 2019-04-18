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