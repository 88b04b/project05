$(function () {

    $('.main_slide').on('init afterChange', function (e, s, c) {
        $('.slide_control li').eq(0).addClass('active');
        $('.slide_control li').eq(c).addClass('active').siblings().removeClass('active');
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 6000,
        pauseOnHover: false,
    });

    $('.slide_control li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.main_slide').slick('slickGoTo', idx);
    });

    $('.family_site span').on('click', function () {
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
    });

});