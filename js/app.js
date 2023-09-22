$(document).ready(function () {
   
 $('.certificate-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    asNavFor: '.certificate-image-list'
  });
  $('.certificate-image-list').slick({
   
    slidesToShow: 3,
   
    asNavFor: '.certificate-list',
    infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
  
  });
          
});

