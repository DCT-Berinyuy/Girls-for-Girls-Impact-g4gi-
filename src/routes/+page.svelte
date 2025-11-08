<script>
  import HeroSection from '$lib/components/HeroSection.svelte';
  import { scrollToTop } from '$lib/utils/scrollToTop';
</script>

<HeroSection />

<!-- Vision & Mission Section -->
<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold text-purple-800 mb-6">Our Vision & Mission</h2>
    <p class="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
      Girls for Global Impact (G4GI) is a youth-led foundation empowering girls across Cameroon to lead, learn, and transform their communities. We envision a world where every girl has the opportunity to reach her full potential and drive positive change.
    </p>
    <p class="text-lg text-gray-700 max-w-3xl mx-auto">
      Our mission is to provide comprehensive support, mentorship, and resources to young girls, fostering their leadership skills, promoting education, and encouraging community engagement.
    </p>
  </div>
</section>

<!-- Focus Areas Section -->
<section class="py-16 bg-white">
  <div class="container mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold text-purple-800 mb-12">Our Focus Areas</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="p-8 shadow-lg rounded-lg bg-pink-50">
        <h3 class="text-2xl font-semibold text-pink-600 mb-4">Leadership Development</h3>
        <p class="text-gray-700">
          We equip girls with the confidence and skills to become influential leaders in their schools and communities.
        </p>
      </div>
      <div class="p-8 shadow-lg rounded-lg bg-purple-50">
        <h3 class="text-2xl font-semibold text-purple-600 mb-4">Community Outreach</h3>
        <p class="text-gray-700">
          Engaging girls in impactful community projects, fostering empathy and social responsibility.
        </p>
      </div>
      <div class="p-8 shadow-lg rounded-lg bg-teal-50">
        <h3 class="text-2xl font-semibold text-teal-600 mb-4">Digital Mentorship</h3>
        <p class="text-gray-700">
          Providing access to digital literacy and mentorship, preparing girls for the future economy.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action Section -->
<section class="py-16 bg-purple-800 text-white text-center">
  <div class="container mx-auto px-6">
    <h2 class="text-4xl font-bold mb-6">Join Our Mission</h2>
    <p class="text-xl mb-8 max-w-3xl mx-auto">
      Your involvement can make a significant difference in the lives of young girls. Choose how you'd like to contribute.
    </p>
    <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
      <a
        href="/contact"
        on:click={scrollToTop}
        class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg uppercase tracking-wide transition duration-300 ease-in-out transform hover:scale-105"
      >
        Volunteer
      </a>
      <a
        href="/contact"
        on:click={scrollToTop}
        class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg uppercase tracking-wide transition duration-300 ease-in-out transform hover:scale-105"
      >
        Support Our Work
      </a>
    </div>
  </div>
</section>