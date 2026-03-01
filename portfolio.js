
        // Particles.js Configuration
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#64ffda' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#64ffda', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
                modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
            },
            retina_detect: true
        });

        // Typed.js Effect
        const typedText = document.querySelector('.typed-text');
        const phrases = ['Web Developer', 'UI/UX Designer', 'Freelancer', 'Problem Solver'];
        let i = 0;
        let j = 0;
        let currentPhrase = [];
        let isDeleting = false;
        let isEnd = false;

        function type() {
            isEnd = false;
            typedText.innerHTML = currentPhrase.join('');
            
            if (i < phrases.length) {
                if (!isDeleting && j <= phrases[i].length) {
                    currentPhrase.push(phrases[i][j]);
                    j++;
                }

                if (isDeleting && j <= phrases[i].length) {
                    currentPhrase.pop(phrases[i][j]);
                    j--;
                }

                if (j == phrases[i].length) {
                    isEnd = true;
                    isDeleting = true;
                }

                if (isDeleting && j === 0) {
                    currentPhrase = [];
                    isDeleting = false;
                    i++;
                    if (i == phrases.length) {
                        i = 0;
                    }
                }
            }
            
            const speed = isEnd ? 1000 : isDeleting ? 50 : 150;
            setTimeout(type, speed);
        }

        type();

        // Theme Toggle
        function toggleTheme() {
            const body = document.body;
            const themeToggle = document.querySelector('.theme-toggle i');
            
            if (body.getAttribute('data-theme') === 'light') {
                body.removeAttribute('data-theme');
                themeToggle.className = 'fas fa-moon';
            } else {
                body.setAttribute('data-theme', 'light');
                themeToggle.className = 'fas fa-sun';
            }
        }

        

        // Mobile Menu Toggle
        function toggleMenu() {
            const nav = document.querySelector('nav');
            nav.classList.toggle('active');
        }

        // Custom Cursor
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        });

        // Hover effect on links
        document.querySelectorAll('a, button, .card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                follower.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });

        // Vanilla Tilt for 3D Cards
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
        });

        // Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('nav').classList.remove('active');
            });
        });

        // Active link highlighting
        window.addEventListener('scroll', () => {
            let sections = document.querySelectorAll('section');
            let navLinks = document.querySelectorAll('nav a');
            
            sections.forEach(section => {
                let top = section.offsetTop - 100;
                let bottom = top + section.offsetHeight;
                let scroll = window.scrollY;
                
                if (scroll >= top && scroll < bottom) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + section.getAttribute('id')) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
 