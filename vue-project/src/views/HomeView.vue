<template>
  <div>
    <h1>Home</h1>
    <button @click="goToPaintingPage">Go to Painting Page</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    goToPaintingPage() {
      this.$router.push('/painting'); 
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>
