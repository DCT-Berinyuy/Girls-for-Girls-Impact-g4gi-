<script>
  import { scrollToTop } from '$lib/utils/scrollToTop';
  import { onMount } from 'svelte';
  
  let loaded = false;
  
  onMount(() => {
    loaded = true;
  });
</script>

<section
  class="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-white overflow-hidden"
  style="background-image: url('/images/hero.jpg');"
  role="banner"
  aria-label="Hero section"
>
  <!-- Overlay with gradient for better text readability -->
  <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
  
  <!-- Animated content -->
  <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-20 max-w-4xl mx-auto">
    <h1 
      class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 {loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      Girls with Vision, Communities with Hope.
    </h1>
    <p 
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-10 md:mb-12 font-light transition-all duration-1000 delay-200 {loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      Empowering the next generation of female leaders.
    </p>
    <div 
      class="transition-all duration-1000 delay-300 {loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      <a
        href="/contact"
        on:click={scrollToTop}
        class="inline-block bg-[#E91E63] hover:bg-pink-700 text-white font-bold py-4 px-8 md:py-5 md:px-10 rounded-full shadow-2xl uppercase tracking-wide transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-pink-500/50 text-sm sm:text-base md:text-lg"
        aria-label="Join the movement and get involved"
      >
        Join the Movement
      </a>
    </div>
  </div>
  
  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
    <svg class="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</section>
