const h_m_link = document.querySelector('#h_m_link');
let s_container = document.querySelector('.s_container');

h_m_link.addEventListener('click', function() {
    s_container.style.right = 0;
})

h_m_link.addEventListener('blur', function() {
    s_container.style.right = '-40%';
})

/* 메뉴 스크롤 이동 */
let floatPosition = parseInt($(".s_container").css('top'));
$(window).scroll(function() {
    let scrollTop = $(window).scrollTop();
    let newPosition = scrollTop + floatPosition + "px";

    $("#floatMenu").css('top', newPosition);
    $(".s_container").stop().animate({
        "top" : newPosition
    }, 100);
}).scroll();

/* 이미지 슬라이더 */
$('.w_p_card_container').slick({
    dots: false,
    infinite: true,
    adaptiveHeight:false,
    autoplay:true,
    autoplaySpeed:4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover:false,
    arrows:false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow:1,
                slidesToScroll: 1
            }
        }
    ]
})
$('.g_r_content_container').slick({
    dots: false,
    infinite: true,
    adaptiveHeight:false,
    autoplay:true,
    autoplaySpeed:4000,
    pauseOnHover:false,
    arrows:false,
    responsive: [ // 반응형 웹 구현 옵션
					{  
						breakpoint: 2000, //화면 사이즈 960px
						settings: {
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:3,
                            slidesToScroll: 1
						} 
					},
					{ 
						breakpoint: 1024, //화면 사이즈 768px
						settings: {	
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:3,
                            slidesToScroll: 1
						} 
					},
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow:1,
                            slidesToScroll: 1
                        }
                    }
				]
})
$('.p_r_container').slick({
    dots: false,
    infinite: true,
    adaptiveHeight:false,
    autoplay:true,
    autoplaySpeed:4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover:false,
    arrows:false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow:1,
                slidesToScroll: 1
            }
        }
    ]
})

/* 이번주 선수 이미지 슬라이더 버튼 */
$('#w_p_play_btn').click(function(){
	$('.w_p_card_container').slick('slickPlay');
});
$('#w_p_pause_btn').click(function(){
	$('.w_p_card_container').slick('slickPause');
});

/* 경기 결과 이미지 슬라이더 버튼 */
$('#g_r_play_btn').click(function(){
	$('.g_r_content_container').slick('slickPlay');
});
$('#g_r_pause_btn').click(function(){
	$('.g_r_content_container').slick('slickPause');
});

/* 선수 기록 이미지 슬라이더 버튼 */
$('#p_r_play_btn').click(function(){
	$('.p_r_container').slick('slickPlay');
});
$('#p_r_pause_btn').click(function(){
	$('.p_r_container').slick('slickPause');
});