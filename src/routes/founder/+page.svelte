<script>
  import { scrollToTop } from '$lib/utils/scrollToTop';
</script>

<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-6">
    <h1 class="text-5xl font-bold text-center text-purple-800 mb-12">Meet Our Founder</h1>

    <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-10 mb-16">
      <div class="md:w-1/3 flex justify-center mb-8 md:mb-0">
        <img
          src="/images/abigail.jpg"
          alt="Abigail 'The Impact' Mbatu"
          class="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-pink-500"
        />
      </div>
      <div class="md:w-2/3 text-center md:text-left">
        <h2 class="text-4xl font-semibold text-pink-600 mb-4">Abigail “The Impact” Mbatu</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-4">
          Abigail Epongseh Mba’ah Mbatu, affectionately known as “The Impact,” is the visionary founder of Girls for Global Impact (G4GI). Her unwavering dedication to empowering young girls stems from a deep-seated belief in their potential to drive transformative change in their communities and beyond.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed">
          Born and raised in Cameroon, Abigail witnessed firsthand the challenges and inequalities faced by girls in her region. This experience ignited a passion within her to create opportunities and pathways for girls to overcome obstacles, develop their leadership skills, and realize their dreams.
        </p>
      </div>
    </div>

    <!-- Achievements & Awards Section -->
    <div class="mb-16">
      <h2 class="text-4xl font-semibold text-purple-600 mb-8 text-center">Achievements & Awards</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-bold text-teal-600 mb-2">Youth Leadership Award</h3>
          <p class="text-gray-700">Recognized for outstanding contributions to youth development and empowerment.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-bold text-teal-600 mb-2">Community Impact Grant</h3>
          <p class="text-gray-700">Awarded for innovative programs addressing critical community needs.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-bold text-teal-600 mb-2">Global Changemaker Recognition</h3>
          <p class="text-gray-700">Honored for her global efforts in promoting gender equality and education.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-bold text-teal-600 mb-2">Inspirational Speaker</h3>
          <p class="text-gray-700">Frequently invited to share her story and inspire audiences worldwide.</p>
        </div>
      </div>
    </div>

    <!-- Leadership Journey Section -->
    <div>
      <h2 class="text-4xl font-semibold text-pink-600 mb-8 text-center">Her Leadership Journey</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-4">
        Abigail's leadership journey is a testament to her resilience, vision, and unwavering commitment. Starting with grassroots initiatives, she meticulously built G4GI from the ground up, navigating challenges with determination and a clear focus on her mission. Her approach is characterized by inclusivity, empathy, and a deep understanding of the needs of the girls she serves.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed mb-4">
        She believes in fostering a collaborative environment where every voice is heard and every contribution is valued. Under her guidance, G4GI has not only provided tangible support but has also cultivated a sense of hope and possibility among countless young girls, empowering them to become leaders in their own right.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed">
        Abigail continues to inspire through her tireless work, advocating for girls' rights and opportunities on both local and international platforms. Her journey is a powerful reminder that "Purpose requires action, not age or status."
      </p>
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-16">
      <a
        href="/contact"
        on:click={scrollToTop}
        class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg uppercase tracking-wide transition duration-300 ease-in-out transform hover:scale-105"
      >
        Connect with Abigail
      </a>
    </div>
  </div>
</section>
