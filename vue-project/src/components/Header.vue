<template>
    <div class="topbar">
      <div class="title-header">
        <h3>Hello Space lovers</h3>
      </div>
      
      <nav class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/painting">Painting</router-link>
        <router-link to="/my-solar-system">My Exoplanets System</router-link>
        <router-link to="/space-travel">Space Travel</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
  name: 'WebHeader'
};
  </script>
  
  <style scoped>
  .topbar {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: #ff7043; /* Orange background */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .title-header {
    font-size: 1.5rem;
    color: white;
  }
  
  .navbar {
    display: flex;
    gap: 30px;
  }
  
  .navbar a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    padding: 10px;
    transition: color 0.3s, background-color 0.3s;
    border-radius: 5px;
  }
  
  .navbar a:hover {
    background-color: #ffab91; /* Lighter orange on hover */
    color: black; /* Text color on hover */
  }
  
  /* Responsive media query */
  @media (max-width: 1000px) {
    .topbar {
      flex-direction: column;
      height: auto;
      padding: 10px 20px;
    }
    
    .title-header {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }
  
    .navbar a {
      font-size: 0.9rem;
    }
  }
  </style>
  