// sidebar small or large
$('#menu_toggle').on('click', function() {
  $('.wrapper').toggleClass('sidebar-lg sidebar-sm');
  $(this).find('i').toggleClass('xi-hamburger-out');
});

// swspick tab menu
$("#pick-menu a").click(function(e) {
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

  var BRANDCHANNEL = new Swiper('#brand-channel',{
    slidesPerView: 8,
    spaceBetween: 10, 
    slidesPerGroup: 8,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.btn-next-brand-channel',
      prevEl: '.btn-prev-brand-channel',
    },

  });

  // 브랜드캠페인
  var CAMP = new Swiper('#brand-camp', {
    slidesPerView: 3,
    spaceBetween: 16,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.btn-next-brand-camp',
      prevEl: '.btn-prev-brand-camp',
    },
  });

  //브랜드포맷01
  var BRANDFORMAT01 = new Swiper('#brand-format-01',{
    slidesPerView: 4,
    spaceBetween: 10, 
    slidesPerGroup: 4,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.btn-next-brand-format-01',
      prevEl: '.btn-prev-brand-format-01',
    },

  });
  
   //브랜드포맷02
   var BRANDFORMAT02 = new Swiper('#brand-format-02',{
    slidesPerView: 4,
    spaceBetween: 10, 
    slidesPerGroup: 4,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.btn-next-brand-format-02',
      prevEl: '.btn-prev-brand-format-02',
    },
  });

     //브랜드포맷03
     var BRANDFORMAT03 = new Swiper('#brand-format-03',{
      slidesPerView: 6,
      spaceBetween: 10, 
      slidesPerGroup: 6,
      loop: false,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.btn-next-brand-format-03',
        prevEl: '.btn-prev-brand-format-03',
      },
    });

 
