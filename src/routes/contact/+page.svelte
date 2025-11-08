<script>
  import ContactForm from '$lib/components/ContactForm.svelte';
  import { scrollToTop } from '$lib/utils/scrollToTop';
</script>

<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-6">
    <h1 class="text-5xl font-bold text-center text-purple-800 mb-12">Contact Us</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Contact Form Section -->
      <div>
        <ContactForm />
      </div>

      <!-- Contact Info and Get Involved Section -->
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold text-pink-600 mb-6">Get in Touch</h2>
        <p class="text-lg text-gray-700 mb-6">
          We'd love to hear from you! Whether you have a question, want to collaborate, or simply want to say hello, feel free to reach out.
        </p>

        <div class="mb-8">
          <h3 class="text-2xl font-semibold text-purple-800 mb-3">Our Details</h3>
          <p class="text-gray-700 mb-2">
            <strong>Email:</strong> <a href="mailto:info@g4gi.org" class="text-teal-600 hover:underline">info@g4gi.org</a>
          </p>
          <p class="text-gray-700">
            <strong>Location:</strong> Douala, Cameroon
          </p>
        </div>

        <div>
          <h3 class="text-2xl font-semibold text-purple-800 mb-4">Get Involved</h3>
          <p class="text-lg text-gray-700 mb-6">
            There are many ways you can contribute to our mission and help empower young girls.
          </p>
          <div class="flex flex-col space-y-4">
            <a
              href="/contact"
              on:click={scrollToTop}
              class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg uppercase tracking-wide text-center transition duration-300 ease-in-out transform hover:scale-105"
            >
              Volunteer
            </a>
            <a
              href="/contact"
              on:click={scrollToTop}
              class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-lg uppercase tracking-wide text-center transition duration-300 ease-in-out transform hover:scale-105"
            >
              Partner
            </a>
            <a
              href="/contact"
              on:click={scrollToTop}
              class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg uppercase tracking-wide text-center transition duration-300 ease-in-out transform hover:scale-105"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
