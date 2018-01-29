window.onload = function(){
	carousel();
	referral();
	function carousel(){
		var Imgboss = document.getElementById("image");
		var Img = Imgboss.getElementsByTagName("img");
		var div = Imgboss.getElementsByTagName("div");
		var zindex = 110;
		var nowpic = 0;
		setInterval(play,2000);
		function play(){
			nowpic ++;
			if(nowpic > Img.length-1){
				nowpic = 0;
			}
			for(let i = 0 ; i < Img.length ; i ++){
				sport(Img[i],{"opacity":0});
			}
			sport(Img[nowpic],{"opacity":100});
		}
	}
	

	
	function referral(){
		var Box = document.getElementById("referral").getElementsByClassName("bottom")[0];
		
		var ajax = new XMLHttpRequest();
		
		ajax.open("GET","json/page.json");
		ajax.send();
		ajax.onreadystatechange = function(){
			
			if(ajax.readyState == 4 && ajax.status == 200){
				
				var arr = JSON.parse(ajax.responseText);
				
				var str = "";
				for(var i = 0 ; i < arr.length ; i ++){
					
					str += `<li>
						<div><img src = "img/${arr[i].img}"/></div>
						<p>${arr[i].referral}</p>
						<i>${arr[i].price}</i>
					</li>`
				}
				Box.innerHTML += str;
			}
		}
	}
	referraler();
	function referraler(){
		var Ul = document.getElementById("list-div").getElementsByClassName("bottom")[0];
		var Right = document.getElementsByClassName("rightbutton")[0];
		var Left = document.getElementsByClassName("leftbutton")[0];
		var index = 0;
		var left = 235*5;
		Right.innerHTML = (index+1)+"/"+3;
		Left.innerHTML = (index+1)+"/"+3;
		Right.onclick = function(){
			index ++;
			if(index > 2){
				index = 0;
			}
			sport(Ul,{left:index*-left});
			this.innerHTML = (index+1)+"/"+3;
			Left.innerHTML = (index+1)+"/"+3;
		}
		Left.onclick = function(){
			index --;
			if(index < 0){
				index = 2;
			}
			sport(Ul,{left:index*-left});
			this.innerHTML = (index+1)+"/"+3;
			Right.innerHTML = (index+1)+"/"+3;
		}
	}
$("#referral .top li").click(function(){
	$(this).addClass("first").find("a").addClass("nowcolor").end().find("i").removeClass("xiajianjiao-none").end().
	siblings().removeClass("first").find("a").removeClass("nowcolor").end().find("i").addClass("xiajianjiao-none");
});






$("#rightfiexd").css("height",$(window).height());



$(window).scroll(function(){
	if($(document).scrollTop() > 200){
		$("#fixed-top").slideDown();
	}else{
		$("#fixed-top").slideUp();	
	}
})




$(".rightfiexd-bottom .three").parent().click(function(){
	$("html,body").animate({"scrollTop":0},500)
})

}


