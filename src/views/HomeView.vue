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
    <h1>Discover Movies</h1>
    <button>Popularity</button>
    <button>Release Date</button>
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
}
</style>
