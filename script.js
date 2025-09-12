document.addEventListener('DOMContentLoaded', () => {

    // --- ANIMACIONES AL HACER SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Opcional: dejar de observar el elemento una vez que fue animado
                // observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // El elemento se activa cuando el 10% es visible
    });

    // Seleccionar todos los elementos que quiero animar
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));


    // --- FUNCIONALIDAD DEL ACORDEÓN DE FAQs ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Cerrar otros items abiertos para que solo uno esté activo
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Abrir o cerrar el item actual
            item.classList.toggle('active');
        });
    });

    // --- MANEJO DEL FORMULARIO ---
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevenimos el envío real para este ejemplo

        // Acá podrías conectar un servicio como Formspree, Netlify Forms o tu propio backend
        const formData = new FormData(form);
        const name = formData.get('nombre');
        
        // Simulación de envío exitoso
        alert(`¡Gracias por contactarnos, ${name}! Te vamos a escribir pronto para coordinar la llamada. ¡A darle gas!`);
        
        form.reset(); // Limpia el formulario
    });

});