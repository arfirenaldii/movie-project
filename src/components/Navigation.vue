<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <!-- <div class="container mx-auto">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/movies">Movies</RouterLink>
      </nav>
    </div> -->

    <nav class="bg-[#292E35]">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">

          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button type="button"
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

          <!-- <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"> -->
          <div class="flex items-center justify-center sm:items-stretch sm:justify-between w-full">
            <!-- logo -->
            <div class="flex-shrink-0 flex items-center">
              <img class="block lg:hidden h-8 w-auto" src="../assets/moovietime-logo.svg" alt="Moovie Time">
              <img class="hidden lg:block h-8 w-auto" src="../assets/moovietime-logo.svg" alt="Moovie Time">
            </div>
            <div class="hidden sm:block sm:ml-6 flex-1">
              <div class="flex space-x-4 w-full">
                <!-- INPUT SEARCH -->
                <div class="hidden relative sm:block flex-1">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-2 pointer-events-none">
                    <img src="../assets/images/movie-icon.svg" alt="movie search icon">
                  </div>
                  <input type="text" id="search-navbar"
                    class="block p-2 px-10 w-full rounded sm:text-sm bg-[#000000]/20 border-[#000000]/20 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Find movie">
                  <div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                    <img src="../assets/images/search-icon.svg" alt="search icon" />
                  </div>
                </div>
                <!-- CATEGORIES -->
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div class="ml-3 relative">
                    <div>
                      <a href="#"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex justify-center gap-3">
                        <img src="../assets/images/categories-icon.svg" alt="categories icon" />
                        <div>CATEGORIES</div>
                      </a>
                    </div>
                    <div
                      class="hidden absolute top-[45px] left-[12px] mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                        id="user-menu-item-0">Your Profile</a>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                        id="user-menu-item-1">Settings</a>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                        id="user-menu-item-2">Sign out</a>
                    </div>
                  </div>
                </div>

                <RouterLink to="/"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">HOME
                </RouterLink>
                <RouterLink to="/movies"
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
      <div class="sm:hidden" id="mobile-menu">
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

<!-- <style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    /* margin-left: -1rem; */
    font-size: 1rem;

    padding: 1rem 0;
    /* margin-top: 1rem; */
  }
}
</style> -->
