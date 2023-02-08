"use strict";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const tabs = document.querySelectorAll(".best__tab");
const tabContents = document.querySelectorAll(".best__tab-content-items");

tabs.forEach((item) => {
  item.addEventListener("click", makeActive);
});

function makeActive(e) {
  const clickedTab = e.currentTarget;
  let relatedContent = clickedTab.dataset.btn;

  tabs.forEach((item) => {
    item.classList.remove("best__tab_active");
    clickedTab.classList.add("best__tab_active");
  });

  tabContents.forEach((item) => {
    item.classList.remove("best__tab-content-items_active");
    document
      .querySelector(`#${relatedContent}`)
      .classList.add("best__tab-content-items_active");
  });
}
