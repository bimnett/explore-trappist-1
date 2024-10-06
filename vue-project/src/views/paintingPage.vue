<template>
    <div class="titlePlanets-container">
        Trappist-1 System
    </div>
    <div class="nameOfPlanet-container">
       <p id="text"> {{message}}</p>
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
        /* put the drawing code in this container, it is yellow on screen*/
        drawing-container
    </div> 
    <div class="info-container">
        Info Container
    </div>
  </template>
<script>
export default {
   data() {
     return {
        message:"",
     }; 
    },
    methods:{
        first_planet(){
            this.message="Trappist 1b";
        },
        second_planet(){
            this.message="Trappist 1c";
        },
        third_planet(){
            this.message="Trappist 1d";
        },
        fourth_planet(){
            this.message="Trappist 1e";
        },
        fifth_planet(){
            this.message="Trappist 1f";
        },
        sixth_planet(){
            this.message="Trappist 1g";
        },
        seventh_planet(){
            this.message="Trappist 1h";
        },
    },
};
</script>
<style scoped>
    .nameOfPlanet-container {
        width: 100%;
        height: 15%; 
        left: 20%;
        top: 0vh; 
        background-color: pink; 
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
      color: black;

    }
    .planets-container {
        width: 20%;
        height: 100%; 
        position: absolute;
        top: 15vh; 
        left: 0%; 
        z-index: 1; 
    }
    .planets-container::-webkit-scrollbar {
        display: none; 
    }
    .titlePlanets-container {
        width: 20%;
        height: 15%;
        top: 0vh;
        left: 0vh;
        font-size: 20px;
        background-color: #2B1D5A;
        position:fixed;
        z-index: 10;
        border-radius: 3px;
        padding: 10px 20px;
        font-size: 25px;
        color: white;
    }

    /* put the drawing code in this container, it is yellow on screen*/
    .drawing-container {
        width: 100%;
        height: 65%; 
        position: absolute;
        top: 15vh; 
        left: 20%;
        background-color: yellow; 
        border: 1px solid #000;
        box-sizing: border-box;
        position:fixed;
        overflow-y:scroll;
    }

    .info-container {
        width: 100%;
        height: 20%; 
        bottom: 0vh; 
        left: 20%;
        background-color: green; 
        border: 1px solid #000;
        box-sizing: border-box;
        margin: 0;
        position:fixed;
        overflow-y:scroll;

    }

    #first-planet {
        width: 100%;
        height: 15vh;
        font-size: 30px;
        padding: 10px 20px;
        background-color: #679fa1;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    #second-planet {
        width: 100%;
        height: 15vh;
        font-size: 30px;
        padding: 10px 20px;
        background-color: #ffffec;
        color: black;
        border: none;
        border-radius: 5px;
        cursor: pointer;
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
    }

    #fourth-planet {
        width: 100%;
        height: 15vh;
        font-size: 30px;
        padding: 10px 20px;
        background-color: #6f827b;
        color: black;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    #fifth-planet {
        width: 100%;
        height: 15vh;
        font-size: 30px;
        padding: 10px 20px;
        background-color: #c4baae;
        color: black;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    #sixth-planet {
        width: 100%;
        height: 15vh;
        font-size: 30px;
        padding: 10px 20px;
        background-color: #e3cfbd;
        color: black;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    #seventh-planet {
        width: 100%;
        height: 15vh;
        font-size: 30px;
        padding: 10px 20px;
        background-color: #b88b69;
        color: black;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }    

    
</style>
  