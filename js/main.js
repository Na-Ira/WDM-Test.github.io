// loader page
let wrapload = document.querySelector(".loading");

//fade out effect
const fadeOut = function (el) {
  el.classList.add("load-hide");
  el.classList.remove("load-show");
};

const loadder = function () {
  setTimeout(() => {
    fadeOut(wrapload);
  }, 1000);
};
// window load
window.addEventListener("load", () => {
  //load animation page
  loadder();
});

window.addEventListener("DOMContentLoaded", () => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Add bg-mob class to navbar
  const navButton = document.querySelector(".navbar-toggler");
  const header = document.querySelector("#mainNav");

  navButton.addEventListener("click", () => {
    header.classList.toggle("bg-mob");
  });

  /* Hide the collapsible responsive navigation bar when you click on a link (except dropdown menus)
   */
  const hum = document.querySelector(".ham");
  document
    .querySelectorAll(".navbar-collapse .nav-link:not(.dropdown-toggle)")
    .forEach((itm) => {
      itm.addEventListener("click", () => {
        document.querySelector(".navbar-toggler").click();
        hum.classList.remove("active");
        itm.classList.remove("active");
      });
    });
});

// testimonials slider
const splide = new Splide(".splide", {
  type: "loop",
  gap: "2.5rem",
  pagination: false,
  perPage: 1,
  perMove: 1,
  trimSpace: "move",
  focus: "center",
  // height: "21.25rem",
  cover: true,
  video: {
    loop: false,
    mute: true,
  },
});

const bar = splide.root.querySelector(".my-slider-progress-bar");

// Updates the bar width whenever the carousel moves:
splide.on("mounted move", function () {
  let end = splide.Components.Controller.getEnd() + 1;
  let rate = Math.min((splide.index + 1) / end, 1);
  bar.style.width = String(100 * rate) + "%";
});

splide.mount(window.splide.Extensions);
// end testimonials slider

AOS.init();