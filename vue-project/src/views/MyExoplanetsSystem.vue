<template>
    <div class="video-background">
      <video autoplay muted loop id="bg-video">
        <source src="@/assets/spaceBackgroundVideo.mov" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="content">
        <h1>My Exoplanets System</h1>
<div class="exoplanet-system">
  <div v-for="(planet, index) in savedPlanets"
       :key="index"
       :class="'planet planet-' + (index + 1)">
       <img :src="require(`@/assets/paintedPlanets/${planet}`)" alt="Exoplanet" />
        </div>
</div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      savedPlanets:
      ['Trappist1a.png',
        'Trappist1b.png',
        'trappist1c.png',
        'Trappist1d.png',
        'Trappist1e.png',
        'Trappist1f.png',
        'trappist1g.png']
    };
  }
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
  position: relative;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.planet {
  position: absolute;
  width: 50px;
  height: 50px;
}
.planet img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.Trappist1a {
  top: 10%; left: 50%;
  transform: translate(-50%, -50%);
}
.Trappist1b {
  top: 30%; left: 75%;
  transform: translate(-50%, -50%);
}
.Trappist1c {
  top: 50%; left: 90%;
  transform: translate(-50%, -50%);
}
.Trappist1d {
  top: 70%; left: 75%;
  transform: translate(-50%, -50%);
}
.Trappist1e {
  top: 90%; left: 50%;
  transform: translate(-50%, -50%);
}
.Trappust1f {
  top: 70%; left: 25%;
  transform: translate(-50%, -50%);
}
.Trappist1g {
  top: 30%; left: 25%;
  transform: translate(-50%, -50%);
}

</style>