window.onload = function () {
// get arrow
const color = document.getElementById('color');
// get controller
const controller = document.getElementById('controller');
// listen for click on arrow
color.addEventListener('click', changeImg);
// function to change img
function changeImg() {
  controller.src = "img/white-controller.png";
}
}
