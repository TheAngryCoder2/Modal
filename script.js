const openModalBtnElement = document.querySelector("#openModal");
const modalElement = document.querySelector(".modal");
const modalContentElement = document.querySelector(".modalContent");

openModalBtnElement.addEventListener("click", () => {
    modalElement.classList.add("open");
});

modalContentElement.addEventListener("click", () => {
    modalElement.classList.remove("open");
});