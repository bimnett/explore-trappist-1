<template>
    <div class="left-container">
    <div class="nameOfSystem-container">
        Name System Container
    </div>
    <div class="planets-container">
        <div class="nameOfPlanet-container" v-for="i in 7" :key="i">
        Planet {{ i }}
        </div>
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

.fullScreen-container {
    
}


  .nameOfSystem-container {
    width: 100%;
    height: 15vh; 
    background-color: pink; 
    border: 1px solid #000;
    box-sizing: border-box;
    position:fixed;
    overflow-y:scroll;
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
  