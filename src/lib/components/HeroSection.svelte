<script>
  import { scrollToTop } from '$lib/utils/scrollToTop';
</script>

<section
  class="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
  style="background-image: url('/images/hero.jpg');"
>
  <div class="absolute inset-0 bg-black opacity-50"></div>
  <div class="relative z-10 text-center p-6">
    <h1 class="text-5xl md:text-6xl font-bold mb-4 leading-tight">
      Girls with Vision, Communities with Hope.
    </h1>
    <p class="text-xl md:text-2xl mb-8">
      Empowering the next generation of female leaders.
    </p>
    <a
      href="/contact"
      on:click={scrollToTop}
      class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg uppercase tracking-wide transition duration-300 ease-in-out transform hover:scale-105"
    >
      Join the Movement
    </a>
  </div>
</section>
