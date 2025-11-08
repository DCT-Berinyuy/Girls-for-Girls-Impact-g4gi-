<script>
  let { member } = $props();
</script>

<div
  class="bg-white rounded-xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full"
  role="article"
  aria-labelledby="team-{member.id}"
>
  {#if member.image}
    <img
      src={member.image}
      alt="{member.name} - {member.role}"
      class="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mb-4 sm:mb-6 border-4 border-purple-200 shadow-md"
      loading="lazy"
    />
  {/if}
  <h3 id="team-{member.id}" class="text-lg sm:text-xl font-bold text-purple-800 mb-2">{member.name}</h3>
  <p class="text-sm sm:text-base text-pink-600 mb-4 sm:mb-6">{member.role}</p>
  <div class="flex space-x-3 sm:space-x-4 mt-auto">
    {#if member.social.facebook}
      <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="{member.name} on Facebook" class="text-gray-600 hover:text-blue-600 transition-transform duration-200 hover:scale-110">
        <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      </a>
    {/if}
    {#if member.social.twitter}
      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="{member.name} on Twitter" class="text-gray-600 hover:text-blue-400 transition-transform duration-200 hover:scale-110">
        <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.823 3.027 2.071 3.857-.76-.025-1.475-.232-2.102-.578v.064c0 2.253 1.605 4.129 3.737 4.568-.39.106-.803.163-1.227.163-.3 0-.593-.028-.877-.082.593 1.844 2.308 3.187 4.341 3.224-1.593 1.248-3.604 1.991-5.786 1.991-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.092 7.14 2.092 8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.602.91-.658 1.7-1.475 2.323-2.41z" />
        </svg>
      </a>
    {/if}
    {#if member.social.linkedin}
      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="{member.name} on LinkedIn" class="text-gray-600 hover:text-blue-700 transition-transform duration-200 hover:scale-110">
        <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-8.401c0-7.867-8.689-7.501-10.017-3.75z" />
        </svg>
      </a>
    {/if}
  </div>
</div>
