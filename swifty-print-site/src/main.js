// Import styles
import '../styles/main.css';

// Import components
import { Navigation, initNavigation } from './components/Navigation.js';
import { Hero } from './components/Hero.js';
import { Provenance } from './components/Provenance.js';
import { LocalFeed } from './components/LocalFeed.js';
import { Coordinates, initCoordinates } from './components/Coordinates.js';
import { Footer } from './components/Footer.js';

// Assemble the page
document.querySelector('#app').innerHTML = `
  <!-- Grain Overlay -->
  <div class="grain-overlay"></div>

  <!-- Floating Navigation -->
  ${Navigation()}

  <!-- Main Editorial Layout -->
  <main class="relative bg-background text-on-surface">
    <!-- Hero Header & Vault List -->
    ${Hero()}

    <!-- Provenance Bento Grid -->
    ${Provenance()}

    <!-- Local dispatch agrarian news -->
    ${LocalFeed()}

    <!-- Coordinates Location & Reservation form -->
    ${Coordinates()}
  </main>

  <!-- Editorial Footer -->
  ${Footer()}
`;

// Initialize Component Interactivity
initNavigation();
initCoordinates();
