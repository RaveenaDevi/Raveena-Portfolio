/* ═══════════════════════════════════════════════════════════════
   Raveena — portfolio · "Midnight Violet Ledger"
   Project data + motion engine (single rAF loop, visibility-gated)
   ═══════════════════════════════════════════════════════════════ */

/* [name, url, platform, sector] */
const PROJECTS = [
  ["LiviPods", "https://livipods.com", "Shopify", "E-commerce"],
  ["Joie Smiles", "https://joiesmiles.com", "WordPress", "Healthcare"],
  ["Energyworks", "https://www.energyworks-usa.com", "Squarespace", "Services"],
  ["SoloLuna", "https://sololuna.com.au", "Shopify", "E-commerce"],
  ["Waves Aquatics", "https://www.wavesaquatics.co", "Squarespace", "Brand"],
  ["20 Property Management", "https://www.20propertymanagement.com", "Wix", "Property"],
  ["Tech Felix", "https://techfelix.com", "WordPress", "Agency"],
  ["Dr Ram Aesthetics", "https://drramaesthetics.com", "WordPress", "Healthcare"],
  ["Intrinsic Valuables", "https://intrinsicvaluables.com", "WordPress", "Business"],
  ["Normandy", "https://normandy.com", "WordPress", "Brand"],
  ["PB Tax Solutions", "https://pbtaxsolutions.ca", "WordPress", "Finance"],
  ["BeWatermark", "https://bewatermark.com", "WordPress", "Business"],
  ["Furniture Sharks", "https://furnituresharks.ca", "WordPress", "E-commerce"],
  ["Fasteny Appliance", "https://fastenyappliance.com", "WordPress", "Business"],
  ["Limbic Flow", "https://www.limbicflow.com.au", "WordPress", "Healthcare"],
  ["Cobalt Search", "https://www.cobaltsearch.com", "WordPress", "Recruitment"],
  ["Apex Insight Inspections", "https://apexinsightinspections.com", "WordPress", "Services"],
  ["Hallery Coorg", "https://www.hallerycoorg.com", "WordPress", "Hospitality"],
  ["Patriot Maids", "https://patriotmaids.com", "WordPress", "Services"],
  ["The SKE Computer Zone", "https://theskecomputerzone.com", "WordPress", "Business"],
  ["Aaytech Solution", "http://www.aaytechsolution.com", "WordPress", "Business"],
  ["OAG Inc.", "https://oaginc.com", "WordPress", "Business"],
  ["Baseball Glove Collector", "https://www.baseballglovecollector.com", "WordPress", "E-commerce"],
  ["Arabian Centric", "https://www.arabiancentric.com", "WordPress", "Brand"],
  ["Al Rashad Stud", "http://www.alrashadstud.com", "WordPress", "Brand"],
  ["Conway Arabians", "https://www.conwayarabians.com", "WordPress", "Brand"],
  ["Franklin Farm LLC", "http://www.franklinfarmllc.com", "WordPress", "Property"],
  ["Rancho Barranca", "https://ranchobarranca.com", "WordPress", "Property"],
  ["SA Arms LLC", "http://saarmsllc.com", "WordPress", "Business"],
  ["Trinity Seminary", "https://trinitysem.edu", "WordPress", "Education"],
  ["South Africa", "https://www.southafrica.com", "WordPress", "Travel"],
  ["Dr Nav Singh", "https://drnavsingh.com.au", "WordPress", "Healthcare"],
  ["Curredd Tech", "https://curreddtech.com", "WordPress", "Business"],
  ["Forest Retreat Laos", "https://forestretreatlaos.com", "WordPress", "Hospitality"],
  ["UPLAO", "https://www.uplao.org", "WordPress", "Non-profit"],
  ["Tiwana", "https://tiwana.in", "WordPress", "Business"],
  ["Arius IT", "https://ariusit.com", "WordPress", "Business"],
  ["Media Norge", "http://media-norge.com", "WordPress", "Media"],
  ["Equal Markets", "https://www.equalmarkets.com", "WordPress", "Finance"],
  ["Lactinova", "https://lactinova.com", "WordPress", "Healthcare"],
  ["Interior PPF", "http://interiorppf.com", "WordPress", "Services"],
  ["AutoAdvert", "https://www.autoadvert.com.au", "WordPress", "Automotive"],
  ["10Web", "https://10web.io", "WordPress", "Product"],
  ["Morning of Sunday", "https://morningofsunday.com", "WordPress", "Brand"],
  ["Aluma Solutions", "https://alumasolutions.ae", "WordPress", "Business"],
  ["Anders Haslum", "https://andershaslum.se", "WordPress", "Portfolio"],
  ["CopyWing", "https://copywing.com", "WordPress", "Services"],
  ["Opiate Freedom", "https://opiatefreedom.org", "WordPress", "Non-profit"],
  ["Vedhanix", "https://vedhanix.com", "WordPress", "Business"],
  ["Pacassa", "https://www.pacassa.com", "Shopify", "E-commerce"],
  ["Copprly", "https://copprly.com", "Shopify", "E-commerce"],
  ["Vedic Shop", "https://vedicshop.store", "Shopify", "E-commerce"],
  ["Grind Pound", "https://grindpound.com", "Shopify", "E-commerce"],
  ["Angelaura Luxe", "https://www.angelauraluxe.com", "Shopify", "E-commerce"],
  ["Copper Blends", "https://copperblends.com", "Shopify", "E-commerce"],
  ["20 Property UK", "https://www.20property.co.uk", "Wix", "Property"],
  ["Fullerton Car Wash", "https://www.fullertoncarwash.com", "Wix", "Services"],
  ["Wild Pup Adventures", "https://www.wildpupadventures.com", "Squarespace", "Brand"],
  ["Priceless Consulting LLC", "https://pricelessconsultingllc.com", "WordPress", "Consulting"],
  ["Nu Life Surgery", "https://nulifesurgery.com", "WordPress", "Healthcare"],
  ["Monterey Bay Real Estate", "https://montereybayrealestate.com", "WordPress", "Property"],
  ["Best Buy Maldives", "https://bestbuymaldives.com", "WordPress", "Travel"],
  ["Prime Dental Care", "https://primedentalcare.com.au", "WordPress", "Healthcare"],
  ["Finance Smart", "https://financesmart.vn", "WordPress", "Finance"],
  ["Aus Chauffeur Services", "https://auschauffeurservices.com.au", "WordPress", "Services"],
  ["House & Extension Plans", "https://houseandextensionplans.ie", "WordPress", "Property"],
];

