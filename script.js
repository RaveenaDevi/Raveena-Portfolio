const PROJECTS = [
  {
    title: "Priceless Consulting LLC",
    url: "https://pricelessconsultingllc.com",
    category: "Corporate",
    stack: ["WordPress", "Elementor", "Responsive UI"],
    description: "Corporate consulting website with clean service pages, polished layout flow and conversion-focused sections.",
  },
  {
    title: "Nu Life Surgery",
    url: "https://nulifesurgery.com",
    category: "Healthcare",
    stack: ["WordPress", "Healthcare UX", "Performance"],
    description: "Healthcare website focused on trust, service clarity, responsive layouts and patient-friendly browsing.",
  },
  {
    title: "Dogra Paramedical Gurukul College",
    url: "#",
    category: "Education",
    stack: ["WordPress", "Responsive", "SEO"],
    description: "Full revamp of a paramedical college site driving 20% traffic growth with improved UX and performance.",
  },
  {
    title: "Monterey Bay Real Estate",
    url: "https://montereybayrealestate.com",
    category: "Real Estate",
    stack: ["WordPress", "Property Pages", "Responsive"],
    description: "Real estate website with polished property presentation, strong information hierarchy and smooth navigation.",
  },
  {
    title: "Best Buy Maldives",
    url: "https://bestbuymaldives.com",
    category: "E-commerce",
    stack: ["WooCommerce", "Product UX", "WordPress"],
    description: "E-commerce website improvements focused on product discovery, category clarity and visual quality.",
  },
  {
    title: "Lactinova",
    url: "https://lactinova.com",
    category: "E-commerce",
    stack: ["Catalog", "Forms", "WordPress"],
    description: "Product catalog and contact-oriented website with clean business presentation and responsive structure.",
  },
  {
    title: "Conway Arabians",
    url: "https://conwaysrabians.bespokewebcrew.com",
    category: "Portfolio",
    stack: ["Showcase", "Gallery", "WordPress"],
    description: "Visual showcase website for a horse breeding brand with portfolio-style pages and image-led presentation.",
  },
  {
    title: "Baseball Glove Collector",
    url: "https://baseballglovecollector.com",
    category: "Portfolio",
    stack: ["Gallery", "WordPress", "Content"],
    description: "Gallery-heavy collector website designed for browsing rich visual content through a simple structure.",
  },
  {
    title: "Franklin Farm LLC",
    url: "https://franklinfarmllc.com",
    category: "Portfolio",
    stack: ["WordPress", "Brand Site", "Responsive"],
    description: "Farm portfolio website with warm brand presentation, simple navigation and clean section spacing.",
  },
  {
    title: "Prime Dental Care",
    url: "https://primedentalcare.com.au",
    category: "Healthcare",
    stack: ["WordPress", "Service UX", "Mobile"],
    description: "Dental service website designed for quick patient understanding, trust-building and mobile accessibility.",
  },
  {
    title: "Dr Nav Singh",
    url: "https://drnavsingh.com.au",
    category: "Healthcare",
    stack: ["WordPress", "Doctor Portfolio", "UI"],
    description: "Doctor portfolio and practice website with refined information architecture and clear user paths.",
  },
  {
    title: "Finance Smart",
    url: "https://financesmart.vn",
    category: "Finance",
    stack: ["WordPress", "Advisory", "Responsive"],
    description: "Financial advisory services website with structured content blocks and professional business styling.",
  },
  {
    title: "Aus Chauffeur Services",
    url: "https://auschauffeurservices.com.au",
    category: "Services",
    stack: ["WordPress", "Bookings", "Service Pages"],
    description: "Chauffeur services website with clear service-led pages, CTA hierarchy and mobile-friendly layout.",
  },
  {
    title: "House & Extension Plans",
    url: "https://houseandextensionplans.ie",
    category: "Services",
    stack: ["WordPress", "Architecture", "CTA"],
    description: "Planning and architecture services website with practical page structure, trust sections and conversion CTAs.",
  },
  {
    title: "Shopify Store Optimization",
    url: "#",
    category: "E-commerce",
    stack: ["Shopify", "UI/UX", "Conversion"],
    description: "Shopify store UI/UX improvements with conversion rate optimization, custom theme edits and performance tuning.",
  },
  {
    title: "Wix Business Site",
    url: "#",
    category: "Corporate",
    stack: ["Wix", "Responsive", "SEO"],
    description: "Modern business website on Wix with improved UI/UX, on-page SEO and conversion-focused redesign.",
  },
];

