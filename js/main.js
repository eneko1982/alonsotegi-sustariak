document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navToggle) {
        navToggle.addEventListener('click', function() { navMenu.classList.toggle('active'); });
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) { navMenu.classList.remove('active'); }
        });
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => { link.addEventListener('click', () => { navMenu.classList.remove('active'); }); });
    }
    initLightbox();
    initComparisonSliders();
    initGalleryFilters();
    initTimelineFilters();
    initSearch();
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
    });
    const contactForm = document.getElementById('contact-form');
    if (contactForm) { contactForm.addEventListener('submit', handleFormSubmit); }
});
function initLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = '<span class="lightbox-close">&times;</span><div class="lightbox-content"><img src="" alt=""><div class="lightbox-info"></div></div>';
    document.body.appendChild(lightbox);
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.querySelector('.gallery-overlay h3')?.textContent || '';
            const description = this.querySelector('.gallery-overlay p')?.textContent || '';
            openLightbox(img.src, title, description);
        });
    });
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) { if (e.target === lightbox) { closeLightbox(); } });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') { closeLightbox(); } });
}
function openLightbox(src, title, description) {
    const lightbox = document.querySelector('.lightbox');
    const img = lightbox.querySelector('img');
    const info = lightbox.querySelector('.lightbox-info');
    img.src = src;
    info.innerHTML = '<h3 style="color: white; margin-top: 1rem;">' + title + '</h3><p style="color: rgba(255,255,255,0.8);">' + description + '</p>';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}
function initComparisonSliders() {
    const sliders = document.querySelectorAll('.comparison-slider');
    sliders.forEach(slider => {
        const divider = slider.querySelector('.comparison-divider');
        const afterImage = slider.querySelector('.comparison-after');
        if (!divider || !afterImage) return;
        let isDragging = false;
        divider.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
        divider.addEventListener('touchstart', startDrag);
        document.addEventListener('touchmove', drag);
        document.addEventListener('touchend', stopDrag);
        function startDrag(e) { isDragging = true; e.preventDefault(); }
        function stopDrag() { isDragging = false; }
        function drag(e) {
            if (!isDragging) return;
            const rect = slider.getBoundingClientRect();
            let x;
            if (e.type.includes('touch')) { x = e.touches[0].clientX - rect.left; }
            else { x = e.clientX - rect.left; }
            x = Math.max(0, Math.min(x, rect.width));
            const percentage = (x / rect.width) * 100;
            divider.style.left = percentage + '%';
            afterImage.style.clipPath = 'inset(0 ' + (100 - percentage) + '% 0 0)';
        }
    });
}
function initGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => { item.style.display = 'none'; }, 300);
                }
            });
        });
    });
}
function initTimelineFilters() {
    const filterBtns = document.querySelectorAll('.timeline-filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            timelineItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) { item.style.display = 'block'; }
                else { item.style.display = 'none'; }
            });
        });
    });
}
function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const searchableItems = document.querySelectorAll('[data-searchable]');
            searchableItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) { item.style.display = ''; }
                else { item.style.display = 'none'; }
            });
        });
    }
}
function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    const successMsg = document.createElement('div');
    successMsg.className = 'form-success';
    successMsg.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #4CAF50; color: white; padding: 1rem 2rem; border-radius: 5px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); z-index: 10000;';
    successMsg.textContent = '¡Gracias! Tu mensaje ha sido enviado.';
    document.body.appendChild(successMsg);
    e.target.reset();
    setTimeout(() => { successMsg.remove(); }, 3000);
}
