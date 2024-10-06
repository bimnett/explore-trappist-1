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
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1133 1094" width="1133" height="1094" @click="fillColor($event)">
	<title>trappist-1b_outline-svg</title>

	
	<path id="Shape_4" :fill="regionColors.Shape_4" class="s0" fill-rule="evenodd"  d="m415.8 747.5c-187.4 0-338.8-151.4-338.8-338.8 0-187.3 151.4-338.7 338.8-338.7 187.3 0 338.7 151.4 338.7 338.8 0 187.3-151.4 338.7-338.8 338.7z"/>
	<path id="Shape_5" :fill="regionColors.Shape_5" class="s0" fill-rule="evenodd"  d="m512.7 86.3c-4.6 6.4-8.5 11.6-8.4 20 0.2 9.4 5.5 18 6.4 27.4 1.6 16.4-12.6 37.7 1.1 51.3 12.8 12.9 36.1 12.7 44.5 30.8 4.8 10.4 3.1 22.1 0.1 32.7-2.4 8.3-7.3 17.7-3.6 26.3 5.7 13.4 26.4 7.3 31.1 20.5 4.4 12.3-9.4 24.1-13.4 34.5-7.1 17.7-0.3 38.1 9.2 53.8 5.9 9.8 15.2 12.6 23.2 20 4.7 4.3 6.9 10.5 14.1 11.5 13.3 2 27.9-13.1 21.9-26.3-5.1-11.2-16.7-17.9-24.9-26.7-17.7-23.8 0.6-51.5-8.7-77.5-3.9-11.2-16.3-14.5-20.7-25-5.9-13.8 7-27.6-0.7-41.4-8.5-15.1-26.2-21.7-35.5-36.2-6.6-10.3-2.4-19.4-4.9-30.1-2-8.8-8.2-16-10.3-24.7-2.9-12.1 2.5-24.6 5.5-36.2"/>
	<path id="Shape_6" :fill="regionColors.Shape_6" class="s0" fill-rule="evenodd"  d="m205.3 143.9c1.6 10.9-1.8 24.1 1.9 34.5 4.4 12.9 16.2 16.9 23.8 27.3 6.3 8.8 9.8 19.8 18 27.3 8.5 7.7 23.9 10.1 30.4 19.8 9.2 14.1 2.6 29.9 8.7 43.9 3.9 8.8 14.3 8 21.4 12.2 10.4 6.1 11.9 19.7 10.5 30.5-1.2 9.5-4.1 19-7.5 27.9-3.4 8.9-9.2 21.8-19.5 24.5-10.5 2.7-20.1-4.4-29-8.6-20.4-9.4-52-14.8-65.5 9-17.4 30.6 22.7 50.4 25.6 78.7 1.8 18.2-8.8 32.8-27.6 29.9-12.2-4.7-27.7-23.8-41.7-22-15.8 2-7.4 19.4-12.5 28.9-4.2 7.9-13.9 9.6-19.2 16.6-6 7.9-8.7 17.8-14.7 25.8 0 0-51.2-94-21-225.6 30.3-131.7 117.9-180.6 117.9-180.6z"/>
	<path id="Shape_7" :fill="regionColors.Shape_7" class="s0" fill-rule="evenodd"  d="m487.8 739.4c-9.4-14.8-31.7-24.5-38.5-40.5-4.1-9.6-3.7-20.3-6.3-30.2-2.9-10.7-8-21.2-14.6-30.1-7.6-10.4-17.3-18.2-27.7-25.6-7.5-5.5-17-11.3-20.3-20.5-3.5-9.9-1.2-20.3-0.8-30.4 0.6-12.5-1.1-24.7-4.7-36.7-3.2-11.2-7.4-22.2-14.5-31.6-5.3-7-15.1-12.5-14.6-22.5 0.5-8.2 5.5-15.6 8.7-22.9 4.2-9.3 7.1-19 9.6-28.8 3.6-13.8 6.7-28 7.4-42.2 0.5-11.3-1.2-22.1 1-33.4 4.8-24.5 21-45.1 25-70.1 0.9-7.5 1.1-14.8 0.2-22.4-0.4-3.5-2.1-8.1-1.7-11.6 2.2-19.3 29.8-10.3 38.2-1.1 14.1 15.5 9.7 39.7 23.3 55.6 6.9 8.2 16.2 13.3 25.7 17.6 7 3.1 16.1 5.7 21.4 11.6 13.4 15 9.5 37.1 8.2 55.3-0.8 10.1-1.7 21.9 4.8 30.5 11.4 14.8 33.2 14.5 45.4 28.8 11.3 13.2 10.8 33.2 20.7 47.7 12.8 18.6 36.9 18.6 50.4 35 9.2 11.3 10.9 26.6 17.5 39.3 7.1 13.5 22.1 23.8 32 35.5 3 3.4 5.8 6.8 8.4 10.4 0 0-28.3 39-80.1 77.4-51.7 38.4-124.1 55.9-124.1 55.9z"/>


</svg>


  <div>
    
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedColor: '#8B0000', // Default selected color (dark red)
      regionColors: {
        Shape_4: '#FF4500', // Default color for the planet (TRAPPIST-1b)
        Shape_5: '#7b1f1f', // Default color for the planet (TRAPPIST-1b)
        Shape_6: '#7b1f1f', // Default color for the planet (TRAPPIST-1b)
        Shape_7: '#7b1f1f', // Default color for the planet (TRAPPIST-1b)
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
  margin-top: 120px;
  margin-left: 400px;
  height: 200vh;
  width: 150vh;
}

.palette {
  margin-bottom: 0px;
  margin-right: 220px;
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
  width: 800px;
  height: 800px;
  margin-right: 20px;
}
.s0 { 
  stroke: #000000;
  stroke-miterlimit:100;
  stroke-width: 10 
} 
</style>