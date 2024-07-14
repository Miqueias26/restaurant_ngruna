
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



// Carrousel de imagens

let slideIndex = 0;
    const slides = document.querySelectorAll('.slides');
    const totalSlides = slides.length;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        slideIndex = (n + totalSlides) % totalSlides;
        slides[slideIndex].classList.add('active');
        
        // Atualiza o radio button correspondente
        document.getElementById('radio' + (slideIndex + 1)).checked = true;
    }

    function nextSlide() {
        showSlide(slideIndex + 1);
    }

    function startSlideshow() {
        setInterval(nextSlide, 5000); // Muda o slide a cada 5 segundos
    }

    // Inicia o slideshow
    startSlideshow();

    // Adiciona funcionalidade aos botões manuais
    document.querySelectorAll('.manual-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => showSlide(index));
    });
