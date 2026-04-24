const PROJECTS = [
  {
    title: "Vyn Programming Language",
    tags: ["Java", "Compiler", "Scripting"],
    description: "A modern, statement-driven scripting language built on top of Java, featuring a unique Blueprint system, native concurrency, and eloquent syntax.",
    features: [
      "Native concurrency with 'split' blocks",
      "Object-oriented system using Blueprints",
      "Built-in HTTP 'fetch' and JSON support",
    ],
    link: "https://github.com/Abdelaziz1586/Vyn",
    linkLabel: "View on GitHub",
  },
  {
    title: "MSHJava Hibernation System",
    tags: ["Java", "Pterodactyl", "Optimization"],
    description: "A Pterodactyl system built entirely in Java to dramatically lower CPU & RAM usage for Minecraft: Java Edition servers through an advanced hibernation process.",
    features: [
      "Reduces server idle costs to near-zero",
      "Seamless Pterodactyl egg integration",
      "High-performance, low-overhead design",
    ],
    link: "https://www.sourcexchange.net/products/minecraft-java-hibernation-system",
    linkLabel: "View on SourceXchange",
  },
  {
    title: "MSHBedrock Hibernation System",
    tags: ["Java", "Pterodactyl", "Bedrock"],
    description: "A Pterodactyl system built entirely in Java to dramatically lower CPU & RAM usage for Minecraft: Bedrock Edition servers through an advanced hibernation process.",
    features: [
      "Brings resource-saving to the Bedrock ecosystem",
      "Easy setup with a custom Pterodactyl egg",
      "Maintains server state during hibernation",
    ],
    link: "https://www.sourcexchange.net/products/minecraft-bedrock-hibernation-system",
    linkLabel: "View on SourceXchange",
  },
  {
    title: "Minecraft Gemini AI Agent",
    tags: ["Java", "AI", "Minecraft"],
    description: "A wrapper agent utilizing Google's Gemini AI to enable automated building and AI-driven tasks within Minecraft.",
    features: [
      "Gemini AI integration for logic and planning",
      "Automated in-game construction",
      "Java-based architecture",
    ],
    link: "https://github.com/Abdelaziz1586/AIAgent",
    linkLabel: "View on GitHub",
  },
  {
    title: "Guilds Plugin",
    tags: ["BungeeCord", "Java", "Minecraft"],
    description: "A powerful BungeeCord guilds plugin designed for scalability and deep customization, allowing server owners to create unique community experiences.",
    features: [
      "Unlimited customization options",
      "Built-in invitation and tag systems",
      "Optimized for BungeeCord networks",
    ],
    link: "https://github.com/Abdelaziz1586/Guilds",
    linkLabel: "View on GitHub",
  },
  {
    title: "PebbleAntiVPN Rework",
    tags: ["Spigot", "Security", "Java"],
    description: "A high-quality, free, and robust anti-VPN plugin for Minecraft servers, designed to detect and block malicious connections from VPNs, Proxies, and TOR networks.",
    features: [
      "Intelligent detection heuristics",
      "Highly configurable to fit any server",
      "Lightweight and performance-focused",
    ],
    link: "https://www.spigotmc.org/resources/pebbleanti-vpn-high-quality-free-anti-vpn.92711/",
    linkLabel: "View on SpigotMC",
  },
  {
    title: "WorldChatter",
    tags: ["Minecraft", "API", "Spigot"],
    description: "One of the most comprehensive and feature-rich chatting plugins available on the SpigotMC market, offering unparalleled control over server communication.",
    features: [
      "Extensive formatting and channel options",
      "Developer API for easy integration",
      "Highly performant for large servers",
    ],
    link: "https://github.com/OmarOmar93/WorldChatter",
    linkLabel: "View on GitHub",
  },
  {
    title: "LiarsTable",
    tags: ["Minecraft", "GameDev", "Java"],
    description: "A unique and engaging multiplayer card game developed from scratch and implemented within the Minecraft environment, showcasing creative gameplay engineering.",
    features: [
      "Custom game logic and UI",
      "Multiplayer-ready architecture",
      "Interactive and visually polished gameplay",
    ],
    link: "",
    linkLabel: "Watch Demo",
  },
  {
    title: "Nitro-ify Bot",
    tags: ["Java", "JDA", "Discord"],
    description: "A powerful and reliable Discord bot designed to manage and automate Nitro-related services and perks within a community server, built with the JDA library.",
    features: [
      "Automated role and perk management",
      "Secure and user-friendly command interface",
      "Built with the robust Java Discord API (JDA)",
    ],
    link: "",
    linkLabel: "Watch Demo",
  },
  {
    title: "Enhanced PvP",
    tags: ["Java", "Minecraft", "Discord"],
    description: "A comprehensive PvP plugin that goes beyond simple combat, adding layers of engagement with missions, quests, cosmetic trails, and deep Discord integration.",
    features: [
      "Quest and Mission system for player retention",
      "Discord bot linkage for stats and notifications",
      "Cosmetic trails and rewards",
    ],
    link: "https://github.com/Abdelaziz1586/StrongMCPvP",
    linkLabel: "View on GitHub",
  },
  {
    title: "PebbleAPI",
    tags: ["API", "Backend", "Java"],
    description: "A custom-built API that serves as the backbone for various Meraki Studios services, designed for high availability and low latency.",
    features: [
      "RESTful architecture for easy consumption",
      "Built for high-throughput scenarios",
      "Powers multiple public-facing projects",
    ],
    link: "https://pav.merakistudios.dev",
    linkLabel: "View Live",
  },
];

