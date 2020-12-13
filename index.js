const prev = document.getElementById("prev");
const next = document.getElementById("next");
let mainImage = document.querySelector("container__main__img");
var backgroundImg = new Array(
  "image/1.jpg",
  "image/2.jpg",
  "image/3.jpg",
  "image/4.jpg"
);
let i = 0;
next.onclick = function () {
  mainImage.style.backgroundImage = `url("` + backgroundImg[i + 1] + `")`;
};
