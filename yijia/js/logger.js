window.onload = function(){
	erweimaimg();
	function erweimaimg(){
		var flag = true;
		$("#erwei").click(function(){
			if(flag){
				$("#erwei-img").css("display","block");
				flag = false;
			}else{
				$("#erwei-img").css("display","none");
				flag = true;
			}
		})
	}
	console.log(document.cookie);
	var arr = document.cookie.split("; ");
	var name = "";
	var pwd = "";
	console.log(arr);
	for(var i = 0 ; i < arr.length ; i ++){
		var cookies = arr[i].split("=");
		if(cookies[0] == "name"){
			name = cookies[1];
		}else if(cookies[0] == "pwd"){
			pwd = cookies[1];
		}
	}
	
	
	
	var imgverify = verifyCode("canvas-a","canvas-canvas");
	$("#canvas-a").click(function(){
		imgverify = verifyCode("canvas-a","canvas-canvas");
	});
	
	
	
	$("#btn").click(function(){
		if($("#name").val() != name){
			alert("用户名错误");
		}else if($("#pcw").val() != pwd){
			alert("密码错误");
		}else if($("#yanzhengma").val().toLowerCase() != imgverify.toLowerCase()){
			alert("验证码错误");
		}
		if($("#name").val() == name && $("#pcw").val() == pwd && $("#yanzhengma").val().toLowerCase() == imgverify.toLowerCase()){
			alert("登陆成功");
			location.href = "../index.html";
		}
	})
	
}
