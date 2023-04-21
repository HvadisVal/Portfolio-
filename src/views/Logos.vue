<template>
    <section>
      <div class="butt">
        <a href="./portfolio" class="button">Back</a>
      </div>
    <ul class="tabs">
      <a href="" class="btn">Logo</a>
      <a href="./ux" class="button">XD</a>
      <a href="./poster" class="button">Poster</a>
      <a href="./bcards" class="button">Business Card</a>
      <a href="./art" class="button">Digital Art</a>
    </ul>
  
  
    
      <div class="main-content" >  
          <div class="image1">
            <img src="./images/logos/LOGOhand.png" alt="">
          </div>
          <div class="image2">
            <img src="./images/logos/LogoYellow.png" alt="">
          </div>
            <div class="image3">
              <img src="./images/logos/dental.png" alt="">
            </div>
            <div class="image4">
              <img src="./images/logos/sst.png" alt="">
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
   /*  display: flex;
    justify-content: center; */
    position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto); 
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
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
  
  .image1 img:hover{
    transform: scale(2.0);
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
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
  
  .image2 img:hover{
    transform: scale(2.5);
  }

  .image3 {
    display: flex;
    object-fit: fill;
    margin: 20px;
    overflow:inherit;
    padding-top: 150px;
  }
  
  .image3 img{
    position: relative;
    transition: transform .2s ease; /* Animation */
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
  
  .image3 img:hover{
    transform: scale(2.5);
  }

  .image4 {
    display: flex;
    object-fit: fill;
    margin: 20px;
    overflow:inherit;
    padding-top: 150px;
  }
  
  .image4 img{
    position: relative;
    transition: transform .2s ease; /* Animation */
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
  
  .image4 img:hover{
    transform: scale(2.5);
  }
  
  @media (max-width: 1080px) {
    .main-content {
      flex: 100%;
    }
  }
  
  @media (max-width: 680px) {
    .main-content{
      display: block;
  
    }
    .tabs {
      display: inline-grid;
    }
    .image1 img:hover {
      transform: none;
    }
    .image2 img:hover {
      transform: none;
    }
    .image3 img:hover {
      transform: none;
    }
    .image4 img:hover {
      transform: none;
    }
  }
  </style>