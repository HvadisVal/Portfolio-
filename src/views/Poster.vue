<template>
  <section>
    <div class="butt">
      <a href="./portfolio" class="button">Back</a>
    </div>
  <ul class="tabs">
    <a href="./logo" class="button">Logo</a>
    <a href="./ux" class="button">XD</a>
    <a href="" class="btn">Poster</a>
    <a href="./bcards" class="button">Business Card</a>
    <a href="./art" class="button">Digital Art</a>
  </ul>


  
    <div class="main-content" >  
        <div class="image1">
          <img src="./images/poster/bloom.png" alt="">
        </div>
        <div class="image2">
          <img src="./images/poster/poster-1.png" alt="">
        </div>
      </div> 
</section>
</template>

<script setup>
import { ref } from 'vue'


let isActive1 = ref(true)
let addActive1 = () => {
  console.log("test")
  isActive1.value = !isActive1.value;
}


/* let isActive2 = ref(true)
let addActive2 = () => {
  console.log("test")
  isActive2.value = !isActive2.value;
}


let isActive3 = ref(true)
let addActive3 = () => {
  console.log("test")
  isActive3.value = !isActive3.value;
}
 */ 
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
color: var(--text-color);
}

.butt a {
color: var(--text-color);
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
  display: block;
  position: relative;
}

.image1 {
  display: flex;
  object-fit: fill;
  margin: 20px;
  overflow:inherit;
  padding-top: 150px;
}

.image1 img{
  position: relative;
  transition: transform .2s ease; /* Animation */
  width: 600px;
  height: 800px;
  margin: 0 auto;
}

.image1 img:hover{
  transform: scale(1.2);
}

.image2 {
  display: flex;
  object-fit: fill;
  margin: 20px;
  overflow:inherit;
  padding-top: 150px;
}

.image2 img{
  position: relative;
  transition: transform .2s ease; /* Animation */
  width: 600px;
  height: 800px;
  margin: 0 auto;
}

.image2 img:hover{
  transform: scale(1.2);
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
    .image1 img:hover {
      transform: none;
    }
    .image2 img:hover {
      transform: none;
    }
  }

</style>