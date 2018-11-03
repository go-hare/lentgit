var de1Div = document.querySelector(".de1");
var navDiv = document.querySelector(".nav");

for (var i = 0; i < movieaArr.length; i++) {
	var navSpan = document.createElement("span");
	navSpan.innerHTML = movieaArr[i].tyoe;
	if (i == 0) {
		navSpan.className = "active";
	}
	navDiv.appendChild(navSpan);
	var de2Div = document.createElement("div");
	if (i == 0) {
		de2Div.className = "de2 de3";
	}else{
		de2Div.className = "de2";
	}
	de1Div.appendChild(de2Div);
	var de4Div = document.createElement("div");
	de4Div.className = "de4";
	de2Div.appendChild(de4Div);
	var dianYing = movieaArr[i].dianYing;
	for (var k = 0; k < 5; k++) {
		var de5Div = document.createElement("div");
		de5Div.className = "de5";
		de4Div.appendChild(de5Div);

		for (var j = 0; j < 10; j++) {
			var de6Div = document.createElement("div");
			de6Div.className = "de6";
			de5Div.appendChild(de6Div);
			var tuPianimg = document.createElement("img");
			tuPianimg.src = dianYing[k*10+j].img;
			de6Div.appendChild(tuPianimg);
			var p = document.createElement("p");
			p.innerHTML = dianYing[k*10+j].name;
			de6Div.appendChild(p);
			var span = document.createElement("span");
			span.innerHTML = dianYing[k*10+j].score;
			p.appendChild(span);
		}
	}

}
var navItems = document.querySelectorAll(".nav>span");
var de2s = document.querySelectorAll(".de2");
for (var i = 0; i < navItems.length; i++) {
	navItems[i].index = i;
	navItems[i].onclick = function (e) {
		for (var i = 0; i < navItems.length; i++) {
			navItems[i].className = "";
			de2s[i].className = "de2";
		}
		
		navItems[e.target.index].className = "active";
		de2s[e.target.index].className = "de2 de3";
	
	};

}
// 所有的div
var de4Divs = document.querySelectorAll(".de4");
// 分液器
var de7Divs = document.querySelectorAll(".de7>span");
var rightBtn = document.querySelector(".de7>.n");
var leftBtn = document.querySelector(".de7>.u");
// 热门电影轮播
function dylunbo(shuyin) {
	for (var i = 0; i < de4Divs.length; i++) {
		de4Divs[i].style.transform = "translateX(-" + 675 * shuyin + "px)";
	}
	for (var i = 0; i < de7Divs.length; i++) {
		de7Divs[i].className = "";

	}
	de7Divs[shuyin].className = "show";
	currentSY = shuyin;

}
for (var i = 0; i < de7Divs.length; i++) {
	de7Divs[i].index = i;
	de7Divs[i].onclick = function (e) {
		dylunbo(e.target.index);
	}
}
var currentSY = 0;
leftBtn.onclick = function () {
	currentSY = currentSY - 1;
	if (currentSY < 0) {
		currentSY = de7Divs.length - 1;

	}
	dylunbo(currentSY);
}
rightBtn.onclick = function () {
	currentSY = currentSY + 1;
	if (currentSY > de7Divs.length - 1) {
		currentSY = 0;
	}
	dylunbo(currentSY);
	
}

var ke1Div = document.querySelector(".ke1")
var k4Div = document.querySelector(".k4");
for (var i = 0; i < time.length; i++) {
	var span = document.createElement("span");
	span.innerHTML = time[i].type;
	if (i==0) {
		span.className = "o1";
	}
	k4Div.appendChild(span); 
	var ke2Div = document.createElement("div");
	if (i==0) {
		ke2Div.className = "ke2 ke3";
	} else {
		ke2Div.className = "ke2";
	}
	ke1Div.appendChild(ke2Div);
	var ke4Div = document.createElement("div");
	ke4Div.className = "ke4";
	ke2Div.appendChild(ke4Div);
	var dianY = time[i].dianY;
for (var t = 0; t < 5; t++) {
	var ke5Div = document.createElement("div");
	ke5Div.className = "ke5";
	ke4Div.appendChild(ke5Div);
	for (var a = 0; a < 10; a++) {
		var ke6Div = document.createElement("div");
		ke6Div.className = "ke6";
		ke5Div.appendChild(ke6Div);
		var atimg = document.createElement("img");
		atimg.src = dianY[t*10+a].img;
		ke6Div.appendChild(atimg);
		var p = document.createElement("p")
		p.innerHTML = dianY[t*10+a].name;
		ke6Div.appendChild(p);
		var span = document.createElement("span");
		span.innerHTML = dianY[t*10+a].pingFen;
		p.appendChild(span);
		}
	
	}
}
var k4Divs = document.querySelectorAll(".k4>span");
var ke2s = document.querySelectorAll(".ke2");
for (var i = 0; i < k4Divs.length; i++) {
	k4Divs[i].index = i;
	k4Divs[i].onclick = function (e) {
		for (var i = 0; i < k4Divs.length; i++) {
			k4Divs[i].className = "";
			ke2s[i].className = "ke2";
		}
		
		k4Divs[e.target.index].className = "o1";
		ke2s[e.target.index].className = "ke2 ke3";
	
	};

}
var ke4Divs = document.querySelectorAll(".ke4");
// 分液器
var ke7Divs = document.querySelectorAll(".ke7>span");
var rightBtna = document.querySelector(".ke7>.n1");
var leftBtna = document.querySelector(".ke7>.u1");
function dsjlunbou(shuying) {
	for (var i = 0; i < ke4Divs.length; i++) {
		ke4Divs[i].style.transform = "translateX(-" + 675 * shuying + "px)";
	}
	for (var i = 0; i < ke7Divs.length; i++) {
		ke7Divs[i].className = "";

	}
	ke7Divs[shuying].className = "show1";
	currentSYt = shuying;
}
for (var i = 0; i < ke7Divs.length; i++) {
	ke7Divs[i].index = i;
	ke7Divs[i].onclick = function (q) {
		dsjlunbou(q.target.index);
	}
}
var currentSYta = 0;

leftBtna.onclick = function () {
	currentSYt = currentSYta - 1;
	if (currentSYta < 0) {
		currentSYta = ke7Divs.length - 1;

	}
	dsjlunbou(currentSYta);
}
rightBtna.onclick = function () {
	currentSYta = currentSYta + 1;
	if (currentSYta > ke7Divs.length - 1) {
		currentSYta = 0;
	}
	dsjlunbou(currentSYta);
	}







	









