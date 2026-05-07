import { saveContactMessage } from './firebase-config.js';

// Initialize Lucide Icons
lucide.createIcons();

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-cubic'
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Dark Mode Logic
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

const toggleTheme = () => {
    const currentTheme = body.getAttribute('data-theme');
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', nextTheme);
    
    // Update icon
    const icon = themeBtn.querySelector('i');
    if (nextTheme === 'dark') {
        icon.setAttribute('data-lucide', 'moon');
    } else {
        icon.setAttribute('data-lucide', 'sun');
    }
    lucide.createIcons(); // Re-render icons
};

themeBtn.addEventListener('click', toggleTheme);

// Stats Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(() => startCounter(counter), 1);
    } else {
        counter.innerText = target + (target === 15 ? '+' : '');
    }
};

// Intersection Observer for Stats
const statsSection = document.querySelector('.stats');
const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        counters.forEach(counter => startCounter(counter));
        statsObserver.unobserve(statsSection);
    }
}, { threshold: 0.5 });

if (statsSection) statsObserver.observe(statsSection);

// Firebase form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button');
        const originalContent = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Enviando... <span class="loader"></span>';
        submitBtn.disabled = true;

        const formData = {
            nombre: contactForm.querySelector('input[type="text"]').value,
            email: contactForm.querySelector('input[type="email"]').value,
            mensaje: contactForm.querySelector('textarea').value
        };

        const success = await saveContactMessage(formData);

        if (success) {
            alert('¡Gracias por tu consulta! El equipo de Grupo Falpat se pondrá en contacto pronto.');
            contactForm.reset();
        } else {
            alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctanos por WhatsApp.');
        }

        submitBtn.innerHTML = originalContent;
        submitBtn.disabled = false;
    });
}
