export function LocalFeed() {
  return `
    <section id="local-feed" class="py-24 px-6 lg:px-margin-edge max-w-[1440px] mx-auto relative">
      <!-- Section Header -->
      <div class="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="max-w-xl">
          <span class="font-mono text-[10px] tracking-widest text-accent-gold uppercase block mb-3">// Local Field Dispatch</span>
          <h2 class="font-display-md text-[36px] sm:text-[48px] text-text-primary leading-tight">
            The Agrarian Journal
          </h2>
        </div>
        <p class="font-body-md text-text-secondary max-w-sm">
          Dispatches directly from our Ontario farming collective, tracking soil cycles, harvest preparations, and seasonal vault openings.
        </p>
      </div>

      <!-- Journal Columns -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
        <!-- Story 1 -->
        <article class="flex flex-col justify-between border-t border-outline-variant/30 pt-8 group cursor-pointer h-full">
          <div class="space-y-4">
            <div class="flex items-center justify-between font-mono text-[10px] text-accent-gold tracking-widest">
              <span>DISPATCH #18</span>
              <span>OCT 12, 2026</span>
            </div>
            <h3 class="font-display-md text-[28px] text-text-primary group-hover:text-accent-gold transition-colors duration-300 leading-tight">
              Frost Cure & Sourdough Starters
            </h3>
            <p class="font-body-md text-text-secondary line-clamp-4">
              With temperatures dropping to near zero in Grey County, we are witnessing the late autumn frost cure of our heirloom root crops. Inside the bakeries, sourdough cultures are adapting to the lower humidity levels, requiring longer fermentation cycles to achieve their signature crust thickness.
            </p>
          </div>
          <div class="mt-8 flex items-center justify-between pt-4 border-t border-outline-variant/10 text-accent-gold font-mono text-[11px] tracking-wider">
            <span>BY FARMER A. MILLINGTON</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </article>

        <!-- Story 2 -->
        <article class="flex flex-col justify-between border-t border-outline-variant/30 pt-8 group cursor-pointer h-full">
          <div class="space-y-4">
            <div class="flex items-center justify-between font-mono text-[10px] text-accent-gold tracking-widest">
              <span>DISPATCH #17</span>
              <span>OCT 08, 2026</span>
            </div>
            <h3 class="font-display-md text-[28px] text-text-primary group-hover:text-accent-gold transition-colors duration-300 leading-tight">
              Transitioning to Guernsey A2 Vaults
            </h3>
            <p class="font-body-md text-text-secondary line-clamp-4">
              Our Niagara dairy herd has fully transitioned to 100% pasture-fed A2 Guernsey cows. A2 milk contains only the A2 type of beta-casein protein, offering a lighter digestive profile. We monitor the vault temperature at 3.4°C to slow enzyme breakages and preserve biological richness.
            </p>
          </div>
          <div class="mt-8 flex items-center justify-between pt-4 border-t border-outline-variant/10 text-accent-gold font-mono text-[11px] tracking-wider">
            <span>BY DR. M. HARMONY</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </article>

        <!-- Story 3 -->
        <article class="flex flex-col justify-between border-t border-outline-variant/30 pt-8 group cursor-pointer h-full">
          <div class="space-y-4">
            <div class="flex items-center justify-between font-mono text-[10px] text-accent-gold tracking-widest">
              <span>DISPATCH #16</span>
              <span>SEP 24, 2026</span>
            </div>
            <h3 class="font-display-md text-[28px] text-text-primary group-hover:text-accent-gold transition-colors duration-300 leading-tight">
              Honoring Soil Resting Seasons
            </h3>
            <p class="font-body-md text-text-secondary line-clamp-4">
              In Wellington, three of our principal field lots are entering their scheduled cover crop rotation cycle. Planting red clover restores organic nitrogen, ensuring the soils remain active and nutrient-dense without chemical supplements.
            </p>
          </div>
          <div class="mt-8 flex items-center justify-between pt-4 border-t border-outline-variant/10 text-accent-gold font-mono text-[11px] tracking-wider">
            <span>BY SOIL COOP COLLECTIVE</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </div>
        </article>
      </div>

      <!-- Divider line -->
      <div class="absolute bottom-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent pointer-events-none"></div>
    </section>
  `;
}
