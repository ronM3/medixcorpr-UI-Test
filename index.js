let width;
const desktopHeader = document.getElementById("header");
const mobileHeader = document.getElementById("header-mobile");
const navContainer = document.getElementById("nav-bar");
let navbar = document.getElementById("nav");
const links = document.querySelectorAll(".nav-link");

navbar.addEventListener("click", () => {
  navbar.classList.toggle("--close");
});
window.onload = function () {
  width = window.innerWidth;
  collapseNav(width);
};
window.addEventListener("scroll", reveal);

window.onresize = function () {
  width = window.innerWidth;
  collapseNav(width);
  console.log("Width is" + width);
};

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    for (let j = 0; j < links.length; j++) {
      links[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}

function reveal() {
  const reveals = document.querySelectorAll(".servicesText.card");
  for (var i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      const animation = reveals[i].dataset.animation;
      if (animation) {
        reveals[i].classList.add(animation);
      }
    } else {
      reveals[i].classList.remove("active");
      const animation = reveals[i].dataset.animation;
      if (animation) {
        reveals[i].classList.remove(animation);
      }
    }
  }
}
function collapseNav(width) {
  console.log(width);
  if (width <= 768) {
    desktopHeader.style.display = "none";
    mobileHeader.style.display = "flex";
    mobileHeader.classList.toggle("--mobile");
    navContainer.style.display = "block";
  } else {
    desktopHeader.style.display = "flex";
    mobileHeader.style.display = "none";
  }
}
