<script>
import MovieCard from '../components/MovieCard.vue';
import MOVIES from '../data/movies.json'
import Polygon from '../assets/images/polygon-icon.svg'
import PolygonIcon from '../components/icons/IconPolygon.vue'

export default {
  data() {
    return {
      movies: MOVIES,
      selected: 'Popularity',
      options: [
        'Popularity Ascending',
        'Popularity Descending',
        'Release Date Ascending',
        'Release Date Descending',
        'Rating Ascending',
        'Rating Descending'
      ],
      genres: [
        'Action',
        'Adventure',
        'Animation',
        'Comedy',
        'Crime',
        'Documentary',
        'Drama',
        'Family',
        'Fantasy',
        'History',
        'Horror'
      ],
      checkedGenres: [],
      showDropdown: false,
    }
  },
  components: {
    MovieCard,
    Polygon,
    PolygonIcon,
  },
  methods: {
    handleToggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    handlePickSort(selected) {
      this.selected = selected
      this.handleToggleDropdown()
    },
  }
}
</script>

<template>
  <main>
    <section class="bg-[#292E35]">
      <div class="container mx-auto h-[333px] pt-[60px]">
        <div class="line"></div>
        <p class="text-[#E5E5E5] text-4xl font-semibold mt-2">Movies</p>
      </div>
    </section>

    <section class="bg-[#1E232A] pt-1">
      <div class="container mx-auto pb-[100px]">
        <div class="-mt-[142px] flex gap-7 flex-wrap md:flex-nowrap">
          <aside class="bg-gradient-to-b from-[#0E1723] to-[#1E232A00] rounded-lg text-white min-w-[240px] h-fit w-full md:w-[200px]">
            <div class="divide-y divide-solid divide-[#FFFFFF]/10">
              <div class="p-4">
                <p class="text-base font-semibold">Sort Result By</p>
              </div>
              <div class="px-4 pt-5 pb-6">
                <div class="relative">
                  <button
                    class="text-white bg-[#E0E0E0]/10 font-normal rounded-md text-sm px-4 py-2 flex justify-between items-center w-full text-left"
                    type="button" @click="handleToggleDropdown">
                    <span>{{ selected }}</span>
                    <PolygonIcon v-if="showDropdown" class="rotate-180" />
                    <PolygonIcon v-else />
                  </button>
                  <div class="z-10 w-full bg-[#111419] rounded-md divide-y divide-gray-100 shadow absolute"
                    v-if="showDropdown">
                    <ul class="py-1 text-sm">
                      <li
                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                        v-for="(sort, index) in options" :key="`${sort}-${index}`" @click="handlePickSort(sort)">
                        {{ sort }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3">
                <p class="text-base font-semibold">Genres</p>
              </div>
              <div class="px-4 py-3">
                <div class="flex justify-between py-1" v-for="(genre, index) in genres" :key="`${genre}-${index}`">
                  <label class="text-sm font-normal" :for="genre">{{ genre }}</label>
                  <input type="checkbox" :value="genre" v-model="checkedGenres"
                    class="w-4 h-4 text-[#E74C3C] rounded bg-gray-700 border-gray-500 focus:ring-transparent checked:border-white md:cursor-pointer">
                </div>
              </div>
            </div>
          </aside>
          <div class="w-full">
            <div class="card-wrapper">
              <MovieCard v-for="movie in movies" :rating="movie.rating" :poster="`../src/assets/images/${movie.poster}`"
                :title="movie.title" :year="movie.year" />
            </div>
            <div class="text-center">
              <button class="bg-[#FF0000] text-[#E5E5E5] font-semibold py-1 px-9 rounded-full">Load More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.line {
  border-top: 6px solid #E74C3C;
  width: 112px;
}

.card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding-bottom: 60px;
}
</style>
