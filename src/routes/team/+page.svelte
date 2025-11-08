<script>
  import { teamMembers } from '$lib/data/team';
  import TeamCard from '$lib/components/TeamCard.svelte';
</script>

<section class="py-16 bg-gray-50">
  <div class="container mx-auto px-6">
    <h1 class="text-5xl font-bold text-center text-purple-800 mb-12">Meet Our Team</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {#each teamMembers as member (member.id)}
        <TeamCard {member} />
      {/each}
    </div>
  </div>
</section>
