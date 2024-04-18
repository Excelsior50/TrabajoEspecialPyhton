
//Menu Boton hamburguesa

const buttonHamburguesa = document.querySelector(".hamburguesa")
buttonHamburguesa.addEventListener("click", ()=>{
    const menu = document.querySelector(".menuContainer")
    menu.classList.toggle("--active")
})