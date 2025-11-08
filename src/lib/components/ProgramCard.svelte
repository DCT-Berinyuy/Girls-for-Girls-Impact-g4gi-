<script>
  let { program } = $props();
</script>

<div
  class="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full"
  role="article"
  aria-labelledby="program-{program.id}"
>
  {#if program.icon}
    <div class="text-4xl sm:text-5xl mb-4 sm:mb-6">{program.icon}</div>
  {/if}
  <h3 id="program-{program.id}" class="text-xl sm:text-2xl font-bold text-purple-800 mb-3 sm:mb-4">{program.title}</h3>
  <p class="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed flex-grow">{program.description}</p>
  {#if program.status === 'coming soon'}
    <span class="inline-block bg-teal-100 text-teal-800 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
      Coming Soon
    </span>
  {:else}
    <span class="inline-block bg-pink-100 text-pink-800 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
      Active
    </span>
  {/if}
</div>
