<script>
  let { program } = $props();
</script>

<div
  class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
>
  {#if program.icon}
    <div class="text-5xl mb-4">{program.icon}</div>
  {/if}
  <h3 class="text-2xl font-bold text-purple-800 mb-2">{program.title}</h3>
  <p class="text-gray-700 mb-4">{program.description}</p>
  {#if program.status === 'coming soon'}
    <span class="bg-teal-200 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">
      Coming Soon
    </span>
  {:else}
    <span class="bg-pink-200 text-pink-800 text-xs font-semibold px-3 py-1 rounded-full">
      Active
    </span>
  {/if}
</div>
