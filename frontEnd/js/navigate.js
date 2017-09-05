$(function () {
    $('a.navitem').click(function(){
        $('.item').removeClass('active');
        $(this).addClass('active');
    })
});
