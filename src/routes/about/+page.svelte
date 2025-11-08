<script>
  import { scrollToTop } from '$lib/utils/scrollToTop';
</script>

<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-6">
    <h1 class="text-5xl font-bold text-center text-purple-800 mb-12">About Us</h1>

    <!-- Our Story Section -->
    <div class="mb-16">
      <h2 class="text-4xl font-semibold text-pink-600 mb-6 text-center">Our Story</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-4">
        Girls for Global Impact (G4GI) was founded with a profound belief in the power of young girls to transform their communities and the world. Our journey began with the realization that many girls, particularly in underserved regions of Cameroon, face significant barriers to education, leadership opportunities, and personal development. Inspired by the resilience and potential of these girls, Abigail Epongseh Mba’ah Mbatu ("The Impact") envisioned an organization that would not only address these challenges but also empower girls to become agents of change themselves.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed">
        From humble beginnings, G4GI has grown into a vibrant movement, driven by a passion to nurture the next generation of female leaders. We believe that by investing in girls, we are investing in a brighter future for everyone.
      </p>
    </div>

    <!-- The Problem We Solve Section -->
    <div class="mb-16">
      <h2 class="text-4xl font-semibold text-purple-600 mb-6 text-center">The Problem We Solve</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-4">
        In many parts of the world, girls are disproportionately affected by poverty, lack of access to quality education, gender inequality, and limited opportunities for personal and professional growth. These systemic issues often lead to a cycle of disempowerment, preventing girls from realizing their full potential and contributing meaningfully to society.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed">
        G4GI directly confronts these challenges by providing targeted programs that build confidence, impart essential life skills, offer mentorship, and create pathways to leadership. We aim to break down the barriers that hold girls back, fostering an environment where they can thrive and lead with conviction.
      </p>
    </div>

    <!-- Our Vision for the Future Section -->
    <div>
      <h2 class="text-4xl font-semibold text-teal-600 mb-6 text-center">Our Vision for the Future</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-4">
        Our vision extends beyond immediate impact. We aspire to create a sustainable ecosystem of empowered young women who are not only successful in their own right but are also committed to uplifting others. We see a future where G4GI's influence spreads, inspiring similar movements globally, and where every girl, regardless of her background, has the tools and support to achieve her dreams.
      </p>
      <p class="text-lg text-gray-700 leading-relaxed">
        We are continuously expanding our programs, embracing digital innovation, and forging partnerships to reach more girls and deepen our impact. With every girl we empower, we move closer to a world filled with visionary leaders and hopeful communities.
      </p>
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-16">
      <a
        href="/contact"
        on:click={scrollToTop}
        class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg uppercase tracking-wide transition duration-300 ease-in-out transform hover:scale-105"
      >
        Get Involved
      </a>
    </div>
  </div>
</section>
