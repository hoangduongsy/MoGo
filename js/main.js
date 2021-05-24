$('.dropdown').on('click', function(e) {
    var target = $(e.target);
    var dropdown = target.closest('.dropdown');
    return !dropdown.hasClass('open') || !target.hasClass('dropdown-menu__search__input');
});

/*stick header */ 
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

/* hamburger menu */ 
const hamburger = document.getElementById('hamburger') ;
const navUL = document.getElementById('nav__links');

hamburger.addEventListener('click', () => {
navUL.classList.toggle('show');
});


/* Slick carousel */ 
$(document).ready(function(){
    $('.hero__slick-items').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnDotsHover:true,
        autoplaySpeed:1300,
        dots: false,
        fade: false,
        cssEase: 'linear',
        arrows: false,
        infinite: true
    });
});

/* Slick quote */ 
$(document).ready(function(){
  $('.quote__slick-slider').slick({
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      pauseOnDotsHover:true,
      autoplaySpeed:1500,
      dots: false,
      fade: false,
      cssEase: 'linear',
      arrows: true,
      infinite: true
  });
});

/* Slick emotion */ 
$(document).ready(function(){
  $('.reader-emotion__slick-slider').slick({
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      pauseOnDotsHover:true,
      autoplaySpeed:1500,
      dots: false,
      fade: false,
      cssEase: 'linear',
      arrows: true,
      infinite: true
  });
});

/* Dropdown sidebar */ 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}