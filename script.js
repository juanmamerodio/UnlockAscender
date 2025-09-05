document.addEventListener('DOMContentLoaded', function() {

    // ===== GSAP Y SCROLLTRIGGER PARA ANIMACIONES AVANZADAS =====
    gsap.registerPlugin(ScrollTrigger);

    // Animación del fondo del Hero (Parallax)
    gsap.to(".hero-background img", {
        scale: 1,
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Animación general de elementos al hacer scroll
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    scrollElements.forEach(el => {
        gsap.fromTo(el, 
            { opacity: 0, y: 50 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });
    
    // ===== LÓGICA DE FAQs =====
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const icon = item.querySelector('i');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = 0;
                otherItem.querySelector('i').setAttribute('data-feather', 'plus');
            });

            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.setAttribute('data-feather', 'minus');
            }
            feather.replace(); // Actualizar el ícono
        });
    });

    // ===== LÓGICA DE TESTIMONIOS =====
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const nextBtn = document.querySelector('.slider-nav .next');
    const prevBtn = document.querySelector('.slider-nav .prev');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonialCards.forEach((card, i) => {
            card.classList.remove('active');
        });
        testimonialCards[index].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    });

    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    });

    // Cambio automático
    setInterval(() => {
        nextBtn.click();
    }, 7000);


    // ===== LÓGICA DEL FORMULARIO =====
    const form = document.getElementById('qualify-form');
    const successMessage = document.getElementById('form-success-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulación de envío
        const formContainer = document.querySelector('.form-container');
        form.style.display = 'none';
        successMessage.classList.remove('hidden');
        formContainer.style.textAlign = 'center'; // Centrar el mensaje
    });

    // Inicializar Feather Icons
    feather.replace();
});