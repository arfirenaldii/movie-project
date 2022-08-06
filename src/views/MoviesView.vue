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
  <aside>
    <p>Sort Result By</p>
    <ul>
      <li>Todo 1</li>
      <li>Todo 2</li>
      <li>Todo 3</li>
    </ul>
    <p>Genres</p>
    <ul>
      <li>Action</li>
      <li>Adventure</li>
      <li>Animation</li>
    </ul>
  </aside>
  <main>
    <h1>Movies</h1>
    <div class="card-wrapper">
      <MovieCard v-for="movie in movies" :rating="movie.rating" :poster="`../src/assets/images/${movie.poster}`"
        :title="movie.title" :year="movie.year" />
    </div>
    <button>Load More</button>
  </main>
</template>

<style scoped>
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
</style>
