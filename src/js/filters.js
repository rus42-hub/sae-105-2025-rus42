const filterBtns = document.querySelectorAll(".filter__btn");
const filterItems = document.querySelectorAll(".filter__item");
const artistCards = document.querySelectorAll(".artist-card");


filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const list = btn.nextElementSibling;
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !expanded);
    list.hidden = expanded;
  });
});


filterItems.forEach(item => {
  item.addEventListener("click", () => {
    const filterType = item.closest(".filter").classList.contains("filter--scene")
      ? "scene"
      : item.closest(".filter").classList.contains("filter--day")
      ? "day"
      : "genre";

    const value = item.textContent;

    artistCards.forEach(card => {
      card.style.display = card.dataset[filterType] === value ? "flex" : "none";
    });

    
    item.parentElement.hidden = true;
    item.closest(".filter__btn").setAttribute("aria-expanded", false);
  });
});
