window.onload =function(){
	var imgverify = verifyCode("get-img-verify","canvaser");
	$("#img-verify").click(function(){
		imgverify = verifyCode("get-img-verify","canvaser");
	})
	var name = /^\w{6,15}$/;
	var pwd = /^[\w\.]{6,15}$/
	$("#btn").click(function(){
		var flag = true;
		console.log($("#pcw").val());
		console.log($("#pcw2").val());
		if(!name.test($("#name").val())){
			alert("用户名错误");
			flag = false;
		}else if(!pwd.test($("#pcw").val())){
			alert("密码输入不符合规则");
			flag = false;
		}else if($("#image-verify").val().toLowerCase() != imgverify.toLowerCase()){
			alert("验证码错误");
			flag = false;
		}else if($("#pcw").val() != $("#pcw2").val()){
			alert("密码不一致");
			flag = false;
		}
		if(flag){
			var date = new Date();
			date.setDate(date.getDate() + 3);
			document.cookie = "name=" + $("#name").val() + ";expires=" + date + ";path=/";
			document.cookie = "pwd=" + $("#pcw2").val() + ";expires=" + date + ";path=/";
			location.href = "logger.html";
		}
	})
}


