/* =========================================
   RAVEENA DEVI — Portfolio JS
   ========================================= */

// — LOADER —
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('done');
    startReveal();
  }, 1500);
});

// — CUSTOM CURSOR —
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');

document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.querySelectorAll('a, button, .cert-card, .about-card, .tag').forEach(el => {
  el.addEventListener('mouseenter', () => { follower.style.transform += ' scale(2)'; follower.style.opacity = '.2'; });
  el.addEventListener('mouseleave', () => { follower.style.transform = follower.style.transform.replace(' scale(2)', ''); follower.style.opacity = '.4'; });
});

// — NAVBAR SCROLL —
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  updateActiveNav();
});

// — HAMBURGER —
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinks.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// — ACTIVE NAV LINK —
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const link = document.querySelector(`.nav-link[href="#${section.id}"]`);
    if (link) {
      link.style.color = (scrollPos >= top && scrollPos < bottom)
        ? 'var(--accent)' : '';
    }
  });
}

// — TYPING ANIMATION —
const roles = [
  'Web Developer',
  'WordPress Expert',
  'Performance Optimizer',
  'Shopify Developer',
  'Technical SEO Specialist',
  'Malware Recovery Expert'
];

let roleIdx = 0, charIdx = 0, isDeleting = false;
const typingEl = document.getElementById('typing');

function typeLoop() {
  if (!typingEl) return;
  const current = roles[roleIdx];

  if (isDeleting) {
    typingEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
  } else {
    typingEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
  }

  let delay = isDeleting ? 55 : 100;
  if (!isDeleting && charIdx === current.length) { delay = 1800; isDeleting = true; }
  else if (isDeleting && charIdx === 0) { isDeleting = false; roleIdx = (roleIdx + 1) % roles.length; delay = 400; }

  setTimeout(typeLoop, delay);
}
setTimeout(typeLoop, 1600);

// — COUNTER ANIMATION —
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

// — REVEAL ON SCROLL —
function startReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // trigger counters if stat-num
        if (entry.target.classList.contains('hero-stats')) {
          entry.target.querySelectorAll('.stat-num').forEach(animateCounter);
        }
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // observe stats container specifically
  const stats = document.querySelector('.hero-stats');
  if (stats) observer.observe(stats);
}

// — CONTACT FORM —
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Simulate send (replace with EmailJS or Formspree)
  setTimeout(() => {
    btn.textContent = 'Sent!';
    success.classList.add('show');
    e.target.reset();
    setTimeout(() => {
      btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
      btn.disabled = false;
      success.classList.remove('show');
    }, 4000);
  }, 1200);
}

// — FOOTER YEAR —
document.getElementById('year').textContent = new Date().getFullYear();

// — SMOOTH HOVER TILT on cards (subtle) —
document.querySelectorAll('.about-card, .cert-card, .skill-block').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - .5;
    const y = (e.clientY - rect.top) / rect.height - .5;
    card.style.transform = `perspective(600px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-2px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
