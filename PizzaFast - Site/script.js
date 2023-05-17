const barras = document.querySelector(".barras");
const menu = document.querySelector(".nav-menu");

barras.addEventListener("click", () => {
    barras.classList.toggle('active');
    menu.classList.toggle('active');
})