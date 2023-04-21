
<template>
  <section class="home" id="home">
        <div class="home-content">
            <h3>Welcome to</h3>
            <h1>Wolleron</h1>
            <!-- <h3>And I'm a <p class="typingEffect">Multimedia Designer</p>
            -->     <!-- <p class="typingEffect">Frontend Developer</p>
                <p class="typingEffect">Digital Creator</p> --><!-- </h3> --> 
            <p>Valeria's creative grounds.</p>
            <div class="social-media">
                <a href="https://www.linkedin.com/in/valeriaionascu/"><i class='bx bxl-linkedin'></i></a>
                <a href="https://www.instagram.com/wolleron/"><i class='bx bxl-instagram' ></i></a>
                <!-- <a href="#"><i class='bx bxl-facebook'></i></a> -->
            </div>
            <a href="https://files.fm/down.php?i=46wa5bn6c" class="btn" download=""  target="_new">Download CV</a>
            
        </div>

        <div class="home-img">
            <img src="./images/logos/LogoYellow.png" alt="">
        </div>



    </section>
    <AboutView></AboutView>
    <SkillsView></SkillsView>
    <PortfolioView></PortfolioView>
    <ContactMe></ContactMe>
   
</template>


<script setup>
import AboutView from './AboutView.vue'
import PortfolioView from './PortfolioView.vue';
import SkillsView from './SkillsView.vue'
import ContactMe from './ContactMe.vue'

</script>

<style>
section {
    min-height: 100vh;
    padding: 10rem 9% 2rem;
}

.home{
    display: flex;
    justify-content: center;
    align-items: center;
}

.home-img img {
    width: 35vw;
    animation: floatImage 4s ease-in-out infinite;
}

@keyframes floatImage {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-2.4rem);
    }
    100% {
        transform: translateY(0);
    }
}

.home-content h3{
    font-size: 3.2rem;
    font-weight: 700;
}

.home-content h3:nth-of-type(2) {
    margin-bottom: 2rem;
}

span{
    color: var(--main-color);
}

.home-content h1{
    font-size: 5.6rem;
    font-weight: 700;
    line-height: 1.3;
}

.home-content p {
    font-size: 1.6rem;
}

.social-media {
    display: flex;
    justify-content: start;
    gap: 18px;
    margin-left: 25px;
}

.social-media a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background: transparent;
    border: .2rem solid var(--main-color);
    border-radius: 50%;
    font-size: 2rem;
    color: var(--main-color);
    margin: 3rem 1.5rem 3rem 0;
    transition: .5s ease;
}

.social-media a:hover {
    background: var(--main-color);
    color: var(--second-bg-color);
    box-shadow: 0 0 1rem var(--main-color);
}

.btn {
    display: inline-block;
    padding: 1rem 2.8rem;
    background: var(--main-color);
    border-radius: 4rem;
    box-shadow: 0 0 1rem var(--main-color);
    font-size: 1.6rem;
    color: var(--second-bg-color);
    letter-spacing: .1rem;
    font-weight: 600;
}

.btn:hover {
    box-shadow:none;
}




code {

background-color: #202129;

border-radius: 4px;

padding: 20px;

height: 70px;

color: white;

display: flex;

margin: 0 auto;

align-items: center;

width: 350px;

}



.typingEffect {

max-width: 220px;

overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/

border-right: 2px solid white; /* The cursor*/

font-size: 16px;

white-space: nowrap; /* Keeps the text on a single line */

animation: typing 4s steps(30) infinite, blink 1s infinite;

/* animation: start over */

}



/* The typing animation */

@keyframes typing {

0% { width: 0 }

60% { width: 100% }

80% { width: 100% }

95% { width: 0 }

100% { width: 0 }

}

@keyframes blink {

0%, 45% {

border-color: transparent;

}

50%, 100% {

border-color: white;

}

}




</style>