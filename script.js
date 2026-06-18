const SITE = {
  email: "abdelaziz.hasaneen@merakistudios.dev",
  github: "https://github.com/Abdelaziz1586",
  navigation: [
    { label: "Setups", href: "#server-setups" },
    { label: "Discord", href: "#discord-setups" },
    { label: "Work", href: "#work" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ],
  stats: [
    { value: "12+", label: "Featured projects across backend, games, and automation" },
    { value: "Java", label: "Primary runtime for reliable production systems" },
    { value: "24/7", label: "Mindset for resilient server communities" },
  ],
  metrics: [
    { value: "Meraki", label: "Studio experience" },
    { value: "Minecraft", label: "Server infrastructure" },
    { value: "APIs", label: "Backend platforms" },
    { value: "JDA", label: "Discord automation" },
  ],
  terminalLines: [
    "$ boot portfolio-core",
    "profile: backend developer",
    "focus: performance, reliability, clean APIs",
    "systems: minecraft infra, pterodactyl, discord",
    "status: ready for the next build",
  ],
};

const PROJECT_FILTERS = ["All", "Java", "Minecraft", "Backend", "AI", "Discord", "Security"];

const SERVER_SETUPS = [
  {
    title: "Sakura Modern | Practice Setup",
    category: "Custom Practice Server",
    description: "A premium, fully custom practice setup built for competitive Minecraft communities. Sakura Modern pairs a bespoke Practice plugin with load-aware arena scaling, automatically provisioning new arenas as player demand rises so server owners can keep matches flowing without manual intervention.",
    highlights: [
      "Custom Practice plugin tailored around queues, parties, kits, and ranked play",
      "Automatic arena scaling that creates fresh arenas when server load increases",
      "Polished hub flow with NPC selectors, clean menus, scoreboards, and party tools",
      "Built as a launch-ready setup for studios that want a premium practice experience",
    ],
    stats: [
      { value: "Custom", label: "Practice plugin" },
      { value: "Auto", label: "Arena scaling" },
      { value: "Ranked", label: "Queue support" },
    ],
    images: [
      {
        src: "assets/minecraft-server-setups/sakura-modern/sakura-modern-hub-overview.png",
        alt: "Sakura Modern practice hub with NPC mode selectors",
        caption: "Practice hub overview",
      },
      {
        src: "assets/minecraft-server-setups/sakura-modern/sakura-modern-practice-npcs.png",
        alt: "Sakura Modern lobby with NPC selectors for practice modes",
        caption: "Mode selector lobby",
      },
      {
        src: "assets/minecraft-server-setups/sakura-modern/sakura-modern-ranked-queue.png",
        alt: "Sakura Modern ranked queue menu",
        caption: "Ranked queue menu",
      },
      {
        src: "assets/minecraft-server-setups/sakura-modern/sakura-modern-party-creation.png",
        alt: "Sakura Modern party creation interface",
        caption: "Party creation flow",
      },
      {
        src: "assets/minecraft-server-setups/sakura-modern/sakura-modern-kit-selection.png",
        alt: "Sakura Modern kit selection menu",
        caption: "Kit selection",
      },
      {
        src: "assets/minecraft-server-setups/sakura-modern/sakura-modern-party-members.png",
        alt: "Sakura Modern party members management menu",
        caption: "Party management",
      },
      {
        src: "assets/minecraft-server-setups/sakura-modern/sakura-modern-party-kick.png",
        alt: "Sakura Modern party kick management menu",
        caption: "Party controls",
      },
      {
        src: "assets/minecraft-server-setups/sakura-modern/sakura-modern-party-transfer.png",
        alt: "Sakura Modern party ownership transfer menu",
        caption: "Ownership transfer",
      },
    ],
  },
];

const DISCORD_SETUPS = [
  {
    name: "Arioxa Cloud",
    subtitle: "Virtual Power, Real Performance",
    publicDescription: "Virtual Power, Real Performance",
    contribution: "Bot-assisted community operations for a cloud-hosting focused Discord, helping the server feel more structured and responsive for members.",
    invite: "https://discord.gg/SQvjvHsxr",
    logo: "assets/discord-setups/arioxa-cloud/logo.png",
    members: 43,
    online: 11,
    tags: ["Cloud", "Community", "Automation"],
  },
  {
    name: "Blazit | Network",
    subtitle: "Minecraft network community",
    publicDescription: "Minecraft Server For Premium And Cracked Users IP : blazit.mine.bz",
    contribution: "Bot support for a Minecraft network community, helping connect server activity, member flow, and Discord-side operations.",
    invite: "https://discord.gg/FWh2YaZD",
    logo: "assets/discord-setups/blazit-network/logo.png",
    members: 31,
    online: 6,
    tags: ["Minecraft", "Network", "Bots"],
  },
  {
    name: "Meraki Studios: Community Edition",
    subtitle: "Studio community hub",
    publicDescription: "The Official Organization where a bunch of Nerds create limitless projects.",
    contribution: "Bot systems and community automation for a studio-oriented Discord where projects, announcements, and member interaction need to stay clear.",
    invite: "https://discord.gg/2jjDMJvcp",
    logo: "assets/discord-setups/meraki-studios-community-edition/logo.png",
    members: 41,
    online: 17,
    tags: ["Studio", "Community", "Projects"],
  },
  {
    name: "Falcon Community",
    subtitle: "FalconMC community server",
    publicDescription: "Official Server for Falcon Community (FalconMC)",
    contribution: "Discord bot support for a Minecraft community with game-facing workflows, community signals, and member engagement utilities.",
    invite: "https://discord.gg/suBfjAeD",
    logo: "assets/discord-setups/falcon-community/logo.png",
    members: 57,
    online: 10,
    tags: ["Minecraft", "PVP", "Community"],
  },
];

const PROJECTS = [
  {
    title: "Vyn Programming Language",
    category: "Language",
    tags: ["Java", "Compiler", "Scripting"],
    description: "A modern, statement-driven scripting language built on Java with a Blueprint system, native concurrency, and expressive syntax.",
    features: [
      "Native concurrency with split blocks",
      "Object-oriented system using Blueprints",
      "Built-in HTTP fetch and JSON support",
    ],
    link: "https://github.com/Abdelaziz1586/Vyn",
    linkLabel: "View on GitHub",
  },
  {
    title: "DHelper",
    category: "Backend",
    tags: ["Java", "Persistence", "ORM"],
    description: "A Java persistence helper that removes repetitive data access work and lets teams switch storage backends without rewriting CRUD logic.",
    features: [
      "Unified async CRUD API via DataHandler",
      "Supports SQL, MongoDB, and file-based storage",
      "Annotation-driven mapping with built-in caching",
    ],
    link: "https://github.com/Abdelaziz1586/DHelper",
    linkLabel: "View on GitHub",
  },
  {
    title: "MSHJava Hibernation System",
    category: "Infrastructure",
    tags: ["Java", "Pterodactyl", "Minecraft"],
    description: "A Pterodactyl system built in Java to dramatically lower CPU and RAM usage for Minecraft: Java Edition servers through hibernation.",
    features: [
      "Reduces idle server costs to near-zero",
      "Seamless Pterodactyl egg integration",
      "High-performance, low-overhead design",
    ],
    link: "https://www.sourcexchange.net/products/minecraft-java-hibernation-system",
    linkLabel: "View on SourceXchange",
  },
  {
    title: "MSHBedrock Hibernation System",
    category: "Infrastructure",
    tags: ["Java", "Pterodactyl", "Minecraft"],
    description: "A Pterodactyl system for Minecraft: Bedrock Edition servers that brings the same resource-saving hibernation flow to Bedrock communities.",
    features: [
      "Resource saving for the Bedrock ecosystem",
      "Easy setup with a custom Pterodactyl egg",
      "Maintains server state during hibernation",
    ],
    link: "https://www.sourcexchange.net/products/minecraft-bedrock-hibernation-system",
    linkLabel: "View on SourceXchange",
  },
  {
    title: "Minecraft Gemini AI Agent",
    category: "AI",
    tags: ["Java", "AI", "Minecraft"],
    description: "A wrapper agent using Google's Gemini AI to enable automated building and AI-driven tasks inside Minecraft.",
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
    category: "Community",
    tags: ["BungeeCord", "Java", "Minecraft"],
    description: "A scalable BungeeCord guilds plugin with deep customization for server owners building stronger player communities.",
    features: [
      "Customizable guild systems",
      "Built-in invitation and tag flows",
      "Optimized for BungeeCord networks",
    ],
    link: "https://github.com/Abdelaziz1586/Guilds",
    linkLabel: "View on GitHub",
  },
  {
    title: "PebbleAntiVPN Rework",
    category: "Security",
    tags: ["Spigot", "Security", "Java"],
    description: "A robust anti-VPN plugin for Minecraft servers that detects and blocks VPNs, proxies, and TOR-based connections.",
    features: [
      "Intelligent detection heuristics",
      "Configurable rules for different server needs",
      "Lightweight, performance-focused design",
    ],
    link: "https://www.spigotmc.org/resources/pebbleanti-vpn-high-quality-free-anti-vpn.92711/",
    linkLabel: "View on SpigotMC",
  },
  {
    title: "WorldChatter",
    category: "Communication",
    tags: ["Minecraft", "API", "Spigot"],
    description: "A feature-rich chat plugin for SpigotMC that gives server teams precise control over player communication and formatting.",
    features: [
      "Extensive formatting and channel options",
      "Developer API for integration",
      "Built for larger server communities",
    ],
    link: "https://github.com/OmarOmar93/WorldChatter",
    linkLabel: "View on GitHub",
  },
  {
    title: "LiarsTable",
    category: "Game Dev",
    tags: ["Minecraft", "GameDev", "Java"],
    description: "A custom multiplayer card game implemented inside Minecraft, showcasing creative gameplay systems and interaction design.",
    features: [
      "Custom game logic and UI",
      "Multiplayer-ready architecture",
      "Interactive and polished gameplay",
    ],
    link: "https://youtu.be/lQrCyVOHZhk?si=x5_hd8ZbsGvjCO8b",
    linkLabel: "Watch demo",
  },
  {
    title: "Nitro-ify Bot",
    category: "Automation",
    tags: ["Java", "JDA", "Discord"],
    description: "A Discord bot built with JDA to manage Nitro-related services, perks, and community automation reliably.",
    features: [
      "Automated role and perk management",
      "Secure command interface",
      "Built on the Java Discord API",
    ],
    link: "https://www.youtube.com/watch?v=JL9WowuYoYw",
    linkLabel: "Watch demo",
  },
  {
    title: "Enhanced PvP",
    category: "Game Systems",
    tags: ["Java", "Minecraft", "Discord"],
    description: "A comprehensive PvP plugin with missions, quests, cosmetic trails, and Discord integration to deepen player engagement.",
    features: [
      "Quest and mission system for retention",
      "Discord linkage for stats and notifications",
      "Cosmetic trails and rewards",
    ],
    link: "https://github.com/Abdelaziz1586/StrongMCPvP",
    linkLabel: "View on GitHub",
  },
  {
    title: "PebbleAPI",
    category: "Backend",
    tags: ["API", "Backend", "Java"],
    description: "A custom API that serves as the backbone for Meraki Studios services with a focus on availability and low latency.",
    features: [
      "RESTful architecture for easy consumption",
      "Built for high-throughput scenarios",
      "Powers public-facing services",
    ],
    link: "https://pav.merakistudios.dev",
    linkLabel: "View live",
  },
];

const TICKER_ITEMS = [
  "Java",
  "Minecraft Plugins",
  "Practice Setups",
  "Auto-Scaling Arenas",
  "Backend Systems",
  "Discord Bots",
  "Pterodactyl Eggs",
  "API Development",
  "Performance Optimization",
  "Spigot",
  "BungeeCord",
  "System Architecture",
  "REST APIs",
  "Game Dev",
];

const CAPABILITIES = [
  {
    title: "Backend Architecture",
    description: "Designing APIs, service boundaries, storage layers, and operational flows that remain understandable as traffic grows.",
    points: ["RESTful systems", "Persistence design", "Clean service contracts"],
  },
  {
    title: "Minecraft Infrastructure",
    description: "Building plugins, Pterodactyl integrations, hibernation systems, and performance-focused tooling for active communities.",
    points: ["Spigot and BungeeCord", "Server cost reduction", "Gameplay systems"],
  },
  {
    title: "Automation and Integrations",
    description: "Connecting community platforms, Discord bots, AI agents, and developer APIs so teams can operate faster with less manual work.",
    points: ["JDA bots", "Gemini agents", "Workflow automation"],
  },
];

const EXPERIENCE = [
  {
    title: "Start with the bottleneck",
    description: "Identify the performance, workflow, or maintainability issue that matters most before adding complexity.",
  },
  {
    title: "Shape the system",
    description: "Define the data flow, integration points, and operational boundaries so the build has a clear backbone.",
  },
  {
    title: "Build for operators",
    description: "Ship tools that are easy to configure, monitor, debug, and extend after the first release.",
  },
  {
    title: "Tune what matters",
    description: "Measure resource usage, latency, and developer friction, then simplify until the system feels dependable.",
  },
];

const SKILL_GROUPS = [
  {
    title: "Languages",
    skills: ["Java", "Scripting", "SQL", "JSON"],
  },
  {
    title: "Backend",
    skills: ["REST APIs", "Persistence", "Caching", "Architecture"],
  },
  {
    title: "Minecraft",
    skills: ["Spigot", "BungeeCord", "Pterodactyl", "Game Systems"],
  },
  {
    title: "Integrations",
    skills: ["JDA", "Discord Bots", "Gemini AI", "Git"],
  },
];

const ESCAPE_MAP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;",
};

