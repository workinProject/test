/*Крестик на специальном предложении*/
let cross = document.getElementById('close');

cross.onclick = function() {
    cross.parentElement.remove();
};
/*----------------------------------*/

/*Главный слайдер*/
$('.main-slider').slick({
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    infinite: true,
	dots: true
});
/*----------------*/

/*Слайдер в карточке товара*/
$('.slider-forN').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  responsive: [
    {
      breakpoint: 425,
      settings: {
      }
    }
  ]
});
$('.slider-navN').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-forN',
  focusOnSelect: true,
  vertical: true,
  arrows:false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        vertical:false,
        }
    }
    
  ]
});
/*------------------------*/


/*Кнопки для прибавления и удаления количества в инпуте в карточке товара*/
$(function() {
  (function quantityProducts() {
    let $quantityArrowMinus = $(".quantity-arrow-minus");
    let $quantityArrowPlus = $(".quantity-arrow-plus");
    let $quantityNum = $(".quantity-num");
 
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);
 
    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }
 
    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
});
/*---------------------------------------------------------------------------*/

  $(window).scroll(function(){
    $('#fix-top').toggleClass('fixed-top', $(this).scrollTop() > 0);
    //$('.header-container').toggleClass('displayNone', $(this).scrollTop() > 0);
  
    if($(window).width() < 769){
      $('#top-header__basket').toggleClass('fixed-top__basket', $(this).scrollTop() > 0);
      if( $(this).scrollTop() > 0){
        $('#image').attr('src', 'img/basket-mobile.png');
        $('#basket__number').css("color", "white");
        $('.city-container').css('display', 'none'); 
      }
      else{
        $('#image').attr('src', 'img/basket.png');
        $('#basket__number').css("color", "#B10802");
        $('.city-container').css('display', 'block');  
      }
    }

  })

  $( document ).ready(function(){
	  $( ".mobile-burger" ).click(function(){ 
      $( ".mobile-burger" ).css('display', 'none'); 
      $( ".mobile-cross" ).css('display', 'block'); 
    });
    
    $( ".mobile-cross" ).click(function(){ 
      $( ".mobile-cross" ).css('display', 'none'); 
      $( ".mobile-burger" ).css('display', 'block'); 
	  });
  });
  
  
$('.slick-reviews').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".prev-reviews"),
  nextArrow: $(".next-reviews"),
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
