import { Icons } from '../icons/CustomIcons.js';

export function Navigation() {
  return `
    <header class="fixed top-4 md:top-6 left-0 right-0 z-50 px-3 md:px-8 flex justify-center">
      <nav id="nav-capsule" class="w-full max-w-5xl glass-panel glass-bevel py-2.5 px-4 md:py-3 md:px-6 flex items-center justify-between transition-all duration-300 ease-out glass-text-rendering shadow-md">
        <!-- Brand Logo / Signifier -->
        <a href="#" class="flex items-center gap-2 md:gap-3 group text-text-primary hover:text-accent-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary rounded-lg p-1">
          ${Icons.logo("w-7 h-7 md:w-8 md:h-8 text-accent-primary")}
          <span class="font-sans font-bold tracking-tight text-base md:text-lg">
            SWIFTY<span class="text-accent-primary">PRINT</span>
          </span>
        </a>

        <!-- Semantic Anchor List -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#capabilities" class="text-sm font-sans font-semibold tracking-wide text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary rounded px-2 py-1">
            Capabilities
          </a>
          <a href="#reviews" class="text-sm font-sans font-semibold tracking-wide text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary rounded px-2 py-1">
            Feedback
          </a>
          <a href="#operations" class="text-sm font-sans font-semibold tracking-wide text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary rounded px-2 py-1">
            Gateway
          </a>
        </div>

        <!-- High-Intent CTA (Responsive Dimensions) -->
        <div>
          <a href="#contact" class="relative group inline-flex items-center justify-center py-1.5 px-4 md:py-2.5 md:px-6 rounded-full overflow-hidden text-[10px] md:text-xs font-mono font-semibold tracking-wider md:tracking-widest text-white bg-accent-primary hover:bg-accent-primary/90 transition-all duration-300 shadow-md shadow-accent-primary/10 focus:outline-none focus:ring-2 focus:ring-accent-primary">
            <span class="relative z-10 uppercase flex items-center gap-1.5">
              Start Project
              <span class="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </span>
          </a>
        </div>
      </nav>
    </header>
  `;
}

export function initNavigation() {
  const navCapsule = document.getElementById('nav-capsule');
  if (!navCapsule) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navCapsule.classList.remove('py-2.5', 'px-4', 'md:py-3', 'md:px-6', 'max-w-5xl');
      navCapsule.classList.add('py-2', 'px-4', 'max-w-4xl', 'shadow-lg', 'bg-white/80');
      navCapsule.parentElement.classList.remove('top-4', 'md:top-6');
      navCapsule.parentElement.classList.add('top-2');
    } else {
      navCapsule.classList.remove('py-2', 'px-4', 'max-w-4xl', 'shadow-lg', 'bg-white/80');
      navCapsule.classList.add('py-2.5', 'px-4', 'md:py-3', 'md:px-6', 'max-w-5xl');
      navCapsule.parentElement.classList.remove('top-2');
      navCapsule.parentElement.classList.add('top-4', 'md:top-6');
    }
  });
}
