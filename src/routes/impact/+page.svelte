<script>
  import { impactData } from '$lib/data/impact';
  import ImpactCard from '$lib/components/ImpactCard.svelte';

  const numbers = impactData.filter(item => item.type === 'number');
  const highlights = impactData.filter(item => item.type === 'highlight');
</script>

<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-6">
    <h1 class="text-5xl font-bold text-center text-purple-800 mb-12">Our Impact</h1>

    <!-- Impact Numbers Section -->
    <div class="mb-16">
      <h2 class="text-4xl font-semibold text-pink-600 mb-8 text-center">Key Achievements</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each numbers as impact (impact.id)}
          <ImpactCard {impact} />
        {/each}
      </div>
    </div>

    <!-- Project Highlights Section -->
    <div>
      <h2 class="text-4xl font-semibold text-purple-600 mb-8 text-center">Project Highlights</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each highlights as impact (impact.id)}
          <ImpactCard {impact} />
        {/each}
      </div>
    </div>
  </div>
</section>
