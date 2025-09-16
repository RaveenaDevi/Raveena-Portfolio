/* script.js
   - project tabs (filters)
   - optional screenshot toggle (uses a third-party service if enabled)
   - typing headline
   - reveal on scroll
   - contact form simulated submission
*/

/* ---------- typing effect in hero ---------- */
const typingEl = document.querySelector(".typing");
if (typingEl) {
  const phrases = [
    "Web Developer",
    "Frontend Developer",
    "WordPress & React",
    "Performance-first websites",
  ];
  let p = 0,
    i = 0,
    forward = true;
  function tick() {
    const current = phrases[p];
    typingEl.textContent = current.slice(0, i);
    if (forward) {
      if (i < current.length) {
        i++;
        setTimeout(tick, 70);
      } else {
        forward = false;
        setTimeout(tick, 900);
      }
    } else {
      if (i > 0) {
        i--;
        setTimeout(tick, 40);
      } else {
        forward = true;
        p = (p + 1) % phrases.length;
        setTimeout(tick, 200);
      }
    }
  }
  tick();
}

/*progress baar*/
const progressBars = document.querySelectorAll(".progress div");
window.addEventListener("scroll", () => {
  progressBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      bar.style.width = bar.getAttribute("style").match(/width:\s*([\d%]+)/)[1];
    }
  });
});
/* ---------- project data (categories + urls + optional screenshots) ---------- */
const PROJECTS = [
  // Corporate
  {
    title: "AspireX Tech",
    url: "https://aspirextech.com",
    category: "Corporate",
    description: "Company site built with WordPress & Elementor.",
    
  },
  {
    title: "Caring Australia",
    url: "https://caringaustralia.com.au",
    category: "Corporate",
    description: "Healthcare website with custom post types.",
  },
  {
    title: "Curredd Tech",
    url: "https://curreddtech.com",
    category: "Corporate",
    description: "Business services website.",
  },
  {
    title: "Impact Solves",
    url: "https://impactsolves.com",
    category: "Corporate",
    description: "Corporate solutions site.",
  },
  {
    title: "Equal Markets",
    url: "https://equalmarkets.com",
    category: "Corporate",
    description: "Market solutions platform.",
  },
  {
    title: "Caren Housing",
    url: "https://carenhousing.com.au",
    category: "Corporate",
    description: "Housing service provider.",
  },
  {
    title: "OptimalTech Guruz",
    url: "https://optimaltechguruz.com",
    category: "Corporate",
    description: "Business website with WP theme.",
  },
  {
    title: "Xlrtek",
    url: "https://xlrtek.com",
    category: "Corporate",
    description: "Technology services site.",
  },
  {
    title: "Pipeline Gurus",
    url: "https://pipelinegurus.com",
    category: "Corporate",
    description: "Sales & marketing platform.",
  },

  // Real Estate
  {
    title: "Autoadvert",
    url: "https://autoadvert.com.au",
    category: "Real Estate",
    description: "Listings & taxonomy search.",
  },
  {
    title: "Interior PPF",
    url: "https://interiorppf.com/home",
    category: "Real Estate",
    description: "Interior protection services site.",
  },

  // E-commerce
  {
    title: "Luxe Gems Co",
    url: "https://luxegemsco.com",
    category: "E-commerce",
    description: "Jewelry and gemstone online shop.",
  },
  {
    title: "Lactinova",
    url: "https://lactinova.com",
    category: "E-commerce",
    description: "Product catalog & contact forms.",
  },

  // Portfolio / Showcase
  {
    title: "Conway Arabians",
    url: "https://conwaysrabians.bespokewebcrew.com",
    category: "Portfolio",
    description: "Horse breeding showcase site.",
  },
  {
    title: "Baseball Glove Collector",
    url: "https://baseballglovecollector.com",
    category: "Portfolio",
    description: "Gallery heavy collector site.",
  },
  {
    title: "Franklin Farm LLC",
    url: "https://franklinfarmllc.com",
    category: "Portfolio",
    description: "Farm portfolio site.",
  },

  // Medical / Healthcare
  {
    title: "Prime Dental Care",
    url: "https://primedentalcare.com.au",
    category: "Healthcare",
    description: "Dental care services site.",
  },
  {
    title: "Dr Nav Singh",
    url: "https://drnavsingh.com.au",
    category: "Healthcare",
    description: "Doctor portfolio and practice site.",
  },

  // Finance
  {
    title: "Finance Smart",
    url: "https://financesmart.vn",
    category: "Finance",
    description: "Financial advisory services site.",
  },

  // Certificates
  {
    title: "Aus Chauffeur Services",
    url: "https://auschauffeurservices.com.au",
    category: "Certificates",
    description: "Chauffeur services website.",
  },
  {
    title: "House & Extension Plans",
    url: "https://houseandextensionplans.ie",
    category: "Certificates",
    description: "Architectural planning site.",
  },
];

