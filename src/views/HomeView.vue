<script>
import MovieCard from '../components/MovieCard.vue';
import MOVIES from '../data/movies.json'

export default {
  data() {
    return {
      movies: MOVIES
    }
  },
  components: {
    MovieCard
  }
}
</script>

<template>
  <main>
    <div class="flex justify-between mb-8">
      <p class="text-2xl text-[#E5E5E5]">Discover Movies</p>
      <div>
        <button class="bg-[#FF0000] text-[#E5E5E5] font-semibold py-1 px-4 rounded-full mr-5">Popularity</button>
        <button class="bg-[#21252A] text-[#E5E5E5] font-semibold py-1 px-4 rounded-full">Release Date</button>
      </div>
    </div>
    <div class="card-wrapper">
      <MovieCard v-for="movie in movies" :rating="movie.rating" :poster="`../src/assets/images/${movie.poster}`"
        :title="movie.title" :year="movie.year" />
    </div>
  </main>
</template>

<style scoped>
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
</style>
