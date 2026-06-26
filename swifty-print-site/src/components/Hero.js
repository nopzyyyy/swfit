export function Hero() {
  return `
    <header id="curation" class="relative min-h-screen pt-32 px-6 lg:px-margin-edge flex items-center max-w-[1440px] mx-auto overflow-hidden">
      <div class="grid grid-cols-12 gap-6 lg:gap-gutter w-full z-10">
        <!-- Left: Hero Headline -->
        <div class="col-span-12 md:col-span-7 flex flex-col justify-center">
          <h1 class="font-display-lg text-[32px] sm:text-[48px] lg:text-[72px] xl:text-display-lg text-text-primary leading-[1.1] mb-8 md:mb-12">
            Fresh produce <span class="italic text-accent-gold">from</span> local farms, breads baked nearby, and meats raised in <span class="font-label-md text-[11px] sm:text-label-md uppercase tracking-[0.3em] align-middle px-3 py-1 border border-outline-variant/30 ml-2 inline-block">Ontario.</span>
          </h1>
          
          <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 font-mono text-[10px] sm:text-[11px] tracking-widest text-accent-gold bg-surface-container-low/40 w-full sm:w-max max-w-full px-4 sm:px-6 py-3 rounded-lg border border-outline-variant/10">
            <div class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse"></span>
              <span>LOCATION: 960 KING ST E, CAMBRIDGE</span>
            </div>
            <span class="hidden sm:inline text-outline-variant">|</span>
            <span>CURRENT STATUS: OPEN SAT 9 AM</span>
          </div>
        </div>

        <!-- Right: Glass Floating Block -->
        <div class="col-span-12 md:col-span-5 relative mt-8 md:mt-0">
          <div class="liquid-glass py-6 px-6 sm:p-8 rounded-xl min-h-[520px] md:h-[600px] flex flex-col justify-between relative overflow-hidden group">
            <!-- Header of Card -->
            <div class="flex justify-between items-center">
              <span class="font-label-md text-label-md uppercase tracking-widest text-text-secondary italic">Cold-Storage Vault List</span>
              <div class="flex items-center gap-1.5 bg-accent-moss/20 px-3 py-1 rounded-full border border-accent-moss/30 text-accent-gold font-mono text-[10px]">
                <span class="material-symbols-outlined text-[14px] fill-icon animate-pulse text-red-400">thermostat</span>
                <span>VAULT TEMP: 3.4°C</span>
              </div>
            </div>

            <!-- Featured Product: Milk Bottle Image Container -->
            <div class="flex-1 flex flex-col items-center justify-center space-y-6 my-4">
              <div class="relative w-48 h-64 flex items-center justify-center">
                <!-- Glowing background halo -->
                <div class="absolute inset-0 bg-accent-gold/5 rounded-full filter blur-xl group-hover:bg-accent-gold/10 transition-all duration-700"></div>
                <img alt="Artisanal Guernsey Milk Bottle" 
                     class="w-40 h-auto relative z-10 drop-shadow-[0_20px_50px_rgba(214,195,138,0.25)] group-hover:scale-105 transition-transform duration-700 object-contain" 
                     src="/assets/milk_bottle.png" />
              </div>
              
              <!-- Product info -->
              <div class="text-center">
                <h3 class="font-display-md text-[28px] text-text-primary leading-tight">Guernsey Raw A2 Milk</h3>
                <p class="font-label-md text-[11px] tracking-wider text-accent-gold uppercase mt-1">Niagara Region Homestead</p>
              </div>
            </div>

            <!-- Bottom of Card: Price & CTA -->
            <div class="border-t border-outline-variant/20 pt-6">
              <div class="flex justify-between items-center mb-4">
                <div class="flex flex-col">
                  <span class="font-mono text-[9px] uppercase tracking-widest text-text-secondary">Subscription Rate</span>
                  <span class="font-display-sm text-[20px] text-text-primary">$12.50 <span class="text-xs text-text-secondary">/ week</span></span>
                </div>
                <div class="flex flex-col items-end">
                  <span class="font-mono text-[9px] uppercase tracking-widest text-text-secondary">Next Vault Opening</span>
                  <span class="font-label-md text-label-md text-accent-gold">Sat 9:00 AM</span>
                </div>
              </div>
              <button class="w-full bg-accent-gold text-surface-dim hover:bg-white border border-transparent font-label-md text-label-md uppercase tracking-widest py-3 rounded-lg transition-all duration-300 hover:scale-[0.99] active:scale-95 font-semibold">
                Request Vault Reservation
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Backdrop Grid Layout Elements -->
      <div class="absolute inset-y-0 right-0 w-1/2 border-l border-outline-variant/10 pointer-events-none hidden md:block"></div>
      <div class="absolute bottom-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent pointer-events-none"></div>
    </header>
  `;
}
