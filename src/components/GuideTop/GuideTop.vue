<template>
    <section class="guide">
        <div class="container">
            <div
                class="about__container bg-[url('https://stesting.uz/_nuxt/img/guide-bg.79378ab.png')]  bg-no-repeat bg-left-top bg-cover">
                <h3 class="text-center font-bold text-3xl pt-7">{{ langtext[$route.params.lan].guide.guideHeading }}</h3>
                <p class="text-center opacity-50 mt-2">{{ langtext[$route.params.lan].guide.guideDesc }}</p>
            </div>
            <div class="guide__container">
                <div class="bg-white shadow-lg 2xl:flex xl:flex lg:flex md:block sm:block block">
                    <ul class="guide__list">
                        <li v-for="guideData in guide" :key="guideData.id" class="guide__item cursor-pointer text-blue-600">
                            <a @click="() => {
                                currentVideo = guideData
                            }" class="guide__list-link" href="#!" :class="{ 'active': currentVideo === guideData }">{{
                            guideData.title }}</a>
                            <hr class="hr">
                        </li>
                    </ul>
                    <div class="guide-video xl:mt-8 md:mt-8 sm:mt-8 mb-8">
                        <iframe width="700" height="600" :src="getEmbed(currentVideo)" title="" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { Lang } from '../Lan/Lan';


export default {
    props: {
        guide: {
            type: Array,
            required: true
        }
    },
    methods: {
        getEmbed(video) {
            let text = video.text
            let src = ""
            let id = ""
            try {
                src = text.match("(.*)?v=(.*)\\\">")
                if (src == null) {
                    src = text.match("(.*)/embed/(.*)\\\">")
                }
                if (src == null) {
                    src = text.match("(.*)youte.be/(.*)\\\">")
                }

                id = src[2]
                return `https://www.youtube.com/embed/${id}`
            } catch (e) {
                console.log(e);
                return ""

            }
        }
    },
    data() {
        return {
            currentVideo: {},
            langtext: Lang,
        }
    },

    mounted() {

    }
}
</script>
<style scoped>
.guide {
    margin-top: 100px !important;
    margin-bottom: 50px
}

.about__container {
    height: 440px !important;
    /* margin-bottom: 160px !important */
    width: 600px !important;
    margin: 0 auto;
    margin-top: -20px !important;
}

.guide__container {
    margin-top: -300px !important;
    margin-left: 50px
}

.guide__list {
    padding: 10px 20px !important
}

.hr {
    margin-top: 10px;
}

.guide__item {
    color: #161c27;
    font-family: 'Poppins';
    width: 250px;
    margin-top: 15px !important;
    transition: all 0.4s
}

.guide__item:hover {
    opacity: 0.6;
    transition: all 0.4s
}

.active {
    color: #4f95ff !important
}

.guide__item .active:hover {
    color: #4f95ff !important
}

@media only screen and (max-width: 1020px) {
    iframe {
        width: 650px !important;
        margin: 0 auto
    }
}

@media only screen and (max-width: 768px) {
    iframe {
        width: 500px !important;
        /* margin: 0 auto; */
        margin-left: 10px !important
    }

    .about__container {
        background-image: none !important;
    }

    .guide__container {
        background-image: none !important;
        margin-left: -10px;
    }

    .bg-white {
        width: 450px !important
    }
}

@media only screen and (max-width: 640px) {
    iframe {
        width: 400px !important;
        margin: 0 auto
    }
}

@media only screen and (max-width: 545px) {
    .container {
        width: 500px !important
    }
}

@media only screen and (max-width: 500px) {
    .container {
        width: 400px !important
    }

    .about__container {
        width: 400px !important
    }

    .bg-white {
        width: 350px !important
    }
}
</style>