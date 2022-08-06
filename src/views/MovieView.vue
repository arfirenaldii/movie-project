<script>
import MovieCard from '../components/MovieCard.vue';
import RECOMMENDATION from '../data/recommendation.json'

export default {
  data() {
    return {
      recommendation: RECOMMENDATION
    }
  },
  components: {
    MovieCard
  },
  mounted() {
    console.log(this.$route.params.id)
  },
}
</script>

<template>
  <main>
    <h1>Movie Detail</h1>
    <p>{{ this.$route.params.id }}</p>
    <img src="../assets/images/wonder-woman-banner.png" alt="wonder woman banner" style="width: 100%" />
    <img src="../assets/images/wonder-woman.jpg" alt="wonder woman" />
    <p>2021</p>
    <h1>Wonder Woman 1984</h1>
    <p>Fantasy, Action, Adventure</p>
    <div class="info-wrapper">
      <h1>7.0</h1>
      <div>
        <p>USER SCORE</p>
        <p>3621 Votes</p>
      </div>
      <div>
        <p>STATUS</p>
        <p>RELEASED</p>
      </div>
      <div>
        <p>LANGUAGE</p>
        <p>ENGLISH</p>
      </div>
      <div>
        <p>BUDGET</p>
        <p>$200,000,000.00</p>
      </div>
      <div>
        <p>PRODUCTION</p>
        <p>DC Entertainment</p>
      </div>
    </div>
    <div>
      <p>Overview</p>
      <p>Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable
        foe by the name of the Cheetah.</p>
    </div>
    <div>
      <p>Reviews</p>
      <div class="card">
        <div class="flex">
          <div class="circle" />
          <div>
            <p>SWITCH</p>
            <p>December 18, 2020</p>
          </div>
          <h1>7.0</h1>
        </div>
        <p>It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are
          moments I adore, but it does come across as a bit of a mess, even though the action sequences are
          breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those
          more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical
          experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing
          Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.</p>
      </div>
      <br />
      <div class="card">
        <div class="flex">
          <div class="circle" />
          <div>
            <p>msbreviews</p>
            <p>December 18, 2020</p>
          </div>
          <h1>8.0</h1>
        </div>
        <p>If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com
          The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through an
          entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel
          and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not without a
          catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO
          Max, a streaming service only </p>
      </div>
    </div>
    <div>
      <p>RECOMMENDATION MOVIES</p>
      <div class="card-wrapper">
        <MovieCard v-for="recommendation in recommendation" :rating="recommendation.rating"
          :poster="`../src/assets/images/${recommendation.poster}`" :title="recommendation.title"
          :year="recommendation.year" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.info-wrapper {
  display: flex;
  gap: 30px;
}

.circle {
  width: 48px;
  height: 48px;
  background-color: grey;
  border-radius: 50%;
}

.card {
  background-color: lightgray;
  color: black;
  padding: 25px
}

.card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
</style>
