<template>
    <!-- Services design -->

    <section class="services" id="services">
        <h2 class="heading"> My <span>Skills</span></h2>
        <div class="services-container">
            <div class="services-box">
                <i class='bx bx-code-alt'></i>
                <h3>Web Development</h3>
                <i class='bx bxl-visual-studio'></i>
                <i class='bx bxl-html5'></i>
                
                <i class='bx bxl-css3'></i>
                <i class='bx bxl-javascript' ></i>
                <i class='bx bxl-vuejs' ></i>
                <i class='bx bxl-wordpress' ></i>
<!--                <a href="#" class="btn">Read More</a>
 -->            </div>
            <div class="services-box">
                <i class='bx bx-paint'></i>
                <h3>Graphic design</h3>
                <img src="./images/icons/ill.png" alt="">
                <img src="./images/icons/icons8-adobe-photoshop-150.png" alt="">
                <img src="./images/icons/icons8-adobe-indesign-150.png" alt="">
                <img src="./images/icons/icons8-adobe-premiere-pro-150.png" alt="">
                <img src="./images/icons/icons8-adobe-xd-150.png" alt="">
                <img src="./images/icons/icons8-adobe-animate-150.png" alt="">
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style  scoped>
.services h2{
    margin-bottom: 5rem;
}

.services-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.services-container .services-box {
    flex: 1 1 30rem;
    background: var(--second-bg-color);
    padding: 3rem 2rem 4rem;
    border-radius: 2rem;
    text-align: center;
    border: .2rem solid var(--bg-color);
    transition: .5s ease;
    height: 500px;
}

.services-container .services-box:hover {
    border-color: var(--main-color);
    transform: scale(1.02);
}

.services-box i{
    font-size: 7rem;
    color: var(--main-color);
}

.services-box img {
    width: 100px;
}

/* .services-box img {
    display: flex;
} */

.services-box h3{
    font-size: 2.6rem;
}

.services-box p{
    font-size: 1.6rem;
    margin: 1rem 0 3rem;
}

</style>