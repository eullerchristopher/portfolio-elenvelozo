/*=============== SHOW MENU ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav_link');
    const scrollTopButton = document.getElementById('scroll-top');

    // Menu show
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });

    // Menu hidden
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });

    // Hide menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });
});
/*=============== ACTIVE ===============*/

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav_link');
    const sections = document.querySelectorAll('section');

    function removeActiveClass() {
        navLinks.forEach(link => link.classList.remove('active'));
    }

    function setActiveLink() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                removeActiveClass();
                document.querySelector(`a[href="#${section.id}"]`).classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Também ativa o link correto no carregamento da página
});


/*=============== SWIPER ===============*/

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 32,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false, 
        },
        on: {
            click(event) {
                swiper.slideTo(this.clickedIndex);
            },
        },
        pagination: {
            el: ".swiper-pagination",
        }
    });
});

/*===== SCROLL REVEAL ANIMATION =====*/

document.addEventListener('DOMContentLoaded', function() {
    const sr = ScrollReveal({
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: true  // Ativar se eu quiser que os elementos revelem novamente ao rolar
    });

    // Configurações para diferentes elementos
    sr.reveal('.home_data, .sobre_texto, .produtos_data', {
        origin: 'top'
    });

    sr.reveal('.sobre_img', {
        origin: 'right',
        delay: 400
    });

    sr.reveal('.home_img, .curso_img', {
        origin: 'left',
        delay: 400
    });
    sr.reveal('.curso_info', {
        interval: 200
    });
    sr.reveal('.contato_input, .contato_button', {
        interval: 200
    });
});