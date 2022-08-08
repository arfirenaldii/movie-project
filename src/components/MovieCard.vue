<script>
export default {
  data() {
    return {
      active: false
    }
  },
  props: ['rating', 'poster', 'title', 'year']
}
</script>

<template>
  <div v-if="active" class="flex flex-col relative md:cursor-pointer" @mouseleave="active = !active">
    <div class="overlay-card">
      <div class="w-full flex flex-col items-center gap-[40px]">
        <div class="flex gap-2">
          <img src="../assets/images/star-icon.svg" alt="star icon" />
          <p class="text-2xl text-white font-semibold">{{ rating }}</p>
        </div>
        <p class="text-lg text-white font-semibold">Action</p>
        <button @click="this.$router.push(`/movie/wonder-woman`)"
          class="bg-[#FF0000] text-[#E5E5E5] font-semibold py-1 px-8 rounded-full">VIEW</button>
      </div>
    </div>
    <div class="mt-3">
      <p class="text-[#E5E5E5] font-semibold">{{ title }}</p>
      <p class="text-[#929292] font-normal">{{ year }}</p>
    </div>
  </div>
  <div v-else class="flex flex-col relative md:cursor-pointer" @mouseover="active = !active">
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

<style scoped>
.overlay-card {
  background-image: url('../assets/images/overlay.jpg');
  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
