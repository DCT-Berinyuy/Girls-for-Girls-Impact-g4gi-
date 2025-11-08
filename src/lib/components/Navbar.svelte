
<script>
  import { page } from '$app/stores';
  import logo from '$lib/assets/icon_log.png';
  import { onMount } from 'svelte';
  import { scrollToTop } from '$lib/utils/scrollToTop';

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  onMount(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        isOpen = false;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<nav class="bg-white shadow-md fixed w-full z-50 top-0" role="navigation" aria-label="Main navigation">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-3 sm:py-4">
      <a href="/" on:click={scrollToTop} class="flex items-center space-x-2 sm:space-x-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-lg px-2" aria-label="G4GI Home">
        <img src={logo} alt="G4GI Logo" class="h-8 sm:h-10 w-auto" />
        <span class="text-xl sm:text-2xl font-bold text-gray-800">G4GI</span>
      </a>

      <!-- Hamburger Menu -->
      <button
        on:click={toggleMenu}
        class="md:hidden p-2 rounded-md text-gray-800 hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {#if isOpen}
            <path d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path d="M4 6h16M4 12h16m-7 6h7" />
          {/if}
        </svg>
      </button>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-1 lg:space-x-2">
        <a
          href="/about"
          on:click={scrollToTop}
          class="px-3 lg:px-4 py-2 rounded-md text-sm lg:text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 {$page.url.pathname === '/about' ? 'text-purple-600 bg-purple-50' : ''}"
          aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
        >
          About
        </a>
        <a
          href="/programs"
          on:click={scrollToTop}
          class="px-3 lg:px-4 py-2 rounded-md text-sm lg:text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 {$page.url.pathname === '/programs' ? 'text-purple-600 bg-purple-50' : ''}"
          aria-current={$page.url.pathname === '/programs' ? 'page' : undefined}
        >
          Programs
        </a>
        <a
          href="/impact"
          on:click={scrollToTop}
          class="px-3 lg:px-4 py-2 rounded-md text-sm lg:text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 {$page.url.pathname === '/impact' ? 'text-purple-600 bg-purple-50' : ''}"
          aria-current={$page.url.pathname === '/impact' ? 'page' : undefined}
        >
          Impact
        </a>
        <a
          href="/team"
          on:click={scrollToTop}
          class="px-3 lg:px-4 py-2 rounded-md text-sm lg:text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 {$page.url.pathname === '/team' ? 'text-purple-600 bg-purple-50' : ''}"
          aria-current={$page.url.pathname === '/team' ? 'page' : undefined}
        >
          Team
        </a>
        <a
          href="/contact"
          on:click={scrollToTop}
          class="px-3 lg:px-4 py-2 rounded-md text-sm lg:text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 {$page.url.pathname === '/contact' ? 'text-purple-600 bg-purple-50' : ''}"
          aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}
        >
          Contact
        </a>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isOpen}
    <div id="mobile-menu" class="md:hidden bg-white border-t border-gray-200 shadow-lg" role="menu">
      <div class="px-2 pt-2 pb-4 space-y-1">
        <a
          href="/about"
          on:click={() => { isOpen = false; scrollToTop(); }}
          class="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 {$page.url.pathname === '/about' ? 'bg-purple-50 text-purple-600' : ''}"
          role="menuitem"
          aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
        >
          About
        </a>
        <a
          href="/programs"
          on:click={() => { isOpen = false; scrollToTop(); }}
          class="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 {$page.url.pathname === '/programs' ? 'bg-purple-50 text-purple-600' : ''}"
          role="menuitem"
          aria-current={$page.url.pathname === '/programs' ? 'page' : undefined}
        >
          Programs
        </a>
        <a
          href="/impact"
          on:click={() => { isOpen = false; scrollToTop(); }}
          class="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 {$page.url.pathname === '/impact' ? 'bg-purple-50 text-purple-600' : ''}"
          role="menuitem"
          aria-current={$page.url.pathname === '/impact' ? 'page' : undefined}
        >
          Impact
        </a>
        <a
          href="/team"
          on:click={() => { isOpen = false; scrollToTop(); }}
          class="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 {$page.url.pathname === '/team' ? 'bg-purple-50 text-purple-600' : ''}"
          role="menuitem"
          aria-current={$page.url.pathname === '/team' ? 'page' : undefined}
        >
          Team
        </a>
        <a
          href="/contact"
          on:click={() => { isOpen = false; scrollToTop(); }}
          class="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 {$page.url.pathname === '/contact' ? 'bg-purple-50 text-purple-600' : ''}"
          role="menuitem"
          aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}
        >
          Contact
        </a>
      </div>
    </div>
  {/if}
</nav>
