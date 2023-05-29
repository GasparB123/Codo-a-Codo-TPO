var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

// Manual Slider
// var manualNav = function (manual) {
//   slides.forEach((slide) => {
//     slide.classList.remove('active');

//     btns.forEach((btn) => {
//       btn.classList.remove('active');
//     });
//   });

//   slides[manual].classList.add('active');
//   btns[manual].classList.add('active');
// }

// btns.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     manualNav(i);
//     currentSlide = i;
//   });
// });

// Autoplay
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 15000);
  };
  repeater();
};
repeat();

function validateForm() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var message = document.forms["contactForm"]["message"].value;

  if (name == "") {
    alert("Please enter your name.");
    return false;
  }

  if (email == "") {
    alert("Please enter your email address.");
    return false;
  }

  if (message == "") {
    alert("Please enter your message.");
    return false;
  }
}
