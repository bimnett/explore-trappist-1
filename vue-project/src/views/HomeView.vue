<template>
  <div>
    <WebHeader />
    <div class="background">
      <div class="bus" @click="moveBus" :style="{ transform: busTransform }">
        <img src="@/assets/images/Bus.png" alt="Bus Image" />
      </div>
    </div>
  </div>
</template>

<script>
import WebHeader from '@/components/Header.vue'; 
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    WebHeader  
  },
  name: "HomeView",
  setup() {
    const router = useRouter();
    const busTransform = ref('translateX(0)');

    function goToPaintingPage() {
      busTransform.value = 'translateX(-100vw)'; 
      setTimeout(() => {
        router.push('/painting');
      }, 1000);
    }
    
    function goToMyExoplanetsSystem() {
      busTransform.value = 'translateX(-100vw)'; 
      setTimeout(() => {
        router.push('/MyExoplanetsSystem');
      }, 1000);
    }

    function moveBus() {
      busTransform.value = 'translateX(-100vw)'; 
      setTimeout(() => {
        router.push('/travel');
      }, 1000);
    }

    onMounted(() => {
      const bus = document.querySelector('.bus');
      if (bus) {
        bus.addEventListener('click', moveBus);
      }
    });

    return {
      busTransform,
      moveBus,
    };
  },
};
</script>

<style scoped>
.logo-img {
  width: 160px; 
  height: auto;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center; 
  background: linear-gradient(45deg, rgba(255, 165, 0, 0.8), rgba(255, 69, 0, 0.8)); 
  padding: 10px 20px; 
  font-size: 21px;
  font-weight: bold;
  color: rgb(25, 8, 113) !important; 
  width: 200%; 
  z-index: 1000; 
}

.nav-links {
  list-style: none;
  display: flex; 
  margin: 0;
  padding: 0;
  gap: 20px;
}

.nav-links li {
  margin-left: 20px; 
}

.nav-links a {
  color: white !important; 
  font-size: 18px; 
  font-weight: bold; 
  padding: 10px 20px; 
  border-radius: 5px; 
  transition: background-color 0.3s ease; 
}

.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.2); 
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
position: fixed;
top: 0;
left:0;
width:100%;
height:100%;
  background-image: url('@/assets/images/Trappist.jpg.webp');
  background-size: cover; 
  background-position: center; 
}

.bus {
  cursor: pointer; 
  position: absolute;
  bottom: -30px;
  right: 20px;
  transition: transform 1s ease; 
}

.bus img {
  width: 250px; 
  height: auto; 
}
</style>
