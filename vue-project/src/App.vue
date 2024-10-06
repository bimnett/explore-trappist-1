<template>
  <div id="app">
    <router-view></router-view> <!-- This will render the active route component -->
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style scoped>
/* Add your styles here if needed */
</style>
