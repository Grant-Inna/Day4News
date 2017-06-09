$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //отменяем стандартную обработку нажатия по ссылке с условием
        if (id !== './log_in.html') {
            event.preventDefault();
        }



        //анимируем переход на расстояние - top за 1500 мс
        $("body,html").animate({scrollTop: top}, 1000);
    });
});


$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});