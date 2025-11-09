
<script>
  import { scrollToTop } from '$lib/utils/scrollToTop';
</script>

<footer class="bg-gray-800 text-white" role="contentinfo">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
    <div class="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      <div class="text-center md:text-left">
        <h3 class="text-xl sm:text-2xl font-bold mb-2">G4GI</h3>
        <p class="text-sm sm:text-base text-gray-400">Girls for Global Impact</p>
      </div>

      <div class="flex space-x-4 sm:space-x-6">
        <a href="https://www.linkedin.com/company/girls-for-global-impact/" target="_blank" rel="noopener noreferrer" aria-label="G4GI on LinkedIn" class="hover:text-purple-400 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded">
          <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="https://chat.whatsapp.com/CozroKOyjZ31dk73U1MTcZ?mode=wwt" target="_blank" rel="noopener noreferrer" aria-label="G4GI on WhatsApp" class="hover:text-purple-400 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded">
          <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.447-4.433-9.886-9.889-9.886-5.448 0-9.886 4.434-9.889 9.885-.002 2.024.63 3.891 1.742 5.485l-1.266 4.625 4.75-1.246zm5.421-8.201c-.12-.216-.436-.345-.635-.345-.21 0-.425.019-.622.333-.221.333-.752 1.024-.922 1.223-.17.199-.34.216-.59.099-.25-.116-1.017-.373-1.941-1.192-.718-.636-1.283-1.418-1.442-1.666-.159-.248-.011-.391.104-.517.1-.116.221-.299.333-.448.111-.149.149-.25.22-.416.071-.167.036-.31-.024-.432-.06-.12-.59-1.42-.817-1.949-.225-.528-.451-.451-.621-.451-.17 0-.341.009-.51.009-.17 0-.436.06-.66.333-.224.272-.816.781-.816 1.896s.836 2.202.952 2.369c.116.166 1.599 2.542 3.907 3.537.536.234.952.376 1.282.472.503.148.94.128 1.27.079.359-.051 1.017-.416 1.165-.82.149-.404.149-.75.104-.82z"/>
          </svg>
        </a>
        
      </div>

      <nav class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-center" aria-label="Footer navigation">
        <a href="/about" on:click={scrollToTop} class="text-sm sm:text-base hover:text-purple-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2">About</a>
        <a href="/programs" on:click={scrollToTop} class="text-sm sm:text-base hover:text-purple-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2">Programs</a>
        <a href="/impact" on:click={scrollToTop} class="text-sm sm:text-base hover:text-purple-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2">Impact</a>
        <a href="/team" on:click={scrollToTop} class="text-sm sm:text-base hover:text-purple-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2">Team</a>
        <a href="/contact" on:click={scrollToTop} class="text-sm sm:text-base hover:text-purple-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2">Contact</a>
      </nav>
    </div>

    <div class="mt-8 sm:mt-10 border-t border-gray-700 pt-6 sm:pt-8">
      <p class="text-center text-xs sm:text-sm text-gray-500">
        © {new Date().getFullYear()} Girls for Global Impact (G4GI) | Built with 💡 by <a href="https://linktr.ee/DeepCodeThinking" target="_blank" rel="noopener noreferrer" class="text-pink-500 hover:text-pink-400 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded">Mr.DCT</a>
      </p>
    </div>
  </div>
</footer>
