export function Footer() {
  return `
    <footer class="border-t border-outline-variant/10 py-12 px-6 lg:px-margin-edge bg-background text-[10px] font-mono text-text-secondary tracking-widest uppercase">
      <div class="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          © 2026 BEE ONE MARKET. ALL RIGHTS RESERVED.
        </div>
        <div class="flex flex-wrap items-center justify-center gap-6 text-center">
          <a href="#curation" class="hover:text-accent-gold transition-colors duration-300">Curation</a>
          <span class="text-outline-variant/30">//</span>
          <a href="#provenance" class="hover:text-accent-gold transition-colors duration-300">Provenance</a>
          <span class="text-outline-variant/30">//</span>
          <a href="#local-feed" class="hover:text-accent-gold transition-colors duration-300">Local Feed</a>
          <span class="text-outline-variant/30">//</span>
          <a href="#coordinates" class="hover:text-accent-gold transition-colors duration-300">Coordinates</a>
        </div>
        <div>
          SYS_STATUS: VAULT_SAFE_3.4C
        </div>
      </div>
    </footer>
  `;
}
