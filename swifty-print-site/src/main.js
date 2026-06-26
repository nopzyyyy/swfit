// Import styles
import '../styles/main.css';

// Import components
import { Navigation, initNavigation } from './components/Navigation.js';
import { Hero } from './components/Hero.js';
import { ServicesGrid } from './components/ServicesGrid.js';
import { Reviews } from './components/Reviews.js';
import { ContactTerminal, initContactTerminal } from './components/ContactTerminal.js';

// Assemble the page components
document.querySelector('#app').innerHTML = `
  <!-- Floating Capsule Navigation -->
  ${Navigation()}

  <!-- Main Editorial Layout -->
  <main class="relative">
    <!-- Hero Technical Canvas Section -->
    ${Hero()}

    <!-- Capabilities Bento Grid -->
    ${ServicesGrid()}

    <!-- Client Reviews Cluster -->
    ${Reviews()}

    <!-- Operations and Fulfillment Gateway -->
    ${ContactTerminal()}
  </main>

  <!-- Technical Footer -->
  <footer class="border-t border-white/5 py-12 px-4 md:px-8 bg-surface-base text-center text-[10px] font-mono text-white/30 tracking-widest uppercase">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        © 2026 SWIFTY PRINT LTD. ALL RIGHTS RESERVED.
      </div>
      <div class="flex items-center gap-6">
        <a href="#capabilities" class="hover:text-accent-primary transition-colors">CAPABILITIES</a>
        <span>//</span>
        <a href="#reviews" class="hover:text-accent-primary transition-colors">FEEDBACK</a>
        <span>//</span>
        <a href="#operations" class="hover:text-accent-primary transition-colors">OPERATIONS</a>
      </div>
      <div>
        SYS_STATUS: COMPILER_ONLINE
      </div>
    </div>
  </footer>
`;

// Initialize Component Interactivity
initNavigation();
initContactTerminal();
