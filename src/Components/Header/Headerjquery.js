import $ from 'jquery';

$(function () {

  const getAboveArrowId = document.getElementById('header-above-arrow-icon');

  $(getAboveArrowId).on("click", function (e) {

    e.preventDefault();

    $(getAboveArrowId).toggleClass("rotate-nav-arrow");

  });

});