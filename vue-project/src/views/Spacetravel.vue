<!--<script setup>-->

<!--import {ref, reactive} from "vue";-->

<!--</script>-->

<!--<template>-->
<!--  <div class="container">-->
<!--    <div v-for="n in 7">-->
<!--      <div class="planet-container" :style="{backgroundColor: colorPicker(n)}">-->
<!--        <h1>Exoplanet {{n}}</h1>-->
<!--        <p>Interesting facts about exoplanet {{n}}</p>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class='square' :style="{ transform: `translateX(${scrollPosition}px)` }"></div>-->
<!--  </div>-->
<!--  <canvas id="canvas"></canvas>-->
<!--</template>-->

<!--<script>-->

<!--const positions = [50, 60, 50, 40, 30, 60, 90];-->
<!--const colors = ["#0007e2", "#0007d3", "#0007c3", "#0006b5", "#0006a6", "#000697", "#000589"]-->
<!--function colorPicker(n) {-->
<!--  return colors[n-1];-->
<!--}-->

<!--var scrollArea = 800 - window.innerHeight;-->
<!--// var square1 = document.getElementsByClassName('square')[0];-->
<!--// console.log(square1);-->

<!--const scrollPosition = ref(0);-->

<!--window.addEventListener("scroll", function(){-->
<!--  var scrollTop = window.scrollY || window.scrollTop;-->
<!--  console.log("scrollTop: "+ scrollTop);-->
<!--  var scrollPercent = scrollTop/scrollArea || 0;-->
<!--  console.log("scrollPercent: "+scrollPercent);-->
<!--  scrollPosition.value = scrollPercent*window.innerWidth;-->
<!--  console.log("scrollPosiotion: "+ scrollPosition.value);-->
<!--  //console.log(square1);-->
<!--  //square1.style.left = scrollPercent*window.innerWidth + 'px';-->

<!--}, false);-->


<!--// const canvas = .getElementById("canvas");-->
<!--// const ctx = canvas.getContext("2d");-->
<!--//-->
<!--// ctx.setLineDash([10, 20]);-->
<!--// console.log(ctx.getLineDash()); // [10, 20]-->
<!--//-->
<!--// // Draw a dashed line-->
<!--// ctx.beginPath();-->
<!--// ctx.moveTo(0, 50);-->
<!--// ctx.lineTo(300, 50);-->
<!--// ctx.stroke();-->
<!--</script>-->

<!--<style scoped>-->
<!--* {-->
<!--  margin: 0;-->
<!--  padding: 0;-->
<!--  box-sizing: border-box;-->
<!--}-->
<!--html, body {-->
<!--  height: 100%;-->
<!--  width: 100%;-->
<!--}-->
<!--.square {-->
<!--  position: fixed;-->
<!--  width: 100px;-->
<!--  height: 100px;-->
<!--  background: red;-->
<!--  top: 100px;-->
<!--  left: 900px-->
<!--}-->
<!--.container {-->
<!--  height: 200vh;-->
<!--}-->
<!--.planet-container{-->
<!--  height: 30vh;-->
<!--  width: 100vw;-->
<!--}-->
<!--</style>-->

<script setup>
import WebHeader from '@/components/Header.vue';
const orbitDensity = 0.1;
const densInc = 0.03
const midWidth = window.outerWidth / 2;
const midHeight = window.outerHeight / 2;
const radCoef = 100;
const flatRad = 150;

function dotX(n, r) {
  let dotN = 360 * (orbitDensity + densInc*r);
  let angle = 360/dotN*n;
  let radius = flatRad + radCoef*r;
  let x = radius * Math.cos(Math.PI * 2 * angle / 360);
  return midWidth+x-200;
}
function dotY(n, r) {
  let dotN = 360 * (orbitDensity + densInc*r);
  let angle = 360/dotN*n;
  let radius = flatRad + radCoef*r;
  let y = radius * Math.sin(Math.PI * 2 * angle / 360);
  return midHeight+y*0.6;
}

</script>

<template>
  <div class="container">
    <WebHeader /> <!-- Include the header component here -->
    <div>
   <div v-for="m in 7" :key="m">
    <span v-for="n in parseInt(360 * (orbitDensity + densInc*m))" class="dot" :key="n" :style="{left: dotX(n, m) +'px', bottom: dotY(n, m) + 'px'}"></span>
   </div>

   <a href="https://science.nasa.gov/exoplanet-catalog/trappist-1-b/"><img src="../assets/trappist1.png" alt="" class="trappist1"></a>
   <a href="https://science.nasa.gov/exoplanet-catalog/trappist-1-b/"><img src="../assets/trappist1b.png" alt="" class="trappist1b"></a>
   <a href="https://science.nasa.gov/exoplanet-catalog/trappist-1-c/"><img src="../assets/trappist1c.png" alt="" class="trappist1c"></a>
   <a href="https://science.nasa.gov/exoplanet-catalog/trappist-1-d/"><img src="../assets/trappist1d.png" alt="" class="trappist1d"></a>
   <a href="https://science.nasa.gov/exoplanet-catalog/trappist-1-e/"><img src="../assets/trappist1e.png" alt="" class="trappist1e"></a>
   <a href="https://science.nasa.gov/exoplanet-catalog/trappist-1-f/"><img src="../assets/trappist1f.png" alt="" class="trappist1f"></a>
   <a href="https://science.nasa.gov/exoplanet-catalog/trappist-1-g/"><img src="../assets/trappist1g.png" alt="" class="trappist1g"></a>
   <a href="https://science.nasa.gov/exoplanet-catalog/trappist-1-h/"><img src="../assets/trappist1h.png" alt="" class="trappist1h"></a>
 </div>
  </div>
</template>

<style scoped>
.container {
   /* Make the background fixed */
  top: 0; /* Align to the top */
  left: 0;
  overflow: hidden;
  background-color: black;
  background-size: cover; /* Cover the entire area */
  background-position: center; /* Center the image */
  z-index: 0; 
}
img {
  position: absolute;
  width: 100px;
  height: 100px;
}
.trappist1{
  width: 200px;
  height: 200px;
  bottom: 250px;
  left: 361px;
}
.trappist1b{
  bottom: 200px;
  left: 550px;
}
.trappist1c{
  bottom: 400px;
  left: 650px;
}
.trappist1d{
  bottom: 370px;
  left: 800px;
}
.trappist1e{
  bottom: 170px;
  left: 900px;
}
.trappist1f{
  bottom: 300px;
  left: 1000px;
}
.trappist1g{
  bottom: 400px;
  left: 1100px;
}
.trappist1h{
  bottom: 500px;
  left: 1150px;
}
.dot {
  position: absolute;
  height: 5px;
  width: 5px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
}
.info-block {
  position: fixed;
  left: 1200px;
  top: 0px;
}

.info-block h1{
  color: white;
}

.info-block:hover + .info-block h1{
  color:red;
}
.info-block p{
  color: white;
}


</style>