
$(document).ready(function(){
	$(".nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 50;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 900);
	});
    $(".fa-question-circle-o").hover(function(){
        $(this).after("<div class='quest-hover'>"+$(this).attr("info")+"<div>");
        var position = $(this).position();
        $(this).next().css({"display":"inline",
                           "left":position.left + 20,
                          "top":position.top - 40}).animate({
            top:position.top
        },200,function(){});
        
    }, function(){
        $(this).next().remove();
    });
});