const FEATURED = {
  "Joie Smiles": "A calm, trust-first patient journey for a dental practice — services, proof, and a contact path that is obvious on a phone.",
  "LiviPods": "Shopify storefront for a smart pill-dispenser brand: theme build, product story, and a checkout path tuned to convert.",
  "Dr Ram Aesthetics": "Aesthetics clinic on WordPress — a refined, reassuring presentation where before-and-after proof does the selling.",
  "SoloLuna": "Australian Shopify brand — collection pages, mobile-first merchandising, and a store the client can run alone.",
  "Angelaura Luxe": "Luxury Shopify boutique — an image-led storefront with an uncluttered path from collection to checkout.",
  "Energyworks": "Squarespace build for a US energy company. Clean information architecture, not a template dump.",
  "Conway Arabians": "Image-led showcase for an Arabian horse breeder — galleries, bloodlines, and a brand that reads like a stable of champions.",
  "Furniture Sharks": "Canadian furniture e-commerce on WordPress — catalog, collections, and a mobile path that never fights the products.",
  "20 Property Management": "Wix platform for a property manager — listings, enquiries, and a structure the owner runs without me.",
  "Lactinova": "Health-product catalog on WordPress — clean product presentation with a contact-first conversion flow.",
};

/* technology marquee — row one carries logos [name, images/tech/<slug>.svg] */
const TECH_LOGOS = [
  ["WordPress", "wordpress"], ["PHP", "php"], ["JavaScript", "javascript"], ["React", "react"],
  ["HTML5", "html5"], ["CSS3", "css"], ["Shopify", "shopify"], ["WooCommerce", "woocommerce"],
  ["Wix", "wix"], ["Squarespace", "squarespace"], ["Elementor", "elementor"],
  ["Cloudflare", "cloudflare"], ["cPanel", "cpanel"],
];
const TECH_CRAFT = [
  "Core Web Vitals", "ACF Pro", "Custom Post Types", "Divi", "WP Rocket", "Autoptimize", "CDN",
  "Schema Markup", "On-Page SEO", "Malware Removal", "Security Hardening", "Backup & Migration",
  "DNS", "Hosting & Deployment",
];

/* Client reviews, quoted from Raveena's LinkedIn service page (punctuation and
   spacing tidied, wording untouched). Only real reviews belong here — add new
   ones as the client wrote them. The first entry is shown as the lead card. */
const TESTIMONIALS = [
  {
    quote: "She is a fantastic developer. Good at before, during and after project approach. Brings clarity to the project at each step and quality of work is also good. Work ends at proper timeline and in my experience working with her, I faced no delay or any kind of complaint in the project she made till now. Looking forward to work with her on great projects.",
    name: "Rahul Rajput", role: "Project Manager @ Vedic Vaibhav · Software Engineer",
    service: "WordPress Design", date: "March 2026", rating: 5,
  },
  {
    quote: "Great project, I love the new website redesign. Would definitely recommend.",
    name: "Angelina K.", role: "Licensed Insurance Agent · Cybersecurity",
    service: "Web Development", date: "October 2026", rating: 5,
  },
  {
    quote: "Raveena did an excellent job developing my WooCommerce store. She delivered a clean and modern website. Communication was clear throughout the project, and everything was delivered on time. I just loved her work… Highly recommended!",
    name: "Preethi Enduri", role: "Deputy Manager at JSW Dulux Limited",
    service: "WordPress Design", date: "March 2026", rating: 5,
  },
];

/* ── helpers ────────────────────────────────────────────────── */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE_POINTER = matchMedia("(pointer: fine)").matches;

