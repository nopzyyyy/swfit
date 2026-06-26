import { Icons } from '../icons/CustomIcons.js';

export function ServicesGrid() {
  return `
    <section id="capabilities" class="relative py-24 px-4 md:px-8 bg-surface-base">
      <!-- Glow Accent behind bento -->
      <div class="glow-accent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style="background: oklch(0.42 0.15 250); opacity: 0.03; width: 500px; height: 500px;"></div>

      <div class="w-full max-w-6xl mx-auto relative z-10">
        
        <!-- Header -->
        <div class="mb-16 space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
            <span class="glass-meta text-xs tracking-[0.2em] text-accent-primary">PRODUCTION POWERHOUSE</span>
          </div>
          <h2 class="hero-heading text-4xl md:text-6xl text-text-primary tracking-tight">
            Our Manufacturing <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent-primary to-text-primary bg-size-200">Capabilities.</span>
          </h2>
          <p class="text-text-secondary text-base max-w-xl">
            We operate industry-grade screen printing, embroidery, large format signage presses, and specialty finish machinery.
          </p>
        </div>

        <!-- Non-uniform Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Card 1: Custom Screen Printing & DTG (Spans 2 cols) -->
          <div class="group md:col-span-2 glass-panel glass-bevel p-8 relative flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-accent-primary/40 hover:shadow-[0_24px_50px_rgba(0,0,0,0.06)]">
            <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/0 to-accent-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div class="space-y-4">
                <span class="inline-block text-[10px] font-mono tracking-widest text-accent-primary bg-accent-primary/5 border border-accent-primary/15 px-2.5 py-1 rounded">
                  APPAREL DEPT
                </span>
                <h3 class="text-2xl font-bold text-text-primary tracking-tight">Custom Screen Printing & DTG</h3>
                <p class="text-text-secondary text-sm max-w-sm">
                  High-density inks and precision digital prints across premium ringspun cottons, heavy hoodies, and high-performance activewear.
                </p>
                <!-- Spec list -->
                <ul class="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-xs font-mono text-text-secondary/80">
                  <li class="flex items-center gap-1.5"><span class="w-1 h-1 rounded-full bg-accent-primary"></span> Screen Printing</li>
                  <li class="flex items-center gap-1.5"><span class="w-1 h-1 rounded-full bg-accent-primary"></span> Direct-to-Garment</li>
                  <li class="flex items-center gap-1.5"><span class="w-1 h-1 rounded-full bg-accent-primary"></span> Embroidery</li>
                </ul>
              </div>

              <!-- Graphic display -->
              <div class="flex items-center justify-center p-4 bg-black/2 rounded-xl border border-black/5 group-hover:border-accent-primary/20 transition-colors duration-300">
                ${Icons.tshirt("w-20 h-20 text-text-primary/70 transition-transform duration-500 group-hover:scale-105")}
              </div>
            </div>

            <!-- Footer Details -->
            <div class="mt-8 border-t border-black/5 pt-4 flex justify-between items-center text-xs font-mono text-text-secondary/60 relative z-10">
              <span>MIN. RUN: 24 PCS</span>
              <span class="text-accent-primary group-hover:underline flex items-center gap-1">
                Explore Fabrics <span>&rarr;</span>
              </span>
            </div>
          </div>

          <!-- Card 2: Banners & Signage (Spans 1 col) -->
          <div class="group md:col-span-1 glass-panel glass-bevel p-8 relative flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-accent-primary/40 hover:shadow-[0_24px_50px_rgba(0,0,0,0.06)]">
            <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/0 to-accent-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div class="relative z-10 space-y-6">
              <span class="inline-block text-[10px] font-mono tracking-widest text-accent-primary bg-accent-primary/5 border border-accent-primary/15 px-2.5 py-1 rounded">
                LARGE FORMAT
              </span>
              <div class="flex items-center justify-center p-6 bg-black/2 rounded-xl border border-black/5 group-hover:border-accent-primary/20 transition-colors duration-300">
                ${Icons.banner("w-16 h-16 text-text-primary/70 transition-transform duration-500 group-hover:rotate-1")}
              </div>
              <div class="space-y-2">
                <h3 class="text-2xl font-bold text-text-primary tracking-tight">Banners & Signage</h3>
                <p class="text-text-secondary text-sm">
                  Heavy-duty vinyl banners, custom aluminum street signs, and retail storefront decals rated for 5+ years outdoor durability.
                </p>
              </div>
            </div>

            <div class="mt-8 border-t border-black/5 pt-4 flex justify-between items-center text-xs font-mono text-text-secondary/60 relative z-10">
              <span>MIN. RUN: 1 PC</span>
              <span class="text-accent-primary group-hover:underline flex items-center gap-1">
                Configure Dimensions <span>&rarr;</span>
              </span>
            </div>
          </div>

          <!-- Card 3: Custom Hoodies & Sweatshirts (Spans 1 col) -->
          <div class="group md:col-span-1 glass-panel glass-bevel p-8 relative flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-accent-primary/40 hover:shadow-[0_24px_50px_rgba(0,0,0,0.06)]">
            <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/0 to-accent-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div class="relative z-10 space-y-6">
              <span class="inline-block text-[10px] font-mono tracking-widest text-accent-primary bg-accent-primary/5 border border-accent-primary/15 px-2.5 py-1 rounded">
                PREMIUM FLEECE
              </span>
              <div class="flex items-center justify-center p-6 bg-black/2 rounded-xl border border-black/5 group-hover:border-accent-primary/20 transition-colors duration-300">
                ${Icons.hoodie("w-16 h-16 text-text-primary/70 transition-transform duration-500 group-hover:scale-105")}
              </div>
              <div class="space-y-2">
                <h3 class="text-2xl font-bold text-text-primary tracking-tight">Heavy Fleece</h3>
                <p class="text-text-secondary text-sm">
                  Premium custom hoodies, crewnecks, and zip-ups. Features matching metal hardware, heavy ribbing, and soft-hand prints.
                </p>
              </div>
            </div>

            <div class="mt-8 border-t border-black/5 pt-4 flex justify-between items-center text-xs font-mono text-text-secondary/60 relative z-10">
              <span>MIN. RUN: 12 PCS</span>
              <span class="text-accent-primary group-hover:underline flex items-center gap-1">
                Fleece Catalog <span>&rarr;</span>
              </span>
            </div>
          </div>

          <!-- Card 4: Business Cards & Identity (Spans 2 cols) -->
          <div class="group md:col-span-2 glass-panel glass-bevel p-8 relative flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-accent-primary/40 hover:shadow-[0_24px_50px_rgba(0,0,0,0.06)]">
            <div class="absolute inset-0 bg-gradient-to-br from-accent-primary/0 to-accent-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div class="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div class="space-y-4">
                <span class="inline-block text-[10px] font-mono tracking-widest text-accent-primary bg-accent-primary/5 border border-accent-primary/15 px-2.5 py-1 rounded">
                  BRAND IDENTITY
                </span>
                <h3 class="text-2xl font-bold text-text-primary tracking-tight">Business Cards & Stationary</h3>
                <p class="text-text-secondary text-sm max-w-sm">
                  Uncompromising tactile impressions. Foil stamping, letterpress, double-thick painted edges, and custom spot UV business cards.
                </p>
                <ul class="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-xs font-mono text-text-secondary/80">
                  <li class="flex items-center gap-1.5"><span class="w-1 h-1 rounded-full bg-accent-primary"></span> Spot UV Gloss</li>
                  <li class="flex items-center gap-1.5"><span class="w-1 h-1 rounded-full bg-accent-primary"></span> Foil Stamping</li>
                  <li class="flex items-center gap-1.5"><span class="w-1 h-1 rounded-full bg-accent-primary"></span> Painted Edges</li>
                </ul>
              </div>

              <div class="flex items-center justify-center p-4 bg-black/2 rounded-xl border border-black/5 group-hover:border-accent-primary/20 transition-colors duration-300">
                ${Icons.stationary("w-20 h-20 text-text-primary/70 transition-transform duration-500 group-hover:translate-y-[-2px]")}
              </div>
            </div>

            <div class="mt-8 border-t border-black/5 pt-4 flex justify-between items-center text-xs font-mono text-text-secondary/60 relative z-10">
              <span>MIN. RUN: 100 PCS</span>
              <span class="text-accent-primary group-hover:underline flex items-center gap-1">
                Order Samples <span>&rarr;</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
