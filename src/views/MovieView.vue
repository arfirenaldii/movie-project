<script>
import MovieCard from '../components/MovieCard.vue';
import RECOMMENDATION from '../data/recommendation.json'
import Star from '../assets/images/star-icon.svg'

export default {
  data() {
    return {
      recommendation: RECOMMENDATION
    }
  },
  components: {
    MovieCard,
    Star,
  },
  mounted() {
    console.log(this.$route.params.id)
  },
}
</script>

<template>
  <main>
    <section class="relative bg-black">
      <div class="banner"></div>
      <div class="absolute bottom-0 w-full">
        <div class="container mx-auto pb-7">
          <img src="../assets/images/wonder-woman.jpg" alt="wonder woman" />
          <p class="text-lg text-white font-medium">2020</p>
          <p class="text-4xl text-white font-semibold">Wonder Woman 1984</p>
          <p class="text-sm text-white font-medium">Fantasy, Action, Adventure</p>
        </div>
        <div class="bg-black/50 py-4">
          <div class="container mx-auto flex">
            <div class="flex items-center pr-8 border-r-[1px] border-white/20">
              <img class="mr-4" src="../assets/images/star-icon.svg" alt="star icon" />
              <p class="text-4xl text-white font-semibold mr-3">7.0</p>
              <div>
                <p class="text-xs text-white/50 font-medium">USER SCORE</p>
                <p class="text-xs text-white font-medium">3621 Votes</p>
              </div>
            </div>
            <div class="px-8 border-r-[1px] border-white/20">
              <p class="text-xs text-white/50 font-medium">STATUS</p>
              <p class="text-xs text-white font-medium">RELEASED</p>
            </div>
            <div class="px-8 border-r-[1px] border-white/20">
              <p class="text-xs text-white/50 font-medium">LANGUAGE</p>
              <p class="text-xs text-white font-medium">ENGLISH</p>
            </div>
            <div class="px-8 border-r-[1px] border-white/20">
              <p class="text-xs text-white/50 font-medium">BUDGET</p>
              <p class="text-xs text-white font-medium">$200,000,000.00</p>
            </div>
            <div class="px-8">
              <p class="text-xs text-white/50 font-medium">PRODUCTION</p>
              <p class="text-xs text-white font-medium">DC Entertainment</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mx-auto pt-8">
      <p class="text-base text-[#FF0000] font-semibold">OVERVIEW</p>
      <p class="text-sm text-black font-normal mt-2">Wonder Woman comes into conflict with the Soviet Union during the
        Cold
        War in the 1980s and finds a formidable
        foe by the name of the Cheetah.</p>
    </div>

    <div class="container mx-auto pt-8">
      <p class="text-base text-[#FF0000] font-semibold mb-6">REVIEWS</p>
      <div class="flex">
        <div class="bg-[#F9F9F9] rounded-lg shadow p-6 mr-[30px]">
          <div class="flex justify-between mb-6">
            <div class="flex items-center">
              <div class="bg-[#1E232B36]/20 h-[48px] w-[48px] rounded-full"></div>
              <div class="ml-[18px]">
                <p class="text-black text-sm font-bold">SWITCH.</p>
                <p class="text-[#666666] text-sm font-normal">December 18, 2020</p>
              </div>
            </div>
            <div class="flex bg-[#C4C4C4]/30 pr-[15px] pl-[6px] rounded-lg">
              <img class="h-4 mt-[12px] mr-[5px]" src="../assets/images/star-icon.svg" alt="star icon" />
              <p class="text-black text-3xl leading-normal font-semibold">7.0</p>
            </div>
          </div>
          <p class="text-black text-sm italic font-normal">It isn't as easy as saying 'Wonder Woman 1984' is a good or
            bad movie. The pieces are
            there, and there are
            moments I adore, but it does come across as a bit of a mess, even though the action sequences are
            breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those
            more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the
            theatrical
            experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and
            hearing
            Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... read the rest.</p>
        </div>
        <br />
        <div class="bg-[#F9F9F9] rounded-lg shadow p-6">
          <div class="flex justify-between mb-6">
            <div class="flex items-center">
              <div class="bg-[#1E232B36]/20 h-[48px] w-[48px] rounded-full"></div>
              <div class="ml-[18px]">
                <p class="text-black text-sm font-bold">msbreviews</p>
                <p class="text-[#666666] text-sm font-normal">December 18, 2020</p>
              </div>
            </div>
            <div class="flex bg-[#C4C4C4]/30 pr-[15px] pl-[6px] rounded-lg">
              <img class="h-4 mt-[12px] mr-[5px]" src="../assets/images/star-icon.svg" alt="star icon" />
              <p class="text-black text-3xl leading-normal font-semibold">8.0</p>
            </div>
          </div>
          <p class="text-black text-sm italic font-normal">If you enjoy reading my Spoiler-Free reviews, please follow
            my blog @ https://www.msbreviews.com
            The superhero genre has been growing exponentially during the last decade, so it's bizarre to go through
            an
            entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both
            Marvel
            and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the year's end, but not
            without
            a
            catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through
            HBO
            Max, a streaming service only </p>
        </div>
        <br />
      </div>
    </div>
    <div class="mt-12">
      <p class="text-sm text-white font-semibold mb-9">RECOMMENDATION MOVIES</p>
      <div class="card-wrapper">
        <MovieCard v-for="recommendation in recommendation" :rating="recommendation.rating"
          :poster="`../src/assets/images/${recommendation.poster}`" :title="recommendation.title"
          :year="recommendation.year" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.banner {
  background-image: url('../assets/images/wonder-woman-banner.png');
  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  /* margin-top: -58px; */
}
</style>