const hostOf = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "");
const shot = (url, w) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${w}`;

function liveShot(img, url, w) {
  let tries = 0;
  const attempt = () => {
    img.src = shot(url, w) + (tries ? `&r=${tries}` : "");
  };
  img.addEventListener("load", () => {
    if (img.naturalWidth > 400) {
      img.classList.add("is-loaded");
    } else if (tries < 4) {
      tries += 1;
      setTimeout(attempt, 2500 * tries);
    }
  });
  img.addEventListener("error", () => {
    if (tries < 2) { tries += 1; setTimeout(attempt, 3000); }
  });
  attempt();
}

/* watch(el, cb): cb(visible) whenever el enters/leaves an expanded viewport */
function watch(el, cb, margin = "300px") {
  if (!el) return;
  new IntersectionObserver(
    (entries) => cb(entries[0].isIntersecting),
    { rootMargin: margin }
  ).observe(el);
}

/* ── single motion loop ─────────────────────────────────────── */
const MOTION = [];
function startMotionLoop() {
  if (REDUCED || !MOTION.length) return;
  const loop = () => {
    for (let i = 0; i < MOTION.length; i++) MOTION[i]();
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

/* ── theme ──────────────────────────────────────────────────── */
function initTheme() {
  const root = document.documentElement;
  const saved = localStorage.getItem("rv-theme");
  if (saved) root.dataset.theme = saved;

  $("#theme-toggle").addEventListener("click", (e) => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    const apply = () => {
      root.dataset.theme = next;
      localStorage.setItem("rv-theme", next);
    };
    if (document.startViewTransition && !REDUCED) {
      const x = e.clientX || innerWidth - 60;
      const y = e.clientY || 40;
      const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      const t = document.startViewTransition(apply);
      t.ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
          { duration: 650, easing: "cubic-bezier(0.16,1,0.3,1)", pseudoElement: "::view-transition-new(root)" }
        );
      }).catch(() => {});
    } else apply();
  });
}

/* ── preloader (with hard failsafe — the page can never stay stuck) ── */
function runPreloader() {
  const pre = $("#preloader");
  if (!pre) return;
  let finished = false;
  const done = () => {
    if (finished) return;
    finished = true;
    pre.classList.add("is-done");
    document.body.style.overflow = "";
    setTimeout(() => pre.classList.add("is-gone"), 900);
    revealHero();
  };
  if (REDUCED || sessionStorage.getItem("rv-seen")) {
    finished = true;
    pre.classList.add("is-gone");
    revealHero();
    return;
  }
  try { sessionStorage.setItem("rv-seen", "1"); } catch (_) {}
  document.body.style.overflow = "hidden";
  setTimeout(done, 4000); /* failsafe: lift no matter what */
  const count = $("#pre-count");
  const t0 = performance.now();
  const DUR = 1500;
  const tick = (now) => {
    const p = Math.min((now - t0) / DUR, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    if (count) count.textContent = String(Math.round(eased * 50)).padStart(2, "0");
    if (p < 1) requestAnimationFrame(tick);
    else setTimeout(done, 350);
  };
  requestAnimationFrame(tick);
}

/* ── hero entrance ──────────────────────────────────────────── */
function revealHero() {
  const hero = $(".hero");
  if (!hero) return;
  $$(".hero-h1 .hl i").forEach((el, i) => el.style.setProperty("--d", `${0.25 + i * 0.13}s`));
  setTimeout(() => {
    hero.classList.add("is-in");
    $$(".hero [data-reveal], .hero [data-clip], .hero [data-draw]").forEach((el, i) => {
      if (!el.style.getPropertyValue("--d")) el.style.setProperty("--d", `${0.3 + i * 0.1}s`);
      el.classList.add("is-in");
    });
  }, 120);
}

/* ── wordmark: fit exactly to container width ───────────────── */
function fitWordmark() {
  const marks = $$("#wordmark, .footer-mark"); /* hero wordmark and its footer echo */
  if (!marks.length) return;
  const fit = () => marks.forEach((el) => {
    const target = el.clientWidth - 2;
    el.style.width = "max-content";
    el.style.fontSize = "100px";
    const w = el.offsetWidth;
    el.style.width = "";
    if (w > 0 && target > 0) el.style.fontSize = `${Math.floor((100 * target) / w * 0.995)}px`;
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit).catch(() => {});
  fit();
  addEventListener("resize", fit);
}

/* ── split text (section headings) ──────────────────────────── */
function splitHeadings() {
  $$("[data-split]").forEach((el) => {
    const nodes = [...el.childNodes];
    el.textContent = "";
    let i = 0;
    const addWord = (word, italic) => {
      const mask = document.createElement("span");
      mask.className = "w";
      const inner = document.createElement("i");
      inner.textContent = word;
      inner.style.setProperty("--d", `${i * 0.05}s`);
      if (italic) {
        const em = document.createElement("em");
        em.appendChild(inner);
        mask.appendChild(em);
      } else mask.appendChild(inner);
      el.appendChild(mask);
      el.appendChild(document.createTextNode(" "));
      i += 1;
    };
    nodes.forEach((node) => {
      const italic = node.nodeName === "EM";
      const text = node.textContent.trim();
      if (!text) return;
      text.split(/\s+/).forEach((w) => addWord(w, italic));
    });
  });
}

/* ── observers ──────────────────────────────────────────────── */
function bindReveals() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
  );
  $$("[data-reveal], [data-clip], [data-split], [data-draw], .t-card, .plate")
    .filter((el) => !el.closest(".hero"))
    .forEach((el) => io.observe(el));

  $$(".cert-grid, .stats, .svc-grid, .pillars, .facts, .skills, .voice-grid").forEach((group) => {
    [...group.children].forEach((child, i) => child.style.setProperty("--d", `${i * 0.08}s`));
  });

  /* the sheen repaints while animating — run it only when on screen */
  const masthead = $(".masthead");
  watch(masthead, (v) => masthead.classList.toggle("is-live", v), "100px");
  /* same gate for the hero portrait's slow drift on phones */
  const hero = $(".hero");
  watch(hero, (v) => hero.classList.toggle("is-live", v), "0px");

  /* clip-path flattens 3D children — drop it once the reveal finishes */
  document.addEventListener("transitionend", (e) => {
    if (e.propertyName === "clip-path" && e.target.matches("[data-clip].is-in")) {
      e.target.style.clipPath = "none";
    }
  });
}

function bindCounters() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        io.unobserve(el);
        const target = Number(el.dataset.count);
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";
        if (REDUCED) { el.textContent = prefix + target + suffix; return; }
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / 2000, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          el.textContent = prefix + Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.6 }
  );
  $$("[data-count]").forEach((el) => io.observe(el));
}

/* ── technology marquee (two counter-running velocity rows on a 3D shelf;
      runs only in view, widths measured once — no layout reads per frame) ── */
function buildTicker() {
  const rows = [
    { track: $("#ticker-a"), dir: -1, items: TECH_LOGOS },
    { track: $("#ticker-b"), dir: 1, items: TECH_CRAFT.map((name) => [name]) },
  ].filter((row) => row.track);
  if (!rows.length) return;

  rows.forEach(({ track, items }) => {
    for (let n = 0; n < 4; n++) {
      items.forEach(([name, slug]) => {
        const s = document.createElement("span");
        if (slug) {
          const logo = document.createElement("i");
          logo.className = "ti";
          logo.style.setProperty("--logo", `url(images/tech/${slug}.svg)`);
          s.appendChild(logo);
        }
        s.appendChild(document.createTextNode(name));
        track.appendChild(s);
      });
    }
  });
  if (REDUCED) return;

  const measure = () => rows.forEach((row) => { row.half = row.track.scrollWidth / 2; });
  rows.forEach((row) => { row.x = 0; });
  measure();
  addEventListener("resize", measure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure).catch(() => {});

  let visible = false, vel = 0, lastY = scrollY;
  watch(rows[0].track.closest(".marquee"), (v) => { visible = v; });
  MOTION.push(() => {
    if (!visible) { lastY = scrollY; return; }
    const dy = scrollY - lastY;
    lastY = scrollY;
    vel += (Math.min(Math.abs(dy), 60) * Math.sign(dy) - vel) * 0.08;
    const skew = Math.max(-4, Math.min(4, vel * 0.15)).toFixed(2);
    rows.forEach((row) => {
      row.x += row.dir * (0.35 + vel * 0.11);
      if (row.half > 0) {
        if (row.x <= -row.half) row.x += row.half;
        if (row.x > 0) row.x -= row.half;
      }
      row.track.style.transform = `rotateX(14deg) translateX(${row.x.toFixed(2)}px) skewX(${skew}deg)`;
    });
  });
}

/* ── magnetic CTAs (tilted elements excluded — one transform writer) ── */
function bindMagnetic() {
  if (REDUCED || !FINE_POINTER) return;
  $$(".magnet").filter((el) => !el.hasAttribute("data-tilt")).forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${dx * 0.16}px, ${dy * 0.2}px)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });
}

/* ── 3D tilt engine: writes only while a card is actually moving ── */
function bindTilt() {
  if (REDUCED || !FINE_POINTER) return;
  const states = [];
  $$("[data-tilt]").forEach((el) => {
    const max = Number(el.dataset.tilt) || 6;
    const s = { el, tx: 0, ty: 0, cx: 0, cy: 0, max, dirty: false };
    const glare = el.classList.contains("svc"); /* service cards carry a pointer-lit glare */
    states.push(s);
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      s.tx = (py - 0.5) * -2 * max;
      s.ty = (px - 0.5) * 2 * max;
      s.dirty = true;
      if (glare) {
        el.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
        el.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
      }
    });
    el.addEventListener("pointerleave", () => { s.tx = 0; s.ty = 0; s.dirty = true; });
  });
  if (!states.length) return;

  /* the hero print also carries a slow scroll parallax */
  const heroPrint = $(".hero-print");
  let heroVisible = true, py = 0;
  watch($(".hero"), (v) => { heroVisible = v; });

  MOTION.push(() => {
    for (const s of states) {
      const isPrint = s.el === heroPrint;
      if (!s.dirty && !isPrint) continue;
      s.cx += (s.tx - s.cx) * 0.06;
      s.cy += (s.ty - s.cy) * 0.06;
      const settled = Math.abs(s.cx) < 0.02 && Math.abs(s.cy) < 0.02 && !s.tx && !s.ty;
      if (isPrint) {
        if (!heroVisible && settled) continue;
        const ty = Math.min(scrollY, innerHeight * 1.4) * -0.06;
        py += (ty - py) * 0.08;
        s.el.style.transform = `translateY(${py.toFixed(2)}px) perspective(1100px) rotateX(${s.cx.toFixed(3)}deg) rotateY(${s.cy.toFixed(3)}deg)`;
        if (settled && Math.abs(ty - py) < 0.05) s.dirty = false;
      } else if (settled) {
        s.el.style.transform = "";
        s.dirty = false;
      } else {
        s.el.style.transform = `perspective(1100px) rotateX(${s.cx.toFixed(3)}deg) rotateY(${s.cy.toFixed(3)}deg)`;
      }
    }
  });
}

/* ── touch devices have no pointer to tilt with, so cards tip in 3D as they
      pass the top and bottom of the screen — and lie flat (crisp text)
      through the middle half, where they are actually read ── */
function bindScrollTilt() {
  if (REDUCED || FINE_POINTER) return;
  const items = $$(".svc, .voice, .perf, .vcard, .quote-inner, .cert").map((el) => ({ el, on: false, cur: 0 }));
  if (!items.length) return;
  const byEl = new Map(items.map((it) => [it.el, it]));
  const io = new IntersectionObserver(
    (entries) => entries.forEach((entry) => { byEl.get(entry.target).on = entry.isIntersecting; }),
    { rootMargin: "60px 0px" }
  );
  items.forEach((it) => io.observe(it.el));
  MOTION.push(() => {
    const half = innerHeight / 2;
    for (const it of items) {
      if (!it.on && it.cur === 0) continue;
      let target = 0;
      if (it.on) {
        const r = it.el.getBoundingClientRect();
        const p = (r.top + r.height / 2 - half) / half; /* −1 top edge … +1 bottom edge */
        /* anything taller than half the screen is being read edge to edge — leave it flat */
        if (r.height <= half) target = Math.sign(p) * Math.min(1, Math.max(0, Math.abs(p) - 0.5) / 0.5) * 7;
      }
      const next = it.cur + (target - it.cur) * 0.18;
      if (Math.abs(next) < 0.02 && target === 0) {
        if (it.cur !== 0) { it.cur = 0; it.el.style.transform = ""; }
        continue;
      }
      if (Math.abs(next - it.cur) < 0.005) continue;
      it.cur = next;
      it.el.style.transform = `perspective(900px) rotateX(${next.toFixed(2)}deg)`;
    }
  });
}

/* ── services: wrap each card's detail so phones can fold it away ── */
function bindServices() {
  const cards = $$(".svc");
  if (!cards.length) return;
  cards.forEach((card) => {
    const more = document.createElement("div");
    more.className = "svc-more";
    const inner = document.createElement("div");
    inner.className = "svc-more-in";
    inner.append(...$$(":scope > p, :scope > .chips", card));
    more.appendChild(inner);
    card.appendChild(more);
  });

  /* phones get an accordion (first card open); wider screens show everything */
  const narrow = matchMedia("(max-width: 760px)");
  const set = (card, open) => {
    card.classList.toggle("is-open", open);
    card.setAttribute("aria-expanded", String(open));
  };
  const sync = () => cards.forEach((card, i) => {
    if (narrow.matches) {
      card.setAttribute("role", "button");
      card.tabIndex = 0;
      set(card, i === 0);
    } else {
      card.removeAttribute("role");
      card.removeAttribute("tabindex");
      card.removeAttribute("aria-expanded");
      card.classList.remove("is-open");
    }
  });
  sync();
  narrow.addEventListener("change", sync);
  const toggle = (card) => { if (narrow.matches) set(card, !card.classList.contains("is-open")); };
  cards.forEach((card) => {
    card.addEventListener("click", () => toggle(card));
    card.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      toggle(card);
    });
  });
}

/* ── wordmark leans back in 3D as it passes through the view ── */
function bindWordmarkLean() {
  if (REDUCED) return;
  const wrap = $(".wordmark-wrap");
  if (!wrap) return;
  let visible = false, cur = 0;
  watch(wrap, (v) => { visible = v; });
  MOTION.push(() => {
    if (!visible && Math.abs(cur) < 0.05) return;
    const r = wrap.getBoundingClientRect();
    const mid = r.top + r.height / 2;
    const target = Math.max(-13, Math.min(13, ((mid - innerHeight * 0.62) / innerHeight) * 26));
    cur += (target - cur) * 0.07;
    wrap.style.transform = `perspective(900px) rotateX(${cur.toFixed(3)}deg)`;
  });
}

/* ── header, progress, scrollspy ────────────────────────────── */
function bindChrome() {
  const header = $("#site-header");
  const bar = $("#progress-bar");
  const nav = $("#primary-nav");
  const toggle = $("#menu-toggle");
  const links = $$("#primary-nav a");
  const sections = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);
  const dock = $("#dock");

  /* the contact dock steps aside once the contact section or footer is on screen */
  let nearEnd = false;
  const ends = new Map();
  let ticking = false, lastY = scrollY;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const y = scrollY;
      header.classList.toggle("is-scrolled", y > 24);
      /* phones (CSS-gated): hide the header reading down, bring it back on the first scroll up */
      if (y > lastY + 4 && y > 240 && !nav.classList.contains("is-open")) header.classList.add("is-away");
      else if (y < lastY - 4 || y <= 240) header.classList.remove("is-away");
      lastY = y;
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
      let current = null;
      sections.forEach((sec) => {
        if (sec.getBoundingClientRect().top < innerHeight * 0.4) current = sec.id;
      });
      links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${current}`));
      if (dock) dock.classList.toggle("is-on", y > innerHeight * 0.6 && !nearEnd);
    });
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const endWatch = new IntersectionObserver((entries) => {
    entries.forEach((entry) => ends.set(entry.target, entry.isIntersecting));
    nearEnd = [...ends.values()].some(Boolean);
    onScroll();
  });
  $$("#contact, .site-footer").forEach((el) => endWatch.observe(el));

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* ── signature work: plates + 3D sticky stacking ────────────── */
function renderStack() {
  const stack = $("#stack");
  const items = Object.keys(FEATURED)
    .map((name) => PROJECTS.find((p) => p[0] === name))
    .filter(Boolean);

  items.forEach(([name, url, platform, sector], i) => {
    const plate = document.createElement("article");
    plate.className = "plate";
    plate.innerHTML = `
      <div class="plate-media" data-tilt="4">
        <a class="plate-screen" href="${url}" target="_blank" rel="noopener" aria-label="${name} — open live site">
          <b>${name}</b>
          <img alt="Live screenshot of ${name}" loading="${i < 2 ? "eager" : "lazy"}" decoding="async" />
          <span class="plate-visit">Visit live ↗</span>
        </a>
      </div>
      <div class="plate-copy">
        <span class="plate-num">${String(i + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}</span>
        <h3>${name}</h3>
        <p>${FEATURED[name]}</p>
        <div class="plate-meta">
          <span><b>${platform}</b></span>
          <span>${sector}</span>
          <span>${hostOf(url)}</span>
        </div>
        <a class="cta cta-gold plate-cta magnet" href="${url}" target="_blank" rel="noopener">Visit live <i>↗</i></a>
      </div>`;
    stack.appendChild(plate);
    liveShot(plate.querySelector("img"), url, 1200);
  });

  const plates = $$(".plate", stack);
  const wide = matchMedia("(min-width: 1061px)");

  /* phones: the deck is a swipe track — keep a live "03 / 10" readout */
  const count = $("#deck-count");
  const bar = $("#deck-bar");
  const total = String(plates.length).padStart(2, "0");
  const readout = (i) => {
    if (count) count.textContent = `${String(i + 1).padStart(2, "0")} / ${total}`;
    if (bar) bar.style.transform = `scaleX(${((i + 1) / plates.length).toFixed(3)})`;
  };
  readout(0);
  let swiping = false;
  stack.addEventListener("scroll", () => {
    if (swiping || plates.length < 2) return;
    swiping = true;
    requestAnimationFrame(() => {
      swiping = false;
      const step = plates[1].offsetLeft - plates[0].offsetLeft;
      if (step > 0) readout(Math.max(0, Math.min(plates.length - 1, Math.round(stack.scrollLeft / step))));
    });
  }, { passive: true });

  if (REDUCED) return;
  let visible = false, wasWide = false;
  watch(stack, (v) => { visible = v; });

  /* Desktop hand-off. Each plate's resting position is measured once (and
     again whenever the deck resizes), so a frame only does arithmetic on
     scrollY — no layout reads while scrolling. The outgoing plate eases back
     and fades as the next one rises to dock. */
  const tops = new Array(plates.length).fill(0);
  const cur = new Array(plates.length).fill(0);
  const measure = () => {
    if (!wide.matches) return;
    const gap = parseFloat(getComputedStyle(stack).rowGap) || 0;
    let y = stack.getBoundingClientRect().top + scrollY;
    plates.forEach((p, i) => { tops[i] = y; y += p.offsetHeight + gap; });
  };
  addEventListener("resize", measure);
  if (window.ResizeObserver) new ResizeObserver(measure).observe(stack);

  MOTION.push(() => {
    if (!wide.matches) {
      if (wasWide) {
        plates.forEach((p) => { p.style.transform = ""; p.style.opacity = ""; });
        cur.fill(0);
        wasWide = false;
      }
      return;
    }
    if (!wasWide) { wasWide = true; measure(); }
    if (!visible) return;
    const vh = innerHeight;
    const y = scrollY;
    for (let i = 0; i < plates.length - 1; i++) {
      const raw = Math.max(0, Math.min(1, (vh - (tops[i + 1] - y)) / (vh * 0.72)));
      const t = raw * raw * (3 - 2 * raw);
      const prev = cur[i];
      const c = prev + (t - prev) * 0.2;
      if (Math.abs(c - prev) < 0.0004 && Math.abs(t - c) < 0.002) continue;
      cur[i] = c;
      plates[i].style.transform = `translate3d(0, ${(c * -22).toFixed(2)}px, 0) scale(${(1 - c * 0.07).toFixed(4)})`;
      plates[i].style.opacity = (1 - c).toFixed(3);
    }
  });
}

