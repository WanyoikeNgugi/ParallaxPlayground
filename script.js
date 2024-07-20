const phoneElement = document.getElementById("phone");

function moveText() {
  const phoneSpeed = 2;

  let phonePosition = parseInt(phoneElement.style.left) || 0;
  phonePosition += phoneSpeed;
  phoneElement.style.left = phonePosition + "px";

  if (phonePosition > window.innerWidth) {
    phoneElement.style.left = -phoneElement.clientWidth + "px";
  }

  requestAnimationFrame(moveText);
}

moveText();
const slideshow = document.querySelector(".slideshow");
const images = document.querySelectorAll(".slideshow img");
let currentImageIndex = 0;
const slideWidth = slideshow.clientWidth;
const slideInterval = 10000;

function slideImages() {
  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;

    images.forEach((img, index) => {
      let position = (index - currentImageIndex) * slideWidth;
      img.style.transition = "transform 2s ease";
      img.style.transform = `translateX(${position}px)`;
    });
  }, slideInterval);
}
slideImages();

const slideShowTransition = document.getElementById("slideShowTransition");
slideShowTransition.style.opacity = "0";
let opacityValue = 0;

function fadeIn() {
  if (opacityValue < 10) {
    opacityValue += 0.01;
    slideShowTransition.style.opacity = opacityValue;
    setTimeout(fadeIn, 10);
  }
}
fadeIn();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var parallax = document.getElementById("parallax");
  var yOffset = 0;

  function updateParallax() {
    parallax.style.transform = "translate3d(0, " + yOffset * 0.5 + "px, 0)";
    requestAnimationFrame(updateParallax);
  }

  window.addEventListener("scroll", function () {
    yOffset = window.pageYOffset;
  });

  updateParallax(); // Initial call to start the animation
});
