$(function(){
   $('.main-visual-slide').bxSlider({
   		auto : true,
   		pause : 2000,
   		autoHover : true,
   		autoControls : true,
   		autoControlsCombine : true, 
   });
   $('#notice-tab-wrap h4 a').on('click', tabmenu);
   function tabmenu (e) {
   		e.preventDefault();
   		if ($(this).parent().next().is(':hidden')) {
   			$('#notice-tab-wrap h4 a').removeClass('on');
   			$(this).addClass('on');	
   			$('#notice-tab-wrap>div:visible').hide();
   			$(this).parent().next().show();
   		}
    }
    $('.grid').isotope({
    	itemSelector : '.grid-item',
    	layoutMode : 'fitRows'
    });
});