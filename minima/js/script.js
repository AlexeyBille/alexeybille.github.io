var speed=300,
    originalHeight = 0,
    hoverHeight=60;

$('.brand-item').hover(function(){
    $(this).find('.hidden-element').stop().animate({width:$(this).css('width')},0).animate({height:hoverHeight},speed);
},function(){
    $(this).find('.hidden-element').stop().animate({width:$(this).css('width')},0).animate({height:originalHeight},speed);
})