/* ── ledger: rows, filters, search, hover preview ───────────── */
function renderIndex() {
  const body = $("#index-body");
  const countEl = $("#index-count");
  const empty = $("#index-empty");
  const peek = $("#peek");
  const peekImg = peek.querySelector("img");
  const peekLabel = peek.querySelector("span");
  let activeFilter = "all";
  let query = "";

  PROJECTS.forEach(([name, url, platform, sector], i) => {
    const li = document.createElement("li");
    li.className = "row";
    li.dataset.platform = platform;
    li.dataset.text = `${name} ${hostOf(url)} ${platform} ${sector}`.toLowerCase();
    li.innerHTML = `
      <a href="${url}" target="_blank" rel="noopener" aria-label="${name} — open live site">
        <span class="row-num">${String(i + 1).padStart(2, "0")}</span>
        <span class="row-name">${name}</span>
        <span class="row-host">${hostOf(url)}</span>
        <span class="row-platform">${platform}</span>
        <span class="row-arrow">↗</span>
      </a>`;
    body.appendChild(li);

    if (FINE_POINTER && !REDUCED) {
      li.addEventListener("mouseenter", () => {
        peekImg.src = shot(url, 480);
        peekLabel.textContent = `${hostOf(url)} — live`;
        peek.classList.add("is-on");
      });
      li.addEventListener("mouseleave", () => peek.classList.remove("is-on"));
    }
  });

  if (FINE_POINTER && !REDUCED) {
    addEventListener("mousemove", (e) => {
      if (!peek.classList.contains("is-on")) return;
      const x = Math.min(e.clientX + 26, innerWidth - 320);
      const y = Math.min(Math.max(e.clientY - 90, 12), innerHeight - 250);
      peek.style.left = `${x}px`;
      peek.style.top = `${y}px`;
    }, { passive: true });
  }

  /* Rows are visible the moment they exist — no per-row scroll reveal, so
     nothing arrives late. The ledger opens short; one tap or any search
     shows the rest. */
  const rows = $$(".row", body);
  const moreBtn = $("#index-more");
  const narrow = matchMedia("(max-width: 760px)");
  let expanded = false;
  const apply = () => {
    const limit = expanded || query ? Infinity : narrow.matches ? 8 : 12;
    let matches = 0;
    rows.forEach((row) => {
      const ok =
        (activeFilter === "all" || row.dataset.platform === activeFilter) &&
        (!query || row.dataset.text.includes(query));
      row.hidden = !(ok && matches < limit);
      if (ok) matches += 1;
    });
    countEl.textContent = matches;
    empty.hidden = matches > 0;
    moreBtn.hidden = matches <= limit;
    if (!moreBtn.hidden) moreBtn.textContent = `Show all ${matches} sites`;
  };
  apply();
  moreBtn.addEventListener("click", () => { expanded = true; apply(); });
  narrow.addEventListener("change", apply);

  const filters = $$(".filter");
  const setFilter = (name) => {
    activeFilter = name;
    expanded = false;
    filters.forEach((b) => {
      const on = b.dataset.filter === name;
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-pressed", String(on));
    });
    apply();
  };
  filters.forEach((btn) => btn.addEventListener("click", () => setFilter(btn.dataset.filter)));
  $("#index-search").addEventListener("input", (e) => {
    query = e.target.value.trim().toLowerCase();
    apply();
  });
  return setFilter;
}

