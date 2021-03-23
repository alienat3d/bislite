$(function () {
  // *jquery 'slick slider'
  $('.slider__inner').slick({
    arrows: false,
    dots: true,
  });

  $('.works__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/slider/slider-left-arrow.svg"></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/slider/slider-right-arrow.svg"></button>',
  });

  // *burger menu -> change state on click
  $('.header__menu-btn').on('click', function () {
    $('.header__menu > ul').slideToggle();
  });

  // '(this)' using to force JS working only with 1 element, that been clicked on / childen' allows to get inside into the nesting
  $('.header__drop-down.drop-down').on('click', function () {
    $(this).children('.drop-down__list').slideToggle('active');
  });
});
