<script>
export default {
  props: ['rating', 'poster', 'title', 'year']
}
</script>

<template>
  <div class="flex flex-col relative" @click="this.$router.push(`/movie/wonder-woman`)">
    <div class="absolute top-0 right-0 z-10 bg-[#1E232B]/80">
      <p class="text-lg text-[#E5E5E5] font-semibold px-3 py-1">{{ rating }}</p>
    </div>
    <img :src="poster" :alt="title" />
    <div class="mt-3">
      <p class="text-[#E5E5E5] font-semibold">{{ title }}</p>
      <p class="text-[#929292] font-normal">{{ year }}</p>
    </div>
  </div>
</template>