const gradients = [
  ["#6d28d9", "#ec4899"],
  ["#7c3aed", "#fb7185"],
  ["#4f46e5", "#a855f7"],
  ["#9333ea", "#f97316"],
  ["#be185d", "#7c3aed"],
  ["#0f766e", "#8b5cf6"],
  ["#1d4ed8", "#7c3aed"],
  ["#059669", "#3b82f6"],
];

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const body = document.body;
const header = qs("#site-header");
const nav = qs("#primary-nav");
const menuToggle = qs(".menu-toggle");
const scrollProgress = qs(".scroll-progress span");
const filtersWrap = qs("#project-filters");
const projectsGrid = qs("#projects-grid");
const searchInput = qs("#project-search");
const projectModal = qs("#project-modal");
const modalContent = qs("#modal-content");
const commandPalette = qs("#command-palette");
const commandInput = qs("#command-input");
const commandList = qs("#command-list");

function initials(title) {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function categoryIcon(category) {
  const map = {
    Corporate: "fa-building",
    Healthcare: "fa-heart-pulse",
    "Real Estate": "fa-house-chimney",
    "E-commerce": "fa-cart-shopping",
    Portfolio: "fa-images",
    Finance: "fa-chart-line",
    Services: "fa-briefcase",
    Education: "fa-graduation-cap",
  };
  return map[category] || "fa-layer-group";
}

function renderFilters() {
  if (!filtersWrap) return;
  const categories = ["All", ...new Set(PROJECTS.map((project) => project.category))];
  filtersWrap.innerHTML = categories
    .map(
      (category) =>
        `<button class="filter-btn ${category === "All" ? "active" : ""}" type="button" data-category="${category}" role="tab" aria-selected="${category === "All"}">${category}</button>`
    )
    .join("");

  qsa(".filter-btn", filtersWrap).forEach((button) => {
    button.addEventListener("click", () => {
      qsa(".filter-btn", filtersWrap).forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-selected", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      renderProjects();
    });
  });
}

function renderProjects() {
  if (!projectsGrid) return;
  const active = qs(".filter-btn.active")?.dataset.category || "All";
  const query = (searchInput?.value || "").trim().toLowerCase();

  const filtered = PROJECTS.filter((project) => {
    const haystack = `${project.title} ${project.category} ${project.description} ${project.stack.join(" ")}`.toLowerCase();
    const matchCategory = active === "All" || project.category === active;
    const matchSearch = !query || haystack.includes(query);
    return matchCategory && matchSearch;
  });

  if (!filtered.length) {
    projectsGrid.innerHTML = `<div class="empty-state">No project matched your search. Try another keyword or category.</div>`;
    return;
  }

  projectsGrid.innerHTML = filtered
    .map((project, index) => {
      const originalIndex = PROJECTS.indexOf(project);
      const [cardA, cardB] = gradients[originalIndex % gradients.length];
      return `
        <article class="project-card reveal" style="--card-a:${cardA};--card-b:${cardB}">
          <div class="project-preview">
            <span class="project-initials">${initials(project.title)}</span>
          </div>
          <div class="project-content">
            <span class="category-chip"><i class="fa-solid ${categoryIcon(project.category)}"></i>${project.category}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="stack-tags">
              ${project.stack.map(s => `<span class="stack-tag">${s}</span>`).join("")}
            </div>
            <div class="project-actions">
              <button class="btn btn-ghost" type="button" data-project="${originalIndex}">Quick View</button>
              <a class="btn btn-primary" href="${project.url}" target="_blank" rel="noopener">Visit <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  qsa(".project-card").forEach((card, index) => {
    card.style.transitionDelay = `${Math.min(index * 35, 210)}ms`;
    revealObserver.observe(card);
  });

  qsa(".project-card .btn[data-project]").forEach((button) => {
    button.addEventListener("click", () => openProjectModal(Number(button.dataset.project)));
  });
}

function openProjectModal(index) {
  const project = PROJECTS[index];
  if (!project || !projectModal || !modalContent) return;
  const [cardA, cardB] = gradients[index % gradients.length];
  modalContent.innerHTML = `
    <div class="modal-hero" style="--card-a:${cardA};--card-b:${cardB}">
      <span class="project-initials">${initials(project.title)}</span>
    </div>
    <span class="category-chip"><i class="fa-solid ${categoryIcon(project.category)}"></i>${project.category}</span>
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    <div class="modal-meta">
      ${project.stack.map((item) => `<span>${item}</span>`).join("")}
    </div>
    <a class="btn btn-primary" href="${project.url}" target="_blank" rel="noopener">Open Live Website <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  `;
  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden", "false");
  body.classList.add("modal-open");
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove("open");
  projectModal.setAttribute("aria-hidden", "true");
  body.classList.remove("modal-open");
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

function setupReveal() {
  qsa(".reveal").forEach((el, index) => {
    if (!el.classList.contains("project-card")) {
      el.style.transitionDelay = `${Math.min(index * 25, 150)}ms`;
    }
    revealObserver.observe(el);
  });
}

// Counter animation for stats
function animateCounter(el, target, suffix = "") {
  const duration = 1800;
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = qsa("[data-count]");
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || "";
        animateCounter(el, target, suffix);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => counterObserver.observe(c));
}

function setupTyping() {
  const typingEl = qs(".typing");
  if (!typingEl) return;
  const phrases = [
    "responsive portfolio websites",
    "WordPress & WooCommerce builds",
    "React-powered interfaces",
    "Shopify & Wix experiences",
    "Core Web Vitals optimized sites",
    "fast mobile-first experiences",
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const text = phrases[phraseIndex];
    typingEl.textContent = text.slice(0, charIndex);

    if (!deleting && charIndex < text.length) {
      charIndex += 1;
      setTimeout(tick, 70);
      return;
    }
    if (!deleting && charIndex === text.length) {
      deleting = true;
      setTimeout(tick, 1150);
      return;
    }
    if (deleting && charIndex > 0) {
      charIndex -= 1;
      setTimeout(tick, 34);
      return;
    }
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(tick, 220);
  }
  tick();
}

function initNavigation() {
  menuToggle?.addEventListener("click", () => {
    const open = !body.classList.contains("menu-open");
    body.classList.toggle("menu-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  qsa(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("menu-open");
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });

  const sections = qsa("main section[id]");
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        qsa(".nav-link").forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-42% 0px -52% 0px", threshold: 0.01 }
  );
  sections.forEach((section) => navObserver.observe(section));
}

function initProgress() {
  function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = `${progress}%`;
    header?.classList.toggle("scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
}

function initTheme() {
  const toggle = qs(".theme-toggle");
  const icon = toggle?.querySelector("i");
  const saved = localStorage.getItem("raveena-theme");
  const initial = saved || "light";

  function applyTheme(theme) {
    body.dataset.theme = theme;
    localStorage.setItem("raveena-theme", theme);
    if (icon) {
      icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
  }

  applyTheme(initial);
  toggle?.addEventListener("click", () => {
    applyTheme(body.dataset.theme === "dark" ? "light" : "dark");
  });
}

function initLightbox() {
  const lightbox = qs("#lightbox");
  const lightboxImg = qs("#lightbox img");
  const closeBtn = qs(".lightbox-close");
  if (!lightbox || !lightboxImg) return;

  qsa(".cert-card img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      body.classList.add("modal-open");
    });
  });

  function close() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    body.classList.remove("modal-open");
  }

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });
  closeBtn?.addEventListener("click", close);
}

// Skill meter hover tooltip
function initSkillMeters() {
  qsa(".meter").forEach((meter) => {
    const level = getComputedStyle(meter).getPropertyValue("--level") || meter.closest("[style]")?.style.getPropertyValue("--level");
    if (level) {
      const tooltip = document.createElement("span");
      tooltip.className = "meter-label";
      tooltip.textContent = level.trim() + "%";
      meter.appendChild(tooltip);
    }
  });
}

const COMMANDS = [
  { label: "Home", hint: "Go to landing section", icon: "fa-house", target: "#home" },
  { label: "About", hint: "View resume summary", icon: "fa-user", target: "#about" },
  { label: "Skills", hint: "View technical toolkit", icon: "fa-code", target: "#skills" },
  { label: "Experience", hint: "View work history", icon: "fa-briefcase", target: "#experience" },
  { label: "Projects", hint: "View live work", icon: "fa-layer-group", target: "#projects" },
  { label: "Certificates", hint: "View learning credentials", icon: "fa-certificate", target: "#certificates" },
  { label: "Contact", hint: "Send a message", icon: "fa-envelope", target: "#contact" },
  { label: "Download Resume", hint: "Open PDF file", icon: "fa-file-arrow-down", target: "images/raveena-devi-resume.pdf", download: true },
];

function renderCommands() {
  if (!commandList) return;
  const query = (commandInput?.value || "").toLowerCase().trim();
  const filtered = COMMANDS.filter((item) => `${item.label} ${item.hint}`.toLowerCase().includes(query));

  commandList.innerHTML = filtered
    .map(
      (item, index) => `
      <button class="command-item" type="button" data-index="${COMMANDS.indexOf(item)}">
        <i class="fa-solid ${item.icon}"></i>
        <span><strong>${item.label}</strong><small>${item.hint}</small></span>
        <small>${index + 1}</small>
      </button>
    `
    )
    .join("");

  qsa(".command-item", commandList).forEach((button) => {
    button.addEventListener("click", () => runCommand(Number(button.dataset.index)));
  });
}

function openCommandPalette() {
  if (!commandPalette) return;
  commandPalette.classList.add("open");
  commandPalette.setAttribute("aria-hidden", "false");
  body.classList.add("modal-open");
  renderCommands();
  setTimeout(() => commandInput?.focus(), 40);
}

function closeCommandPalette() {
  if (!commandPalette) return;
  commandPalette.classList.remove("open");
  commandPalette.setAttribute("aria-hidden", "true");
  body.classList.remove("modal-open");
  if (commandInput) commandInput.value = "";
}

function runCommand(index) {
  const command = COMMANDS[index];
  if (!command) return;
  closeCommandPalette();
  if (command.download) {
    const link = document.createElement("a");
    link.href = command.target;
    link.download = "Raveena-Devi-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    return;
  }
  qs(command.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function initCommandPalette() {
  qsa(".command-open").forEach((button) => button.addEventListener("click", openCommandPalette));
  qsa("[data-close-command]").forEach((el) => el.addEventListener("click", closeCommandPalette));
  commandInput?.addEventListener("input", renderCommands);

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if ((event.metaKey || event.ctrlKey) && key === "k") {
      event.preventDefault();
      openCommandPalette();
    }
    if (event.key === "Escape") {
      closeCommandPalette();
      closeProjectModal();
      const lightbox = qs("#lightbox");
      if (lightbox?.classList.contains("open")) {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
        body.classList.remove("modal-open");
      }
    }
  });
}

function initContactForm() {
  const form = qs("#contact-form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() || "";
    const email = data.get("email")?.toString().trim() || "";
    const message = data.get("message")?.toString().trim() || "";
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "website visitor"}`);
    const bodyText = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    const btn = form.querySelector("button[type=submit]");
    if (btn) {
      btn.innerHTML = `Sending… <i class="fa-solid fa-spinner fa-spin"></i>`;
      btn.disabled = true;
      setTimeout(() => {
        window.location.href = `mailto:raveenadevi0521@gmail.com?subject=${subject}&body=${bodyText}`;
        btn.innerHTML = `Prepare Email <i class="fa-solid fa-paper-plane"></i>`;
        btn.disabled = false;
      }, 800);
    } else {
      window.location.href = `mailto:raveenadevi0521@gmail.com?subject=${subject}&body=${bodyText}`;
    }
  });
}

