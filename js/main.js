$(function () {


  // gallery - slider

  $('.gallery-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 900,
    centerMode: false,
    variableWidth: true
  });


  // menu - tabs

  $('.menu-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.menu-tabs__top-item').removeClass('menu-tabs__top-item--active');
    $(this).addClass('menu-tabs__top-item--active');

    $('.menu-tabs__content-item').removeClass('menu-tabs__content-item--active');
    $($(this).attr('href')).addClass('menu-tabs__content-item--active');
  });


  // header - slider

  $('.header-slider').slick({
    dots: true,
    arrows: false,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: false,
    autoplaySpeed: 2000,
    verticalSwiping: true,
    centerMode: true,
  });

  
  // form-reserv

  $('datalist#numbers').on('change', function () {
    $('input[name="number"]').val(this.value);
  });

  $('datalist#dates').on('change', function () {
    $('input[name="date"]').val(this.value);
  });

  $('datalist#datetimes').on('change', function () {
    $('input[name="datetime"]').val(this.value);
  });




  // const menuBtn = document.querySelector('.menu__btn');
  // const menuClose = document.querySelector('.menu__close');
  // const menuList = document.querySelector('.header__menu');
  // const menuShadow = document.querySelector('.menu-close');

  // menuBtn.addEventListener('click', () => {
  //   menuList.classList.toggle('header__menu--active');
  //   menuShadow.classList.toggle('menu--open');
  // });

  // menuClose.addEventListener('click', () => {
  //   menuList.classList.remove('header__menu--active');
  //   menuShadow.classList.remove('menu--open');
  // });

});


  // btn-top go-top

$(function () {
  $.fn.scrollToTop = function () {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
    var scrollDiv = $(this);
    $(window).scroll(function () {
      if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
      else $(scrollDiv).fadeIn("slow")
    });
    $(this).click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow")
    })
  }
});

$(function () {
  $("#go-top").scrollToTop();
});


  // login-form

function closeLoginForm() {
  var loginForm = document.getElementById('login_form');
  loginForm.style.display = 'none';
}

document.getElementById('login_link').addEventListener('click', function () {
  var loginForm = document.getElementById('login_form');
  loginForm.style.display = (loginForm.style.display === 'flex') ? 'none' : 'flex';
});


  // registration-form

function closeRegistrationForm() {
  var RegistrationForm = document.getElementById('registration_form');
  RegistrationForm.style.display = 'none';
}

document.getElementById('registration_link').addEventListener('click', function () {
  var RegistrationForm = document.getElementById('registration_form');
  RegistrationForm.style.display = (RegistrationForm.style.display === 'flex') ? 'none' : 'flex';
});
