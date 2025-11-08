
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
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="G4GI on Facebook" class="hover:text-purple-400 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded">
          <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="G4GI on Twitter" class="hover:text-purple-400 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded">
          <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.823 3.027 2.071 3.857-.76-.025-1.475-.232-2.102-.578v.064c0 2.253 1.605 4.129 3.737 4.568-.39.106-.803.163-1.227.163-.3 0-.593-.028-.877-.082.593 1.844 2.308 3.187 4.341 3.224-1.593 1.248-3.604 1.991-5.786 1.991-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.092 7.14 2.092 8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.602.91-.658 1.7-1.475 2.323-2.41z" />
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="G4GI on Instagram" class="hover:text-purple-400 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded">
          <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
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
        © {new Date().getFullYear()} Girls for Global Impact (G4GI) | Built with 💡 by <a href="https://verla.42web.io" target="_blank" rel="noopener noreferrer" class="text-pink-500 hover:text-pink-400 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded">Mr.DCT</a>
      </p>
    </div>
  </div>
</footer>
