<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <paintingPage />
  </div>
</template>

<script>
import paintingPage from '/Users/laura/explore-trappist-1/vue-project/src/views/paintingPage.vue';

export default {
  components: {
    paintingPage,
  },
};
</script>


<style scoped>

</style>
