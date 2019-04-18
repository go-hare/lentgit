console.log(neirong);
var biankuangDiv = document.querySelector(".biankuang");
for (var i = 0; i < neirong.length; i++) {
	var outDiv = document.createElement("div");
	outDiv.className = "out";
	biankuangDiv.appendChild(outDiv);
	var img = document.createElement("img");
	img.src = neirong[i].imgLujing;
	outDiv.appendChild(img);
	var inDiv = document.createElement("div");
	inDiv.className = "in";
	outDiv.appendChild(inDiv);
	var p1 = document.createElement("p");
	p1.className = "p1";
	p1.innerHTML = neirong[i].duanLu;
	inDiv.appendChild(p1);
	var p2 = document.createElement("p");
	p2.className = "p2";
	p2.innerHTML = neirong[i].jiaGe;
	inDiv.appendChild(p2);
	var wDiv = document.createElement("div");
	wDiv.className = "w";
	outDiv.appendChild(wDiv);
	var sDiv = document.createElement("div");
	sDiv.className = "s";
	sDiv.innerHTML = "找相似";
	wDiv.appendChild(sDiv);
}