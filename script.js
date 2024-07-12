
const menu = document.querySelector(".show-menu")

const openMenu = () => {
    menu.style.left = "0"
    document.body.style.overflow = "hidden";
}

const closeMenu = () => {
    menu.style.left = "-110%"
    document.body.style.overflow = "visible";
}


