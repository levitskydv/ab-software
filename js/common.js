$(document).ready(function() {

	// Переключатель вкладок (Software, Downloads, Contact us) --- НАЧАЛО ---

    $('#info > div:not(:first)').hide();
    $('.menu_top a, footer nav a').click(function(event) {
    event.preventDefault();
    var clicked = $(this).attr('href');
    var needElem = 'a[href="'+clicked+'"]';
    $('#info > div').hide();
    $('.menu_top .active, footer .active').removeClass("active");
    $(needElem).parent().addClass('active');
    $('#info ' + clicked).fadeIn('fast');
  });

    // Переключатель вкладок (Software, Downloads, Contact us) --- КОНЕЦ ---

    // Скрол вверх по нажатию ссылки в футере
    $("footer li").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "fast");
	  return false;
	});


    // Эффект движущейся сетки на главной секции
    $('.top_banner').mousemove(function(e) {
        var moveX = (e.pageX * -1 / 15);
        var moveY = (e.pageY * -1 / 15);
        $(this).css("background-position", moveX + "px " + moveY + "px");
    });


    /*Убираем стрелки переключателя баннеров при переходе на Software, 
    Downloads, Contact us и возвращаем при переходе на About us*/
    $('a[href="#software"], a[href="#downloads"], a[href="#contacts"]').click(function(){
    	$('.toggle_button span[class*="arrow"]').fadeOut();
    });
    $('a[href="#home"]').click(function(){
    	$('.toggle_button span[class*="arrow"]').fadeIn();
    });

    // Слайдер --- Настройки см. на http://kenwheeler.github.io/slick/
	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  prevArrow: $('.arrow_prev'),
	  nextArrow: $('.arrow_next'),
	  fade: true,
	  asNavFor: '.slider-nav',
	  centerMode: true,
	  draggable: false
	});

	$('.slider-nav').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  arrows: true,
	  prevArrow: $('.arrow_prev'),
	  nextArrow: $('.arrow_next'),
	  draggable: false
	});

    $('.presentation > div').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true
    });
		
});