/* ==============================================
  Preloader 
============================================== */
/*#region*/

$(window).on('load', function () {
  // fade out preloader
  $('#status').fadeOut('slow');
  $('#preloader').delay(350).fadeOut('slow');
});

/*#endregion*/

/* ==============================================
  Team 
============================================== */
/*#region*/

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

/*#endregion*/

/* ==============================================
  Services Responsive Tabs 
============================================== */
/*#region*/

$(function () {
  $('#services-tabs').responsiveTabs({
    animation: 'slide'
  });
});

/*#endregion*/

/* ==============================================
  Portfolio 
============================================== */
/*#region*/

$(window).on('load', function () {
  // initialize isotope
  const $isotopeGrid = $('#isotope-container').isotope({});
  const $isotopeFilters = $('#isotope-filters');

  // filter portfolio on fliter button click
  $isotopeFilters.on('click', 'button', function() {
    const filterValue = $(this).attr('data-filter');

    $isotopeGrid.isotope({ filter: filterValue });

    $isotopeFilters.find('.active').removeClass('active');
    $(this).addClass('active');
  });
});

/*#endregion*/