const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");
const signIn = document.getElementById("sign_in");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav_link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  })
);
