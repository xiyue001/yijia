
$(window).scroll(function(){
	if($(document).scrollTop() > 200){
		$("#fixed-top").slideDown();
	}else{
		$("#fixed-top").slideUp();	
	}
})

$("#rightfiexd").css("height",$(window).height());