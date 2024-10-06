<template>
    <div class="video-background">
      <video autoplay muted loop id="bg-video">
        <source src="@/assets/spaceBackgroundVideo.mov" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="content">
        <h1>My Exoplanets System</h1>
<div class="exoplanet-system">
  <img v-for="(planet, index) in savedPlanets"
       :key="index"
       :src="require(`@/assets/paintedPlanets/${planet}`)"
       alt="Exoplanet"
       class="exoplanet-image" />
</div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      savedPlanets: []
    };
  },
  mounted() {
    const storedPlanets = JSON.parse(localStorage.getItem('savedPlanets'));
    if (storedPlanets) {
      this.savedPlanets = storedPlanets;
    }
  },
};
</script>

<style scoped>
.video-background {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

#bg-video {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
  object-fit: cover;
}

.content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  margin-top: 20vh;
}

.exoplanet-system {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
}

.exoplanet-image {
  width: 100px; 
  height: 100px;
  margin: 10px;
  border-radius: 50%;
  border: 2px solid white;
}
</style>