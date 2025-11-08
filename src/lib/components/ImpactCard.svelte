<script>
  let { impact } = $props();
</script>

{#if impact.type === 'number'}
  <div
    class="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full"
    role="article"
    aria-labelledby="impact-{impact.id}"
  >
    <h3 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-pink-600 mb-3 sm:mb-4">{impact.value}</h3>
    <p id="impact-{impact.id}" class="text-lg sm:text-xl lg:text-2xl font-semibold text-purple-800 mb-3 sm:mb-4">{impact.title}</p>
    <p class="text-sm sm:text-base text-gray-700 leading-relaxed">{impact.description}</p>
  </div>
{:else if impact.type === 'highlight'}
  <div
    class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col"
    role="article"
    aria-labelledby="highlight-{impact.id}"
  >
    {#if impact.image}
      <img 
        src={impact.image} 
        alt={impact.title} 
        class="w-full h-48 sm:h-56 lg:h-64 object-cover" 
        loading="lazy"
      />
    {/if}
    <div class="p-6 sm:p-8 flex-grow flex flex-col">
      <h3 id="highlight-{impact.id}" class="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-800 mb-3 sm:mb-4">{impact.title}</h3>
      <p class="text-sm sm:text-base text-gray-700 leading-relaxed flex-grow">{impact.description}</p>
    </div>
  </div>
{/if}
