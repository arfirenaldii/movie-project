<script>
export default {
  data() {
    return {
      data: ''
    }
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
  </main>
</template>
