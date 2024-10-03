import $ from 'jquery';

//first-nested-menu
$(function () { 

  $(".menu > ul > li > a").on("click", function (event) {

    event.preventDefault();

    $(this).find('.arrow').toggleClass("rotate"); 

    $('.menu > ul > li > a > .arrow').not($(this).find('.arrow')).removeClass("rotate");

    $(this).next("ul").slideToggle();

    $(".menu ul ul").not($(this).next("ul")).slideUp();
  });

});

//second-nested-menu 
$(function () {

  $(".menu > ul > li > ul > li > a").on("click", function (e) {

    e.preventDefault();

    $(this).find('.arrow').toggleClass("rotate");     

    $('.menu > ul > li > ul > li > a .arrow').not($(this).find(".arrow")).removeClass("rotate");

    $(this).next("ul").slideToggle();

    $(".menu ul ul ul").not($(this).next("ul")).slideUp();
  });

});

//third-nested-menu
$(function () {

  $(".menu > ul > li > ul > li > ul > li > a").on("click", function (e) {

    e.preventDefault();

    $(this).find('.arrow').toggleClass("rotate");

    $('.menu > ul > li > ul > li > ul > li > a .arrow').not($(this).find(".arrow")).removeClass("rotate");

    $(this).next("ul").slideToggle();

    $(".menu ul ul ul ul").not($(this).next("ul")).slideUp();
  });

});

//forth-nested-menu
$(function () {

  $(".menu > ul > li > ul > li > ul > li > ul > li > a").on("click", function (e) {

    e.preventDefault();

    $(this).find('.arrow').toggleClass("rotate");

    $('.menu > ul > li > ul > li > ul > li > ul > li > a .arrow').not($(this).find(".arrow")).removeClass("rotate");

    $(this).next("ul").slideToggle();

    $(".menu ul ul ul ul ul").not($(this).next("ul")).slideUp();
  });

});

//fifth-nested-menu
$(function () {

  $(".menu > ul > li > ul > li > ul > li > ul > li > ul > li > a").on("click", function (e) {

    e.preventDefault();

    $(this).find('.arrow').toggleClass("rotate");

    $('.menu > ul > li > ul > li > ul > li > ul > li > ul > li > a .arrow').not($(this).find(".arrow")).removeClass("rotate");

    $(this).next("ul").slideToggle();

    $(".menu ul ul ul ul ul ul").not($(this).next("ul")).slideUp();
  });

});


$(function () {

  const aboveArrowId = document.getElementById("Header-Above-Arrow-Id");
  const belowArrowId = document.getElementById('Header-Below-Arrow-Id');
  const closeSideBarId = document.getElementById("close-sidebar-id");
  const sidebarId = document.getElementById('SideBar-Id');

  $(aboveArrowId).on("click", function (e) {
    e.preventDefault();
    $(sidebarId).toggleClass('addAboveStyleClass');
  });

  $(belowArrowId).on('click', function (e) {
    e.preventDefault();
    $(sidebarId).toggleClass('addBelowStylesClass');
  });

  $(closeSideBarId).on('click', function (e) {
    e.preventDefault();
    $(sidebarId).removeClass("addBelowStylesClass");
  });

})


$(function () {

  var windowsize = $(window).width();
  const sidebarId = document.getElementById('SideBar-Id');
  if (windowsize <= 992) {
    $(function () {
      $(this).on("click", function (e) {
        var rootElement = e.target.id
        if(rootElement === "side-id") {
          e.preventDefault();
          $(sidebarId).removeClass("addBelowStylesClass");
        }
      })
    });
  }

})

