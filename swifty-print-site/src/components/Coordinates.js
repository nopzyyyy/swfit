export function Coordinates() {
  return `
    <section id="coordinates" class="py-24 px-6 lg:px-margin-edge max-w-[1440px] mx-auto relative">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-gutter">
        <!-- Left: Address details & Reservation Form -->
        <div class="md:col-span-6 flex flex-col justify-between">
          <div class="space-y-6">
            <span class="font-mono text-[10px] tracking-widest text-accent-gold uppercase block">// Physical Location</span>
            <h2 class="font-display-md text-[36px] sm:text-[48px] text-text-primary leading-tight">
              Cambridge Vault Coordinates
            </h2>
            <div class="space-y-4 font-body-md text-text-secondary">
              <p>
                Our central temperature-controlled cold vaults are located in the historic core of Cambridge. Access to fresh raw Guernsey milk, stone-ground heritage bread, and fresh cut cuts is restricted to vault keyholders during scheduled Saturday windows.
              </p>
              <div class="bg-surface-base/30 border border-outline-variant/10 p-6 rounded-lg space-y-3 font-mono text-[11px] text-accent-gold tracking-wider">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-[16px] text-accent-gold">location_on</span>
                  <span>960 KING ST E, CAMBRIDGE, ON</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-[16px] text-accent-gold">schedule</span>
                  <span>OPEN SATURDAYS: 9:00 AM - 1:00 PM</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-[16px] text-accent-gold">sensor_door</span>
                  <span>VAULT OPENINGS ARE HOURLY BY BATCH RESERVATION</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Reservation Form -->
          <form id="vault-form" class="mt-12 space-y-4 glass-panel p-6 rounded-xl">
            <h4 class="font-display-sm text-[20px] text-text-primary">Request Vault Reservation</h4>
            <p class="font-body-md text-[13px] text-text-secondary">Reserve Guernsey A2 Milk or Heritage Grain batches for the next Saturday collection.</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="name" class="font-mono text-[9px] uppercase tracking-widest text-text-secondary block mb-1">Full Name</label>
                <input type="text" id="name" required class="w-full bg-background/50 border border-outline-variant/30 rounded px-3 py-2 text-text-primary focus:outline-none focus:border-accent-gold transition-colors font-body-md text-[14px]" placeholder="Elizabeth Millington" />
              </div>
              <div>
                <label for="email" class="font-mono text-[9px] uppercase tracking-widest text-text-secondary block mb-1">Email Coordinates</label>
                <input type="email" id="email" required class="w-full bg-background/50 border border-outline-variant/30 rounded px-3 py-2 text-text-primary focus:outline-none focus:border-accent-gold transition-colors font-body-md text-[14px]" placeholder="elizabeth@millington.ca" />
              </div>
            </div>

            <div>
              <label for="product" class="font-mono text-[9px] uppercase tracking-widest text-text-secondary block mb-1">Select Reserve Tier</label>
              <select id="product" class="w-full bg-background/50 border border-outline-variant/30 rounded px-3 py-2 text-text-primary focus:outline-none focus:border-accent-gold transition-colors font-body-md text-[14px]">
                <option value="milk">Guernsey A2 Milk Vault Subscription ($12.50/wk)</option>
                <option value="bread">Heritage Grain Sourdough Batch ($9.50/wk)</option>
                <option value="full">The Complete Agrarian Basket ($35.00/wk)</option>
              </select>
            </div>

            <button type="submit" class="w-full bg-accent-gold text-surface-dim hover:bg-white font-label-md text-label-md uppercase tracking-widest py-3 rounded transition-all duration-300 active:scale-95 font-semibold">
              Submit Vault Reservation
            </button>
            <div id="form-success-msg" class="hidden text-center text-accent-gold font-mono text-[11px] tracking-wider py-1">
              ✓ Reservation coordinates received. Check your email inbox.
            </div>
          </form>
        </div>

        <!-- Right: Elegant Vector Map -->
        <div class="md:col-span-6 flex items-center justify-center">
          <div class="w-full h-[300px] md:h-[500px] rounded-xl border border-outline-variant/20 relative overflow-hidden bg-surface-base/20 group">
            <!-- Grid Lines overlay -->
            <div class="absolute inset-0 bg-[linear-gradient(rgba(214,195,138,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(214,195,138,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            <!-- Abstract Map SVG -->
            <svg class="w-full h-full p-8" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Water bodies (Grand River) -->
              <path d="M 120 0 C 150 150, 100 300, 160 500" stroke="#4B563D" stroke-width="24" stroke-opacity="0.15" stroke-linecap="round" fill="none" />
              
              <!-- Map Roads (Gold & Muted lines) -->
              <path d="M 0 150 L 600 150" stroke="#494740" stroke-width="2" stroke-opacity="0.4" />
              <path d="M 0 320 L 600 320" stroke="#494740" stroke-width="2" stroke-opacity="0.4" />
              <path d="M 220 0 L 220 500" stroke="#494740" stroke-width="2" stroke-opacity="0.4" />
              <path d="M 450 0 L 450 500" stroke="#494740" stroke-width="2" stroke-opacity="0.4" />
              
              <!-- Main Highway / King St E (Gold highlight) -->
              <path d="M 0 240 C 200 240, 300 220, 600 280" stroke="#D6C38A" stroke-width="4" stroke-opacity="0.6" stroke-linecap="round" fill="none" class="group-hover:stroke-opacity-80 transition-all duration-500" />
              
              <!-- Minor roads -->
              <path d="M 100 0 L 300 500" stroke="#494740" stroke-width="1.5" stroke-opacity="0.2" />
              <path d="M 0 420 L 600 200" stroke="#494740" stroke-width="1.5" stroke-opacity="0.2" />
              
              <!-- Marker Point: 960 King St E -->
              <g transform="translate(320, 225)">
                <!-- Pulse effect -->
                <circle r="20" fill="#D6C38A" fill-opacity="0.1" class="animate-ping" style="animation-duration: 3s;"></circle>
                <circle r="8" fill="#D6C38A" fill-opacity="0.4"></circle>
                <circle r="4" fill="#D6C38A"></circle>
                <!-- Tooltip label -->
                <rect x="15" y="-35" width="160" height="40" rx="4" fill="#21201D" stroke="#D6C38A" stroke-width="0.5" />
                <text x="25" y="-12" fill="#F9F8F3" font-family="Plus Jakarta Sans" font-size="10" font-weight="600" letter-spacing="1">960 KING ST E</text>
              </g>
            </svg>

            <!-- Latitude/Longitude Coordinates Overlay -->
            <div class="absolute bottom-4 left-4 font-mono text-[9px] text-text-secondary tracking-widest bg-background/80 px-4 py-2 rounded border border-outline-variant/10">
              43.3768° N, 80.3151° W // ALT: 219M
            </div>
          </div>
        </div>
      </div>
      
      <!-- Divider line -->
      <div class="absolute bottom-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent pointer-events-none"></div>
    </section>
  `;
}

export function initCoordinates() {
  const form = document.getElementById('vault-form');
  const msg = document.getElementById('form-success-msg');
  
  if (form && msg) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Animate submit
      msg.classList.remove('hidden');
      form.reset();
      
      setTimeout(() => {
        msg.classList.add('hidden');
      }, 5000);
    });
  }
}
