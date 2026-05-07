import { saveContactMessage } from './firebase-config.js';

// Esperar a que el DOM esté completamente cargado
window.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema Falpat inicializado...");

    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Initialize AOS
    if (window.AOS) {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic'
        });
    }

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

    const updateIcon = (theme) => {
        const icon = themeBtn.querySelector('i');
        if (icon && window.lucide) {
            if (theme === 'dark') {
                icon.setAttribute('data-lucide', 'sun');
            } else {
                icon.setAttribute('data-lucide', 'moon');
            }
            lucide.createIcons();
        }
    };

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
            body.setAttribute('data-theme', nextTheme);
            updateIcon(nextTheme);
        });
        updateIcon(body.getAttribute('data-theme'));
    }

    // Stats Counter
    const counters = document.querySelectorAll('.counter');
    const startCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / 200;
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(() => startCounter(counter), 1);
        } else {
            counter.innerText = target + (target === 15 ? '+' : '');
        }
    };

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                counters.forEach(c => startCounter(c));
                statsObserver.unobserve(statsSection);
            }
        }, { threshold: 0.5 });
        statsObserver.observe(statsSection);
    }

    // Formulario de contacto - Lógica Blindada
    const contactForm = document.getElementById('mainContactForm');
    
    if (contactForm) {
        console.log("Formulario de contacto detectado y vinculado.");
        
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            e.stopPropagation(); // Evitar que el evento suba
            
            console.log("Iniciando envío de formulario...");
            
            const submitBtn = contactForm.querySelector('button');
            const originalContent = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Enviando...';
            submitBtn.disabled = true;

            const formData = {
                nombre: document.getElementById('contact_name').value,
                email: document.getElementById('contact_email').value,
                mensaje: document.getElementById('contact_message').value
            };

            console.log("Datos a enviar:", formData);

            let success = false;
            try {
                // Timeout de seguridad de 10 segundos
                success = await Promise.race([
                    saveContactMessage(formData),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 10000))
                ]);
            } catch (err) {
                console.error("Error crítico en envío:", err);
                success = false;
            }

            if (success) {
                alert('¡Gracias por tu consulta! El equipo de Grupo Falpat se pondrá en contacto pronto.');
                contactForm.reset();
            } else {
                alert('No pudimos conectar con el servidor. Por favor, verifica tu conexión o intenta por WhatsApp.');
                console.log("Fallo en el envío. Revisa la consola de Firebase.");
            }

            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
        });
    } else {
        console.error("ERROR: No se encontró el formulario con ID 'mainContactForm'");
    }
});
