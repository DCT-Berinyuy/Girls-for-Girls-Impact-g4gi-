
<script>
  import { page } from '$app/stores';
  import logo from '$lib/assets/favicon.svg';
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

<nav class="bg-white shadow-md fixed w-full z-10">
  <div class="container mx-auto px-6 py-4 flex justify-between items-center">
    <a href="/" on:click={scrollToTop} class="flex items-center">
      <img src={logo} alt="G4GI Logo" class="h-10 mr-3" />
      <span class="text-2xl font-bold text-gray-800">G4GI</span>
    </a>

    <!-- Hamburger Menu -->
    <div class="md:hidden">
      <button
        on:click={toggleMenu}
        class="text-gray-800 hover:text-purple-600 focus:outline-none"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {#if isOpen}
            <path d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path d="M4 6h16M4 12h16m-7 6h7" />
          {/if}
        </svg>
      </button>
    </div>

    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center space-x-6">
      <a
        href="/about"
        class="text-gray-600 hover:text-purple-600 transition {$page.url.pathname === '/about' ? 'text-purple-600' : ''}"
      >
        About
      </a>
      <a
        href="/programs"
        class="text-gray-600 hover:text-purple-600 transition {$page.url.pathname === '/programs' ? 'text-purple-600' : ''}"
      >
        Programs
      </a>
      <a
        href="/impact"
        class="text-gray-600 hover:text-purple-600 transition {$page.url.pathname === '/impact' ? 'text-purple-600' : ''}"
      >
        Impact
      </a>
      <a
        href="/team"
        class="text-gray-600 hover:text-purple-600 transition {$page.url.pathname === '/team' ? 'text-purple-600' : ''}"
      >
        Team
      </a>
      <a
        href="/contact"
        class="text-gray-600 hover:text-purple-600 transition {$page.url.pathname === '/contact' ? 'text-purple-600' : ''}"
      >
        Contact
      </a>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isOpen}
    <div class="md:hidden bg-white">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          href="/about"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600 transition"
          on:click={() => (isOpen = false)}>About</a
        >
        <a
          href="/programs"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600 transition"
          on:click={() => (isOpen = false)}>Programs</a
        >
        <a
          href="/impact"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600 transition"
          on:click={() => (isOpen = false)}>Impact</a
        >
        <a
          href="/team"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600 transition"
          on:click={() => (isOpen = false)}>Team</a
        >
        <a
          href="/contact"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-600 transition"
          on:click={() => (isOpen = false)}>Contact</a
        >
      </div>
    </div>
  {/if}
</nav>
