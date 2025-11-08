<script>
  let { impact } = $props();
</script>

{#if impact.type === 'number'}
  <div
    class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
  >
    <h3 class="text-5xl font-bold text-pink-600 mb-2">{impact.value}</h3>
    <p class="text-xl font-semibold text-purple-800 mb-2">{impact.title}</p>
    <p class="text-gray-700">{impact.description}</p>
  </div>
{:else if impact.type === 'highlight'}
  <div
    class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
  >
    {#if impact.image}
      <img src={impact.image} alt={impact.title} class="w-full h-48 object-cover" />
    {/if}
    <div class="p-6">
      <h3 class="text-2xl font-bold text-purple-800 mb-2">{impact.title}</h3>
      <p class="text-gray-700">{impact.description}</p>
    </div>
  </div>
{/if}
