<script>
export default {
  props: ['rating', 'poster', 'title', 'year']
}
</script>

<template>
  <div @click="this.$router.push(`/movie/wonder-woman`)">
    <p>{{ rating }}</p>
    <img :src="poster" :alt="title" height="330" />
    <p>{{ title }}</p>
    <p>{{ year }}</p>
  </div>
</template>
