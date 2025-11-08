<script>
  import { programs } from '$lib/data/programs';
  import ProgramCard from '$lib/components/ProgramCard.svelte';
</script>

<section class="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="programs-heading">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div class="text-center mb-12 sm:mb-16">
      <h1 id="programs-heading" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-800 mb-4">Our Programs</h1>
      <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive initiatives designed to empower and inspire</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {#each programs as program (program.id)}
        <ProgramCard {program} />
      {/each}
    </div>
  </div>
</section>
