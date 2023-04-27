$(document).ready(function () {
  $(".modal_open").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    let modal = $(this).attr("data-modalName");
    $("#" + modal + "").addClass("active");
  })

  $(".custom_modal .close").click(function () {
    // console.log("close");
    $(this).closest(".custom_modal").removeClass("active");
  })

  // scroll_actions -active
  $(".scroll_actions li span").click(function () {
    $(this).parent().parent().parent(".scroll_actions").toggleClass("active");
  })

  // profile_card_show
  $(".open_popup").click(function (e) {
    // e.stopPropagation();
    // e.preventDefault();
    $(this).next(".action_popup").toggleClass("active");
  });

  $(".close_popup").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).closest(".action_popup").removeClass("active");
  })

  $(".docs_mainwrap p, .info_table .accordion-toggle").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
  })
  $('.verticalHandle').on('click', function (event) {
    if ($(this).hasClass('opened')) {
      $('#leftContentContainer').addClass("d-none");
      $('#rightContentContainer').removeClass("col-md-9");
      $('#rightContentContainer').addClass("col-md-12");
      $('.verticalHandle').toggleClass('closed opened');
    } else {
      $('#leftContentContainer').removeClass("d-none");
      $('#rightContentContainer').addClass("col-md-9");
      $('#rightContentContainer').removeClass("col-md-12");
      $('.verticalHandle').toggleClass('closed opened');
    }
    $('.box').matchHeight();
  });

$('.gen-tab').on('click', function () {
  showActiveTabContent($(this));
});
function showActiveTabContent(thiss) {
  var tabname = thiss.data('tab');
  $('*[data-content], *[data-tab]').removeClass('active');
  $('*[data-content="' + tabname + '"], *[data-tab="' + tabname + '"]').addClass('active');
}

  // var windowHeight = $(window).height();
  // var navHeight = $('.nav_menu.without_top_omne_bar').height();
  // var secondaryNavHeight = $('.secondary_nav.without_top_omne_bar').height();
  // var sendOffDetailsHeight = $('.sendOff_details').height();
  // $('.doc_inbox').css({'min-height': windowHeight - navHeight - secondaryNavHeight - sendOffDetailsHeight - 55});
})
$(function () {
  $('.box').matchHeight();
});
