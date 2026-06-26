export function Navigation() {
  return `
    <nav class="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1440px] rounded-full border-[0.5px] border-accent-gold/30 bg-surface-base/40 backdrop-blur-[28px] flex justify-between items-center px-4 sm:px-6 md:px-8 py-3 md:py-4 z-50 transition-all duration-500">
      <a href="#" class="font-headline-sm text-[16px] sm:text-[20px] md:text-headline-sm uppercase tracking-[0.2em] text-text-primary hover:opacity-80 transition-opacity whitespace-nowrap">
        BEE ONE MARKET
      </a>
      
      <!-- Desktop Navigation links -->
      <div class="hidden md:flex gap-8 lg:gap-10 items-center">
        <a class="nav-link font-label-md text-label-md uppercase tracking-widest text-accent-gold border-b border-accent-gold pb-1 transition-all duration-300" href="#curation">Curation</a>
        <a class="nav-link font-label-md text-label-md uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors duration-300" href="#provenance">Provenance</a>
        <a class="nav-link font-label-md text-label-md uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors duration-300" href="#local-feed">Local Feed</a>
        <a class="nav-link font-label-md text-label-md uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors duration-300" href="#coordinates">Coordinates</a>
      </div>
      
      <div class="flex items-center gap-4">
        <button class="hidden sm:block bg-accent-moss/20 hover:bg-accent-moss/40 border border-accent-moss/30 px-6 py-2 rounded-full font-label-md text-label-md uppercase tracking-widest text-accent-gold transition-all duration-300 hover:scale-[0.98] active:scale-95">
          Secure Milk Subscription
        </button>
        
        <!-- Mobile Menu Toggle Button -->
        <button id="mobile-menu-btn" class="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded-full border border-accent-gold/30 text-accent-gold hover:bg-accent-moss/20 transition-all duration-300 active:scale-90">
          <span class="material-symbols-outlined text-[20px]">menu</span>
        </button>
      </div>
    </nav>

    <!-- Mobile Drawer Overlay -->
    <div id="mobile-drawer" class="fixed inset-0 bg-background/95 backdrop-blur-md z-40 transform translate-x-full transition-transform duration-500 flex flex-col justify-center items-center gap-8 md:hidden">
      <button id="close-drawer-btn" class="absolute top-6 right-6 w-10 h-10 rounded-full border border-accent-gold/30 text-accent-gold flex items-center justify-center hover:bg-accent-moss/20 transition-all duration-300 active:scale-90">
        <span class="material-symbols-outlined text-[24px]">close</span>
      </button>
      <a class="mobile-nav-link font-headline-lg text-headline-lg uppercase text-text-secondary hover:text-accent-gold transition-colors" href="#curation">Curation</a>
      <a class="mobile-nav-link font-headline-lg text-headline-lg uppercase text-text-secondary hover:text-accent-gold transition-colors" href="#provenance">Provenance</a>
      <a class="mobile-nav-link font-headline-lg text-headline-lg uppercase text-text-secondary hover:text-accent-gold transition-colors" href="#local-feed">Local Feed</a>
      <a class="mobile-nav-link font-headline-lg text-headline-lg uppercase text-text-secondary hover:text-accent-gold transition-colors" href="#coordinates">Coordinates</a>
      
      <button class="mt-8 bg-accent-moss/20 hover:bg-accent-moss/40 border border-accent-moss/30 px-8 py-3 rounded-full font-label-md text-label-md uppercase tracking-widest text-accent-gold transition-all duration-300 active:scale-95">
        Secure Milk Subscription
      </button>
    </div>
  `;
}

export function initNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('close-drawer-btn');
  const drawer = document.getElementById('mobile-drawer');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuBtn && drawer && closeBtn) {
    menuBtn.addEventListener('click', () => {
      drawer.classList.remove('translate-x-full');
    });

    closeBtn.addEventListener('click', () => {
      drawer.classList.add('translate-x-full');
    });

    // Close drawer on clicking link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.add('translate-x-full');
      });
    });
  }

  // Active state for navigation links on scroll/click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(l => {
        l.classList.remove('text-accent-gold', 'border-b', 'border-accent-gold', 'pb-1');
        l.classList.add('text-text-secondary');
      });
      link.classList.remove('text-text-secondary');
      link.classList.add('text-accent-gold', 'border-b', 'border-accent-gold', 'pb-1');
    });
  });

  // Handle active states on scroll
  window.addEventListener('scroll', () => {
    const sections = ['curation', 'provenance', 'local-feed', 'coordinates'];
    let current = '';
    
    sections.forEach(sectionId => {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = sectionId;
        }
      }
    });

    if (current) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
          link.classList.remove('text-text-secondary');
          link.classList.add('text-accent-gold', 'border-b', 'border-accent-gold', 'pb-1');
        } else {
          link.classList.remove('text-accent-gold', 'border-b', 'border-accent-gold', 'pb-1');
          link.classList.add('text-text-secondary');
        }
      });
    }
  });
}
