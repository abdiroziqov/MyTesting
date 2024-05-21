<template>
    <section class="hero">
        <div class="container hero__container flex items-start">
            <div class="hero__left">
                <img class="absolute ms-20 hero__warp" src="https://stesting.uz/wrap1.png" alt="">
                <h3 class="hero__heading relative z-2">{{ registrations.title }}</h3>
                <p class="hero__desc opacity-75 mb-8">MyTesting – bu o‘quvchilarni xalqaro PISA, TIMSS, PIRLS tadqiqotlariga tayyorgarlik ko‘rishi uchun sinov platformasidir.</p>
            </div>
            <img class="hero__img" src="https://tsue.uicgroup.tech/img/tsue.webp" alt="" width="427" height="484">
        </div>
        <!-- <p>Using text interpolation: {{ rawHtml }}</p> -->
    </section>
    <!-- <router-view/> -->
</template>
<script>
export default {
    props: {
        registrations: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
/* HERO */
.hero {
    padding-top: 200px !important;
    background-repeat: no-repeat;
    background-size: 100vw
}

.hero__heading {
    max-width: 400px !important;
    font-family: 'Poppins', sans-serif;
    font-size: 51px;
    color: #161c27;
    font-weight: 700;
    margin-top: 40px
}

.hero__desc {
    margin-top: 32px;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #161c27;
    font-weight: 400;
    max-width: 482px;
}

.hero__btn {
    padding: 12px 32px;
    background-color: #89b9c8;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    transition: all 0.4s
}

.hero__btn:hover {
    background-color: #7b929a;
    transition: all 0.4s
}

.hero__container {
    justify-content: space-around !important;
}

/* HERO END */

/* RESPONSIVE CSS */
@media only screen and (max-width: 1020px) {
    .hero__img {
        display: none;
    }

    .hero__heading {
        max-width: 550px !important;
        font-size: 42px
    }

    .hero__desc {
        max-width: 1000px !important;
    }

    .hero__container {
        justify-content: space-between !important
    }
}

@media only screen and (max-width: 640px) {
    .container {
        width: 500px !important;
        margin: 0 auto
    }
}

@media only screen and (max-width: 500px) {

    .hero {
        background-image: none
    }

    .hero__heading {
        font-size: 32px
    }

    .container {
        width: 450px !important
    }

    .hero__warp {
        display: none
    }
}

@media only screen and (max-width: 400px) {
    .hero__heading {
        font-size: 32px !important
    }
}

/* RESPONSIVE CSS END */
</style>