/* ── CMS expertise: live counts, share bars, rotating platform cube ── */
function bindCms(setFilter) {
  const counts = {};
  PROJECTS.forEach((p) => { counts[p[2]] = (counts[p[2]] || 0) + 1; });
  $$("[data-cms-count]").forEach((el) => { el.textContent = counts[el.dataset.cmsCount] || 0; });
  $$("[data-cms-bar]").forEach((el) => {
    const share = (counts[el.dataset.cmsBar] || 0) / PROJECTS.length;
    el.style.setProperty("--v", Math.max(0.04, share).toFixed(3));
  });

  const rows = $$(".cms-row");
  rows.forEach((row) =>
    row.addEventListener("click", () => {
      setFilter(row.dataset.platform);
      $("#ledger").scrollIntoView({ behavior: REDUCED ? "auto" : "smooth" });
    })
  );

  const cube = $("#cube");
  if (!cube || REDUCED) return;
  /* the cube idles in a slow spin; hovering or focusing a row turns that
     platform's face to the front by the shortest way round */
  let visible = false, angle = -28, target = null, front = -1;
  watch($("#cube-stage"), (v) => { visible = v; }, "120px");
  rows.forEach((row) => {
    const hold = () => { target = -90 * Number(row.dataset.face); };
    const release = () => { target = null; };
    row.addEventListener("pointerenter", hold);
    row.addEventListener("focus", hold);
    row.addEventListener("pointerleave", release);
    row.addEventListener("blur", release);
  });
  MOTION.push(() => {
    if (!visible) return;
    if (target === null) angle -= 0.22;
    else angle += ((((target - angle) % 360) + 540) % 360 - 180) * 0.09;
    cube.style.transform = `rotateX(-14deg) rotateY(${angle.toFixed(2)}deg)`;
    const facing = ((Math.round(-angle / 90) % 4) + 4) % 4;
    if (facing !== front) {
      front = facing;
      rows.forEach((row) => row.classList.toggle("is-active", Number(row.dataset.face) === facing));
    }
  });
}

