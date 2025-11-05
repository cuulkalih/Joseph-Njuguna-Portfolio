// ===================================
// GITHUB PAGES DEPLOYMENT
// ===================================
// This portfolio is designed for GitHub Pages
// No build process or server required!
// ===================================

// Ensure the page always starts at top (avoid browsers restoring scroll to console)
try { if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; } } catch (_) {}

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // FLIP ANIMATION
    // ===================================
    
    const flipButton = document.getElementById('flipButton');
    const cardContainer = document.getElementById('cardContainer');
    const flipBadge = document.getElementById('flipBadge');
    const flipTooltip = document.getElementById('flipTooltip');
    const flipPointer = document.getElementById('flipPointer');
    let isFlipped = false;
    
    flipButton.addEventListener('click', function() {
        isFlipped = !isFlipped;
        cardContainer.classList.toggle('flipped');

        // Update button state, label, and badge
        const label = flipButton.querySelector('.flip-label');
        if (isFlipped) {
            flipButton.setAttribute('aria-pressed', 'true');
            flipButton.setAttribute('aria-label', 'Switch to Cybersecurity side');
            flipButton.dataset.side = 'back';
            label.textContent = 'Back to Security';
            if (flipBadge) flipBadge.textContent = '2/2';
            flipButton.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
            flipButton.style.boxShadow = '0 5px 20px rgba(99, 102, 241, 0.4)';
            document.body.classList.add('is-back');
        } else {
            flipButton.setAttribute('aria-pressed', 'false');
            flipButton.setAttribute('aria-label', 'Switch to Software Development side');
            flipButton.dataset.side = 'front';
            label.textContent = 'Switch Side';
            if (flipBadge) flipBadge.textContent = '1/2';
            flipButton.style.background = 'linear-gradient(135deg, #00f6ff, #0084ff)';
            flipButton.style.boxShadow = '0 5px 20px rgba(0, 246, 255, 0.4)';
            document.body.classList.remove('is-back');
        }

        // Dismiss tooltip on first interaction
        if (flipTooltip) {
            flipTooltip.style.display = 'none';
            try { localStorage.setItem('seenFlipHint', '1'); } catch (_) {}
        }
        if (flipPointer) {
            flipPointer.style.display = 'none';
            try { localStorage.setItem('seenFlipArrow', '1'); } catch (_) {}
        }
    });
    
    // Keyboard accessibility for flip button
    document.addEventListener('keydown', function(e) {
        // Press 'F' to flip
        if (e.key === 'f' || e.key === 'F') {
            flipButton.click();
        }
    });
    
    // ===================================
    // PARTICLE ANIMATION (Cybersecurity Side)
    // ===================================
    
    const canvas = document.getElementById('particlesCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Wrap around screen
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = `rgba(0, 255, 65, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particles
    const particles = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Animation loop
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw connections between nearby particles
        particles.forEach((particleA, indexA) => {
            particles.slice(indexA + 1).forEach(particleB => {
                const dx = particleA.x - particleB.x;
                const dy = particleA.y - particleB.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.strokeStyle = `rgba(0, 255, 65, ${0.3 * (1 - distance / 150)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particleA.x, particleA.y);
                    ctx.lineTo(particleB.x, particleB.y);
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    // ===================================
    // SMOOTH SCROLL FOR NAVIGATION
    // ===================================
    
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

    // ===================================
    // FIRST-TIME FLIP TOOLTIP
    // ===================================
    try {
        const seen = localStorage.getItem('seenFlipHint');
        if (!seen && flipTooltip) {
            flipTooltip.style.display = 'block';
            setTimeout(() => {
                if (flipTooltip) flipTooltip.style.display = 'none';
                localStorage.setItem('seenFlipHint', '1');
            }, 6000);
        } else if (flipTooltip) {
            flipTooltip.style.display = 'none';
        }
    } catch (_) {
        if (flipTooltip) flipTooltip.style.display = 'block';
        setTimeout(() => { if (flipTooltip) flipTooltip.style.display = 'none'; }, 6000);
    }

    // Show arrow pointer until interacted once or for a short time
    // Position and show the arrow under the flip button for a few seconds
    function positionFlipPointer() {
        if (!flipButton || !flipPointer) return;
        const rect = flipButton.getBoundingClientRect();
        const top = rect.bottom + 6; // 6px below button
        const left = rect.left + rect.width / 2 - (flipPointer.offsetWidth / 2);
        flipPointer.style.top = `${top}px`;
        flipPointer.style.left = `${left}px`;
    }
    if (flipPointer) {
        // ensure it's in the DOM and measurable
        setTimeout(() => {
            flipPointer.style.display = 'block';
            positionFlipPointer();
            setTimeout(() => { if (flipPointer) flipPointer.style.display = 'none'; }, 7000);
        }, 200);
        window.addEventListener('resize', () => {
            if (flipPointer && flipPointer.style.display !== 'none') positionFlipPointer();
        });
    }
    
    // ===================================
    // PROJECT CARD TILT EFFECT
    // ===================================
    
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });
    
    // ===================================
    // SKILLS ANIMATION ON HOVER
    // ===================================
    
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(skill => {
        skill.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1.2) rotate(360deg)';
            icon.style.transition = 'transform 0.5s ease';
        });
        
        skill.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // ===================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ===================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for fade-in animation
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // ===================================
    // TYPING EFFECT FOR HERO (Optional Enhancement)
    // ===================================
    
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // ===================================
    // CONTACT BUTTON RIPPLE EFFECT
    // ===================================
    
    const contactButtons = document.querySelectorAll('.contact-btn');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // ===================================
    // CYBER TERMINAL TYPING ANIMATION
    // ===================================
    (function runTerminal() {
        const output = document.getElementById('terminalOutput');
        const cursor = document.getElementById('terminalCursor');
        const cta = document.getElementById('terminalCta');
        if (!output || !cursor) return;

        const lines = [
            'Boot sequence initiated...\n',
            'Loading user profile: Joseph Njuguna Ndirangu[Access Granted]\n',
            'Deploying Next Gen Labs secure environment...\n',
            '\n',
            '>>> Identity:      Cybersecurity & Network Security Specialist\n',
            '>>> Division:      Next Gen Labs Ltd. \n',
            '>>> Qualification: B.Applied Computing (ISF) — Class of 2025\n',
            '>>> Location:      Nairobi, Kenya\n',
            '\n',
       
            '>>> Status: ACTIVE...\n'
          ];
          
          const footer = [
            '\n──────────────────────────────\n',
            '>> Next Gen Labs Ltd ]\n',
            '>> User:          [ JOSEPH NJUGUNA NDIRANGU ]\n',
            '>> Status:        [ ONLINE ]\n',
            '>> Ready To Work: [ HIRE ME NOW! ]\n',
            '──────────────────────────────\n',
            'Type "projects" to explore live systems ⮕\n'
          ];
          

        const charDelay = 30; // ms per char
        const lineDelay = 500; // ms between lines

        let lineIdx = 0;
        let charIdx = 0;

        function typeNextChar() {
            if (lineIdx >= lines.length) {
                // Done with primary lines → print footer
                printFooter(0);
                return;
            }
            const current = lines[lineIdx];
            if (charIdx < current.length) {
                output.textContent += current.charAt(charIdx);
                charIdx++;
                setTimeout(typeNextChar, charDelay);
            } else {
                // end of line
                lineIdx++;
                charIdx = 0;
                setTimeout(typeNextChar, lineDelay);
            }
        }

        function printFooter(idx) {
            if (idx >= footer.length) {
                if (cta) cta.style.display = 'inline-flex';
                if (cursor) cursor.style.left = (output.offsetLeft + 18) + 'px';
                return;
            }
            let fChar = 0;
            (function typeFooter() {
                if (fChar < footer[idx].length) {
                    output.textContent += footer[idx].charAt(fChar);
                    fChar++;
                    setTimeout(typeFooter, charDelay);
                } else {
                    setTimeout(() => printFooter(idx + 1), lineDelay / 2);
                }
            })();
        }

        // start typing
        setTimeout(typeNextChar, 400);
    })();

    // ===================================
    // CONSOLE EASTER EGG
    // ===================================
    
    console.log('%c🔐 CUULKAL Portfolio', 'font-size: 20px; font-weight: bold; color: #00ff41; font-family: monospace;');
    console.log('%c💻 Joseph Njuguna - Cybersecurity & Software Developer', 'font-size: 14px; color: #00ff41; font-family: monospace;');
    console.log('%c📧 joseph.njuguna@example.com', 'font-size: 12px; color: #008f11; font-family: monospace;');
    console.log('%c🚀 Built with pure HTML, CSS, and JavaScript', 'font-size: 12px; color: #00ff41; font-family: monospace;');
    console.log('%c>>> Press F to flip sides!', 'font-size: 12px; color: #39ff14; font-family: monospace;');
    
    // ===================================
    // PERFORMANCE OPTIMIZATION
    // ===================================
    
    // Pause particle animation when tab is not visible
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Optionally pause animations
        } else {
            // Resume animations
        }
    });
    
    // ===================================
    // LOADING ANIMATION
    // ===================================
    
    window.addEventListener('load', function() {
        // Scroll to top so navbar is visible on refresh
        try { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); } catch (_) { window.scrollTo(0,0); }
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
});

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