function initModalClose() {
  qsa("[data-close-modal]").forEach((el) => el.addEventListener("click", closeProjectModal));
}

function initBackToTop() {
  const btn = qs(".back-to-top");
  if (!btn) return;
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });
}

function initYear() {
  const year = qs("#year");
  if (year) year.textContent = String(new Date().getFullYear());
}

function initSearch() {
  searchInput?.addEventListener("input", renderProjects);
}

// Parallax subtle effect on hero
function initParallax() {
  const heroBg = qs(".hero-bg");
  if (!heroBg || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    heroBg.style.transform = `translateY(${y * 0.18}px)`;
  }, { passive: true });
}

// Cursor glow
function initCursorGlow() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);
  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
  });
  function animate() {
    cx += (mx - cx) * 0.08;
    cy += (my - cy) * 0.08;
    glow.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
    requestAnimationFrame(animate);
  }
  animate();
}

function init() {
  initTheme();
  initProgress();
  initNavigation();
  setupTyping();
  setupReveal();
  renderFilters();
  renderProjects();
  initSearch();
  initLightbox();
  initCommandPalette();
  initContactForm();
  initModalClose();
  initBackToTop();
  initYear();
  initCounters();
  initParallax();
  initCursorGlow();
}

document.addEventListener("DOMContentLoaded", init);
