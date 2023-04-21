<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './views/Navbar.vue'
import Footer from './views/Footer.vue'
</script>

<template>
  <!--     header design    -->
<Navbar />
  <!-- 
<header class="header">
  <div class="portfolio"><a href="#" class="logo">Portfolio</a>

<i class='bx bx-menu' id="menu-icon"></i>

</div>
   <nav class="navbar">
     <li>
     <RouterLink to="/"  class="home">Home
     </RouterLink>
   </li>
   <li>
     <RouterLink to="/about"  class="about">About
     </RouterLink>
   </li>
   <li>
     <RouterLink to="/skills"  class="skills">Skills
     </RouterLink>
   </li>
   <li>
     <RouterLink to="/portfolio"  class="portfolio">Portfolio
     </RouterLink>
   </li>
   <li>
     <RouterLink to="/contact"  class="contact">Contact Me
     </RouterLink>
   </li>
   </nav>
</header>
 -->
 

  <RouterView />
<Footer />
</template>



<style scoped>

</style>