<template>
   <section class="services2" id="services">
        <h2 class="heading"> My <span>Projects</span></h2>
        <div class="services-container2">
          <div class="services-box2"><!-- 
                <i class='bx bx-sidebar'></i>  -->
                <!-- <h3>Logos</h3> -->
<!--                 <img src="./images/logos/LogoYellow.png" alt="">
 -->                <a href="./logo" class="btn">Logo</a>
            </div>
            <div class="services-box2">
                <!-- <i class='bx bx-sidebar'></i> 
                <h3>XD Designs</h3> -->
                <a href="./ux" class="btn">XD Design</a>
            </div>
            <div class="services-box2">
                <!-- <i class='bx bx-sidebar'></i> 
                <h3>Posters</h3> -->
                <a href="./poster" class="btn">Poster</a>
            </div>
            <div class="services-box2">
              <!--   <i class='bx bx-sidebar'></i> 
                <h3>Business Cards</h3> -->
                <a href="./bcards" class="btn">Business Card</a>
            </div>
            <div class="services-box2">
                <!-- <i class='bx bx-sidebar'></i> 
                <h3>Digital Art</h3> -->
                <a href="./art" class="btn">Digital Art</a>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>

section {
  background: var(--main-color);
}
.services2 h2{
    margin-bottom: 5rem;
   /*  color: var(--bg-color); */
}

.services2 span{
  color: var(--bg-color);
}

.services-container2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.services-container2 .services-box2 {
    flex: 1 1 30rem;
    background: var(--second-bg-color);
    padding: 3rem 2rem 4rem;
    border-radius: 2rem;
    text-align: center;
    border: .2rem solid var(--second-bg-color);
    transition: .5s ease;
    height: 300px;
}

.services-container2 .services-box2:hover {
    border-color: var(--second-bg-color);
    transform: scale(1.02);
}

.services-box2 i{
    font-size: 7rem;
    color: var(--main-color);
}

/* .services-box2 img {
   background-image: inherit;
} */

.services-box2 h3{
    font-size: 2.6rem;
}

.services-box2 .btn {
display: flex;
justify-content: center;
margin-top: 105px;
}

.services-box2 p{
    font-size: 1.6rem;
    margin: 1rem 0 3rem;
}
</style>













































































<!-- </style>
  <section class="portfolio" id="portfolio">
        <h2 class="heading">Latest <span>Project</span></h2>
        <div class="main_container">
            <div class="tab">
                <button class="tablinks" onclick="openCity(event, 'All')" id="defaultOpen">All</button>
                <button class="tablinks" onclick="openCity(event, 'Logo')">Logo</button>
                <button class="tablinks" onclick="openCity(event, 'Design')">Design</button>
              </div>
             
              <div id="All" class="tabcontent">
                <h3>All the projects</h3>
                <p>Here you can see all my projects</p>
              </div>
              
              <div id="Logo" class="tabcontent">
                <h3>Logos</h3>
                <p>Here you can see all my logos</p> 
              </div>
              
              <div id="Design" class="tabcontent">
                <h3>Designs</h3>
                <p>Here you can see all my designs</p>
              </div>
              
              
        </div>
        
          <div> -->
            <!-- category -->
         
          <!-- </div>
         
              <div v-for="item in state" :key="item">
               
                <button @click="sort(item)"> 
                  {{ item.category }}
                </button>

              </div>

              <div v-for="filteritem in filteredItem" :key="filteritem">
                {{ filteritem }}
              </div>
    </section>
</template>

<script setup>
import {ref, computed} from 'vue'
import portfoliodb from '../modules/portfoliodb'

export default {
  setup() {
    const filters = ref ();
    const activeFilter = ref('All')
  }
} -->

<!-- import TabsWrapper from '../components/TabsWrapper.vue';
import Tab from './components/Tab.vue'; 

const { state } = portfoliodb()
let filteredItem = ref([])


let sort = (item) => {
  
  state.value.filter( (item) => item.category == state.value.category)
  //debugger
  //console.log(item)

  console.log('test',filteredItem)
  return filteredItem.value = item

}
console.log('test2', ) -->

<!-- const filteredPokemon = computed( () => {
            let filter = filterText.value
            if (!filter.length) return pokemon.value
            return pokemon.value.filter( poke => 
                poke.name.toLowerCase().includes(filter.toLowerCase())
            )
        })
 */
       /*   function openCity(evt, ProjectName) {
          var i, tabcontent, tablinks;
          tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }
          tablinks = document.getElementsByClassName("tablinks");
          for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
          }
          document.getElementById(ProjectName).style.display = "block";
          evt.currentTarget.className += " active";
        }
        
        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultOpen").click();  */
 -->


<!-- 
<style scoped>

.tab {
    overflow: hidden;
/*     border: 1px solid var(--second-bg-color);
 */    background: var(--bg-color);
  }
  
  .tab button {
    background: var(--bg-color);
    color: var(--text-color);
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
  }
  
  /* Change background color of buttons on hover */
  .tab button:hover {
    color: var(--main-color);
  }
  
  .tab button.active {
    color: var(--main-color);
  }
  
  /* Style the tab content */
  .tabcontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
  }

  .tabcontent {
    animation: fadeEffect 1s; /* Fading effect takes 1 second */
  }
  
  /* Go from zero to full opacity */
  @keyframes fadeEffect {
    from {opacity: 0;}
    to {opacity: 1;}
  }


.main_container{
    background: var(--bg-color);
    display: block;
    height: 300vh;
}

.portfolio-container {
    width: 600px;
    background: var(--second-bg-color);
    padding: 30px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, .1);
    border-radius: 20px;
} -->



<!-- /* .portfolio {
    background:var(--second-bg-color);
}

.portfolio h2 {
    margin-bottom: 4rem;
}

.portfolio-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
}

.category {
    text-transform: uppercase;
    font-weight: 600;
}
.Video {
    color: rgb(55, 255, 0);
    border-left: 1px solid rgb(55, 255, 0);
    padding-left: 10px;
}
.Web {
    color: blueviolet;
    border-left: 1px solid blueviolet;
    padding-left: 10px;
}

.portfolio-item {
    margin: 10px;
    border: 2px solid #fff;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
} */

/* 
.portfolio-container .portfolio-box {
    position: relative;
    border-radius: 2rem;
    box-shadow: 0 0 1rem var(--bg-color);
    overflow: hidden;
    display: flex;
}

.portfolio-box img {
    width: 100%;
    transition: .5s ease;
}

.portfolio-box:hover img {
    transform: scale(1.1);
}

.portfolio-box .portfolio-layer {
    
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 50%;
    background: linear-gradient(rgba(0, 0, 0, .1), var(--main-color));
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 0 4rem;
    transform: translateY(100%);
    transition: .5s ease;
}

.portfolio-box:hover .portfolio-layer {
    transform: translateY(0);
}

.portfolio-layer h4 {
    font-size: 3rem;
}

.portfolio-layer p {
    font-size: 1.6rem;
    margin: .3rem 0 1rem;
}

.portfolio-layer a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    background: var(--text-color);
    border-radius: 50%;
}

.portfolio-layer a i {
    font-size: 2rem;
    color: var(--second-bg-color);
} */
</style> -->