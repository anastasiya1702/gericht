// login-form

function closeLoginForm() {
  var loginForm = document.getElementById('login_form');
  loginForm.style.display = 'none';
}

document.getElementById('login_link').addEventListener('click', function () {
  var loginForm = document.getElementById('login_form');
  loginForm.style.display = (loginForm.style.display === 'flex') ? 'none' : 'flex';
});

document.getElementById('login_link-mobaile').addEventListener('click', function () {
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

document.getElementById('registration_link-mobaile').addEventListener('click', function () {
  var RegistrationForm = document.getElementById('registration_form');
  RegistrationForm.style.display = (RegistrationForm.style.display === 'flex') ? 'none' : 'flex';
});


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
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    verticalSwiping: true,
    fade: false,
    cssEase: 'linear',
    pauseOnDotsHover: true,
    customPaging: function (slider, i) {
      var slideNumber = i + 1;
      var formattedNumber = slideNumber < 10 ? '0' + slideNumber : slideNumber;
      return '<span>' + formattedNumber + '</span>';
    }
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


  const menuBtn = document.querySelector('.menu__btn');
  const menuClose = document.querySelector('.nav-menu__close');
  const menuList = document.querySelector('.nav-menu');
  const menuShadow = document.querySelector('.menu-close');

  menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('nav-menu--active');
    menuShadow.classList.toggle('menu--open');
  });

  menuClose.addEventListener('click', () => {
    menuList.classList.remove('nav-menu--active');
    menuShadow.classList.remove('menu--open');
  });

});


// // barba

// barba.init({
//   views: [{
//     namespace: 'home',
//     afterEnter() {
//       homePage();
//     }
//   }],

//   transitions: [{
//     name: 'opacity-transition',
//     sync: true,
//     leave(data) {
//       return gsap.timeline().to(data.current.container, {
//         opacity: 0
//       })
//       .fromTo('.box', {
//         duration: 1, delay: 1,
//         x: '120%'
//       }, {
//         x: '-120%'
//       }, 0)
//     },
//     enter(data) {
//       return gsap.from(data.next.container, {
//         opacity: 0
//       });
//     }
//   }]
// })
// function homePage() {

 

// }