let activeFilter = "All";
let revealObserver = null;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ESCAPE_MAP[char]);
}

function getElement(id) {
  return document.getElementById(id);
}

function renderNav() {
  const desktop = getElement("nav-links");
  const mobile = getElement("mobile-links");
  const links = SITE.navigation.map(renderNavLink).join("");

  if (desktop) {
    desktop.innerHTML = links;
  }

  if (mobile) {
    mobile.innerHTML = [
      links,
      renderNavLink({ label: "GitHub", href: SITE.github, external: true }),
      renderNavLink({ label: "Email", href: `mailto:${SITE.email}` }),
    ].join("");
  }
}

function renderNavLink(link) {
  const target = link.external ? ' target="_blank" rel="noopener"' : "";
  return `<a class="nav-link" href="${escapeHtml(link.href)}"${target}>${escapeHtml(link.label)}</a>`;
}

function renderHeroStats() {
  const stats = getElement("hero-stats");
  if (!stats) return;

  stats.innerHTML = SITE.stats.map((stat) => `
    <div class="stat-tile">
      <span class="stat-value">${escapeHtml(stat.value)}</span>
      <span class="stat-label">${escapeHtml(stat.label)}</span>
    </div>
  `).join("");
}

function renderIdentity() {
  const terminal = getElement("terminal-lines");
  const metrics = getElement("identity-metrics");

  if (terminal) {
    terminal.textContent = SITE.terminalLines.join("\n");
  }

  if (metrics) {
    metrics.innerHTML = SITE.metrics.map((metric) => `
      <div class="metric-card">
        <strong>${escapeHtml(metric.value)}</strong>
        <span>${escapeHtml(metric.label)}</span>
      </div>
    `).join("");
  }
}

