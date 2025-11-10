<script>
  let name = '';
  let email = '';
  let message = '';
  let status = '';

  async function handleSubmit(event) {
    status = 'sending';
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        status = 'success';
        name = '';
        email = '';
        message = '';
      } else {
        const result = await response.json();
        status = 'error';
        console.error('Formspree error:', result);
      }
    } catch (error) {
      status = 'error';
      console.error('Network error:', error);
    }
  }
</script>

<div class="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-lg h-full">
  <h2 id="contact-form-heading" class="text-2xl sm:text-3xl font-bold text-purple-800 mb-6 sm:mb-8 text-center">Send Us a Message</h2>
  <form action="https://formspree.io/f/xwpaedwp" method="POST" on:submit|preventDefault={handleSubmit} aria-labelledby="contact-form-heading">
    <div class="mb-4 sm:mb-6">
      <label for="name" class="block text-gray-700 text-sm sm:text-base font-semibold mb-2">Name <span class="text-pink-600">*</span></label>
      <input
        type="text"
        id="name"
        name="name"
        bind:value={name}
        class="w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition shadow-sm"
        required
        aria-required="true"
      />
    </div>
    <div class="mb-4 sm:mb-6">
      <label for="email" class="block text-gray-700 text-sm sm:text-base font-semibold mb-2">Email <span class="text-pink-600">*</span></label>
      <input
        type="email"
        id="email"
        name="email"
        bind:value={email}
        class="w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition shadow-sm"
        required
        aria-required="true"
      />
    </div>
    <div class="mb-6 sm:mb-8">
      <label for="message" class="block text-gray-700 text-sm sm:text-base font-semibold mb-2">Message <span class="text-pink-600">*</span></label>
      <textarea
        id="message"
        name="message"
        bind:value={message}
        rows="5"
        class="w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition shadow-sm resize-y"
        required
        aria-required="true"
      ></textarea>
    </div>
    <div class="space-y-4">
      <button
        type="submit"
        class="w-full bg-[#E91E63] hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
        disabled={status === 'sending'}
        aria-busy={status === 'sending'}
      >
        {#if status === 'sending'}
          <span class="flex items-center justify-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        {:else}
          Send Message
        {/if}
      </button>
      {#if status === 'success'}
        <p class="text-center text-green-600 text-sm sm:text-base font-semibold" role="alert" aria-live="polite">✓ Message sent successfully!</p>
      {:else if status === 'error'}
        <p class="text-center text-red-600 text-sm sm:text-base font-semibold" role="alert" aria-live="polite">✗ Failed to send message. Please try again.</p>
      {/if}
    </div>
  </form>
</div>
