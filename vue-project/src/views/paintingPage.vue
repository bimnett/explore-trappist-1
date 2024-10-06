<template>

    <div>
    <WebHeader />
     class="titlePlanets-container">
     <button id="homePage" @click="homePage">Go to My Main Page</button>
       <div id="system_name"> Trappist-1 System</div>
    </div>
    <div :style="{ backgroundColor: headerColor, color: textColor }"  class="nameOfPlanet-container">
       <div id="text"> {{message}}</div>
      </div>
    <div class="planets-container">
        <button id="first-planet" @click="first_planet">Trappist 1b</button>
        <button id="second-planet" @click="second_planet">Trappist 1c</button>
        <button id="third-planet" @click="third_planet">Trappist 1d</button>
        <button id="fourth-planet" @click="fourth_planet">Trappist 1e</button>
        <button id="fifth-planet" @click="fifth_planet">Trappist 1f</button>
        <button id="sixth-planet" @click="sixth_planet">Trappist 1g</button>
        <button id="seventh-planet" @click="seventh_planet">Trappist 1h</button>
      </div>    
    <div class= "drawing-container">
      <div class="background-image">
        <ColorablePlanet/>
      </div>
    </div> 
    <div class="info-container">
      TRAPPIST-1 b is a super Earth, which means it's a bit bigger and heavier than our planet, weighing about 1.4 times as much. It orbits its star really quickly, completing a
      full circle in just 1.5 days, and is very close to its star, at about 0.01154 AU away. Scientists discovered this fascinating planet in 2016 by watching it pass in front of its star, making it look a little dimmer for a moment!
    </div>
  </template>
<script>
import WebHeader from '@/components/Header.vue'; 

export default {
    components: {
    WebHeader  
  },
   data() {
     return {
        message:"",
        headerColor: "#2B1D5A",
        textColor:"black",
     }; 
    },
    methods:{
        first_planet(){
            this.message="Trappist 1b";
            this.headerColor = "#679fa1";
            this.textColor= "black";
        },
        second_planet(){
            this.message="Trappist 1c";
            this.headerColor = "#ffffec";
            this.textColor= "black";
        },
        third_planet(){
            this.message="Trappist 1d";
            this.headerColor = "#334763";
            this.textColor= "white";
        },
        fourth_planet(){
            this.message="Trappist 1e";
            this.headerColor = "6f827b";
            this.textColor= "black";
        },
        fifth_planet(){
            this.message="Trappist 1f";
            this.headerColor = "#c4baae";
            this.textColor= "black";
        },
        sixth_planet(){
            this.message="Trappist 1g";
            this.headerColor = "#e3cfbd";
            this.textColor= "black";
        },
        seventh_planet(){
            this.message="Trappist 1h";
            this.headerColor = "#b88b69";
            this.textColor= "black";
        },
        homePage(){
            this.$router.push({ name: 'Home' });
        },
    },
};
</script>
<style scoped>
    .nameOfPlanet-container {
        width: 80%;
        height: 15%; 
        left: 20%;
        top: 0vh; 
        box-sizing: border-box;
        overflow-y:scroll;
        position:fixed;
        border-radius: 3px;
        display: flex;
        justify-content: center;      
        align-items: center;
    }
    #text{
      font-family: 'Poppins', sans-serif;    
      font-style: italic;  
      font-size: 60px;
      text-shadow: 8px 5px 5px grey;

    }
    .planets-container {
        width: 20%;
        height: 100%; 
        position: absolute;
        top: 15vh; 
        left: 0%; 
        z-index: 1; 
    }
    .titlePlanets-container {
        width: 20%;
        height: 15%;
        top: 0vh;
        left: 0vh;
        background-color: #2B1D5A;
        position:fixed;
        z-index: 10;
        border-radius: 3px;
        justify-content: center;      
        align-items: center;
        
    }
    #homePage{
      font-size: 15px;  
      color: white;
       background-color: #2B1D5A;
       border-radius: 5px;
        width: 100%;
        height: 5vh;
        padding: 4px 20px;
        
    }
    #system_name{
        font-size:25px;
        color: white;
        text-shadow: 8px 5px 5px grey;
      
        }

    /* put the drawing code in this container, it is yellow on screen*/
    .drawing-container {
        width: 80%;
        height: 68%; 
        position: absolute;
        top: 15vh; 
        left: 20%;
        background-color: yellow; 
        border: 1px solid #000;
        box-sizing: border-box;
        position:fixed;
        overflow-y:scroll;
        border-radius:3px;
    }

    .info-container {
    width: 80%;
    height: 20%; 
    bottom: 0; 
    left: 20%;
    background-color: #4CAF50; /* Softer green color */
    border: 1px solid #000;
    box-sizing: border-box;
    margin: 0;
    position: fixed;
    overflow-y: auto; /* Allow scrolling */
    padding: 15px; /* Increased padding for more space around text */
    border-radius: 8px; /* Rounded corners for a softer look */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
    color: #ffffff; /* White text for better contrast */
    font-family: 'Arial', sans-serif; /* Clean, modern font */
    font-size: 16px; /* Slightly larger font size */
    line-height: 1.5; /* Increased line height for better readability */
}

    .background-image {
  position: fixed; /* Make the background fixed */
  top: 0; /* Align to the top */
  left: 0; /* Align to the left */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-image: url('@/assets/images/space.jpeg'); /* Replace with your image */
  background-size: cover; /* Cover the entire area */
  background-position: center; /* Center the image */
  z-index: -1; /* Set below other content */
}

    #first-planet {
        width: 100%;
        height: 15vh;
        font-size: 30px;
        padding: 10px 20px;
        background-color: #679fa1;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        text-shadow: 8px 5px 5px grey;
    }

    #second-planet {
        width: 100%;
        height: 15vh;
        font-size: 30px;
        padding: 10px 20px;
        background-color: #ffffec;
        
        border: none;
        border-radius: 5px;
        cursor: pointer;
        text-shadow: 8px 5px 5px grey;
    }

    #third-planet {
        width: 100%;
        height: 15vh;
        font-size: 30px;
        padding: 10px 20px;
        background-color: #334763;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        text-shadow: 8px 5px 5px grey;
    }

    #fourth-planet {
        width: 100%;
        height: 15vh;
        font-size: 30px;
        padding: 10px 20px;
        background-color: #6f827b;
        
        border: none;
        border-radius: 5px;
        cursor: pointer;
        text-shadow: 8px 5px 5px grey;
    }

    #fifth-planet {
        width: 100%;
        height: 15vh;
        font-size: 30px;
        padding: 10px 20px;
        background-color: #c4baae;
        
        border: none;
        border-radius: 5px;
        cursor: pointer;
        text-shadow: 8px 5px 5px grey;
    }

    #sixth-planet {
        width: 100%;
        height: 15vh;
        font-size: 30px;
        padding: 10px 20px;
        background-color: #e3cfbd;
        
        border: none;
        border-radius: 5px;
        cursor: pointer;
        text-shadow: 8px 5px 5px grey;
    }

    #seventh-planet {
        width: 100%;
        height: 15vh;
        font-size: 30px;
        padding: 10px 20px;
        background-color: #b88b69;
        
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }    

    
</style>