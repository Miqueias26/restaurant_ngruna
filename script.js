
const menu = document.querySelector(".show-menu")

const openMenu = () => {
    menu.style.left = "0"
    document.body.style.overflow = "hidden";
}

const closeMenu = () => {
    menu.style.left = "-110%"
    document.body.style.overflow = "visible";

    document.body.style.overflowX = 'hidden'
}

document.addEventListener("DOMContentLoaded", function() {
    // Verificar se o usuário já aceitou os cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookieConsent').style.display = 'block';
    }

    // Adicionar evento de clique ao botão de aceitar
    document.getElementById('acceptCookies').addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookieConsent').style.display = 'none';
    });
});

