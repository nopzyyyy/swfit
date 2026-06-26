import { Icons } from '../icons/CustomIcons.js';

export function Hero() {
  return `
    <section class="relative min-h-screen pt-28 pb-16 px-4 md:px-8 flex items-center justify-center overflow-hidden bg-surface-base">
      <!-- Subtle ink bleed in the background -->
      <div class="glow-accent top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"></div>
      <div class="glow-accent bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" style="background: oklch(0.42 0.15 250); opacity: 0.03;"></div>

      <div class="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        <!-- Left Side: Asymmetrical Editorial Copy -->
        <div class="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8">
          
          <!-- Meta Header -->
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></span>
            <span class="glass-meta text-[10px] md:text-xs tracking-[0.2em] text-accent-primary">
              Industrial Precision / Speed Engine
            </span>
          </div>

          <!-- Headline -->
          <h1 class="hero-heading text-4xl sm:text-5xl md:text-7xl text-text-primary tracking-tight">
            Fast, Premium <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent-primary to-text-primary bg-size-200">
              Custom Printing.
            </span>
          </h1>

          <!-- Body -->
          <p class="text-text-secondary text-base md:text-lg leading-relaxed max-w-lg">
            High-output custom apparel, signage, and marketing collaterals engineered for immediate fulfillment. Experience unmatched clarity with physical light simulation prints.
          </p>

          <!-- Buttons -->
          <div class="flex flex-wrap gap-3 md:gap-4 pt-2">
            <a href="#contact" class="px-6 py-3.5 md:px-8 md:py-4 bg-text-primary text-surface-base font-semibold text-sm md:text-base rounded-lg hover:bg-text-primary/90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-black/10 focus:outline-none focus:ring-2 focus:ring-accent-primary">
              Initialize Quote
            </a>
            <a href="#capabilities" class="px-6 py-3.5 md:px-8 md:py-4 glass-panel glass-bevel text-text-primary font-semibold text-sm md:text-base rounded-lg hover:bg-black/2 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent-primary">
              Browse Bento Catalog
            </a>
          </div>

          <!-- Technical Metrics Grid (Responsive scaling) -->
          <div class="grid grid-cols-3 gap-3 md:gap-6 pt-6 md:pt-8 border-t border-black/5">
            <div>
              <div class="text-[9px] md:text-xs font-mono tracking-wider md:tracking-widest text-accent-primary mb-1">FULFILLMENT</div>
              <div class="text-xl md:text-2xl font-bold text-text-primary tracking-tight">24-48H</div>
              <div class="text-[8px] md:text-[10px] font-mono text-text-secondary">MAX TURNAROUND</div>
            </div>
            <div>
              <div class="text-[9px] md:text-xs font-mono tracking-wider md:tracking-widest text-accent-primary mb-1">ACCURACY</div>
              <div class="text-xl md:text-2xl font-bold text-text-primary tracking-tight">99.8%</div>
              <div class="text-[8px] md:text-[10px] font-mono text-text-secondary">COLOR CALIBRATED</div>
            </div>
            <div>
              <div class="text-[9px] md:text-xs font-mono tracking-wider md:tracking-widest text-accent-primary mb-1">CUSTOMER</div>
              <div class="text-xl md:text-2xl font-bold text-text-primary tracking-tight">5.0 ★</div>
              <div class="text-[8px] md:text-[10px] font-mono text-text-secondary">VERIFIED GOOGLE</div>
            </div>
          </div>

        </div>

        <!-- Right Side: Liquid Glass Technical Garment Preview -->
        <div class="lg:col-span-5 relative w-full aspect-square sm:max-w-md lg:max-w-none mx-auto flex items-center justify-center">
          
          <!-- Outer border decoration -->
          <div class="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none"></div>

          <!-- Liquid Glass Technical Canvas -->
          <div class="w-full h-full glass-panel glass-bevel p-5 md:p-6 relative flex flex-col justify-between overflow-hidden shadow-xl">
            
            <!-- Technical Grid Background (Dark Grid on Light Paper) -->
            <div class="absolute inset-0 opacity-5 pointer-events-none" 
                 style="background-image: 
                   linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
                   background-size: 24px 24px;">
            </div>

            <!-- Corner brackets (Engineering theme) -->
            <div class="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-black/10"></div>
            <div class="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-black/10"></div>
            <div class="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-black/10"></div>
            <div class="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-black/10"></div>

            <!-- Header Blueprint Meta -->
            <div class="relative z-10 flex justify-between items-center text-[9px] md:text-[10px] font-mono text-text-secondary/70 tracking-wider">
              <span>CANVAS_STAGE: [01]</span>
              <span class="flex items-center gap-1.5 text-accent-primary">
                <span class="w-1.5 h-1.5 rounded-full bg-accent-primary animate-ping"></span>
                RENDER_ACTIVE
              </span>
            </div>

            <!-- Central Mockup Graphic: Vector Garment with Crosshair overlays -->
            <div class="relative w-full flex-grow flex items-center justify-center my-4">
              <!-- Glow behind the garment -->
              <div class="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-accent-primary/5 filter blur-3xl pointer-events-none"></div>
              
              <!-- Blueprint Vector Garment -->
              <div class="transform scale-100 md:scale-110 relative transition-transform duration-700 hover:rotate-3">
                ${Icons.tshirt("w-36 h-36 md:w-48 md:h-48 text-text-primary/70 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.02)]")}
              </div>

              <!-- Aligning Target Crosshair Overlays -->
              <div class="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 text-accent-primary/30 animate-spin" style="animation-duration: 20s">
                ${Icons.crosshair("w-10 h-10 md:w-12 md:h-12")}
              </div>
              <div class="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 text-black/10 animate-spin" style="animation-duration: 15s; animation-direction: reverse;">
                ${Icons.crosshair("w-8 h-8 md:w-10 md:h-10")}
              </div>
            </div>

            <!-- Footer Calibration Stats -->
            <div class="relative z-10 flex justify-between items-end border-t border-black/5 pt-3">
              <div class="flex flex-col gap-0.5 text-[8px] md:text-[9px] font-mono text-text-secondary/60">
                <span>LASER_CALIBRATION: 100%</span>
                <span>MODEL: TS_TEE_HEAVY_V2</span>
                <span>SYS_TEMP: 22.4°C</span>
              </div>
              <div class="text-[8px] md:text-[9px] font-mono bg-accent-primary/5 text-accent-primary border border-accent-primary/20 px-1.5 py-0.5 rounded">
                SCALE: 1:15
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
