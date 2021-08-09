var box=document.getElementById('box');

var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;

box.addEventListener("mouseover",function(event){
	var dimention=box.getBoundingClientRect();
	var position=getnewposition(dimention.width,dimention.height);
	box.style.top=position.y+'px';
	box.style.left=position.x+'px';
});

function getnewposition(boxwidth,boxheight){
	var newy=Math.floor((Math.random() * viewHeight)+1-boxheight);
	var newx=Math.floor((Math.random() * viewWidth)+1-boxwidth);
	if(newx<0){
		newx=0;
	}
	if(newy<0){
		newy=0;
	}
	return {x:newx , y:newy};
}