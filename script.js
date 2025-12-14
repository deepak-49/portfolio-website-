// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00d4ff'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00d4ff',
            opacity: 0.5,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 2
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link
    updateActiveNavLink();

    // Trigger scroll animations
    animateOnScroll();
});

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = ['hero', 'about', 'projects', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = section;
            }
        }
    });

}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('[data-animate]');

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
}

// Add data-animate attribute to sections for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(section => {
        section.setAttribute('data-animate', '');
    });

    // Trigger initial check
    animateOnScroll();
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    //  send-email  
    var templateParams = {
        name: name,
        email: email,
		message: message
      };

      emailjs.send('service_uzqmdps', 'template_u28w0xn', templateParams)
      alert(`Thank you ${name}! Your message has been sent. We'll get back to you at ${email} soon!`);

    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    // alert(`Thank you ${name}! Your message has been sent. We'll get back to you at ${email} soon!`);

    // Reset form
    this.reset();
});

// Add parallax effect to sections
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const parallaxElements = document.querySelectorAll('.about-section')

//     parallaxElements.forEach(element => {
//         const speed = 0.1;
//         const yPos = -(scrolled * speed);
//         element.style.transform = `translateY(${yPos}px)`;
//     });
// });

// 3D tilt effect on project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Add entrance animations with delays
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fade-in-up 1s ease-out';
    }
});

// Cursor glow effect (optional enhancement)
const cursor = document.createElement('div');
cursor.className = 'cursor-glow';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add cursor glow styles
const style = document.createElement('style');
style.innerHTML = `
  .cursor-glow {
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, hsla(190, 100%, 50%, 0.784), transparent);
        pointer-events: none;
        transform: translate(-50%, -50%);
        z-index: 9999;
        transition: width 0.2s, height 0.2s;
        border:2px solid rgba(255, 248, 248, 0.125);
    }
    
    a:hover ~ .cursor-glow,
    button:hover ~ .cursor-glow {
        width: 40px;
        height: 40px;
    }
`;
document.head.appendChild(style);

console.log('Portfolio initialized successfully! ✨');
// typingText

const text = "Frontend Developer";
const typingText = document.getElementById("typing-text");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100); // typing speed
    }
}

typeEffect();
