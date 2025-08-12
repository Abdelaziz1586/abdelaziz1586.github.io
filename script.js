document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Smoother Custom Cursor Logic ---
    const cursor = document.querySelector('.cursor');
    const interactiveElements = document.querySelectorAll('a, .command-hint, button, .bento-item');
    let isFirstMove = true;
    
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

    window.addEventListener("mousemove", e => {
        if (isFirstMove) {
            gsap.to(cursor, { opacity: 1, duration: 0.2 });
            isFirstMove = false;
        }
        xTo(e.clientX);
        yTo(e.clientY);
    });

    interactiveElements.forEach(el => {
        el.addEventListener('mouseover', () => cursor.classList.add('cursor-grow'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-grow'));
    });

    // --- 2. GSAP Animations ---
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero-content h1, .hero-content .subtitle', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2
    });

    gsap.utils.toArray('.section-title, .about-content p, footer').forEach(el => {
        gsap.from(el, {
            opacity: 0, y: 50, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
        });
    });
    
    ScrollTrigger.batch(".bento-item", {
        start: "top 85%",
        onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1, ease: 'power3.out' }),
    });

    // --- 3. Command Menu Logic ---
    const commandMenu = document.getElementById('command-menu');
    const commandInput = document.getElementById('command-input');
    const commandList = document.getElementById('command-list');
    const commandLinks = commandList.querySelectorAll('a');

    function openMenu() { commandMenu.classList.add('open'); commandInput.focus(); }
    function closeMenu() { commandMenu.classList.remove('open'); commandInput.value = ''; filterCommands(''); }

    document.getElementById('open-command-menu').addEventListener('click', openMenu);
    document.addEventListener('keydown', e => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); commandMenu.classList.contains('open') ? closeMenu() : openMenu(); }
        if (e.key === 'Escape' && commandMenu.classList.contains('open')) { closeMenu(); }
    });
    function filterCommands(query) {
        query = query.toLowerCase();
        commandLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            link.parentElement.style.display = text.includes(query) ? '' : 'none';
        });
    }
    commandInput.addEventListener('input', () => filterCommands(commandInput.value));
    commandLinks.forEach(link => link.addEventListener('click', closeMenu));

    // --- 4. Subtitle Typing Effect ---
    const subtitles = ["Java & Minecraft Specialist.", "Backend Systems Architect.", "Creative Problem Solver."];
    let subtitleIndex = 0;
    let charIndex = 0;
    const subtitleElement = document.querySelector('.subtitle');

    function typeSubtitle() {
        if (charIndex < subtitles[subtitleIndex].length) {
            subtitleElement.textContent += subtitles[subtitleIndex].charAt(charIndex++);
            setTimeout(typeSubtitle, 50);
        } else {
            setTimeout(eraseSubtitle, 2000);
        }
    }
    function eraseSubtitle() {
        if (charIndex > 0) {
            subtitleElement.textContent = subtitles[subtitleIndex].substring(0, --charIndex);
            setTimeout(eraseSubtitle, 30);
        } else {
            subtitleIndex = (subtitleIndex + 1) % subtitles.length;
            setTimeout(typeSubtitle, 500);
        }
    }
    setTimeout(typeSubtitle, 1000);

    // --- 5. Project Detail Overlay Logic ---
    const overlay = document.getElementById('project-detail-overlay');
    const closeBtn = document.getElementById('close-detail-btn');
    const projectCards = document.querySelectorAll('.bento-item');

    const detailTitle = document.getElementById('detail-title');
    const detailTags = document.getElementById('detail-tags');
    const detailDesc = document.getElementById('detail-desc');
    const detailFeatures = document.getElementById('detail-features');
    const detailLink = document.getElementById('detail-link');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const data = card.dataset;
            detailTitle.textContent = data.title;
            detailDesc.textContent = data.desc;
            detailFeatures.innerHTML = data.features;
            detailLink.href = data.link;

            detailTags.innerHTML = '';
            data.tags.split(',').forEach(tagText => {
                const tag = document.createElement('span');
                tag.className = 'tag';
                tag.textContent = tagText;
                detailTags.appendChild(tag);
            });
            
            document.body.classList.add('no-scroll');
            overlay.classList.add('visible');
        });
    });

    function closeOverlay() {
        document.body.classList.remove('no-scroll');
        overlay.classList.remove('visible');
    }

    closeBtn.addEventListener('click', closeOverlay);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && overlay.classList.contains('visible')) {
            closeOverlay();
        }
    });

    // THIS IS THE NEW CODE BLOCK
    // It closes the overlay if the click is on the background itself.
    overlay.addEventListener('click', e => {
        if (e.target === overlay) {
            closeOverlay();
        }
    });

});