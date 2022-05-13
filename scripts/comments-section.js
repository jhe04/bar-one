// --------------------COMMENTS SECTION -------------------------

//create array to store days of week
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// submit event listener for the form
const formEl = document.querySelector("form");
const commentsEl = document.querySelector(".comments-section");
formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  //grab user's input
  const name = document.querySelector("input[id=name]").value;
  const comment = document.querySelector("textarea").value;

  //   creating the date
  const date = new Date();
  const currentDate = `${daysOfWeek[date.getDay()]} ${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
  console.log(currentDate);

  //   SETTING UP THE HTML TEMPLATE FOR COMMENTS

  //   Main Div
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("comments");

  //   Image Div
  const commentsImageDiv = document.createElement("div");
  commentsImageDiv.classList.add("comments-image");
  const imageEl = document.createElement("img");
  imageEl.src = "../assets/comment-image-1.jpg";
  imageEl.alt = "User picture";
  commentsImageDiv.appendChild(imageEl);

  //   Comment Div
  const commentsContentDiv = document.createElement("div");
  commentsContentDiv.classList.add("comments-content");
  const commentsHeading = document.createElement("h3");
  commentsHeading.textContent = `${currentDate} by ${name}`;
  const commentContent = document.createElement("p");
  commentContent.textContent = `${comment}`;
  commentsContentDiv.appendChild(commentsHeading);
  commentsContentDiv.appendChild(commentContent);

  //   Appending to Main Div
  mainDiv.appendChild(commentsImageDiv);
  mainDiv.appendChild(commentsContentDiv);

  //   Adding to the HTML
  commentsEl.appendChild(mainDiv);
});

// grab user's comment and put into the html

// {<div class="comments-image">
//                 <img
//                   src="./assets/comment-image-1.jpg"
//                   alt="headshot of Sulaire"
//                 />
//               </div>
//               <div class="comments-content">
//                 <h3>Tuesday October 9th, 2019 by Sulaire</h3>
//                 <p>
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Minima soluta dicta in similique atque voluptatum consequatur
//                   blanditiis facilis laborum totam, animi quasi provident nisi
//                   rem quibusdam omnis dolor ex quis vero iure consectetur
//                   aspernatur incidunt sapiente? Voluptatibus et quisquam
//                   tenetur?
//                 </p>
//               </div>
//             </div>}