function renderTicker() {
  const track = getElement("ticker-track");
  if (!track) return;

  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  track.innerHTML = items.map((item) => `
    <span class="ticker-item">${escapeHtml(item)}</span>
  `).join("");
}

function renderServerSetups() {
  const container = getElement("server-setups-container");
  if (!container) return;

  container.innerHTML = SERVER_SETUPS.map((setup, index) => renderServerSetup(setup, index)).join("");
}

function renderServerSetup(setup, index) {
  const primaryImage = setup.images[0];
  const galleryImages = setup.images.slice(1);

  return `
    <article class="setup-card reveal d${(index % 3) + 1}">
      <div class="setup-media">
        <figure class="setup-feature-image">
          <img src="${escapeHtml(primaryImage.src)}" alt="${escapeHtml(primaryImage.alt)}" loading="${index === 0 ? "eager" : "lazy"}">
          <figcaption>${escapeHtml(primaryImage.caption)}</figcaption>
        </figure>
        <div class="setup-gallery" aria-label="${escapeHtml(setup.title)} screenshots">
          ${galleryImages.map((image) => `
            <figure class="setup-gallery-item">
              <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy">
              <figcaption>${escapeHtml(image.caption)}</figcaption>
            </figure>
          `).join("")}
        </div>
      </div>

      <div class="setup-content">
        <p class="mono-label">${escapeHtml(setup.category)}</p>
        <h3>${escapeHtml(setup.title)}</h3>
        <p>${escapeHtml(setup.description)}</p>

        <div class="setup-stats" aria-label="${escapeHtml(setup.title)} highlights">
          ${setup.stats.map((stat) => `
            <div class="setup-stat">
              <strong>${escapeHtml(stat.value)}</strong>
              <span>${escapeHtml(stat.label)}</span>
            </div>
          `).join("")}
        </div>

        <ul class="setup-highlights">
          ${setup.highlights.map((highlight) => `<li>${escapeHtml(highlight)}</li>`).join("")}
        </ul>
      </div>
    </article>
  `;
}

