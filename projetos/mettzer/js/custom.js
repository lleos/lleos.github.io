/* Auto close navbar on click (mobile menu) */
$(".navbar-nav > li > a").click(function() {
  $(".navbar-collapse").collapse('hide');
});

/* Change navbar class on scroll */
$(".wrapper").waypoint(function() {
  $(".navbar").toggleClass("js-navbar-top");
  $(".navbar.js-toggleClass").toggleClass("navbar-default navbar-inverse");
  return false;
}, { offset: "-20px" });

/* Change navbar class on collapse/uncollapse in its top position */
$('.wrapper .navbar-collapse').on('show.bs.collapse', function () {
  $(".navbar.js-navbar-top").toggleClass("navbar-default navbar-inverse");
  $(".navbar").toggleClass("js-toggleClass js-noToggleClass");
});

$('.wrapper .navbar-collapse').on('hide.bs.collapse', function () {
  $(".navbar.js-navbar-top").toggleClass("navbar-default navbar-inverse");
  $(".navbar").toggleClass("js-toggleClass js-noToggleClass");
});

/* Sidebar */
$(".js-toggle-sidebar").on('click', function() {
  $(".wrapper").toggleClass("js-wrapper-aside");
  $(".navbar").toggleClass("js-navbar-aside");
  $(".sidebar").toggleClass("js-sidebar-aside");
  return false;
});

/*** Smooth scroll to anchor*/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top - 45) // 70px offset for navbar menu
        }, 1000);
        return false;
      }
    }
  });
});

/*** change logo on scroll*/
$(function() { var logo = $(".lrg-logo"); $(window).scroll(function() {
var scroll = $(window).scrollTop();
    if (scroll >= 90) {
      if(!logo.hasClass("sml-logo")) {
        logo.hide();
        logo.removeClass('lrg-logo').addClass("sml-logo").fadeIn( "slow");
      }
    } else {
      if(!logo.hasClass("lrg-logo")) {
        logo.hide();
        logo.removeClass("sml-logo").addClass('lrg-logo').fadeIn( "slow");
      }
    }
  });
});

/*** Wow plugin bottom offset calculation*/
$(".wow").each(function() {
  var wowHeight = $(this).height();
  $(this).attr("data-wow-offset", wowHeight);
});
new WOW().init();
