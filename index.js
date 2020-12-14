const prev = document.getElementById("prev");
const next = document.getElementById("next");
const mainImage = document.querySelector(".container__main__img");
var backgroundImg = new Array(
  "image/1.jpg",
  "image/2.jpg",
  "image/3.jpg",
  "image/4.jpg"
);
let imageNumber = 1;

function nextNumber() {
  imageNumber = imageNumber + 1;
  if (imageNumber === 5) {
    imageNumber = 4;
  }
  return imageNumber;
}

function prevNumber() {
  imageNumber = imageNumber - 1;
  if (imageNumber === 0) {
    imageNumber = 1;
  }
  return imageNumber;
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `image/${imgNumber}.jpg`;
  mainImage.removeChild(mainImage.firstChild);
  image.classList.add("bgImage");
  mainImage.prepend(image);
}

next.onclick = function () {
  const getNumber = nextNumber();
  paintImage(getNumber);
};
prev.onclick = function () {
  const getNumber = prevNumber();
  paintImage(getNumber);
};

function init() {
  const getNumber = prevNumber();
  paintImage(getNumber);
}
init();
