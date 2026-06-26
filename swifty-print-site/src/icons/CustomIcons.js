/**
 * Custom vector icons for Swifty Print Ltd
 * Engineered to support dynamic CSS classes, transition properties, and hover strokes.
 */

export const Icons = {
  // Brand Logo: Abstract Printing Matrix & Cyan Beams
  logo: (classes = "w-8 h-8") => `
    <svg class="${classes}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="10" height="10" rx="2" stroke="currentColor" stroke-width="2" class="transition-all duration-300 group-hover:stroke-accent-primary" />
      <rect x="18" y="4" width="10" height="10" rx="2" stroke="currentColor" stroke-width="2" class="transition-all duration-300 group-hover:translate-x-1" />
      <rect x="4" y="18" width="10" height="10" rx="2" stroke="currentColor" stroke-width="2" class="transition-all duration-300 group-hover:translate-y-1" />
      <path d="M18 18H28M18 23H28M18 28H25" stroke="var(--accent-primary)" stroke-width="2" stroke-linecap="round" class="transition-all duration-300 group-hover:stroke-white" />
    </svg>
  `,

  // Garment SVG: Custom T-Shirts
  tshirt: (classes = "w-12 h-12") => `
    <svg class="${classes}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 22H9C6.23858 22 4 19.7614 4 17V9.3C4 8.71887 4.25055 8.16527 4.68652 7.77863L7 5.728V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5.728L19.3135 7.77863C19.7494 8.16527 20 8.71887 20 9.3V17C20 19.7614 17.7614 22 15 22Z" />
      <path d="M7 5.728C7.5 6.228 8.5 7 10 7C11.5 7 12.5 6.228 13 5.728M12 2V5M17 5.728C16.5 6.228 15.5 7 14 7" stroke="var(--accent-primary)" stroke-width="1.5" />
      <circle cx="12" cy="14" r="3" stroke="var(--accent-primary)" stroke-width="1.5" stroke-dasharray="2 2" />
    </svg>
  `,

  // Banners & Signs (Large Format Printing)
  banner: (classes = "w-12 h-12") => `
    <svg class="${classes}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="18" height="10" rx="1.5" />
      <path d="M6 6V4M18 6V4M4 16V20M20 16V20" stroke="var(--accent-primary)" stroke-width="1.5" />
      <path d="M2 20H22" stroke="var(--accent-primary)" stroke-width="1.5" />
      <path d="M7 9H17M7 13H13" stroke="currentColor" stroke-width="1.5" stroke-dasharray="1 1" />
    </svg>
  `,

  // Custom Hoodies / Apparel
  hoodie: (classes = "w-12 h-12") => `
    <svg class="${classes}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 21V11.5C18 9.5 17 8 15 7.5V5.5C15 3.5 13.5 2 12 2C10.5 2 9 3.5 9 5.5V7.5C7 8 6 9.5 6 11.5V21" />
      <path d="M6 21H18M9 21V13.5L12 11.5L15 13.5V21" stroke="var(--accent-primary)" stroke-width="1.5" />
      <path d="M10 7.5L8 9M14 7.5L16 9" stroke="var(--accent-primary)" />
      <circle cx="12" cy="5.5" r="1.5" stroke="currentColor" />
    </svg>
  `,

  // Business Cards & Stationary
  stationary: (classes = "w-12 h-12") => `
    <svg class="${classes}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="12" rx="2" transform="rotate(-5 12 10)" stroke="var(--accent-primary)" />
      <rect x="4" y="8" width="18" height="12" rx="2" stroke="currentColor" />
      <circle cx="8" cy="12" r="1.5" stroke="var(--accent-primary)" />
      <path d="M12 12H18M12 15H16" stroke="currentColor" stroke-width="1" />
    </svg>
  `,

  // Technical Crosshairs / Alignments (Hero)
  crosshair: (classes = "w-6 h-6") => `
    <svg class="${classes}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-dasharray="4 4" />
      <circle cx="12" cy="12" r="3" stroke="var(--accent-primary)" />
      <line x1="12" y1="0" x2="12" y2="24" stroke="currentColor" />
      <line x1="0" y1="12" x2="24" y2="12" stroke="currentColor" />
    </svg>
  `,

  // Star Icon (Reviews)
  star: (classes = "w-4 h-4") => `
    <svg class="${classes}" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27Z"/>
    </svg>
  `,

  // Verified Badge (Reviews)
  verified: (classes = "w-4 h-4") => `
    <svg class="${classes}" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
      <path d="M9 12L11 14L15 10" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,

  // Phone Call Icon (Contact)
  phone: (classes = "w-5 h-5") => `
    <svg class="${classes}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  `,

  // Map Pin Icon (Contact)
  mapPin: (classes = "w-5 h-5") => `
    <svg class="${classes}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" stroke="var(--accent-primary)" />
    </svg>
  `,

  // Clock Icon (Contact)
  clock: (classes = "w-5 h-5") => `
    <svg class="${classes}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" stroke="var(--accent-primary)" />
    </svg>
  `,

  // Copy Icon
  copy: (classes = "w-4 h-4") => `
    <svg class="${classes}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  `
};
