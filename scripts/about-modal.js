// cache all our query selectors
const about = document.querySelector(".about"); //this is the 'about' in nav bar
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");

// OPEN --------------------------

// add event listener to the "about" link in the nav bar
about.addEventListener("click", function (e) {
  // stop new page load since this is anchor tag
  e.preventDefault();
  //toggle hidden class
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

//CLOSE -----------------------------

// because this is needed in multiple event listeners, we make it into a separate function;
function closeModal() {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

// add event listener to the "close" button in the about-modal
closeBtn.addEventListener("click", closeModal);

//add event listener to the overlay
overlay.addEventListener("click", closeModal);

// add eventlistener to close the modal on pressing 'esc' or clicking outside of the modal window
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
