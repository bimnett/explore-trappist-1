<template>
  <div class="coloring-book">
    <!-- Color palette -->
    <div class="palette">
      <button
        v-for="color in colors"
        :key="color"
        :style="{ backgroundColor: color }"
        @click="setColor(color)"
        class="color-button"
      ></button>
    </div>

    <!-- SVG representation of TRAPPIST-1b -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      @click="fillColor($event)"
    >
      <!-- Planet (TRAPPIST-1b) -->
      <circle
        id="planet"
        :fill="regionColors.planet"
        cx="256"
        cy="256"
        r="200"
        stroke="black"
        stroke-width="2"
      />
      
      <!-- Star (TRAPPIST-1's M-type star) -->
      <circle
        id="star"
        :fill="regionColors.star"
        cx="400"
        cy="100"
        r="50"
        stroke="black"
        stroke-width="2"
      />
      
      <!-- Surface Features -->
      <path
        id="surface1"
        :fill="regionColors.surface1"
        d="M230 220 C 210 200, 180 250, 210 270 S 270 240, 230 220 Z"
      />
      <path
        id="surface2"
        :fill="regionColors.surface2"
        d="M280 330 C 290 310, 320 320, 310 350 S 250 360, 280 330 Z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedColor: '#8B0000', // Default selected color (dark red)
      regionColors: {
        planet: '#7b1f1f', // Default color for the planet (TRAPPIST-1b)
        star: '#ffcc00', // Default color for the star (yellowish)
        surface1: '#6f1d1d', // Surface feature 1 color
        surface2: '#8e5c5c', // Surface feature 2 color
      },
      colors: ['#8B0000', '#B22222', '#DC143C', '#FF4500', '#FF6347', '#CD5C5C'],
    };
  },
  methods: {
    setColor(color) {
      this.selectedColor = color;
    },
    fillColor(event) {
      const regionId = event.target.id;
      if (this.regionColors[regionId] !== undefined) {
        this.regionColors[regionId] = this.selectedColor;
      }
    },
  },
};
</script>

<style scoped>
.coloring-book {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200vh;
  width: 150vh;
}

.palette {
  margin-bottom: 20px;
  margin-right: 20px;
}

.color-button {
  width: 40px;
  height: 40px;
  margin-top: 40px;
  margin-right: 10px;
  border: none;
  cursor: pointer;
}

svg {
  width: 400px;
  height: 400px;
  margin-right: 20px;
}
</style>