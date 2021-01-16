"use strict";

var pageHeaderWrapper = document.querySelector(".page-header__wrapper");
var mainNavToggle = document.querySelector(".main-nav__toggle");
var siteList = document.querySelector(".site-list");

pageHeaderWrapper.classList.remove("page-header__wrapper--nojs");

mainNavToggle.addEventListener("click", function () {
  if (mainNavToggle.classList.contains("main-nav__toggle--closed")) {
    mainNavToggle.classList.remove("main-nav__toggle--closed");
    siteList.style.display = "none";
  } else {
    mainNavToggle.classList.add("main-nav__toggle--closed");
    siteList.style.display = "block";
    siteList.style.position = "static";
    pageHeaderWrapper.style.display = "block";
  }
});
