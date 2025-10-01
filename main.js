// ========= 動画ローディング画面 ===============
$(window).on('load', function(){
    const video = document.getElementById('splash_video');
    
    // 動画が終了したらフェードアウト
    video.addEventListener('ended', function() {
        $("#splash").addClass('fadeOut');
        
        // フェードアウト完了後に要素を削除
        setTimeout(function() {
            $("#splash").remove();
        }, 1000);
    });
    
    // 動画が長すぎる場合の保険（最大5秒後に強制終了）
    setTimeout(function() {
        if (!$("#splash").hasClass('fadeOut')) {
            $("#splash").addClass('fadeOut');
            setTimeout(function() {
                $("#splash").remove();
            }, 1000);
        }
    }, 5000);
});

// ========= ヘッダーロゴの微細なアニメーション ===============
$(document).ready(function(){
    $('.navbar-brand img, .footer_logo, .footer_title1, .footer_title2, .footer_title3').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.1) translateY(-3px)',
                'transition': 'all 0.3s ease'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1) translateY(0)',
                'transition': 'all 0.3s ease'
            });
        }
    );
});

// ========= スムーススクロール ===============
$(document).ready(function(){
    $('a[href^="#"]').click(function(){
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - 70; // ヘッダー分の調整
        $("html, body").animate({scrollTop:position}, 600, "swing");
        return false;
    });
});

// ========= ナビゲーションバーの背景色変更 ===============
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});

// ========= スクロールアニメーション ===============
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    
    // service_imageのアニメーション
    var serviceImageTop = $('.service_image').offset().top;
    if (scroll + windowHeight > serviceImageTop + 100) {
        $('.service_image').addClass('is-show');
    }
    
    // // text_contentのアニメーション
    // var textContentTop = $('.text_content').offset().top;
    // if (scroll + windowHeight > textContentTop + 100) {
    //     $('.text_content').addClass('is-show');
    // }
    
    // // news_sectionのアニメーション
    // var newsSectionTop = $('.news_section').offset().top;
    // if (scroll + windowHeight > newsSectionTop + 150) {
    //     $('.news_section h1').addClass('is-show');
    //     $('.news_image').addClass('is-show');
    //     $('.news_info').addClass('is-show');
    // }
    
    // // recruit_sectionのアニメーション
    // var recruitSectionTop = $('.recruit_section').offset().top;
    // if (scroll + windowHeight > recruitSectionTop + 150) {
    //     $('.recruit_section h1').addClass('is-show');
    //     $('.info_box, .contact_box').addClass('is-show');
    // }
});