/* ── testimonials: rendered from TESTIMONIALS; hidden when there is nothing real to show ── */
function renderVoices() {
  const section = $("#testimonials");
  const grid = $("#voice-grid");
  if (!section || !grid) return;
  if (!TESTIMONIALS.length) {
    const num = $("#contact-num");
    if (num) num.textContent = "10"; /* keep section numbering continuous */
    return;
  }
  TESTIMONIALS.forEach((t, i) => {
    const card = document.createElement("figure");
    card.className = `voice${i === 0 ? " voice--lead" : ""}`;
    card.dataset.reveal = "";
    card.dataset.tilt = "5";

    const body = document.createElement("div");
    body.className = "voice-body";
    const meta = document.createElement("div");
    meta.className = "voice-meta";
    const stars = document.createElement("span");
    stars.className = "voice-stars";
    stars.setAttribute("role", "img");
    stars.setAttribute("aria-label", `Rated ${t.rating} out of 5`);
    stars.textContent = "★".repeat(t.rating);
    const service = document.createElement("span");
    service.className = "voice-service";
    service.textContent = t.service;
    meta.append(stars, service);
    const quote = document.createElement("blockquote");
    quote.textContent = t.quote;
    body.append(meta, quote);

    const cap = document.createElement("figcaption");
    const avatar = document.createElement("span");
    avatar.className = "voice-avatar";
    avatar.textContent = t.name.trim().charAt(0).toUpperCase();
    const who = document.createElement("span");
    who.className = "voice-who";
    const name = document.createElement("strong");
    name.textContent = t.name;
    const role = document.createElement("span");
    role.textContent = t.role;
    who.append(name, role);
    const src = document.createElement("span");
    src.className = "voice-src";
    src.innerHTML = '<svg aria-hidden="true"><use href="#i-linkedin" /></svg>';
    src.append(t.date);
    cap.append(avatar, who, src);
    card.append(body, cap);
    grid.appendChild(card);
  });
  section.hidden = false;
}

