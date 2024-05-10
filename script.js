/* I made the lot of changes in javaScript file. First of all I add the functionality that keep track of the window resize because I want to make few changes based on the window width */

window.addEventListener("load", function () {
  var updatedWidth;
  if (window.innerWidth < 880) {
    document.body.classList.add("mobile");
  } else {
    document.body.classList.remove("mobile");
  }
  window.addEventListener("resize", function () {
    updatedWidth = window.innerWidth;
    if (updatedWidth < 880) {
      document.body.classList.add("mobile");
    } else {
      document.body.classList.remove("mobile");
    }
  });
});

let hamberger = document.querySelector(".hamberger");
let mobileNav = document.querySelector(".nav-list");
let bars = document.querySelectorAll(".hamberger span");
let isActive = false;

/* In this function. I updated the bars styling to make the perfect X (cross). */
hamberger.addEventListener("click", function () {
  mobileNav.classList.toggle("open");
  if (!isActive) {
    hamberger.style.gap = "0";
    bars[0].style.transform = "translateY(2px) rotate(-135deg)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "translateY(-2px) rotate(135deg)";
    isActive = true;
  } else {
    hamberger.style.gap = "8px";
    bars[0].style.transform = "translateY(0px) rotate(0deg)";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "translateY(0px) rotate(0deg)";
    isActive = false;
  }
});
