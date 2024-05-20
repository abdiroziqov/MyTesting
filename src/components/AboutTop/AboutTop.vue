<template>
    <section class="about">
        <div
            class="container about__container bg-sky-50 bg-[url('https://stesting.uz/aboutlandingbg.png')]  bg-no-repeat bg-left-top [background-position-x:100px] bg-contain">
            <div class="text-center pt-20">
                <h3 class="font-bold 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl">{{ langtext[$route.params.lan].aboutus.aboutusHeading }}</h3>
                <p class="text-lg font-light opacity-50 max-w-md m-auto mt-2">{{ langtext[$route.params.lan].aboutus.aboutusDesc }}</p>
            </div>
            <div
                class="grid 2xl:grid-rows-3 xl:grid-rows-3 lg:grid-rows-3 md:grid-rows-2 grid-flow-col gap-4 grid-default mt-5">
                <div class="row-span-3 ms-20 2xl:block xl:block lg:block md:hidden sm:hidden">
                    <img class="img-default" :src="`${aboutus.image_url}`" alt="">
                </div>
                <div class="col-span-2 2xl:block xl:block lg:block md:hidden sm:hidden">
                    <img class="img-default1" :src="`${aboutus.image1_url}`" alt="">
                </div>
                <div class="col-span-2 2xl:block xl:block lg:block md:hidden sm:hidden">
                    <img class="img-default2" :src="`${aboutus.image2_url}`" alt="">
                </div>
                <div class="row-span-3 2xl:block xl:block lg:block md:hidden sm:hidden">
                    <img class="img-default3" :src="`${aboutus.image3_url}`" alt="">
                </div>
            </div>
            <div class="2xl:hidden xl:hidden lg:hidden md:block sm:block ms-20">
                <div class="">
                    <img class="" :src="`${aboutus.image_url}`" alt="">
                </div>
                <div class="">
                    <img class="" :src="`${aboutus.image1_url}`" alt="">
                </div>
                <div class="">
                    <img class="" :src="`${aboutus.image2_url}`" alt="">
                </div>
                <div class="">
                    <img class="" :src="`${aboutus.image3_url}`" alt="">
                </div>
            </div>
            <div class="">
                <div>
                    <p class="max-w-3xl	about__bottom" v-html="`${aboutus.description}`">
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { Lang } from '../Lan/Lan';

export default {
    props: {
        aboutus: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            langtext: Lang,
        }
    },
}
</script>
<style scoped>
.about {
    margin-top: 60px !important;
    margin-bottom: 900px !important
}

.about__container {
    height: 500px !important;
    /* margin-bottom: 160px !important */
}

.img-default {
    object-fit: cover;
    width: 254px !important;
    height: 432px !important;
    border: 10px solid #fff;
    margin-left: 60px !important
}

.img-default1 {
    object-fit: cover;
    width: 253px !important;
    height: 200px !important;
    border: 10px solid #fff;
}

.img-default2 {
    object-fit: cover;
    width: 253px !important;
    height: 200px !important;
    border: 10px solid #fff;
}

.img-default3 {
    object-fit: cover;
    width: 254px !important;
    height: 432px !important;
    border: 10px solid #fff;
    margin-right: 130px;
}

.about__bottom {
    margin: 0 auto;
    margin-top: -180px;
}

.about__bottom>>>p:nth-child(1) {
    margin-top: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

.about__bottom>>>p:nth-child(2) {
    margin-top: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

.about__bottom>>>p:nth-child(4) {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

.about__bottom>>>p:nth-child(5) {
    margin-top: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

.about__bottom>>>p:nth-child(6) {
    margin-top: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.about__bottom>>>ul {
    margin-top: 20px !important;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

@media only screen and (max-width: 1020px) {
    .about__container {
        height: 1300px !important;
    }

    .about__container img {
        margin: 0 auto !important;
        margin-top: 21px !important
    }

    .about__bottom {
        margin-top: 10px !important
    }
}

@media only screen and (max-width: 640px) {
    .about__container {
        height: 1300px !important;
        background-image: none !important;
        background-color: transparent !important
    }

    .about__container img {
        margin: 0 auto !important;
        margin-top: 21px !important;
        margin-left: -50px !important;
    }

    .about__container h3 {
        font-size: 24px
    }

    .about__container p {
        font-size: 16px
    }

    .grid-default {
        display: none !important;
    }

}

@media only screen and (max-width: 545px) {
    .container {
        width: 400px !important;
        margin: 0 !important;
        padding: 0px 0px !important;
    }

    .about__bottom {
        margin-left: 20px !important
    }

    .about {
        margin-bottom: 1100px !important
    }


}</style>