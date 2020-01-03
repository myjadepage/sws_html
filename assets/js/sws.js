// sidebar small or large
$('#menu_toggle').on('click', function() {
  $('.wrapper').toggleClass('sidebar-lg sidebar-sm')
});

// live 오늘의 방송보기
var swiper = new Swiper('#live-today', {
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
  var swiper2 = new Swiper('#event-area', {
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
  var swiper3 = new Swiper('#today-spec', {
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
  var swiper4 = new Swiper('#today-pop', {
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
  var swiper5 = new Swiper('#it-brand', {
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

