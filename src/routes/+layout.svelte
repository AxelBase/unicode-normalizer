<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';

  // --- Buy Me A Coffee Logic ---
  const paypalUsername = 'AxelLab427'; // Update this
  const donationAmounts = [1, 3, 5, 10];
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }

  // --- Theme Toggle Logic ---
  let isDarkMode = false;

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    // We access document in onMount or after interaction, so this is safe in SvelteKit
    if (typeof document !== 'undefined') {
        const theme = isDarkMode ? 'dark' : 'light';
        document.body.setAttribute('data-bs-theme', theme);
    }
  }

  onMount(() => {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleTheme();
    }
  });

  const currentYear = new Date().getFullYear();
</script>

<header class="fixed-top p-3 w-100" style="pointer-events: none; z-index: 1040;">
  <nav class="container glass rounded-pill px-3 px-md-4 py-2 d-flex justify-content-between align-items-center" 
       style="pointer-events: auto; max-width: 1200px;">
    
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center gap-2 logo-group text-decoration-none">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="navbar-brand-logo" />
        <span class="fw-bold fs-5 d-none d-sm-block brand-text">AxelBase</span>
      </a>

      <div class="position-relative ms-1" use:clickOutside on:click_outside={closeDropdown}>
        <button class="btn btn-coffee d-flex align-items-center gap-2" on:click={toggleDropdown}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="coffee-icon">
            <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z"/>
          </svg>
          <span class="d-none d-md-inline">Buy coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="dropdown-menu-custom glass" transition:slide={{ duration: 300 }}>
            {#each donationAmounts as amount}
              <a href="https://paypal.me/{paypalUsername}/{amount}" target="_blank" rel="noopener noreferrer" on:click={closeDropdown} class="donation-link">
                ${amount}
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <div class="d-flex align-items-center gap-3">
      <ul class="nav d-none d-lg-flex align-items-center gap-1 m-0">
        <li><a class="nav-link-custom" href="{base}/">Home</a></li>
        <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
        <li><a class="nav-link-custom" href="{base}/#how-to">How to use</a></li>
        <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
        <li><a class="btn btn-primary btn-sm ms-2" href="{base}/blog">Blog</a></li>
      </ul>

      <button class="btn btn-theme-toggle" on:click={toggleTheme} aria-label="Toggle Dark Mode">
        {#if isDarkMode}
            <i class="bi bi-sun-fill"></i>
        {:else}
            <i class="bi bi-moon-stars-fill"></i>
        {/if}
      </button>

      <button class="d-lg-none btn btn-sm btn-outline-primary border-0" aria-label="Menu">
         <i class="bi bi-list fs-4"></i>
      </button>
    </div>
  </nav>
</header>

<main class="content-wrapper">
  <slot />
</main>

<footer class="releative glass border-top py-3 mt-auto">
  <div class="container text-center">
    <span class="small text-muted fw-bold">© {currentYear} AxelBase Unicode Normalizer</span>
    <span class="mx-2 text-muted">|</span>
    <a href="{base}/privacy" class="footer-link">Privacy</a>
    <span class="mx-1 text-muted">•</span>
    <a href="{base}/terms" class="footer-link">Terms</a>
  </div>
</footer>

<style>
  .content-wrapper { padding-top: 100px; min-height: 80vh; }
  
  .brand-text { color: var(--color-text-main); letter-spacing: -0.5px; }
  .navbar-brand-logo { height: 32px; width: auto; transition: transform 0.3s ease; }
  .logo-group:hover .navbar-brand-logo { transform: rotate(10deg) scale(1.1); }
  
  /* Link Styling */
  .nav-link-custom { position: relative; padding: 0.5rem 0.8rem; color: var(--color-text-muted); font-weight: 600; text-decoration: none; transition: color 0.3s; font-size: 0.95rem; }
  .nav-link-custom::after { content: ''; position: absolute; width: 0; height: 3px; bottom: 0px; left: 50%; background-color: var(--brand-primary); transition: all 0.3s ease-in-out; transform: translateX(-50%); border-radius: 2px; }
  .nav-link-custom:hover { color: var(--color-text-main); }
  .nav-link-custom:hover::after { width: 60%; }
  
  /* Coffee Button */
  .btn-coffee { background: var(--brand-primary); color: var(--color-accent-text); font-weight: 700; border: none; padding: 0.4rem 1rem; box-shadow: 0 4px 10px rgba(230,214,144,0.3); font-size: 0.9rem; }
  .btn-coffee:hover { transform: translateY(-2px); box-shadow: 0 6px 15px rgba(230,214,144,0.5) !important; filter: brightness(1.05); }
  .coffee-icon { width: 18px; height: 18px; animation: steam 3s infinite ease-out; }
  
  /* Dropdown */
  .dropdown-menu-custom { position: absolute; top: 120%; left: 50%; transform: translateX(-50%); min-width: 120px; padding: 0.5rem; border-radius: 16px; z-index: 1050; display: flex; flex-direction: column; gap: 4px; }
  .donation-link { display: block; padding: 8px; text-align: center; border-radius: 10px; font-weight: bold; color: var(--color-text-main); background: rgba(255,255,255,0.3); text-decoration: none; transition: background 0.2s, transform 0.2s; }
  .donation-link:hover { background: var(--brand-primary); color: var(--color-accent-text); transform: scale(1.05); }
  
  /* Theme Toggle */
  .btn-theme-toggle { width: 40px; height: 40px; padding: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.05); border-radius: 50%; color: var(--color-text-main); transition: all 0.3s; }
  .btn-theme-toggle:hover { background: rgba(0,0,0,0.1); transform: rotate(15deg); }
  
  .footer-link { color: var(--color-text-muted); text-decoration: none; font-size: 0.85rem; transition: color 0.2s; }
  .footer-link:hover { color: var(--brand-primary); }
  
  @keyframes steam { 0% { opacity: 0; transform: translateY(0); } 50% { opacity: 1; } 100% { opacity: 0; transform: translateY(-5px); } }
</style>