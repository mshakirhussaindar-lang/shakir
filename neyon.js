 // Initialize after DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
      // Navigation scroll effect
      const nav = document.getElementById('nav');
      let lastScroll = 0;

      function handleScroll() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
      }

      window.addEventListener('scroll', handleScroll, { passive: true });

      // Scroll reveal animation
      const revealElements = document.querySelectorAll('.reveal');
      
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, index * 100);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      revealElements.forEach(el => revealObserver.observe(el));

      // Smooth scroll for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });

      // Screenshots horizontal scroll with drag
      const screenshotsWrapper = document.getElementById('screenshotsWrapper');
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;

      screenshotsWrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        screenshotsWrapper.style.cursor = 'grabbing';
        startX = e.pageX - screenshotsWrapper.offsetLeft;
        scrollLeft = screenshotsWrapper.scrollLeft;
      });

      screenshotsWrapper.addEventListener('mouseleave', () => {
        isDown = false;
        screenshotsWrapper.style.cursor = 'grab';
      });

      screenshotsWrapper.addEventListener('mouseup', () => {
        isDown = false;
        screenshotsWrapper.style.cursor = 'grab';
      });

      screenshotsWrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - screenshotsWrapper.offsetLeft;
        const walk = (x - startX) * 2;
        screenshotsWrapper.scrollLeft = scrollLeft - walk;
      });

      // Touch events for mobile
      screenshotsWrapper.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - screenshotsWrapper.offsetLeft;
        scrollLeft = screenshotsWrapper.scrollLeft;
      });

      screenshotsWrapper.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - screenshotsWrapper.offsetLeft;
        const walk = (x - startX) * 1.5;
        screenshotsWrapper.scrollLeft = scrollLeft - walk;
      });

      // Parallax effect for orbs
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (!prefersReducedMotion) {
        document.addEventListener('mousemove', (e) => {
          const orbs = document.querySelectorAll('.gradient-orb');
          const mouseX = e.clientX / window.innerWidth;
          const mouseY = e.clientY / window.innerHeight;
          
          orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            orb.style.transform = `translate(${x}px, ${y}px)`;
          });
        });
      }

      // Counter animation for stats
      function animateValue(element, start, end, duration) {
        const range = end - start;
        const startTime = performance.now();
        
        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(start + range * easeOut);
          
          if (element.textContent.includes('M')) {
            element.textContent = current + 'M+';
          } else if (element.textContent.includes('.')) {
            element.textContent = (start + range * easeOut).toFixed(1);
          } else if (element.textContent.includes('%')) {
            element.textContent = current + '%';
          } else {
            element.textContent = current;
          }
          
          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }
        
        requestAnimationFrame(update);
      }

      // Animate stats when visible
      const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const statValues = entry.target.querySelectorAll('.stat-value');
            statValues.forEach(stat => {
              const text = stat.textContent;
              if (text.includes('M')) {
                animateValue(stat, 0, 2, 2000);
              } else if (text.includes('.')) {
                animateValue(stat, 0, 4.9, 2000);
              } else if (text.includes('%')) {
                animateValue(stat, 0, 98, 2000);
              }
            });
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      const heroStats = document.querySelector('.hero-stats');
      if (heroStats) {
        statsObserver.observe(heroStats);
      }

      // Mobile menu toggle (simplified)
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
          // For a full implementation, you would toggle a mobile menu here
          alert('Mobile menu would open here');
        });
      }

      // Add keyboard navigation
      document.querySelectorAll('.btn, .nav-link, .store-btn, .social-link').forEach(el => {
        el.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            el.click();
          }
        });
      });
    });