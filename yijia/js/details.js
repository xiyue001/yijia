window.onload = function(){
	
	$(window).scroll(function(){
	if($(document).scrollTop() > 200){
		$("#fixed-top").slideDown();
	}else{
		$("#fixed-top").slideUp();	
	}
})

$("#rightfiexd").css("height",$(window).height());


imgnew();

function imgnew(){
	var ajax = new XMLHttpRequest;
	ajax.open("GET","../json/detailnew.json");
	ajax.send();
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			var str = JSON.parse(ajax.responseText);
			var html = "";
			for(var attr in str){
				for(var i = 0 ; i < str[attr].list.length ; i ++){
					var pro = str[attr].list[i];
					html += `<li>
						<a href = "detailnew.html?pid=${pro.id}&cname=${attr}">
							<img src = "../img/${pro.src}" />
							<p class = "price">${pro.price}</p>
							<p class = "name">${pro.name}</p>
						</a>
					</li>`
				}
				$("#shop ul").html(html);
			}
			
		}
	}
}


	
	
}
