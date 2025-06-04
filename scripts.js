/* CONFIGURAÇÕES DO MENU HAMBURGUER*/
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

/*  Deixar o Header com sombra ao 'scrolar'   */
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});


/*   Slider / Caroussel portfolio*/

 const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    let currentIndex = 0;

    function updateSlider() {
        const slideWidth = slides[0].clientWidth;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 2) { // Exibe dois por vez
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    window.addEventListener('resize', updateSlider);


/* VALIDADOR DE FORMULARIO  */
    const form = document.querySelector('.form-contato');

    form.addEventListener('submit', function (e) {
        const nome = form.querySelector('input[name="nome"]');
        const email = form.querySelector('input[name="email"]');
        const mensagem = form.querySelector('textarea[name="mensagem"]');

        let erros = [];

        if (nome.value.trim() === '') {
            erros.push('Por favor, preencha seu nome.');
        }

        if (email.value.trim() === '') {
            erros.push('Por favor, preencha seu email.');
        } else if (!validarEmail(email.value)) {
            erros.push('Digite um email válido.');
        }

        if (mensagem.value.trim() === '') {
            erros.push('Por favor, escreva sua mensagem.');
        }

        if (erros.length > 0) {
            e.preventDefault();
            alert(erros.join('\n'));
        }
    });

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }