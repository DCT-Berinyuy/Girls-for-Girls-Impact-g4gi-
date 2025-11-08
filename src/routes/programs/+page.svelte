<script>
  import { programs } from '$lib/data/programs';
  import ProgramCard from '$lib/components/ProgramCard.svelte';
</script>

<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-6">
    <h1 class="text-5xl font-bold text-center text-purple-800 mb-12">Our Programs</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each programs as program (program.id)}
        <ProgramCard {program} />
      {/each}
    </div>
  </div>
</section>
