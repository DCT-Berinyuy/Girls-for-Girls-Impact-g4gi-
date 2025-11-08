<script>
  import { teamMembers } from '$lib/data/team';
  import TeamCard from '$lib/components/TeamCard.svelte';
</script>

<section class="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="team-heading">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div class="text-center mb-12 sm:mb-16">
      <h1 id="team-heading" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-800 mb-4">Meet Our Team</h1>
      <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Passionate individuals dedicated to empowering girls</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
      {#each teamMembers as member (member.id)}
        <TeamCard {member} />
      {/each}
    </div>
  </div>
</section>
