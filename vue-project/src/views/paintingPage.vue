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
        drawing-container
    </div> 
    <div class="info-container">
        Info Container
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
    height: 17%; 
    bottom: 0vh; 
    left: 20%;
    background-color: grey; 
    border: 1px solid #000;
    box-sizing: border-box;
    margin: 0;
    position:fixed;
    overflow-y:scroll;
    border-radius:3px;

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