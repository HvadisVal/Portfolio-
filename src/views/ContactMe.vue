<template>
     <!-- contact section -->

     <section class="contact" id="contact">
        <h2 class="heading">Contact <span>Me</span></h2>

        <form action="#">
            <div class="input-box">
                <input type="text" placeholder="Full Name"> 
                <input type="email" placeholder="Email Address">
            </div>
            <div class="input-box">
                <input type="number" placeholder="Mobile Number"> 
                <input type="text" placeholder="Email Subject">
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message "></textarea>
            <input type="submit" value="Send Message" class="btn">
        </form>
    </section>
</template>

<script setup>

</script>

<style scoped>
.contact h2 {
    margin-bottom: 3rem;
}

.contact form {
    max-width: 70rem;
    margin: 1rem auto;
    text-align: center;
    margin-bottom: 3rem;
}

.contact form .input-box  {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.contact form .input-box input,
.contact form textarea {
    width: 100%;
    padding: 1.5rem;
    font-size: 1.6rem;
    color: var(--text-color);
    background: var(--second-bg-color);
    border-radius: .8rem;
    margin: .7rem 0;
}

.contact form .input-box input{
    width: 49%;
}

.contact form textarea {
    resize: none;
}

.contact form .btn {
    margin-top: 2rem;
    cursor: pointer;
}
</style>