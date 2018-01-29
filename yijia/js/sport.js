function getstyle(obj,arr){
	return obj.currentStyle ? obj.currentStyle[arr] : getComputedStyle(obj,false)[arr];
}
function sport (obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		let stop = true;
		for(let arr in json){
			let cur = arr == "opacity" ? parseInt(parseFloat(getstyle(obj,arr)* 100)) : parseInt(getstyle(obj,arr));
			let speed = (json[arr] - cur) / 8 ;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed) ; 
			if(cur != json[arr]){
				stop = false;
			}
			if(arr == "opacity"){
				obj.style.opacity = (cur + speed) / 100 ;
				obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
			}else{
				obj.style[arr] = speed + cur + "px";
			}
		}
		if(stop){
			clearInterval(obj.timer)
			if(typeof fn == "function"){
				fn();
			}
		}
	},30)
}
