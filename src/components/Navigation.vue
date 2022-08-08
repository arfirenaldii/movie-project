<script>
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      hiddenCategory: true,
      hiddenMenu: true,
      categories: [
        'ACTION',
        'ADVENTURE',
        'ANIMATION',
        'COMEDY',
        'CRIME',
        'DOCUMENTARY',
        'DRAMA',
        'FAMILY',
        'FANTASY',
        'HISTORY',
        'HORROR',
      ],
      search: '',
    }
  },
  components: {
    RouterLink
  },
  methods: {
    toggleCategories(hidden) {
      if (typeof hidden == 'boolean') {
        this.hiddenCategory = hidden
      } else {
        this.hiddenCategory = !this.hiddenCategory
      }
    },
    toggleMenu() {
      this.hiddenMenu = !this.hiddenMenu
    },
  }
}
</script>

<template>
  <header>
    <nav class="bg-[#292E35]">
      <div class="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">

          <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
            <!-- Mobile menu button-->
            <button @click="toggleMenu" type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="flex items-center justify-center md:items-stretch md:justify-between w-full">
            <RouterLink to="/">
              <div class="flex-shrink-0 flex items-center">
                <img class="block lg:hidden h-8 w-auto" src="../assets/moovietime-logo.svg" alt="Moovie Time">
                <img class="hidden lg:block h-8 w-auto" src="../assets/moovietime-logo.svg" alt="Moovie Time">
              </div>
            </RouterLink>
            <div class="hidden md:block md:ml-6 flex-1">
              <div class="flex space-x-4 w-full">
                <!-- INPUT SEARCH -->
                <div class="hidden relative md:block flex-1">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
                    <img src="../assets/images/movie-icon.svg" alt="movie search icon">
                  </div>
                  <input type="text" v-model="search"
                    class="block p-2 px-10 w-full rounded md:text-sm bg-[#000000]/20 border-[#000000]/20 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Find movie">
                  <div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                    <img src="../assets/images/search-icon.svg" alt="search icon" />
                  </div>
                </div>
                <!-- CATEGORIES -->
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                  <div class="ml-3 relative">
                    <div @click="toggleCategories">
                      <a href="#"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex justify-center gap-3">
                        <img src="../assets/images/categories-icon.svg" alt="categories icon" />
                        <div>CATEGORIES</div>
                      </a>
                    </div>
                    <div :class="{ hidden: hiddenCategory }"
                      class="absolute z-20 top-[45px] left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                      <a v-for="(category, index) in categories" :key="index" href="#"
                        class="block px-4 py-2 text-sm text-[#1E232B] font-semibold hover:bg-gray-200" role="menuitem"
                        tabindex="-1">
                        {{ category }}
                      </a>
                    </div>
                  </div>
                </div>
                <RouterLink @click="toggleCategories(true)" to="/"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">HOME
                </RouterLink>
                <RouterLink @click="toggleCategories(true)" to="/movies"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  MOVIES
                </RouterLink>
                <a href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">TV
                  SHOWS</a>
                <a href="#"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">LOGIN</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div :class="{ hidden: hiddenMenu }" class="md:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <RouterLink to="/"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            HOME
          </RouterLink>
          <RouterLink to="/movies"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            MOVIES
          </RouterLink>
          <a href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">TV
            SHOWS</a>
          <a href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">TV
            LOGIN</a>
        </div>
      </div>
    </nav>
  </header>
</template>
