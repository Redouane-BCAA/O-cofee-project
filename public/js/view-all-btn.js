export function setUpViewAllCataloguePage() {
  const cardContainer = document.querySelector(".card_container");
  const viewAllBtn = document.querySelector(".view_all_btn");

  viewAllBtn.addEventListener("click", function () {
    if (viewAllBtn.textContent === "Voir tout") {
      cardContainer.style.height = "auto";
      cardContainer.style.overflow = "auto";
      viewAllBtn.textContent = "Voir moins";
    } else {
      cardContainer.style.height = "";
      cardContainer.style.overflow = "";
      viewAllBtn.textContent = "Voir tout";
    }
  });
}

