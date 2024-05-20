<template>
    <section class="single-research">
        <div class="container">
            <Box class="box">
                <div>
                    <h3 class="font-bold text-4xl ms-5 pt-2">{{ singleresearch.title }}</h3>
                    <div class="flex items-center ms-5 mt-7">
                        <div class="flex items-center">
                            <i class="fa-regular fa-eye fa-lg" style="color: #808080;"></i>
                            <p class="my-1 text-base ms-2">{{ singleresearch.views }}</p>
                        </div>
                        <div class="flex items-center ms-10">
                            <i class="fa-regular fa-calendar fa-lg" style="color: #808080;"></i>
                            <p class="my-1 text-base ms-2">{{ singleresearch.date }}</p>
                        </div>
                    </div>
                </div>
            </Box>
            <div class="single-research__container">
                <img :src="`${singleresearch.image_url}`" alt="">
                <div class="single-research__content mt-5" v-html="`${singleresearch.content}`">

                </div>
            </div>
            <div class="grid lg:grid-cols-4 gap-4 md:grid-cols-2 mt-10">
                <router-link :to="`${singleData.id}`" v-for="singleData in singleresearchArr" :key="singleData.id"
                    class="research__box bg-white  h-80 shadow-md hover:shadow-lg sm:m-auto">
                    <img class="research-img" :src="`${singleData.image_url}`" alt="">
                    <div class="backdrop-blur h-16 blur-bg flex items-center justify-around">
                        <div class="">
                            <i class="fa-regular fa-eye fa-lg" style="color: #ffffff;"></i>
                            <p class="text-white my-1 text-base	">{{ singleData.views }}</p>
                        </div>
                        <div class="">
                            <i class="fa-regular fa-calendar fa-lg" style="color: #ffffff;"></i>
                            <p class="text-white my-1 text-base	">{{ singleData.date }}</p>
                        </div>
                    </div>
                    <p class="research-link__title">{{ singleData.title.substring(0, 47) }}...</p>
                    <span class="research-link_span">{{ singleData.description.substring(0, 79) }}...</span>
                </router-link>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        singleresearch: {
            type: Object,
            required: true
        },
        singleresearchArr: {
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
.single-research {
    margin-top: 150px !important;
    margin-bottom: 50px
}

.single-research__container {
    margin-left: 200px !important
}

.single-research__content>>>p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    max-width: 840px !important;
    line-height: 30px !important;
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    .single-research__container {
        margin-left: 20px !important
    }

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

    .box {
        height: 150px !important;
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
}
</style>