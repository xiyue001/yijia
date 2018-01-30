console.log(location.href);
var str = location.href;
str = str.split("?")[1];
var arr = str.split("&");
var pid = arr[0].split("=")[1];
var cname = arr[1].split("=")[1];
var ajax = new XMLHttpRequest;
ajax.open("GET","../json/detailnew.json");
ajax.send();
var html = "";
ajax.onreadystatechange = function(){
	if(ajax.readyState == 4 && ajax.status == 200){
		var jsons = JSON.parse(ajax.responseText);
		for(var i = 0 ; i < jsons[cname].list.length ; i ++){
			var pro = jsons[cname].list[i];
			if(pro.id == pid){
				html += `<div class = "left" >
					<div class = "imgbg">
						<img src = "../img/${pro.src}"/>
						<div class = "make">
							<div class = "floatbox"></div>
							<div class = "bigpic">
							<img class = "bigimg" src = "../img/${pro.src}"/></div>
						</div>
					</div>
					<ul>
						<li><img src = "../img/${pro.src}"/></li>
					</ul>
				</div>
				<div class = "right">
					<div class = "top">
						<p>${pro.name}</p>
						<i>${pro.price}</i>
						<strong>编号:${pro.id}</strong>
					</div>
					<div class = "center">
						<p>运费:￥0(辽宁省外)</p>
						<i>商城商品满100元免运费</i>
					</div>
					<div class = "bottom">
						<p>颜色：<span>默认</span></p>
						<i>尺寸：<strong>默认</strong></i>
						<em>数量:<div>1</div><span></span><span></span></em>
						<input type="button" value = "加入购物车"/>
						<h3>每单立减<span>10</span>元积分<span>（1.5倍）</span></h3>
					</div>
				</div>`
			}
		}
		$("#fdj").html(html);
		$("#fdj .imgbg").mouseenter(function(){
			
			$("#fdj .make").css("display","block");
			$("#fdj .floatbox").css("display","block");
			$("#fdj .bigpic").css("display","block");
			$("#fdj .bigimg").css("display","block");
		})
		$("#fdj .make").mousemove(function(e){
			var e = e || event;
			var left = e.pageX - $("#fdj .make").offset().left - $("#fdj .floatbox").width()/2;
			var top = e.pageY - $("#fdj .make").offset().top - $("#fdj .floatbox").height()/2;
			if(left < 0){
				left = 0;
			}else if(left > $("#fdj .make").width() - $("#fdj .floatbox").width()){
				left = $("#fdj .make").width() - $("#fdj .floatbox").width();
			}
			
			if(top < 0 ){
				top = 0 ;
			}else if(top > $("#fdj .make").height() - $("#fdj .floatbox").height()){
				top = $("#fdj .make").height() - $("#fdj .floatbox").height();
			}
			var leftpre = left / ($("#fdj .make").width() - $("#fdj .floatbox").width());
			var toppre = top / ($("#fdj .make").height() - $("#fdj .floatbox").height());
			var bigleft = leftpre * -(700 - 350);
			var bigtop = toppre * -(700 - 350);
			console.log(bigleft);
			console.log(bigtop);
			$("#fdj .floatbox").css({"left":left,"top":top});
			$("#fdj .bigimg").css({"left":bigleft,"top":bigtop});
		})
		$("#fdj .imgbg").mouseleave(function(){
			$("#fdj .make").css("display","none");
			$("#fdj .floatbox").css("display","none");
			$("#fdj .bigimg").css("display","none");
			$("#fdj .bigpic").css("display","none");
		})
	}
}