/* DOM refs */
const filtersWrap = document.getElementById("project-filters");
const projectsGrid = document.getElementById("projects-grid");
const searchInput = document.getElementById("project-search");
const screenshotToggle = document.getElementById("screenshot-toggle");

/* categories */
function getCategories(list) {
  const set = new Set(list.map((p) => p.category || "Other"));
  return ["All", ...Array.from(set)];
}

/* create filter tab button */
function createFilterBtn(cat) {
  const btn = document.createElement("button");
  btn.className = "filter-btn";
  btn.type = "button";
  btn.textContent = cat;
  btn.dataset.category = cat;
  btn.setAttribute("role", "tab");
  if (cat === "All") btn.classList.add("active");
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects();
  });
  return btn;
}

/* render tabs */
function renderFilters() {
  const cats = getCategories(PROJECTS);
  filtersWrap.innerHTML = "";
  cats.forEach((cat) => filtersWrap.appendChild(createFilterBtn(cat)));
}

/* fallback placeholder */
const PLACEHOLDER =
  "images/close-up-image-programer-working-his-desk-office.jpg";

/* get image (manual > placeholder) */
function getProjectImage(project) {
  return project.image || PLACEHOLDER;
}

/* render projects grid */
function renderProjects() {
  const active =
    document.querySelector(".filter-btn.active")?.dataset.category || "All";
  const q = (searchInput?.value || "").toLowerCase().trim();

  const filtered = PROJECTS.filter((p) => {
    const matchesCat = active === "All" || p.category === active;
    const matchesSearch =
      !q ||
      (p.title + " " + p.description + " " + p.category)
        .toLowerCase()
        .includes(q);
    return matchesCat && matchesSearch;
  });

  projectsGrid.innerHTML = "";
  if (!filtered.length) {
    projectsGrid.innerHTML = `<p style="color:var(--muted)">No projects found.</p>`;
    return;
  }

  filtered.forEach((p) => {
     const imgSrc = getProjectImage(p);
    const screenshotUrl = `https://image.thum.io/get/${encodeURIComponent(p.url)}`;

    const card = document.createElement("article");
    card.className = "project-card card";
    card.innerHTML = `
      <div class="thumb">
        <img loading="lazy" src="${imgSrc}" alt="${p.title} thumbnail">
        <img src="${screenshotUrl}" alt="${p.title} screenshot">

        <div class="thumb-overlay">
          <a href="${p.url}" target="_blank" rel="noopener" class="btn btn-primary">🔗 Visit</a>
        </div>
      </div>
      <div class="content">
        <h4>${p.title}</h4>
        <p>${p.description}</p>
        <span class="category-chip">${p.category}</span>
      </div>
    `;
    projectsGrid.appendChild(card);
    observe(card);
  });
}

/* filters/search events */
searchInput?.addEventListener("input", () => renderProjects());

/* reveal on scroll using IntersectionObserver */
function observe(el) {
  el.style.opacity = 0;
  el.style.transform = "translateY(18px)";
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition = "all .6s cubic-bezier(.2,.9,.3,1)";
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  io.observe(el);
}

/* init */
document.addEventListener("DOMContentLoaded", () => {
  renderFilters();
  renderProjects();

  // animate elements
  document.querySelectorAll("[data-animate]").forEach((el) => observe(el));

  // footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* Certificate Lightbox */
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector(".lightbox-img");
const closeBtn = lightbox.querySelector(".close");

document.querySelectorAll(".cert-thumb img").forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.dataset.full;
    lightboxImg.alt = img.alt;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
});
