$(".nav").addClass("fechada");
	$(".nav").after("<a class=\"nav-toggle\">Menu</a>");
	
	$(".nav-toggle").click(function() {
		var altura = $(".nav ul").height();
		if($(".nav").hasClass("fechada")) {
			$(".nav").animate({height:altura},{queue:false, duration:500}).removeClass("fechada");
		}
		else {
			$(".nav").animate({height:"0px"},{queue:false, duration:500}).addClass("fechada");
		}
	});
	
	$(window).resize(function() {
		var tamanhoViewport = $(window).width();
		if (tamanhoViewport > 480) {
			$(".nav").css("height","auto").addClass("fechada");
		} else {
			$(".nav").css("height","0px").addClass("fechada");
		}
	});