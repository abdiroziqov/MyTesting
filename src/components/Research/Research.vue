<template>
    <section class="research bg-sky-50 2xl:my-0 xl:my-0">
        <div class="container">
            <div class="lg:flex items-center justify-between md:block">
                <div class="my-10">
                    <span class="research-span 2xl:block xl:block lg:block md:block sm:hidden">{{ langtext[$route.params.lan].homePage.researchHeading1 }}</span>
                    <img class="absolute 2xl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-5 sm:mx-20"
                        src="https://stesting.uz/wrap3.png" alt="" width="140" height="42">
                    <p class="research-span 2xl:block xl:block lg:block md:block z-10 sm:hidden">{{ langtext[$route.params.lan].homePage.researchHeading2 }}</p>
                    <p class="research-span z-10 2xl:hidden xl:hidden lg:hidden md:hidden sm:block sm:py-5 research_none">
                        {{ langtext[$route.params.lan].homePage.researchHeading3 }}</p>
                </div>
            </div>

            <div class="grid lg:grid-cols-4 gap-4 md:grid-cols-2">
                <router-link :to="`${$route.params.lan}/news/${data.id}`" v-for="data in research" :key="data.id"
                    class="research__box bg-white  h-80 shadow-md hover:shadow-lg sm:m-auto">
                    <img class="research-img" :src="`${data.image_url}`" alt="">
                    <div class="backdrop-blur h-16 blur-bg flex items-center justify-around">
                        <div class="">
                            <i class="fa-regular fa-eye fa-lg" style="color: #ffffff;"></i>
                            <p class="text-white my-1 text-base	">{{ data.views }}</p>
                        </div>
                        <div class="">
                            <i class="fa-regular fa-calendar fa-lg" style="color: #ffffff;"></i>
                            <p class="text-white my-1 text-base	">{{ data.date }}</p>
                        </div>
                    </div>
                    <p class="research-link__title">{{ data.title.substring(0, 47) }}...</p>
                    <span class="research-link_span">{{ data.description.substring(0, 79) }}...</span>
                </router-link>
            </div>
        </div>
    </section>
</template>
<script>
import PrimaryButton from '../../ui-components/PrimaryButton.vue';
import { RouterLink, RouterView } from "vue-router";
import { Lang } from '../Lan/Lan';

export default {
    props: {
        research: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            langtext: Lang,
        }
    },
    components: { PrimaryButton }
}
</script>
<style scoped>
.research {
    height: 576px !important;
    background-image: url("https://stesting.uz/_nuxt/img/news-bg-item.fcbfd23.png") !important;
    background-repeat: no-repeat !important;
    background-position: right bottom !important;
}

.research-span {
    color: #161c27;
    font-size: 32px;
    font-family: "Poppins";
    font-weight: 700;
}

.research__box {
    width: 226px !important;
}

.research-img {
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 226px;
    height: 170px;
    -o-object-fit: cover;
    object-fit: cover
}

.research-link__title {
    font-family: "Poppins";
    font-weight: 600;
    color: #161c27;
    font-size: 14px;
    margin: 0;
    padding: 0;
    margin-left: 10px;
    margin-top: 20px;
    max-width: 500px;
    line-height: 20px !important;
}

.research-link_span {
    font-size: 14px;
    color: #73777d;
    font-family: "Poppins";
    font-weight: 400;
    margin-left: 10px !important;
    max-width: 220px !important;
    line-height: 23px;
    position: absolute;
}

.blur-bg {
    margin-top: -60px !important
}

.backdrop-blur p {
    font-family: "Poppins";
    font-weight: 400;
}

@media only screen and (max-width: 1020px) {
    .research {
        margin-top: 300px !important;
        height: 900px !important;
    }

    .research__box {
        width: 354px !important;
        margin-top: 20px !important;
    }

    .research-img {
        width: 354px;
    }
}

@media only screen and (max-width: 768px) {
    .research {
        margin-top: 300px !important;
        height: 1600px !important;
    }
}

@media only screen and (max-width: 640px) {
    .container {
        width: 600px !important;
    }

    .research-span {
        display: none !important
    }

    .research_none {
        display: block !important;
        padding-top: 20px !important;
    }


    .research__box {
        margin: 0 auto
    }

}

@media only screen and (max-width: 600px) {
    .container {
        width: 500px !important;
    }
}

@media only screen and (max-width: 500px) {
    .container {
        width: 400px !important;
    }

    .research_box {
        margin: 0 auto !important;
        margin-top: 20px !important;
    }

    .research {
        background-color: transparent;
    }
}</style>