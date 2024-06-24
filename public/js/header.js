export function setUpHeader() {
  const burgerBtn = document.querySelector("#burger-btn");
  const navbar = document.querySelector(".nav_links");

  burgerBtn.addEventListener("click", () => {
    navbar.classList.toggle("show");
    burgerBtn.classList.toggle("cross");
  });

  document.querySelectorAll(".nav_links li a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("show");
      burgerBtn.classList.remove("cross");
    });
  });
}