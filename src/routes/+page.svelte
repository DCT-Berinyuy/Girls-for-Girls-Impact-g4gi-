<script>
  import HeroSection from '$lib/components/HeroSection.svelte';
  import { scrollToTop } from '$lib/utils/scrollToTop';
</script>

<HeroSection />

<!-- Vision & Mission Section -->
<section class="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="vision-mission-heading">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
    <div class="text-center">
      <h2 id="vision-mission-heading" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-800 mb-6 sm:mb-8">Our Vision & Mission</h2>
      <div class="max-w-4xl mx-auto space-y-6">
        <p class="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
          Girls for Global Impact (G4GI) is a youth-led foundation empowering girls across Cameroon to lead, learn, and transform their communities. We envision a world where every girl has the opportunity to reach her full potential and drive positive change.
        </p>
        <p class="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
          Our mission is to provide comprehensive support, mentorship, and resources to young girls, fostering their leadership skills, promoting education, and encouraging community engagement.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Focus Areas Section -->
<section class="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="focus-areas-heading">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
    <div class="text-center mb-12 sm:mb-16">
      <h2 id="focus-areas-heading" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-800 mb-4">Our Focus Areas</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">Empowering girls through comprehensive programs and initiatives</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <div class="p-6 sm:p-8 shadow-lg rounded-xl bg-pink-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div class="mb-4">
          <div class="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-pink-600 mb-3">Leadership Development</h3>
        </div>
        <p class="text-gray-700 leading-relaxed">
          We equip girls with the confidence and skills to become influential leaders in their schools and communities.
        </p>
      </div>
      <div class="p-6 sm:p-8 shadow-lg rounded-xl bg-purple-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div class="mb-4">
          <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-purple-600 mb-3">Community Outreach</h3>
        </div>
        <p class="text-gray-700 leading-relaxed">
          Engaging girls in impactful community projects, fostering empathy and social responsibility.
        </p>
      </div>
      <div class="p-6 sm:p-8 shadow-lg rounded-xl bg-teal-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
        <div class="mb-4">
          <div class="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl sm:text-2xl font-semibold text-teal-600 mb-3">Digital Mentorship</h3>
        </div>
        <p class="text-gray-700 leading-relaxed">
          Providing access to digital literacy and mentorship, preparing girls for the future economy.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action Section -->
<section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 text-white text-center" aria-labelledby="cta-heading">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
    <h2 id="cta-heading" class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Join Our Mission</h2>
    <p class="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto opacity-95">
      Your involvement can make a significant difference in the lives of young girls. Choose how you'd like to contribute.
    </p>
    <div class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
      <a
        href="/contact"
        on:click={scrollToTop}
        class="w-full sm:w-auto bg-[#E91E63] hover:bg-pink-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full shadow-xl uppercase tracking-wide transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-pink-500/50 text-sm sm:text-base"
        aria-label="Volunteer with G4GI"
      >
        Volunteer
      </a>
      <a
        href="/contact"
        on:click={scrollToTop}
        class="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full shadow-xl uppercase tracking-wide transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-teal-500/50 text-sm sm:text-base"
        aria-label="Support our work"
      >
        Support Our Work
      </a>
    </div>
  </div>
</section>