
$(document).ready(function(){
	$(".navbar").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 50;
		
		//анимируем переход на расстояние - top за x мс
		$('body,html').animate({scrollTop: top}, 900);
	});

    $(".fa-question-circle-o").hover(function(){
        $(this).after("<div class='quest-hover'>"+$(this).attr("info")+"<div>");
        var blockLeftPosition = $(this).position().left;
        var blockTopPosition = $(this).position().top;
        var offsetLeftPosition = $(this).offset().left;
        var docWidth = $(document).width();
        var blockWidth = $(this).next().width();
        var leftPosition = 0;
        var shift = 40;
        if(offsetLeftPosition + 46 + blockWidth < docWidth ){
                leftPosition = blockLeftPosition + 20;
        }else {
            leftPosition = 0 ;
            blockTopPosition += 30;
            shift = -40;
        }
        console.log("LeftPosition = " + leftPosition);
        console.log("docWidth = " + docWidth);
        console.log("offsetLeftPosition = " + offsetLeftPosition);
        console.log("blockWidth = " + blockWidth);
        $(this).next().css({"display":"inline",
                           "left":leftPosition,
                          "top":blockTopPosition - shift}).animate({
            top:blockTopPosition
        },200,function(){});
        
    }, function(){
        $(this).next().fadeOut(200).delay(200).queue(function() { $(this).remove(); });;

    });

    var s1 = $('#section-1').offset().top + 300;
    var s2 = $('#section-2').offset().top - 300;
    var s3 = $('#section-3').offset().top - 300;
    var footer = $('#footer').offset().top - 500;


    function toggleActiveClass(a) {
        removeActiveClass();
        $(".navbar-nav>li:nth-child(" + a + ")").find('a.go_to').addClass('active')
    }
    function removeActiveClass() {
        $('.go_to.active').removeClass('active');
    }
    $(window).scroll(function () {
        var bo = $("body").scrollTop();
        if (bo > s2) toggleActiveClass(1);
        if (bo > s3) toggleActiveClass(2);
        if (bo > footer) toggleActiveClass(3);
        if (bo < s1) removeActiveClass();
    })

});


