// Select all slides [NodeList]
const slides = document.querySelectorAll(".slide");
// loop through each slide, and transform:translate them
slides.forEach((slide, index) => {
  slide.style.transform = `translate(${index * 100}%)`;
});

// add a counter to keep track of which slide we're on
let currentSlide = 0;

// select the next + prev buttons
const next = document.querySelector(".btn-next");
const prev = document.querySelector(".btn-prev");

// add click eventlistener to btn-next
next.addEventListener("click", function () {
  //if at the end of array of slides update counter to 0
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    //else increase counter by 1
    currentSlide++;
  }
  // change the transform:translate amount
  slides.forEach((slide, index) => {
    slide.style.transform = `translate(${100 * (index - currentSlide)}%)`;
  });
});

// add click eventlistener to btn-prev
prev.addEventListener("click", function () {
  //if at the end of array of slides update counter to 0
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    //else increase counter by 1
    currentSlide--;
  }
  // change the transform:translate amount
  slides.forEach((slide, index) => {
    slide.style.transform = `translate(${100 * (index - currentSlide)}%)`;
  });
});
