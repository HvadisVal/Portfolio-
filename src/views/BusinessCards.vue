<template>
  <section>
    <div class="butt">
      <a href="./portfolio" class="button">Back</a>
    </div>
  <ul class="tabs">
    <a href="./logo" class="button">Logo</a>
    <a href="./ux" class="button">XD</a>
    <a href="./poster" class="button">Poster</a>
    <a href="" class="btn">Business Card</a>
    <a href="./art" class="button">Digital Art</a>
  </ul>


  
    <div class="main-content" >  
        <h1>No projects to display...Yet</h1>
      </div> 
</section>
</template>

<script setup>
import { ref } from 'vue'

</script>


<style scoped>
section {
  width: 100%;
  margin: 6.5rem auto 0;
  min-height: 100vh;
}
.btn{
width: 10px;
height: 10px;
font-size: medium;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: var(--text-color);
}


.butt a {
color: var(--text-color);
}
.button:hover {
color: #f8ba1a;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 3rem;
}

.tabs a {
  font-size: medium;
  font-weight: 600;
  color: var(--text-color);
  cursor: pointer;
}
.main-content {
  display: flex;
  justify-content: center;
  padding-top: 60px;
}


@media (max-width: 1080px) {
  .image {
    flex: 100%;
    
  }
}

@media (max-width: 680px) {
    
    .tabs {
      display: inline-grid;
    }
   .btn {
    width: 160px;
    height: 40px;
   }
  }

</style>