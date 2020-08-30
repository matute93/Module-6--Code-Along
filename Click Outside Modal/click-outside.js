const cardButtons = document.querySelectorAll(".card button");
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");

function handleCardButtonClick(e) {
  const button = e.currentTarget;
  const card = button.closest(".card");


  // Take img from src


  const imgSrc = card.querySelector("img").src;
  const desc = card.dataset.description;
  const name = card.querySelector("h2").textContent;
  // inserting new info to modal
  modalInner.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace(
      "200",
      "600"
    )}" alt="${name}"/>
    <p>${desc}</p>
  `;
//   show the modal
  modalOuter.classList.add("open");
}

cardButtons.forEach((button) =>
  button.addEventListener("click", handleCardButtonClick)
);

function closeModal() {
  modalOuter.classList.remove("open");
}

modalOuter.addEventListener("click", function (e) {
  const isOutside = !e.target.closest(".modal-inner");
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key === "Escape") {
    closeModal();
  }
});