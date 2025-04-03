 // Mobile Navigation Toggle
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.querySelector('.navbar');
        
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuIcon.classList.toggle('fa-times');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                menuIcon.classList.remove('fa-times');
            });
        });

        // Sticky Header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Active section detection
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            
            document.querySelectorAll('section').forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    document.querySelectorAll('.navbar a').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });

        // Animation on scroll
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('home-content')) {
                        entry.target.style.animation = 'slideInFromLeft 1s ease-out forwards';
                    } else if (entry.target.classList.contains('home-img')) {
                        entry.target.style.animation = 'slideInFromRight 1s ease-out forwards';
                    } else {
                        entry.target.style.animation = 'fadeIn 1s ease-out forwards';
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.home-content, .home-img, .about-content, .section-title, .container, .skill-card, .project-card, .contact-card, .contact-form').forEach(el => {
            observer.observe(el);
        });

        // Form submission
        const form = document.querySelector('.contact-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });

 document.addEventListener("DOMContentLoaded", function() {
            const filterButtons = document.querySelectorAll(".filter-btn");
            const projectCards = document.querySelectorAll(".project-card");
            
            filterButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const category = button.getAttribute("data-category");
                    
                    filterButtons.forEach(btn => btn.classList.remove("active"));
                    button.classList.add("active");
                    
                    projectCards.forEach(card => {
                        if (category === "all" || card.getAttribute("data-category") === category) {
                            card.style.display = "block";
                        } else {
                            card.style.display = "none";
                        }
                    });
                });
            });
        });

function sendToWhatsApp(event) {
    event.preventDefault(); // Prevent default form submission
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    
    let whatsappMessage = `Hello, I am *${name}*.\n\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    
    let phone = "918882677949"; // Your WhatsApp number (with country code)
    let whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
}
