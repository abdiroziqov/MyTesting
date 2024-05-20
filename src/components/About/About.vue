<template>
    <section class="about my-20">
        <div class="container about__container flex items-center justify-between">
            <div class="about-headings__box">
                <h3 class="about__heading">MyTesting {{ langtext[$route.params.lan].homePage.aboutHeading2 }}</h3>
                <img class="about__img" src="https://stesting.uz/wrap2.png" alt="" width="90" height="27">
            </div>
            <p class="about__desc opacity-75">MyTesting – bu o‘quvchilarni xalqaro PISA, TIMSS, PIRLS tadqiqotlariga tayyorgarlik ko‘rishi uchun sinov platformasidir. “MyTesting”platformasi xalqaro tadqiqotlardan muvaffaqiyatli o'tishga yordam beradi. Topshiriqlar formati bilan tanishing, ularni bajaring, bilimlaringizni sinang va charxlang! “MyTesting” sizning doimiy do‘stingiz! U bilan siz yuqori natijalarga erishasiz!</p>
            <router-link :to="`${$route.params.lan}/about`">
                <PrimaryButton class="my-5">
                    {{langtext[$route.params.lan].homePage.aboutBtn }}
                </PrimaryButton>
            </router-link>
        </div>
    </section>
</template>
<script>
import PrimaryButton from '../../ui-components/PrimaryButton.vue';
import { RouterLink, RouterView } from 'vue-router';
import { Lang } from '../Lan/Lan';

export default {
    props: {
        short_description: {
            type: Object,
            required: true
        },
        statistics: {
            type: Object,
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
.about__container {
    background-image: linear-gradient(90deg, #fff 9%, #f8fbff 0 95%, #fff 95%);
}

.about__desc {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #161c27;
    font-weight: 400;
    max-width: 482px;
    line-height: 28px !important;
}

.about__heading {
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    color: #161c27;
    font-weight: 600;
    line-height: 35px !important;
}

.about__heading2 {
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    color: #161c27;
    font-weight: 600;
    line-height: 35px !important;
}

.about__img {
    margin-left: 120px
}

@media only screen and (max-width: 1020px) {
    .about__heading {
        font-size: 26px !important;
    }

    .about__desc {
        font-size: 14px
    }
}

@media only screen and (max-width: 770px) {
    .about__container {
        display: block
    }

    .about__heading {
        display: none;
        font-size: 26px !important;
    }

    .about__heading2 {
        display: block;
        font-size: 26px !important;

    }

    .container {
        width: 500px !important;
        margin: 0 auto
    }
}

@media only screen and (max-width: 500px) {
    .container {
        width: 450px !important
    }

    .about__desc {
        font-size: 14px
    }
}

@media only screen and (max-width: 445px) {
    .container {
        width: 400px !important
    }
}

@media only screen and (max-width: 375px) {
    .header__btn {
        padding: 8px 28px !important;
    }

    .nav-hamburger-img {
        width: 30px !important;
        height: 30px !important;
    }
}</style>