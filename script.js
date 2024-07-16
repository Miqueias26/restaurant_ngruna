
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
        
    }

    function nextSlide() {
        showSlide(slideIndex + 1);
    }
    
    function startSlideshow() {
        setInterval(nextSlide, 5000); // Muda o slide a cada 5 segundos
    }
    
    // Inicia o slideshow quando a página carrega
    document.addEventListener('DOMContentLoaded', function() {
        showSlide(0); // Mostra o primeiro slide
        startSlideshow(); // Inicia o slideshow automático
    });   
    

    document.addEventListener('DOMContentLoaded', function() {
        const carousel = document.querySelector('.carrousel');
        const leftBtn = document.getElementById('left');
        const rightBtn = document.getElementById('right');
        const imgWidth = carousel.querySelector('img').clientWidth;
    
        leftBtn.addEventListener('click', () => {
            carousel.scrollLeft -= imgWidth;
        });
    
        rightBtn.addEventListener('click', () => {
            carousel.scrollLeft += imgWidth;
        });
    });

