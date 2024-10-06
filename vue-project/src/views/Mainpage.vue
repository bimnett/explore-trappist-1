<template>
  <div id="app"> <!-- Use a div instead of body to maintain a single root element -->
    <nav class="navbar">
      <img src="@/assets/images/logo.png" alt="Logo Image" class="logo-img" />
      <ul class="nav-links">
        <li><router-link to="#" @click.prevent="goToPaintingPage">My Painting Page</router-link></li>
        <li><router-link to="#" @click.prevent="goToExoplanetSystem">My Exoplanets system</router-link></li>
      </ul>
    </nav>
    <!-- Background Section -->
    <div class="background">
      <div class="bus" @click="moveBus" :style="{ transform: busTransform }">
        <img src="@/assets/images/Bus.png" alt="Bus Image" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: "Mainpage",
  setup() {
    const router = useRouter();
    const busTransform = ref('translateX(0)');

    // Function to navigate to the painting page
    function goToPaintingPage() {
      busTransform.value = 'translateX(-100vw)'; // Move off-screen
      setTimeout(() => {
        router.push('/painting'); // Navigate to the painting page
      }, 1000); // Wait for the duration of the animation (1s)
    }

    // Function to navigate to the exoplanet system
    function goToExoplanetSystem() {
      busTransform.value = 'translateX(-100vw)'; // Move off-screen
      setTimeout(() => {
        router.push('/MyExoplanetSystem'); // Navigate to the exoplanet system
      }, 1000); // Wait for the duration of the animation (1s)
    }

    // Function to move the bus and navigate
    function moveBus() {
      busTransform.value = 'translateX(-100vw)'; // Move off-screen

      // Wait for the animation to finish, then navigate to the painting page
      setTimeout(() => {
        router.push('/painting'); // Change this to the desired URL
      }, 1000); // Wait for the duration of the animation (1s)
    }

    onMounted(() => {
      // Attach the moveBus function to the bus click event
      const bus = document.querySelector('.bus');

      if (bus) {
        bus.addEventListener('click', moveBus);
      }
    });

    return {
      busTransform,
      moveBus
    };
  }
};
</script>

<style scoped>

#app {
  background-image: url('@/assets/images/star.jpeg');
  
}

.logo-img {
  width: 160px; /* Adjust the size as needed */
  height: auto;
  
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;

  display: flex;
  align-items: center; /* Center items vertically */
  background: linear-gradient(45deg, rgba(255, 165, 0, 0.8), rgba(255, 69, 0, 0.8)); /* Gradient of different shades of orange with transparency */
  padding: 10px 20px; /* Adjust padding for better spacing */
  font-size: 21px;
  font-weight: bold;
  color: rgb(25, 8, 113) !important; /* Navbar text color */
  width: 200%; /* Full width */
  z-index: 1000; /* Ensure the navbar is on top of other elements */
}

.nav-links {
  list-style: none;
  display: flex; /* Display items side by side */
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  gap: 20px;
}

.nav-links li {
  margin-left: 20px; /* Add margin between nav items */
}

.nav-links a {
  color: white !important; /* Change text color */
  font-size: 18px; /* Make text bigger */
  font-weight: bold; /* Make text bold */
  padding: 10px 20px; /* Add padding for button-like appearance */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}

.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Lighten background on hover */
}

/* Background Styling */
.background {
  background-image: url('@/assets/images/star.jpeg');
  background-size: 100% 100%; /* Stretch the image to fill the whole section */
  background-position: center; /* Center the background image */
  height: 100vh; /* Full height */
  width: 100vw; /* Full width */
  position: relative; /* Ensure relative positioning for child elements */
}

/* Bus Styling */
.bus {
  cursor: pointer; /* Make the bus clickable */
  position: absolute;
  bottom: 20px;
  right: 20px;
  transition: transform 1s ease; /* Smooth transition for the bus movement */
}

.bus img {
  width: 250px; /* Set bus image width */
  height: auto; /* Maintain aspect ratio */
}
</style>