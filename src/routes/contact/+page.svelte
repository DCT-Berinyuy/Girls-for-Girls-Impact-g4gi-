<script>
  import ContactForm from '$lib/components/ContactForm.svelte';
  import { scrollToTop } from '$lib/utils/scrollToTop';
</script>

<section class="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="contact-heading">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
    <div class="text-center mb-12 sm:mb-16">
      <h1 id="contact-heading" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-800 mb-4">Contact Us</h1>
      <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Get in touch and join our mission to empower girls</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
      <!-- Contact Form Section -->
      <div>
        <ContactForm />
      </div>

      <!-- Contact Info and Get Involved Section -->
      <div class="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg">
        <h2 class="text-2xl sm:text-3xl font-bold text-pink-600 mb-4 sm:mb-6">Get in Touch</h2>
        <p class="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
          We'd love to hear from you! Whether you have a question, want to collaborate, or simply want to say hello, feel free to reach out.
        </p>

        <div class="mb-8 sm:mb-10">
          <h3 class="text-xl sm:text-2xl font-semibold text-purple-800 mb-4">Our Details</h3>
          <div class="space-y-3">
            <p class="text-base sm:text-lg text-gray-700">
              <strong class="text-purple-600">Email:</strong> <a href="mailto:info@g4gi.org" class="text-teal-600 hover:text-teal-700 hover:underline transition">info@g4gi.org</a>
            </p>
            <p class="text-base sm:text-lg text-gray-700">
              <strong class="text-purple-600">Location:</strong> Douala, Cameroon
            </p>
          </div>
        </div>

        <div>
          <h3 class="text-xl sm:text-2xl font-semibold text-purple-800 mb-4">Get Involved</h3>
          <p class="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
            There are many ways you can contribute to our mission and help empower young girls.
          </p>
          <div class="flex flex-col space-y-3 sm:space-y-4">
            <a
              href="/contact"
              on:click={scrollToTop}
              class="bg-[#E91E63] hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg uppercase tracking-wide text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-pink-500/50 text-sm sm:text-base"
              aria-label="Volunteer with G4GI"
            >
              Volunteer
            </a>
            <a
              href="/contact"
              on:click={scrollToTop}
              class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-lg uppercase tracking-wide text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-teal-500/50 text-sm sm:text-base"
              aria-label="Partner with G4GI"
            >
              Partner
            </a>
            <a
              href="/contact"
              on:click={scrollToTop}
              class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg uppercase tracking-wide text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-purple-500/50 text-sm sm:text-base"
              aria-label="Donate to G4GI"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