/* ── scroll-lit rails (method + experience) ─────────────────── */
function bindRails() {
  if (REDUCED) {
    const mf = $("#method-fill"), rf = $("#rail-fill");
    if (mf) mf.style.transform = "scaleY(1)";
    if (rf) rf.style.transform = "scaleY(1)";
    return;
  }
  [
    { wrap: $("#method-rail"), fill: $("#method-fill"), head: $("#method-head") },
    { wrap: $("#timeline"), fill: $("#rail-fill"), head: null },
  ].forEach(({ wrap, fill, head }) => {
    if (!wrap || !fill) return;
    let visible = false, cur = -1;
    watch(wrap, (v) => { visible = v; });
    MOTION.push(() => {
      if (!visible) return;
      const r = wrap.getBoundingClientRect();
      const total = r.height - innerHeight * 0.35;
      const passed = innerHeight * 0.72 - r.top;
      const p = Math.max(0, Math.min(1, passed / total));
      if (Math.abs(p - cur) < 0.001) return;
      cur = p;
      fill.style.transform = `scaleY(${p.toFixed(4)})`;
      if (head) head.style.top = `${(p * 100).toFixed(2)}%`;
    });
  });
}

/* ── lightbox ───────────────────────────────────────────────── */
function bindLightbox() {
  const box = $("#lightbox");
  const img = box.querySelector("img");
  const cap = box.querySelector("figcaption");
  const close = () => {
    box.classList.remove("is-open");
    box.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };
  $$(".cert").forEach((btn) =>
    btn.addEventListener("click", () => {
      img.src = btn.dataset.img;
      img.alt = btn.dataset.title;
      cap.textContent = btn.dataset.title;
      box.classList.add("is-open");
      box.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    })
  );
  box.addEventListener("click", (e) => {
    if (e.target === box || e.target.closest(".lightbox-close")) close();
  });
  addEventListener("keydown", (e) => {
    if (e.key === "Escape" && box.classList.contains("is-open")) close();
  });
}

