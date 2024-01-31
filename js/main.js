$(function () {

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


  // $('.js-collapse-btn').on('click', function () {
  //   $(this).parent().siblings().find('.js-collapse-box').slideUp();
  //   $(this).parent().siblings().find('.js-collapse-btn').removeClass('js-collapse-btn--active');

  //   $(this).siblings('.js-collapse-box').slideToggle();
  //   $(this).toggleClass('js-collapse-btn--active');
  // });


  // $('.details-tabs__top-item').on('click', function (e) {
  //   e.preventDefault();
  //   $('.details-tabs__top-item').removeClass('details-tabs__top-item--active');
  //   $(this).addClass('details-tabs__top-item--active');

  //   $('.details-tabs__content-item').removeClass('details-tabs__content-item--active');
  //   $($(this).attr('href')).addClass('details-tabs__content-item--active');
  // });


// $(document).ready(function () {
//   $('body').append('<a href="#" id="go-top"></a>');
});

// $(function () {
//   $.fn.scrollToTop = function () {
//     $(this).hide().removeAttr("href");
//     if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
//     var scrollDiv = $(this);
//     $(window).scroll(function () {
//       if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
//       else $(scrollDiv).fadeIn("slow")
//     });
//     $(this).click(function () {
//       $("html, body").animate({ scrollTop: 0 }, "slow")
//     })
//   }
// });

// $(function () {
//   $("#go-top").scrollToTop();
// });

// document.getElementById('modal').style.display = 'none';

// function loginlink() {
//   document.getElementById('modal').style.display = 'block';
// }

// document.getElementById('login_link').addEventListener('click', function () {
//   var loginForm = document.getElementById('login_form');
//   // Переключение состояния видимости формы при клике на ссылку
//   loginForm.style.display = (loginForm.style.display === 'flex') ? 'none' : 'flex';
// });

// function closeLoginForm() {
//   var loginForm = document.getElementById('login_form');
//   loginForm.style.display = 'none';
// }

// document.getElementById('login_link').addEventListener('click', function () {
//   var loginForm = document.getElementById('login_form');
//   loginForm.style.display = (loginForm.style.display === 'flex') ? 'none' : 'flex';
// });

function closeLoginForm() {
  var loginForm = document.getElementById('login_form');
  loginForm.style.display = 'none';
}

document.getElementById('login_link').addEventListener('click', function () {
  var loginForm = document.getElementById('login_form');
  loginForm.style.display = (loginForm.style.display === 'flex') ? 'none' : 'flex';
});



function closeRegistrationForm() {
  var RegistrationForm = document.getElementById('registration_form');
  RegistrationForm.style.display = 'none';
}

document.getElementById('registration_link').addEventListener('click', function () {
  var RegistrationForm = document.getElementById('registration_form');
  RegistrationForm.style.display = (RegistrationForm.style.display === 'flex') ? 'none' : 'flex';
});
