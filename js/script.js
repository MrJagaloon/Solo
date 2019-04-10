/* ==============================================
  Preloader 
============================================== */
//#region

$(window).on('load', function () {
  // fade out preloader
  $('#status').fadeOut('slow');
  $('#preloader').delay(350).fadeOut('slow');
});

//#endregion

/* ==============================================
  Team 
============================================== */
//#region

$(function () {

  // setup team member carousel
  $("#team-members").owlCarousel({
    items: 2,
    loop: true,
    smartSpeed: 700,
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
  });

  // animate progress bars on scroll
  $('#progress-elements').waypoint(function () {
    $('.progress-bar').each(function () {
      $(this).animate({
        width: $(this).attr('aria-valuenow') + '%'
      }, 1000);
    });
    this.destroy();
  }, {
    offset: 'bottom-in-view'
  });
});

//#endregion

/* ==============================================
  Services Responsive Tabs 
============================================== */
//#region

$(function () {
  $('#services-tabs').responsiveTabs({
    animation: 'slide'
  });
});

//#endregion

/* ==============================================
  Portfolio
============================================== */
//#region

// initilaize magnific popup for portfolio items
$(function () {
  $('#portfolio-wrapper').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});

// initialize isotope for filtering portfolio items
$(window).on('load', function () {
  const $isotopeGrid = $('#isotope-container').isotope();
  const $isotopeFilters = $('#isotope-filters');

  // filter portfolio on fliter button click
  $isotopeFilters.on('click', 'button', function () {
    // filter items
    const filterValue = $(this).attr('data-filter');
    $isotopeGrid.isotope({
      filter: filterValue
    });

    // set active class for pressed filter button
    $isotopeFilters.find('.active').removeClass('active');
    $(this).addClass('active');
  });
});

//#endregion