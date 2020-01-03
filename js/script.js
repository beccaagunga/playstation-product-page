

window.onload = function () {
// get contorller color
const black = document.getElementsByClassName('black')[0];
const white = document.getElementsByClassName('white')[0];
const purple = document.getElementsByClassName('purple')[0];
// get controller
const controller = document.getElementById('controller');
// listen for click of each color
black.addEventListener('click', changeImgBlack);
white.addEventListener('click', changeImgWhite);
purple.addEventListener('click', changeImgPurple);
// function to change img
function changeImgBlack() {
  controller.src = "img/blk-controller.png";
  }
function changeImgWhite() {
  controller.src = "img/white-controller.png";
  }
function changeImgPurple() {
  controller.src = "img/purple-controller.png";
  }

}
