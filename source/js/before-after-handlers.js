"use strict";

var catBeforeAfterBefore = document.querySelector(".cat-before-after__before");
var catBeforeAfterAfter = document.querySelector(".cat-before-after__after");
var pictureBefore = document.querySelector(".cat-before-after__picture-before");
var pictureAfter = document.querySelector(".cat-before-after__picture-after");

var catBeforeAfterBeforeTablet = document.querySelector(
  ".cat-before-after__before--tablet"
);
var catBeforeAfterAfterTablet = document.querySelector(
  ".cat-before-after__after--tablet"
);
var pictureBeforeTablet = document.querySelector(
  ".cat-before-after__picture-before--tablet"
);
var pictureAfterTablet = document.querySelector(
  ".cat-before-after__picture-after--tablet"
);

function changePhoto(before, after, styleFirst, styleSecond) {
  before.style.display = styleFirst;
  after.style.display = styleSecond;
}

catBeforeAfterBefore.addEventListener("click", function () {
  changePhoto(pictureBefore, pictureAfter, "block", "none");
});

catBeforeAfterAfter.addEventListener("click", function () {
  changePhoto(pictureBefore, pictureAfter, "none", "block");
});

catBeforeAfterBeforeTablet.addEventListener("click", function () {
  changePhoto(pictureBeforeTablet, pictureAfterTablet, "block", "none");
});

catBeforeAfterAfterTablet.addEventListener("click", function () {
  changePhoto(pictureBeforeTablet, pictureAfterTablet, "none", "block");
});
