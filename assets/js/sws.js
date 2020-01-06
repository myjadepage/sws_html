// sidebar small or large
$('#menu_toggle').on('click', function() {
  $('.wrapper').toggleClass('sidebar-lg sidebar-sm')
});

// swspick tab menu
$(".pick-menu a").click(function(e) {
  e.preventDefault();
  $(this).parent().addClass("active");
  $(this).parent().siblings().removeClass("active");
  var tab = $(this).attr("href");
  $(".pick-con").not(tab).css("display", "none");
  $(tab).fadeIn();
});

// live 오늘의 방송보기
var LIVETODAY = new Swiper('#live-today', {
    slidesPerView: 3,
    spaceBetween: 16,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.btn-next-live',
      prevEl: '.btn-prev-live',
    },
  });

//   이벤트
  var EVENTAREA = new Swiper('#event-area', {
    slidesPerView: 3,
    spaceBetween: 16,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.btn-next-event',
      prevEl: '.btn-prev-event',
    },
  }); 

  // 오늘의 특가상품
  var TODAYSPEC = new Swiper('#today-spec', {
    slidesPerView: 6,
    spaceBetween: 10, 
    slidesPerGroup: 6,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.btn-next-spec-price',
      prevEl: '.btn-prev-spec-price',
    },
  }); 

  // 인기영상
  var TODAYPOP = new Swiper('#today-pop', {
    slidesPerView: 3,
    spaceBetween: 16,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.btn-next-pop',
      prevEl: '.btn-prev-pop',
    },
  });

  // itbrand
  var ITBRAND = new Swiper('#it-brand', {
    slidesPerView: 5,
    spaceBetween: 16,
    slidesPerGroup: 5,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.btn-next-brand',
      prevEl: '.btn-prev-brand',
    },
  }); 

