<script>
  let name = '';
  let email = '';
  let message = '';
  let status = '';

  async function handleSubmit() {
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

<div class="bg-white p-8 rounded-lg shadow-lg">
  <h2 class="text-3xl font-bold text-purple-800 mb-6 text-center">Send Us a Message</h2>
  <form action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT" method="POST" on:submit|preventDefault={handleSubmit}>
    <div class="mb-4">
      <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        bind:value={name}
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        bind:value={email}
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <div class="mb-6">
      <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
      <textarea
        id="message"
        name="message"
        bind:value={message}
        rows="5"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      ></textarea>
    </div>
    <div class="flex items-center justify-between">
      <button
        type="submit"
        class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
        disabled={status === 'sending'}
      >
        {#if status === 'sending'}
          Sending...
        {:else}
          Send Message
        {/if}
      </button>
      {#if status === 'success'}
        <p class="text-green-500 text-sm">Message sent successfully!</p>
      {:else if status === 'error'}
        <p class="text-red-500 text-sm">Failed to send message. Please try again.</p>
      {/if}
    </div>
  </form>
</div>
