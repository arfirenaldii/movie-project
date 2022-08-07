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
    <section class="bg-[#292E35]">
      <div class="container mx-auto h-[333px] pt-[60px]">
        <div class="line"></div>
        <p class="text-[#E5E5E5] text-4xl font-semibold mt-2">Movies</p>
      </div>
    </section>

    <section class="bg-[#1E232A] pt-1">
      <div class="container mx-auto pb-[100px]">
        <div class="-mt-[170px] flex gap-7">
          <aside class="bg-gradient-to-b from-[#0E1723] to-[#1E232A00] rounded-lg text-white p-5 min-w-[240px] h-fit">
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
          <div class="w-full">
            <div class="card-wrapper">
              <MovieCard v-for="movie in movies" :rating="movie.rating" :poster="`../src/assets/images/${movie.poster}`"
                :title="movie.title" :year="movie.year" />
            </div>
            <div class="text-center">
              <button class="bg-[#FF0000] text-[#E5E5E5] font-semibold py-1 px-4 rounded-full">Load More</button>
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