function renderDiscordSetups() {
  const container = getElement("discord-setups-container");
  if (!container) return;

  container.innerHTML = DISCORD_SETUPS.map((server, index) => `
    <article class="discord-card reveal d${(index % 3) + 1}">
      <div class="discord-card-head">
        <img src="${escapeHtml(server.logo)}" alt="${escapeHtml(server.name)} logo" loading="lazy">
        <div>
          <p class="mono-label">Bot-assisted setup</p>
          <h3>${escapeHtml(server.name)}</h3>
          <span>${escapeHtml(server.subtitle)}</span>
        </div>
      </div>

      <p class="discord-public">${escapeHtml(server.publicDescription)}</p>
      <p class="discord-contribution">${escapeHtml(server.contribution)}</p>

      <div class="discord-meta" aria-label="${escapeHtml(server.name)} public invite stats">
        <span><strong>${server.members}</strong> members</span>
        <span><strong>${server.online}</strong> online</span>
      </div>

      <div class="discord-tags">
        ${renderTags(server.tags)}
      </div>

      <a class="discord-link" href="${escapeHtml(server.invite)}" target="_blank" rel="noopener">
        View Discord
      </a>
    </article>
  `).join("");
}

function renderFilters() {
  const filters = getElement("project-filters");
  if (!filters) return;

  filters.innerHTML = PROJECT_FILTERS.map((filter) => {
    const isActive = filter === activeFilter;
    return `
      <button class="filter-button${isActive ? " is-active" : ""}" type="button" data-filter="${escapeHtml(filter)}" aria-pressed="${isActive}">
        ${escapeHtml(filter)}
      </button>
    `;
  }).join("");
}

