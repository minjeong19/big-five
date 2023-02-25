const startbtn = document.querySelector(".start");
const homebtn = document.querySelector(".home");
const backbtn = document.querySelector(".back");

// BUTTON
startbtn.addEventListener("pointerdown", function () {
  startbtn.setAttribute("src", "./img/start-touch.png");
});

startbtn.addEventListener("pointerup", function () {
  startbtn.setAttribute("src", "./img/start.png");
});

homebtn.addEventListener("pointerdown", function () {
  homebtn.setAttribute("src", "./img/home-touch.png");
});

homebtn.addEventListener("pointerup", function () {
  homebtn.setAttribute("src", "./img/home.png");
});

backbtn.addEventListener("pointerdown", function () {
  backbtn.setAttribute("src", "./img/back-touch.png");
});

backbtn.addEventListener("pointerup", function () {
  backbtn.setAttribute("src", "./img/back.png");
});
