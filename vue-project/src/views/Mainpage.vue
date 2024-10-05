<template>
  <div id="app">
    <header>
      <div class="logo">
        <img src="images/logo.png" alt="Logo" />
      </div>
      <nav class="tab-bar">
        <button @click="goToSolarSystem">My Solar System</button>
        <button @click="contactUs">Contact Us</button>
      </nav>
    </header>

    <div class="background">
      <div class="bus" @click="moveBus" :style="{ transform: busTransform }">
        <img src="images/Bus.png" alt="Bus Image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Define the goToSolarSystem function
function goToSolarSystem() {
  alert('Navigating to My Solar System...');
}

// Define the contactUs function
function contactUs() {
  alert('Contact Us section clicked...');
}

// Define the busTransform ref
const busTransform = ref('translateX(0)');

// Define the moveBus function
function moveBus() {
  busTransform.value = 'translateX(-100vw)'; // Move off-screen

  // Wait for the animation to finish, then exit the website
  setTimeout(() => {
    window.location.href = 'https://example.com'; // Change this to Scrolling thing URL
  }, 1000); // Wait for the duration of the animation (1s)
}


onMounted(() => {
  const bus = document.querySelector('.bus');

  if (bus) {
    bus.addEventListener('click', moveBus);
  }
});
</script>

<style scoped>
nav {
  background-color: #FFA500;
  padding: 10px;
  text-align: center;
}

button {
  margin: 10px;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
/* Background Styling */
.background {
  background-image: url('images/space.jpeg');
  background-size: cover;
  background-position: center;
  height: 100vh; /* Full height */
  width: 100vw; /* Full width */
  position: relative;
}

/* Bus Styling */
.bus {
  cursor: pointer; /* Make the bus clickable */
  position: absolute;
  bottom: 20px;
  right: 20px;
  transition: transform 1s ease;
}

.bus img {
  width: 100px;
  height: auto;
}
</style>