function projectMatchesFilter(project, filter) {
  if (filter === "All") return true;

  const needle = filter.toLowerCase();
  const searchable = [project.title, project.category, ...project.tags].join(" ").toLowerCase();
  return searchable.includes(needle);
}

function renderProjects() {
  const container = getElement("projects-container");
  if (!container) return;

  const filteredProjects = PROJECTS.filter((project) => projectMatchesFilter(project, activeFilter));

  if (!filteredProjects.length) {
    container.innerHTML = `<p class="empty-state">No projects match this filter yet.</p>`;
    return;
  }

  container.innerHTML = filteredProjects.map((project, index) => renderProject(project, index)).join("");
  bindProjectDetails();
  observeRevealTargets();
}

function renderProject(project, index) {
  const number = String(PROJECTS.indexOf(project) + 1).padStart(2, "0");
  const tags = renderTags(project.tags);
  const delay = `d${(index % 3) + 1}`;

  return `
    <details class="project-card reveal ${delay}">
      <summary class="project-summary">
        <span class="project-top">
          <span class="project-number">${number}</span>
          <span class="project-arrow" aria-hidden="true">+</span>
        </span>
        <span>
          <span class="project-tags">${tags}</span>
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <p class="project-desc">${escapeHtml(project.description)}</p>
        </span>
      </summary>
      <div class="project-details">
        <ul>
          ${project.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}
        </ul>
        <a class="project-link" href="${escapeHtml(project.link)}" target="_blank" rel="noopener">
          ${escapeHtml(project.linkLabel || "Open project")}
        </a>
      </div>
    </details>
  `;
}

