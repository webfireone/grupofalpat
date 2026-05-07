import { saveContactMessage } from './firebase-config.js';

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Reveal animations on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .testimonial-card, .contact-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Firebase form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = 'Enviando...';
        submitBtn.disabled = true;

        const formData = {
            nombre: contactForm.querySelector('input[type="text"]').value,
            email: contactForm.querySelector('input[type="email"]').value,
            asunto: contactForm.querySelectorAll('input[type="text"]')[1].value,
            mensaje: contactForm.querySelector('textarea').value
        };

        const success = await saveContactMessage(formData);

        if (success) {
            alert('¡Gracias por tu consulta! El equipo de Grupo Falpat se pondrá en contacto pronto.');
            contactForm.reset();
        } else {
            alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctanos por WhatsApp.');
        }

        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
    });
}
