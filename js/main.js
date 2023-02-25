const startbtn = document.querySelector(".start");
const homebtn = document.querySelector(".home");

// BUTTON
// console.log(startbtn);
// startbtn.addEventListener("mousedown", function () {
//   startbtn.setAttribute("src", "./img/start-touch.png");
// });

// console.log(startbtn);
// startbtn.addEventListener("touchstart", function () {
//   startbtn.setAttribute("src", "./img/start-touch.png");
// });

// console.log(startbtn);
// startbtn.addEventListener("mouseup", function () {
//   startbtn.setAttribute("src", "./img/start.png");
// });

// console.log(startbtn);
// startbtn.addEventListener("touchend", function () {
//   startbtn.setAttribute("src", "./img/start.png");
// });
startbtn.addEventListener("pointerdown", function () {
  startbtn.setAttribute("src", "./img/start-touch.png");
});

startbtn.addEventListener("pointerup", function () {
  startbtn.setAttribute("src", "./img/start.png");
});