function renderTags(tags) {
  return tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
}

function bindProjectDetails() {
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("toggle", () => {
      if (!card.open) return;

      document.querySelectorAll(".project-card[open]").forEach((openCard) => {
        if (openCard !== card) {
          openCard.open = false;
        }
      });
    });
  });
}

function renderCapabilities() {
  const grid = getElement("capability-grid");
  if (!grid) return;

  grid.innerHTML = CAPABILITIES.map((capability, index) => `
    <article class="capability-card reveal d${(index % 3) + 1}">
      <span class="capability-index">${String(index + 1).padStart(2, "0")}</span>
      <h3>${escapeHtml(capability.title)}</h3>
      <p>${escapeHtml(capability.description)}</p>
      <ul>
        ${capability.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function renderExperience() {
  const list = getElement("experience-list");
  if (!list) return;

  list.innerHTML = EXPERIENCE.map((item, index) => `
    <article class="experience-item">
      <span class="experience-step">${String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description)}</p>
      </div>
    </article>
  `).join("");
}

function renderSkills() {
  const grid = getElement("skills-grid");
  if (!grid) return;

  grid.innerHTML = SKILL_GROUPS.map((group, index) => `
    <article class="skill-group reveal d${(index % 3) + 1}">
      <h3>${escapeHtml(group.title)}</h3>
      <div class="skill-chips">
        ${renderTags(group.skills)}
      </div>
    </article>
  `).join("");
}

function initFilters() {
  const filters = getElement("project-filters");
  if (!filters) return;

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    activeFilter = button.dataset.filter;
    renderFilters();
    renderProjects();
  });
}

function initHeader() {
  const header = getElement("site-header");
  if (!header) return;

  const update = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initMenu() {
  const button = getElement("menu-toggle");
  const menu = getElement("mobile-menu");
  if (!button || !menu) return;

  const setOpen = (isOpen) => {
    button.classList.toggle("is-open", isOpen);
    menu.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    menu.setAttribute("aria-hidden", String(!isOpen));
  };

  button.addEventListener("click", () => {
    setOpen(!button.classList.contains("is-open"));
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setOpen(false);
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  });
}

function initReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
  );

  observeRevealTargets();
}

function observeRevealTargets() {
  if (!revealObserver) return;

  document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => {
    revealObserver.observe(element);
  });
}

function setCurrentYear() {
  const year = getElement("current-year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderHeroStats();
  renderIdentity();
  renderTicker();
  renderServerSetups();
  renderDiscordSetups();
  renderFilters();
  renderProjects();
  renderCapabilities();
  renderExperience();
  renderSkills();

  initFilters();
  initHeader();
  initMenu();
  initReveal();
  setCurrentYear();
});
