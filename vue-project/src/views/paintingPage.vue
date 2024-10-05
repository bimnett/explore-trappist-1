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
  </template>
  
  <style scoped>
  .left-container {
    width: 25%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .nameOfSystem-container {
    width: 100%;
    height: 20vh; 
    background-color: pink; 
    border: 1px solid #000;
    box-sizing: border-box;
  }
  
  .planets-container {
    display: flex;
    flex-direction: column;
  }
  
  .nameOfPlanet-container {
    width: 100%;
    height: 20vh; 
    background-color: blue; 
    border: 1px solid #000;
    box-sizing: border-box;
    margin: 0;
  }
  </style>
  