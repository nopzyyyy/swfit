import { Icons } from '../icons/CustomIcons.js';

export function ContactTerminal() {
  return `
    <section id="contact" class="relative py-24 px-4 md:px-8 bg-surface-base">
      <!-- Glow Accent -->
      <div class="glow-accent bottom-10 left-10" style="background: oklch(0.42 0.15 250); opacity: 0.03;"></div>

      <div class="w-full max-w-6xl mx-auto relative z-10">
        
        <!-- Header -->
        <div class="mb-16 space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
            <span class="glass-meta text-xs tracking-[0.2em] text-accent-primary">GATEWAY PORTAL</span>
          </div>
          <h2 class="hero-heading text-4xl md:text-6xl text-text-primary tracking-tight">
            Fulfillment & <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent-primary to-text-primary bg-size-200">Operations Gateway.</span>
          </h2>
          <p class="text-text-secondary text-base max-w-xl">
            Configure your order routing parameters. Our system queues and allocates printing press scheduling in real time.
          </p>
        </div>

        <!-- Grid Matrix -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left Panel: Operations & Locator (5 cols) -->
          <div id="operations" class="lg:col-span-5 w-full space-y-6">
            
            <!-- Live Operational State -->
            <div class="glass-panel glass-bevel p-6 space-y-4 shadow-md">
              <div class="flex justify-between items-center">
                <span class="text-xs font-mono text-text-secondary/60 tracking-wider">GATEWAY_STATUS</span>
                <span id="live-status-badge" class="flex items-center gap-1.5 text-xs font-mono px-2 py-0.5 rounded border">
                  <!-- Dynamically populated by JS -->
                  <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                  OPERATIONAL
                </span>
              </div>

              <!-- Info Rows -->
              <div class="space-y-4 pt-2">
                <div class="flex items-start gap-4">
                  <div class="p-2.5 bg-black/2 border border-black/5 rounded-lg text-accent-primary shrink-0">
                    ${Icons.clock()}
                  </div>
                  <div>
                    <h4 class="text-xs font-mono text-text-secondary/60">OPERATIONAL HOURS</h4>
                    <p class="text-sm font-semibold text-text-primary mt-1">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p class="text-xs text-text-secondary">Saturday: 9:00 AM - 3:00 PM (Express Runs)</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="p-2.5 bg-black/2 border border-black/5 rounded-lg text-accent-primary shrink-0">
                    ${Icons.phone()}
                  </div>
                  <div class="flex-grow min-w-0">
                    <h4 class="text-xs font-mono text-text-secondary/60">COMMUNICATION UPLINK</h4>
                    <div class="flex items-center justify-between mt-1 gap-2">
                      <a href="tel:18005557768" class="text-sm font-semibold text-text-primary hover:text-accent-primary transition-colors focus:outline-none truncate">
                        +1 (800) 555-PRINT
                      </a>
                      <button id="copy-phone-btn" class="p-1 text-text-secondary/50 hover:text-text-primary transition-colors focus:outline-none shrink-0" title="Copy Number">
                        ${Icons.copy()}
                      </button>
                    </div>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="p-2.5 bg-black/2 border border-black/5 rounded-lg text-accent-primary shrink-0">
                    ${Icons.mapPin()}
                  </div>
                  <div class="flex-grow min-w-0">
                    <h4 class="text-xs font-mono text-text-secondary/60">GEOLOCATED DOCK</h4>
                    <div class="flex items-center justify-between mt-1 gap-2">
                      <p class="text-sm font-semibold text-text-primary truncate">2024 Printing Press Lane, Suite 100</p>
                      <button id="copy-address-btn" class="p-1 text-text-secondary/50 hover:text-text-primary transition-colors focus:outline-none shrink-0" title="Copy Address">
                        ${Icons.copy()}
                      </button>
                    </div>
                    <p class="text-xs text-text-secondary">Charlotte, NC 28202</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Custom Vector Blueprint Map (Simulating physical geography) -->
            <div class="glass-panel glass-bevel h-64 relative overflow-hidden shadow-md flex items-center justify-center p-4">
              <!-- Grid background -->
              <div class="absolute inset-0 opacity-5" 
                   style="background-image: 
                     linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                     linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
                     background-size: 16px 16px;">
              </div>
              
              <!-- Abstract Roads and Topography -->
              <svg class="absolute inset-0 w-full h-full stroke-black/10 stroke-[1.5] fill-none" viewBox="0 0 400 250" preserveAspectRatio="none">
                <!-- Roads -->
                <path d="M 0 50 L 400 50" />
                <path d="M 0 180 L 400 180" />
                <path d="M 80 0 L 80 250" />
                <path d="M 320 0 L 320 250" />
                <path d="M 0 0 C 150 100, 250 150, 400 250" stroke-dasharray="2 4" />
                
                <!-- Printing hub outline -->
                <rect x="230" y="100" width="60" height="40" rx="4" class="fill-accent-primary/5 stroke-accent-primary/20" />
              </svg>

              <!-- Pulsing Geolocated Pin (Percentage-based responsive placement) -->
              <div class="absolute top-[48%] left-[65%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <!-- Pulse effect -->
                <div class="absolute w-12 h-12 rounded-full bg-accent-primary/25 animate-ping"></div>
                <div class="relative w-4 h-4 rounded-full bg-accent-primary border-2 border-white flex items-center justify-center shadow-md shadow-accent-primary/20">
                  <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                
                <!-- Badge floating above pin -->
                <div class="mt-2 px-2 py-0.5 bg-white border border-accent-primary/30 rounded text-[8px] font-mono text-accent-primary tracking-widest uppercase shadow-sm">
                  SWIFTY_DOCK_01
                </div>
              </div>

              <!-- Map Overlay coordinates -->
              <div class="absolute bottom-2 left-3 text-[8px] font-mono text-text-secondary/50">
                LAT: 35.2271° N | LON: 80.8431° W
              </div>
              <div class="absolute top-2 right-3 text-[8px] font-mono text-text-secondary/50">
                MAP_RENDER_GRID: 50m
              </div>
            </div>

          </div>

          <!-- Right Panel: Interactive Terminal Quote Form (7 cols) -->
          <div class="lg:col-span-7 w-full glass-panel glass-bevel p-6 md:p-8 shadow-xl relative">
            
            <div class="flex justify-between items-center mb-6 border-b border-black/5 pb-4">
              <span class="text-xs font-mono text-accent-primary flex items-center gap-2">
                <span class="w-2.5 h-1 bg-accent-primary animate-pulse inline-block"></span>
                INITIATE_PRODUCTION_ROUTE
              </span>
              <span class="text-[10px] font-mono text-text-secondary/50">SYS_BUILD_V4.0</span>
            </div>

            <!-- Form -->
            <form id="quote-terminal-form" class="space-y-5">
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Name -->
                <div class="space-y-1.5">
                  <label for="form-name" class="block text-[10px] font-mono text-text-secondary/70 tracking-wider">CLIENT_NAME</label>
                  <input type="text" id="form-name" required placeholder="e.g. John Doe" 
                         class="w-full bg-black/2 border border-black/8 rounded-lg px-4 py-3 text-sm text-text-primary placeholder-black/30 transition-all duration-300 focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary focus:bg-white">
                </div>

                <!-- Email -->
                <div class="space-y-1.5">
                  <label for="form-email" class="block text-[10px] font-mono text-text-secondary/70 tracking-wider">EMAIL_ADDRESS</label>
                  <input type="email" id="form-email" required placeholder="e.g. john@company.com" 
                         class="w-full bg-black/2 border border-black/8 rounded-lg px-4 py-3 text-sm text-text-primary placeholder-black/30 transition-all duration-300 focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary focus:bg-white">
                </div>
              </div>

              <!-- Product Specs -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Production Line (Service Type) -->
                <div class="space-y-1.5">
                  <label for="form-service" class="block text-[10px] font-mono text-text-secondary/70 tracking-wider">PRODUCTION_LINE</label>
                  <select id="form-service" required
                          class="w-full bg-black/2 border border-black/8 rounded-lg px-4 py-3 text-sm text-text-primary transition-all duration-300 focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary focus:bg-white appearance-none cursor-pointer">
                    <option value="" disabled selected class="bg-white text-black/35">Select Line...</option>
                    <option value="apparel" class="bg-white text-text-primary">Custom Screen Printing / Apparel</option>
                    <option value="signage" class="bg-white text-text-primary">Banners & Large Format Signs</option>
                    <option value="stationary" class="bg-white text-text-primary">Business Cards & Stationary</option>
                    <option value="other" class="bg-white text-text-primary">Specialty Custom Job</option>
                  </select>
                </div>

                <!-- Print Run Volume -->
                <div class="space-y-1.5">
                  <label for="form-volume" class="block text-[10px] font-mono text-text-secondary/70 tracking-wider">EST_VOLUME</label>
                  <input type="number" id="form-volume" required min="1" placeholder="e.g. 100" 
                         class="w-full bg-black/2 border border-black/8 rounded-lg px-4 py-3 text-sm text-text-primary placeholder-black/30 transition-all duration-300 focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary focus:bg-white">
                </div>
              </div>

              <!-- Project Spec Details -->
              <div class="space-y-1.5">
                <label for="form-details" class="block text-[10px] font-mono text-text-secondary/70 tracking-wider">COMPILER_DETAILS</label>
                <textarea id="form-details" required rows="4" placeholder="Describe garment weights, color specs, finishing requirements..." 
                          class="w-full bg-black/2 border border-black/8 rounded-lg px-4 py-3 text-sm text-text-primary placeholder-black/30 transition-all duration-300 focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary focus:bg-white resize-none"></textarea>
              </div>

              <!-- Simulated File Upload Layer -->
              <div class="space-y-1.5">
                <label class="block text-[10px] font-mono text-text-secondary/70 tracking-wider">VECTOR_ARTWORK_UPLINK</label>
                <div class="border border-dashed border-black/10 hover:border-accent-primary/40 rounded-lg p-6 text-center cursor-pointer transition-colors duration-300 relative bg-black/2 hover:bg-black/3 group">
                  <input type="file" id="form-file" class="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf,.ai,.eps,.svg,.png,.jpg">
                  <div class="space-y-2 flex flex-col items-center">
                    <span class="text-text-secondary/50 group-hover:text-accent-primary transition-colors duration-300">
                      ${Icons.copy("w-8 h-8")}
                    </span>
                    <p class="text-xs text-text-primary">Drag & drop print vectors, or <span class="text-accent-primary group-hover:underline">browse files</span></p>
                    <p class="text-[9px] font-mono text-text-secondary/60">MAX FILE SIZE: 50MB (.AI, .EPS, .PDF, .SVG preferred)</p>
                  </div>
                </div>
              </div>

              <!-- Submit Trigger -->
              <button type="submit" id="form-submit-btn" class="w-full py-4 bg-accent-primary text-white font-bold rounded-lg text-sm tracking-widest uppercase hover:bg-accent-primary/90 hover:shadow-[0_12px_30px_rgba(109,207,246,0.15)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer">
                SUBMIT_REQUEST_ROUTE
              </button>

            </form>

            <!-- Success Overlay state (Hidden by default) -->
            <div id="form-success-overlay" class="absolute inset-0 bg-white/95 backdrop-blur rounded-2xl flex flex-col items-center justify-center text-center p-8 opacity-0 pointer-events-none transition-opacity duration-300">
              <div class="w-16 h-16 rounded-full bg-accent-primary/10 border-2 border-accent-primary flex items-center justify-center mb-6">
                ${Icons.verified("w-8 h-8 text-accent-primary")}
              </div>
              <h3 class="text-2xl font-bold text-text-primary tracking-tight">TRANSMISSION_COMPLETE</h3>
              <p class="text-text-secondary text-sm max-w-sm mt-3 leading-relaxed">
                Project spec routing initialized successfully. A production engineer will contact you in <span class="text-text-primary font-mono font-bold">15-30 minutes</span>.
              </p>
              <button id="form-reset-btn" class="mt-8 px-6 py-2.5 glass-panel glass-bevel text-xs font-mono tracking-widest text-accent-primary hover:text-text-primary uppercase transition-colors cursor-pointer">
                RESET_PORTAL
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

export function initContactTerminal() {
  // Update Live Operational Status Badge
  const badge = document.getElementById('live-status-badge');
  if (badge) {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 6 is Saturday
    const hour = now.getHours();

    let isOpen = false;
    if (day >= 1 && day <= 5) { // Mon-Fri
      if (hour >= 8 && hour < 18) isOpen = true; // 8am - 6pm
    } else if (day === 6) { // Sat
      if (hour >= 9 && hour < 15) isOpen = true; // 9am - 3pm
    }

    if (isOpen) {
      badge.className = "flex items-center gap-1.5 text-xs font-mono px-2 py-0.5 rounded border border-green-500/20 bg-green-500/10 text-green-700";
      badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> ONLINE`;
    } else {
      badge.className = "flex items-center gap-1.5 text-xs font-mono px-2 py-0.5 rounded border border-amber-500/20 bg-amber-500/10 text-amber-700";
      badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> OFFHOURS // AUTO QUEUE`;
    }
  }

  // Copy Clipboard Utilities
  const copyBtn = (btnId, textToCopy, successMsg) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalContent = btn.innerHTML;
        btn.innerHTML = `<span class="text-green-600 text-xs font-mono">Copied!</span>`;
        setTimeout(() => {
          btn.innerHTML = originalContent;
        }, 2000);
      });
    });
  };

  copyBtn('copy-phone-btn', '+18005557768');
  copyBtn('copy-address-btn', '2024 Printing Press Lane, Suite 100, Charlotte, NC 28202');

  // Form submission and success states
  const form = document.getElementById('quote-terminal-form');
  const overlay = document.getElementById('form-success-overlay');
  const resetBtn = document.getElementById('form-reset-btn');

  if (form && overlay) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById('form-submit-btn');
      const originalText = submitBtn.innerText;
      submitBtn.disabled = true;
      submitBtn.innerText = "TRANSMITTING...";

      // Simulate network request
      setTimeout(() => {
        overlay.classList.remove('pointer-events-none', 'opacity-0');
        overlay.classList.add('opacity-100');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerText = originalText;
      }, 1500);
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        overlay.classList.remove('opacity-100');
        overlay.classList.add('pointer-events-none', 'opacity-0');
      });
    }
  }
}
