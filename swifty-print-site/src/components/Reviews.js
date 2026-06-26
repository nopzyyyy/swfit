import { Icons } from '../icons/CustomIcons.js';

const CLIENT_REVIEWS = [
  {
    name: "Marcus Vance",
    role: "Production Director, Aero Creative",
    rating: 5,
    date: "2 days ago",
    text: "Swifty Print saved our agency launch. We needed 150 heavyweight shirts and 4 custom step-and-repeat banners within 36 hours. The digital mockups were exact, color calibration was spot on, and they delivered with hours to spare. Unbelievable precision."
  },
  {
    name: "Elena Rostova",
    role: "Founder, Rostova Apparel",
    rating: 5,
    date: "1 week ago",
    text: "The heavy fleece hoodies are incredible quality. Our customers keep commenting on the soft-hand feel of the screen printing. The physical bevel simulation and technical preview tool they have online gave us absolute confidence before going to press."
  },
  {
    name: "David Chen",
    role: "Operations Lead, Grid & Co",
    rating: 5,
    date: "3 weeks ago",
    text: "We order all our architectural signs and business cards here. The spot UV and foil edge finishes on the cards make a massive impression in meetings. Absolute top-tier execution and speed."
  },
  {
    name: "Sarah Jenkins",
    role: "Marketing Manager, Apex Group",
    rating: 5,
    date: "1 month ago",
    text: "I was skeptical about their 24-hour speed claim, but they delivered 500 custom marketing flyers and 2 retail vinyl banners overnight. The colors are punchy, lines are crisp, and the customer terminal was active and updated us in real time."
  },
  {
    name: "Liam O'Connor",
    role: "Lead Designer, Hearth & Home",
    rating: 5,
    date: "1 month ago",
    text: "Their team's attention to detail is remarkable. They caught a color calibration issue in our artwork vectors, reached out immediately, fixed it, and still shipped our custom uniforms on schedule. Best printing company in the country."
  },
  {
    name: "Aaliyah Jackson",
    role: "Creative Director, Velo Media",
    rating: 5,
    date: "2 months ago",
    text: "Top-tier custom hoodies. The double-thick ribbing and color accuracy are unmatched. The entire ordering terminal is completely frictionless. We're migrating our entire merchandise logistics here."
  }
];

export function Reviews() {
  const renderStars = (rating) => {
    return Array.from({ length: rating }).map(() => Icons.star("text-[#FFA800] w-4.5 h-4.5")).join('');
  };

  const renderCards = () => {
    return CLIENT_REVIEWS.map(review => `
      <div class="break-inside-avoid mb-6 p-6 glass-panel glass-bevel relative overflow-hidden transition-all duration-500 ease-out 
                  opacity-80 group-hover/reviews:opacity-30 hover:!opacity-100 hover:scale-[1.02] hover:border-accent-primary/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
        
        <!-- Header: Stars and Date -->
        <div class="flex justify-between items-center mb-4">
          <div class="flex gap-1">
            ${renderStars(review.rating)}
          </div>
          <span class="text-[10px] font-mono text-text-secondary/60">${review.date}</span>
        </div>

        <!-- Body: Quote -->
        <p class="text-text-primary/95 text-sm leading-relaxed mb-6 font-sans">
          "${review.text}"
        </p>

        <!-- Footer: Client Profile -->
        <div class="flex items-center justify-between border-t border-black/5 pt-4">
          <div>
            <h4 class="text-xs font-bold text-text-primary tracking-tight flex items-center gap-1.5">
              ${review.name}
              ${Icons.verified("w-3.5 h-3.5 text-accent-primary")}
            </h4>
            <p class="text-[10px] font-mono text-text-secondary mt-0.5">${review.role}</p>
          </div>
          <span class="text-[9px] font-mono bg-black/2 text-text-secondary/80 px-2 py-0.5 rounded border border-black/5">
            VERIFIED
          </span>
        </div>
      </div>
    `).join('');
  };

  return `
    <section id="reviews" class="relative py-24 px-4 md:px-8 bg-surface-base">
      <!-- Glow Decorator -->
      <div class="glow-accent bottom-0 right-10" style="background: oklch(0.42 0.15 250); opacity: 0.03;"></div>

      <div class="w-full max-w-6xl mx-auto relative z-10">
        
        <!-- Header -->
        <div class="mb-16 space-y-4 text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
            <span class="glass-meta text-xs tracking-[0.2em] text-accent-primary">CLIENT EXPERIENCE</span>
          </div>
          <h2 class="hero-heading text-4xl md:text-6xl text-text-primary tracking-tight">
            Verified Customer <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent-primary to-text-primary bg-size-200">Feedback.</span>
          </h2>
          <p class="text-text-secondary text-base max-w-xl mx-auto md:mx-0">
            Real, raw reviews from the creative departments, apparel brands, and operation leads we print for daily.
          </p>
        </div>

        <!-- True CSS Masonry Layout -->
        <div class="group/reviews columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          ${renderCards()}
        </div>

      </div>
    </section>
  `;
}
