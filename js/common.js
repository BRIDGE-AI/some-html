(function(win, $){
	var $html = $("html");
	var deviceSize = {
		pc:1009,
		tablet:801,
		mobile:800
	}; 
	function scrollShowHide(status) {
		$html.css({
			"overflow-y" : status
		});
		return $html.width();
	}
	var sc_w1 = scrollShowHide("hidden"), 
		 sc_w2 = scrollShowHide("scroll"),
		 sc_w3 = sc_w1 - sc_w2;
	
	if (sc_w3 > 0) {
		deviceSize.pc = deviceSize.pc - sc_w3;
		deviceSize.tablet = deviceSize.tablet - sc_w3;
		deviceSize.mobile = deviceSize.mobile - sc_w3;
	}
	$(win).on("resize", function() {
		var w_size = $(win).width();
		if (w_size >= deviceSize.pc && !$("html").hasClass('pc')) {
			$html.removeClass("mobile tablet").addClass("pc");
			scrollShowHide('scroll');
		} else if (w_size < deviceSize.pc && w_size >= deviceSize.tablet && !('html').hasClass('tablet')) {
			$html.removeClass("mobile pc").addClass("tablet");
			scrollShowHide('scroll');
		} else if (w_size <= devixeSize.mobile && !$("html").hasClass('mobile')) {
			$html.removeClass("tablet pc").addClass("mobile");
			var menu_pos = parseInt ($(".mobile-menu-wrap").css("left"));
			if (menu_pos <= 0) {
				scrollShowHide('hidden');	
			}
		}
	});
	$(function () {
		$(win).trigger("resize");
	});
	$(document).on("mouseover focus", 
	".pc #gnb>ul>li>a, .tablet #gnb>ul>li>a", gnbPlay);
	$(document).on("click", ".mobile #gnb>ul>li>a", gnbPlay);
	function gnbPlay() {
		if ($("html").hasClass('mobile')) {
			$(".mobile #gnb>ul>li>a").removeClass("on");
			$("#gnb ul ul:visible").slideUp(300);
			if($(this).next().is(':hidden')) {
				$(this).addClass('on');
				$(this).next().stop(true,true).slideDown(300);
			}
		} else {
			$("#gnb ul ul:visible").slideUp(300);
			$(this).next().stop(true,true).slideDown(300);
		}
	}
	$(document).on("mouseleave", ".pc #gnb, .tablet #gnb", gnbleave);
	function gnbleave() {
		$("#gnb ul ul:visible").slideUp(300);
		$("#gnb>ul>li>a").removeClass("on");
	}
	$(".mobile-menu-open button").on('click', function () {
		$(".mobile-menu-wrap").animate({
			left : 0
		}, 200);
		scrollShowHide("hidden");
	});
	$(".mobile-menu-close button").on('click', function () {
		$(".mobile-menu-wrap").animate({
			left : -1000
		}, 200);
		gnbleave();
	});	
}(window, jQuery));
