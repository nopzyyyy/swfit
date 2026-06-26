export function Provenance() {
  return `
    <section id="provenance" class="py-24 px-6 lg:px-margin-edge max-w-[1440px] mx-auto relative">
      <!-- Section Header -->
      <div class="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="max-w-xl">
          <span class="font-mono text-[10px] tracking-widest text-accent-gold uppercase block mb-3">// Curated Supply Chain</span>
          <h2 class="font-display-md text-[36px] sm:text-[48px] text-text-primary leading-tight">
            Provenance of the Harvest
          </h2>
        </div>
        <p class="font-body-md text-text-secondary max-w-sm">
          A rigid vetting process ensures every farm-direct loaf, cut, and harvest in our cold-vault represents the pinnacle of sustainable Ontario agriculture.
        </p>
      </div>

      <!-- Bento Catalog Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-gutter">
        <!-- Item 1: Large Featured Card -->
        <div class="md:col-span-2 glass-panel p-8 rounded-xl flex flex-col justify-between min-h-[380px] md:h-[450px] relative overflow-hidden group">
          <div class="absolute inset-0 bg-accent-gold/2 pointer-events-none transition-all duration-500 group-hover:bg-accent-gold/5"></div>
          
          <div class="flex justify-between items-start z-10">
            <div>
              <span class="font-mono text-[9px] uppercase tracking-widest text-accent-gold">Heritage Grains</span>
              <h3 class="font-display-md text-[32px] text-text-primary mt-1">Niagara Sourdough Boule</h3>
            </div>
            <span class="font-mono text-[10px] text-accent-gold border border-accent-gold/30 px-3 py-1 rounded-full">BAKED DAILY</span>
          </div>

          <div class="my-6 z-10 max-w-md">
            <p class="font-body-md text-text-secondary">
              Hand-shaped, wild-fermented sourdough prepared with organic Red Fife stone-ground flour from grain fields in Lincoln County. Finished in wood-fired stone ovens.
            </p>
          </div>

          <div class="border-t border-outline-variant/20 pt-6 flex flex-wrap justify-between items-center gap-4 z-10">
            <div class="flex gap-8">
              <div>
                <span class="font-mono text-[9px] uppercase tracking-widest text-text-secondary block">Harvest Source</span>
                <span class="font-label-md text-text-primary text-[13px] uppercase mt-0.5 block">K2 Milling, Lincoln</span>
              </div>
              <div>
                <span class="font-mono text-[9px] uppercase tracking-widest text-text-secondary block">Fermentation</span>
                <span class="font-label-md text-text-primary text-[13px] uppercase mt-0.5 block">36 Hour Cold Cure</span>
              </div>
            </div>
            <span class="font-display-sm text-[20px] text-accent-gold">$9.50</span>
          </div>
        </div>

        <!-- Item 2: Standard Card -->
        <div class="glass-panel p-8 rounded-xl flex flex-col justify-between min-h-[380px] md:h-[450px] relative overflow-hidden group">
          <div class="absolute inset-0 bg-accent-gold/2 pointer-events-none transition-all duration-500 group-hover:bg-accent-gold/5"></div>
          
          <div class="flex justify-between items-start z-10">
            <div>
              <span class="font-mono text-[9px] uppercase tracking-widest text-accent-gold">Limited Apiary</span>
              <h3 class="font-display-md text-[32px] text-text-primary mt-1">Wildwood Raw Honey</h3>
            </div>
          </div>

          <div class="my-6 z-10">
            <p class="font-body-md text-text-secondary">
              Cold-pressed wildflower honey comb harvested from protected apiaries in Grey County. Pure, raw, and unpasteurized.
            </p>
          </div>

          <div class="border-t border-outline-variant/20 pt-6 flex justify-between items-center z-10">
            <div>
              <span class="font-mono text-[9px] uppercase tracking-widest text-text-secondary block">Batch Size</span>
              <span class="font-label-md text-text-primary text-[13px] uppercase mt-0.5 block">45 Jars / Seasonal</span>
            </div>
            <span class="font-display-sm text-[20px] text-accent-gold">$18.00</span>
          </div>
        </div>

        <!-- Item 3: Standard Card -->
        <div class="glass-panel p-8 rounded-xl flex flex-col justify-between min-h-[380px] md:h-[450px] relative overflow-hidden group">
          <div class="absolute inset-0 bg-accent-gold/2 pointer-events-none transition-all duration-500 group-hover:bg-accent-gold/5"></div>
          
          <div class="flex justify-between items-start z-10">
            <div>
              <span class="font-mono text-[9px] uppercase tracking-widest text-accent-gold">Agrarian Dairy</span>
              <h3 class="font-display-md text-[32px] text-text-primary mt-1">Raw Sheep's Cheese</h3>
            </div>
          </div>

          <div class="my-6 z-10">
            <p class="font-body-md text-text-secondary">
              Aged 12 months in stone vaults. Crafted using A2 milk from pasture-fed East Friesian sheep in Wellington County.
            </p>
          </div>

          <div class="border-t border-outline-variant/20 pt-6 flex justify-between items-center z-10">
            <div>
              <span class="font-mono text-[9px] uppercase tracking-widest text-text-secondary block">Aged Duration</span>
              <span class="font-label-md text-text-primary text-[13px] uppercase mt-0.5 block">12 Months Cave Cure</span>
            </div>
            <span class="font-display-sm text-[20px] text-accent-gold">$14.00 / 100g</span>
          </div>
        </div>

        <!-- Item 4: Large Featured Card -->
        <div class="md:col-span-2 glass-panel p-8 rounded-xl flex flex-col justify-between min-h-[380px] md:h-[450px] relative overflow-hidden group">
          <div class="absolute inset-0 bg-accent-gold/2 pointer-events-none transition-all duration-500 group-hover:bg-accent-gold/5"></div>
          
          <div class="flex justify-between items-start z-10">
            <div>
              <span class="font-mono text-[9px] uppercase tracking-widest text-accent-gold">Heritage Poultry</span>
              <h3 class="font-display-md text-[32px] text-text-primary mt-1">Pastured Amber Eggs</h3>
            </div>
            <span class="font-mono text-[10px] text-accent-gold border border-accent-gold/30 px-3 py-1 rounded-full">LIMITED BATCH</span>
          </div>

          <div class="my-6 z-10 max-w-md">
            <p class="font-body-md text-text-secondary">
              Eggs laid by pastured heritage breed hens foraging freely on biodynamic fields in Cambridge. Golden yolks rich in organic nutrients.
            </p>
          </div>

          <div class="border-t border-outline-variant/20 pt-6 flex flex-wrap justify-between items-center gap-4 z-10">
            <div class="flex gap-8">
              <div>
                <span class="font-mono text-[9px] uppercase tracking-widest text-text-secondary block">Farm Source</span>
                <span class="font-label-md text-text-primary text-[13px] uppercase mt-0.5 block">Millington Pastures, Cambridge</span>
              </div>
              <div>
                <span class="font-mono text-[9px] uppercase tracking-widest text-text-secondary block">Dietary Standard</span>
                <span class="font-label-md text-text-primary text-[13px] uppercase mt-0.5 block">100% Organic Forage</span>
              </div>
            </div>
            <span class="font-display-sm text-[20px] text-accent-gold">$8.50 / Dozen</span>
          </div>
        </div>
      </div>

      <!-- Divider line -->
      <div class="absolute bottom-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent pointer-events-none"></div>
    </section>
  `;
}