const MARQUEE_ITEMS = [
  "Java", "Minecraft Plugins", "Backend Systems",
  "Discord Bots", "Pterodactyl Eggs", "API Development",
  "Performance Optimization", "Spigot", "BungeeCord",
  "System Architecture", "RESTful APIs", "Game Dev",
];

const SKILLS = [
  "Java",             "Backend Systems",
  "Minecraft Plugins","BungeeCord / Spigot",
  "Discord Bots (JDA)","Pterodactyl",
  "API Development",  "Performance Tuning",
  "RESTful APIs",     "Git",
  "System Architecture","Game Dev",
];

function renderMarquee() {
  const el = document.getElementById("marquee-content");
  if (!el) return;
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  el.innerHTML = items
    .map(
      (item) =>
        `<span class="marquee-item">${item}</span>` +
        `<span class="marquee-item marquee-sep">✦</span>`
    )
    .join("");
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = PROJECTS.map((project, i) => {
    const num = String(i + 1).padStart(2, "0");
    const tags = project.tags
      .map((t) => `<span class="project-tag">${t}</span>`)
      .join("");
    const techTags = project.tags
      .map((t) => `<span class="detail-tech-tag">${t}</span>`)
      .join("");
    const features = project.features
      .map((f) => `<li>${f}</li>`)
      .join("");

    return `
      <div class="project-row reveal d${(i % 4) + 1}" role="listitem">
        <div class="project-row-header" role="button" tabindex="0"
             aria-expanded="false" aria-label="Expand ${project.title}">
          <span class="project-num mono">${num}</span>
          <span class="project-name">${project.title}</span>
          <div class="project-tags" aria-hidden="true">${tags}</div>
          <span class="project-toggle" aria-hidden="true">+</span>
        </div>
        <div class="project-detail" role="region" aria-label="${project.title} details">
          <div class="project-detail-inner">
            <div class="project-detail-body">
              <div class="project-detail-left">
                <p class="detail-desc">${project.description}</p>
                <p class="detail-features-label mono">Key Features</p>
                <ul class="detail-features">${features}</ul>
              </div>
              <div class="detail-meta">
                <div class="detail-tech">${techTags}</div>
                <a href="${project.link}" target="_blank" rel="noopener"
                   class="project-link">
                  ${project.linkLabel || "View Project"} <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  document.querySelectorAll(".project-row-header").forEach((header) => {
    const toggle = () => {
      const row = header.closest(".project-row");
      const isOpen = row.classList.contains("open");

      document
        .querySelectorAll(".project-row.open")
        .forEach((r) => {
          r.classList.remove("open");
          r.querySelector(".project-row-header").setAttribute("aria-expanded", "false");
        });

      if (!isOpen) {
        row.classList.add("open");
        header.setAttribute("aria-expanded", "true");
      }
    };

    header.addEventListener("click", toggle);
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  });
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;
  grid.innerHTML = SKILLS.map(
    (s) => `<div class="skill-item">${s}</div>`
  ).join("");
}

function initNav() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  }, { passive: true });
}

function initHamburger() {
  const btn    = document.getElementById("nav-hamburger");
  const mobile = document.getElementById("nav-mobile");
  if (!btn || !mobile) return;

  btn.addEventListener("click", () => {
    const isOpen = btn.classList.toggle("active");
    btn.setAttribute("aria-expanded", String(isOpen));
    mobile.classList.toggle("open", isOpen);
    mobile.setAttribute("aria-hidden", String(!isOpen));
  });

  mobile.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      btn.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
      mobile.classList.remove("open");
      mobile.setAttribute("aria-hidden", "true");
    });
  });
}

function initReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderMarquee();
  renderProjects();
  renderSkills();
  initNav();
  initHamburger();
  requestAnimationFrame(() => setTimeout(initReveal, 50));
});