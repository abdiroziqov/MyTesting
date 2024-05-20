<template>
    <section class="video-lesson my-20">
        <div
            class="container 2xl:flex xl:flex lg:flex md:block sm:block justify-between video-lesson__container lg:bg-[url('https://stesting.uz/playerbg.png')] bg-no-repeat bg-left-top sm:bg-none">
            <iframe class="iframe" width="500" height="315" :src="`${main_video.video}`" />
            <div class="video-lesson__right">
                <p class="text-4xl font-semibold mt-10 video-lesson__heading">{{
                    langtext[$route.params.lan].homePage.videoCourseHeading }}</p>
                <p class="max-w-md text-lg font-normal opacity-50 video-lesson__desc">{{
                    langtext[$route.params.lan].homePage.videoCourseDesc }}</p>
                <PrimaryButton class="mt-10" to="/uz/tutorials">
                    {{ langtext[$route.params.lan].homePage.videoCourseBtn }}
                </PrimaryButton>
            </div>
        </div>
    </section>
</template>
<script>
import PrimaryButton from '../../ui-components/PrimaryButton.vue';
import { Lang } from '../Lan/Lan';


export default {
    components: { PrimaryButton },
    props: {
        main_video: {
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
.video-lesson__heading {
    font-family: "Poppins";
    /* margin-top: -40px !important; */
    /* position: absolute; */
}

.video-lesson__desc {
    font-family: "Poppins";
    /* margin-top: -10px; */
}

@media only screen and (max-width: 640px) {
    .container {
        width: 600px !important;
    }
}

@media only screen and (max-width: 600px) {
    .container {
        width: 500px !important;
    }

    .iframe {
        width: 400px !important;
    }
}

@media only screen and (max-width: 500px) {
    .container {
        width: 400px !important;
    }
}
</style>