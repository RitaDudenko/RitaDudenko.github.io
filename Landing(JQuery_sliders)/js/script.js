$(document).ready (function () {


    $(".section_toggle").click(function () {
        $(".main_part_container").slideToggle();
        $(this).toggleClass("active_section_toggle");
        $(this).toggleClass("section_toggle");
    });




  $(".link_ul").on("click", "a", function (event) {

      let id = $(this).attr("href");
      let topPosition = $(id).offset().top;

       $("body,html").animate({scrollTop:topPosition},1000);

       event.preventDefault();


  });

  const scrollButton = $(".scroll_btn");

  $(window).scroll(function () {
      ($(window).scrollTop() < 1000) ? scrollButton.addClass("hide_btn") : scrollButton.removeClass("hide_btn");

  });

  scrollButton.click(function () {
      $("body,html").animate({scrollTop:0},1000);

  })






});












