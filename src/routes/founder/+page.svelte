<script>
  import { scrollToTop } from '$lib/utils/scrollToTop';
</script>

<section class="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="founder-heading">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
    <h1 id="founder-heading" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-purple-800 mb-8 sm:mb-12">Meet Our Founder</h1>

    <div class="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16">
      <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-8 lg:space-x-10">
        <div class="md:w-1/3 flex justify-center mb-6 md:mb-0">
          <img
            src="/images/abigail.jpg"
            alt="Abigail 'The Impact' Mbatu - Founder of G4GI"
            class="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover shadow-xl border-4 border-pink-500"
          />
        </div>
        <div class="md:w-2/3 text-center md:text-left">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-pink-600 mb-4">Abigail "The Impact" Mbatu</h2>
          <div class="space-y-4">
            <p class="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Abigail Epongseh Mba'ah Mbatu, affectionately known as "The Impact," is the visionary founder of Girls for Global Impact (G4GI). Her unwavering dedication to empowering young girls stems from a deep-seated belief in their potential to drive transformative change in their communities and beyond.
            </p>
            <p class="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Born and raised in Cameroon, Abigail witnessed firsthand the challenges and inequalities faced by girls in her region. This experience ignited a passion within her to create opportunities and pathways for girls to overcome obstacles, develop their leadership skills, and realize their dreams.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Achievements & Awards Section -->
    <div class="mb-12 sm:mb-16">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-purple-600 mb-8 sm:mb-10 text-center">Achievements & Awards</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 class="text-xl sm:text-2xl font-bold text-teal-600 mb-3">Youth Leadership Award</h3>
          <p class="text-gray-700 leading-relaxed">Recognized for outstanding contributions to youth development and empowerment.</p>
        </div>
        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 class="text-xl sm:text-2xl font-bold text-teal-600 mb-3">Community Impact Grant</h3>
          <p class="text-gray-700 leading-relaxed">Awarded for innovative programs addressing critical community needs.</p>
        </div>
        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 class="text-xl sm:text-2xl font-bold text-teal-600 mb-3">Global Changemaker Recognition</h3>
          <p class="text-gray-700 leading-relaxed">Honored for her global efforts in promoting gender equality and education.</p>
        </div>
        <div class="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <h3 class="text-xl sm:text-2xl font-bold text-teal-600 mb-3">Inspirational Speaker</h3>
          <p class="text-gray-700 leading-relaxed">Frequently invited to share her story and inspire audiences worldwide.</p>
        </div>
      </div>
    </div>

    <!-- Leadership Journey Section -->
    <div class="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-pink-600 mb-6 sm:mb-8 text-center">Her Leadership Journey</h2>
      <div class="space-y-4 sm:space-y-6">
        <p class="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
          Abigail's leadership journey is a testament to her resilience, vision, and unwavering commitment. Starting with grassroots initiatives, she meticulously built G4GI from the ground up, navigating challenges with determination and a clear focus on her mission. Her approach is characterized by inclusivity, empathy, and a deep understanding of the needs of the girls she serves.
        </p>
        <p class="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
          She believes in fostering a collaborative environment where every voice is heard and every contribution is valued. Under her guidance, G4GI has not only provided tangible support but has also cultivated a sense of hope and possibility among countless young girls, empowering them to become leaders in their own right.
        </p>
        <p class="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed italic">
          Abigail continues to inspire through her tireless work, advocating for girls' rights and opportunities on both local and international platforms. Her journey is a powerful reminder that "Purpose requires action, not age or status."
        </p>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center">
      <a
        href="/contact"
        on:click={scrollToTop}
        class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full shadow-xl uppercase tracking-wide transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-purple-500/50 text-sm sm:text-base"
        aria-label="Connect with Abigail"
      >
        Connect with Abigail
      </a>
    </div>
  </div>
</section>