/* ── misc: form, back-top, year ─────────────────────────────── */
function bindMisc() {
  $("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const subject = encodeURIComponent(`Project brief from ${data.get("name")}`);
    const bodyTxt = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} · ${data.get("email")}`);
    location.href = `mailto:raveenadevi0521@gmail.com?subject=${subject}&body=${bodyTxt}`;
  });
  $("#back-top").addEventListener("click", () => scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" }));
  $("#year").textContent = new Date().getFullYear();
}

/* ── boot: the preloader always lifts, whatever else happens ── */
function boot() {
  try {
    initTheme();
    renderVoices();
    bindServices();
    splitHeadings();
    renderStack();
    bindCms(renderIndex());
    buildTicker();
    fitWordmark();
    bindReveals();
    bindCounters();
    bindMagnetic();
    bindChrome();
    bindRails();
    bindTilt();
    bindScrollTilt();
    bindWordmarkLean();
    bindLightbox();
    bindMisc();
    runPreloader();
    startMotionLoop();
  } catch (err) {
    const pre = $("#preloader");
    if (pre) pre.remove();
    document.body.style.overflow = "";
    document.documentElement.classList.add("no-motion");
    console.error("boot failed, static fallback:", err);
  }
}

document.addEventListener("DOMContentLoaded", boot);
