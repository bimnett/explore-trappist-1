<template>
    <div class="left-container">
      <div class="nameOfSystem-container">
        Trappist-1 System
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
    </div>
    <div class= "top-container">
        <div class= "nameOfSystem-container">
            Name of your planet
        </div>
    </div>
    <div class= "drawing-container">
        <div class= "drawingPlanets-container">
            drawing-container
        </div>
    </div> 
    <div class="info-container">
        Info Container
    </div>
  </template>

<style scoped>
    .left-container {
        width: 25%;
        height: auto;
        position: absolute;
        top: 0vh;
        left: 0;
    }
    .top-container {
        width: 75%;
        height: auto;
        position: absolute;
        top: 0;
        left: 25%;
    }
    .drawing-container {
        width: 75%;
        height: 80%; 
        position: absolute;
        top: 15vh; 
        left: 25%;
    }
    .info-container {
    width: 75%;
    height: 90vh; 
    position: absolute;
    bottom: 0vh; 
    left: 25%; 
    }

    .nameOfSystem-container {
    width: 100%;
    height: 15vh; 
    background-color: grey; 
    border: 1px solid #000;
    box-sizing: border-box;
    position:fixed;
    overflow-y:scroll;
    }

    #first-planet {
    width: 100%;  /* Set the width of the button */
    height: 15vh;  /* Set the height of the button */
    font-size: 18px;  /* Increase the font size */
    padding: 10px 20px;  /* Add padding to make the button larger */
    background-color: #679fa1;  /* Add a background color */
    color: white;  /* Change text color */
    -webkit-text-stroke: 1px black;
    border: none;  /* Remove borders */
    border-radius: 5px;  /* Add rounded corners */
    cursor: pointer;  /* Change cursor on hover */
    }

    #second-planet {
    width: 100%;  /* Set the width of the button */
    height: 15vh;  /* Set the height of the button */
    font-size: 18px;  /* Increase the font size */
    padding: 10px 20px;  /* Add padding to make the button larger */
    background-color: #ffffec;  /* Add a background color */
    color: black;  /* Change text color */
    border: none;  /* Remove borders */
    border-radius: 5px;  /* Add rounded corners */
    cursor: pointer;  /* Change cursor on hover */
    }

    #third-planet {
    width: 100%;  /* Set the width of the button */
    height: 15vh;  /* Set the height of the button */
    font-size: 18px;  /* Increase the font size */
    padding: 10px 20px;  /* Add padding to make the button larger */
    background-color: #334763;  /* Add a background color */
    color: white;  /* Change text color */
    border: none;  /* Remove borders */
    border-radius: 5px;  /* Add rounded corners */
    cursor: pointer;  /* Change cursor on hover */
    }

    #fourth-planet {
    width: 100%;  /* Set the width of the button */
    height: 15vh;  /* Set the height of the button */
    font-size: 18px;  /* Increase the font size */
    padding: 10px 20px;  /* Add padding to make the button larger */
    background-color: #6f827b;  /* Add a background color */
    color: black;  /* Change text color */
    border: none;  /* Remove borders */
    border-radius: 5px;  /* Add rounded corners */
    cursor: pointer;  /* Change cursor on hover */
    }

    #fifth-planet {
    width: 100%;  /* Set the width of the button */
    height: 15vh;  /* Set the height of the button */
    font-size: 18px;  /* Increase the font size */
    padding: 10px 20px;  /* Add padding to make the button larger */
    background-color:#c4baae ;  /* Add a background color */
    color: black;  /* Change text color */
    border: none;  /* Remove borders */
    border-radius: 5px;  /* Add rounded corners */
    cursor: pointer;  /* Change cursor on hover */
    }

    #sixth-planet {
    width: 100%;  /* Set the width of the button */
    height: 15vh;  /* Set the height of the button */
    font-size: 18px;  /* Increase the font size */
    padding: 10px 20px;  /* Add padding to make the button larger */
    background-color:#e3cfbd;  /* Add a background color */
    color: black;  /* Change text color */
    border: none;  /* Remove borders */
    border-radius: 5px;  /* Add rounded corners */
    cursor: pointer;  /* Change cursor on hover */
    }

    #seventh-planet {
    width: 100%;  /* Set the width of the button */
    height: 15vh;  /* Set the height of the button */
    font-size: 18px;  /* Increase the font size */
    padding: 10px 20px;  /* Add padding to make the button larger */
    background-color:#b88b69;  /* Add a background color */
    color: black;  /* Change text color */
    border: none;  /* Remove borders */
    border-radius: 5px;  /* Add rounded corners */
    cursor: pointer;  /* Change cursor on hover */
    }

    .drawingPlanets-container {
    width: 100%;
    height: 100%; 
    background-color: yellow; 
    border: 1px solid #000;
    box-sizing: border-box;
    position:fixed;
    overflow-y:scroll;
    }

    .nameOfPlanet-container {
    width: 100%;
    height: 20vh; 
    background-color: blue; 
    border: 1px solid #000;
    box-sizing: border-box;
    margin: 0;

    }

    .info-container {
    width: 100%;
    height: 20vh; 
    background-color: green; 
    border: 1px solid #000;
    box-sizing: border-box;
    margin: 0;
    position:fixed;
    overflow-y:scroll;

    }
</style>
  