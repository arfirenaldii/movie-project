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
      <div class="container mx-auto h-[333px]">
        <div class="flex flex-wrap justify-between items-center pt-[90px]">
          <div>
            <div class="line"></div>
            <p class="text-2xl text-[#E5E5E5] font-semibold mt-2">Discover Movies</p>
          </div>
          <div class="mt-4">
            <button class="bg-[#FF0000] text-[#E5E5E5] font-semibold py-1 px-4 rounded-full mr-5">Popularity</button>
            <button class="bg-[#21252A] text-[#E5E5E5] font-semibold py-1 px-4 rounded-full">Release Date</button>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#1E232A] pt-1">
      <div class="container mx-auto pb-[100px]">
        <div class="card-wrapper">
          <MovieCard v-for="movie in movies.slice(0, 10)" :rating="movie.rating"
            :poster="`../src/assets/images/${movie.poster}`" :title="movie.title" :year="movie.year" />
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
  margin-top: -170px;

}

@media only screen and (max-width: 990px) {
  .card-wrapper {
    margin-top: -130px;
  }
}
</style>
