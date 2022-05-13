//create burger button and stick to bottom right
//in the nav, create div with our burger button
//font-awesome icons for burger and x to toggle between
// media query to hide it at larger widths

//when user clicks, menu appears

const menuButton = document.querySelector(".hamburger-menu");
const navList = document.querySelector('#nav-list');
menuButton.addEventListener("click", function (e) {
  console.log(e);
  //   menu appears on the page
  navList.classList.toggle('reveal-menu');
});
