$(function() {
    //画面がスクロールされたら
    $(window).scroll(function() {
        //画面のスクロールされた量を取得
        const scrollTop = $(document).scrollTop();
        //もしスクロール量が条件を達したら矢印を表示
        if(scrollTop > 500) {
            $('.arrow').fadeIn();
        } else {
            $('.arrow').fadeOut();
        }
    });

    //ハンバーガーメニューの開閉
    $('#menu_btn').click(function() {
        $(this).toggleClass('active');
        $('header').toggleClass('active');
    })

    //矢印をクリックしたら
    $('.arrow').click(function() {
        $('html').animate({scrollTop: 0}, 250);
    });

    //navのaをクリックしたら
    $('.btn1').click(function() {
        const aboutTop = $('#about').offset().top;
        $('html').animate({scrollTop: aboutTop}, 250);
        $('header').removeClass('active');
        $('#menu_btn').removeClass('active');
    });

    $('.btn2').click(function() {
        const skillsTop = $('#skills').offset().top;
        $('html').animate({scrollTop: skillsTop}, 250);
        $('header').removeClass('active');
        $('#menu_btn').removeClass('active');
    });

    $('.btn3').click(function() {
        const serviseTop = $('#servise').offset().top;
        $('html').animate({scrollTop: serviseTop}, 250);
        $('header').removeClass('active');
        $('#menu_btn').removeClass('active');
    });

    $('.btn4').click(function() {
        const portfolioTop = $('#portfolio').offset().top;
        $('html').animate({scrollTop: portfolioTop}, 250);
        $('header').removeClass('active');
        $('#menu_btn').removeClass('active');
    });
});
