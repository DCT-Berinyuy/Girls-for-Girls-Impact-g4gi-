<script>
  import { impactData } from '$lib/data/impact';
  import ImpactCard from '$lib/components/ImpactCard.svelte';

  const numbers = impactData.filter(item => item.type === 'number');
  const highlights = impactData.filter(item => item.type === 'highlight');
</script>

<section class="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="impact-heading">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div class="text-center mb-12 sm:mb-16">
      <h1 id="impact-heading" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-800 mb-4">Our Impact</h1>
      <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Measurable results and meaningful change in communities</p>
    </div>

    <!-- Impact Numbers Section -->
    <div class="mb-12 sm:mb-16 lg:mb-20">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-pink-600 mb-8 sm:mb-12 text-center">Key Achievements</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {#each numbers as impact (impact.id)}
          <ImpactCard {impact} />
        {/each}
      </div>
    </div>

    <!-- Project Highlights Section -->
    <div>
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-purple-600 mb-8 sm:mb-12 text-center">Project Highlights</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {#each highlights as impact (impact.id)}
          <ImpactCard {impact} />
        {/each}
      </div>
    </div>
  </div>
</section>
