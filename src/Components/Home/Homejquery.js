import $ from 'jquery';
import '../SideBar/SideBar.css'

$(function () {

    const getHeaderArrowId = document.getElementById('Header-Arrow-Id');
    const getSideBarId = document.getElementById("SideBar-Id"); 

    $(getHeaderArrowId).on("click", function (e) {

    e.preventDefault();

    $(getSideBarId).toggleClass("sidebar-class"); 

  });
});