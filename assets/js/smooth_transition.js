$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //�������� ����������� ��������� ������� �� ������
        event.preventDefault();

        //�������� ������������� ���� � �������� href
        var id  = $(this).attr('href'),

        //������ ������ �� ������ �������� �� ����� �� ������� ��������� �����
            top = $(id).offset().top;

        //��������� ������� �� ���������� - top �� 1500 ��
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