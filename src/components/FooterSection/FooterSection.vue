<template>
    <section class="footer bg-[url('https://stesting.uz/footerbg.png')] bg-no-repeat w-full bg-cover h-96">
        <div class="container footer__container 2xl:flex xl:flex lg:flex md:block sm:block items-center justify-between">
            <div class="footer__container">
                <h3 class="mt-12 text-4xl text-white font-bold">Bogʻlaning</h3>
                <div class="mt-10">
                    <p class="text-white font-normal opacity-50">Manzil</p>
                    <p class="text-white text-lg mt-2 max-w-md">Toshkent shahri, Islom Karimov ko‘chasi 49</p>
                </div>
                <div class="mt-7">
                    <p class="text-white font-normal opacity-50">Elektron Pochta</p>
                    <a :href="`mailto:info@tsue.uz`">
                        <p class="text-white text-lg mt-2">info@tsue.uz</p>
                    </a>
                </div>
                <div class="mt-7">
                    <p class="text-white font-normal opacity-50">Telefon Raqami</p>
                    <a :href="`tel:+998 71 239 28 66`">
                        <p class="text-white text-lg mt-2">+998 71 239 28 66</p>
                    </a>
                </div>
            </div>
          <iframe  class="iframe" width="500" height="315" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.9106423939415!2d69.24942089999999!3d41.310807499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b057e077235%3A0xfbc9d27281266e15!2sToshkent%20Davlat%20Iqtisodiyot%20Universtiteti%2C%20O&#39;zbekiston%20shoh%20ko&#39;chasi%2049%2C%20100003%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent!5e0!3m2!1suz!2s!4v1716227378154!5m2!1suz!2s" />
        </div>
    </section>
</template>
<script>
export default {
    props: {
        footerinfo: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
.footer h3 {
    font-family: "Poppins"
}

.footer p {
    font-family: "Poppins"
}

@media only screen and (max-width: 1020px) {
    .footer {
        height: 800px !important;
    }
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
@media only screen and (max-width: 445px) {
    .container {
        width: 350px !important;
    }

    .footer{
       width: 450px !important
    }
    .footer__container{
        margin-left: -60px
    }
    .iframe{
        margin-left: -60px;
        width: 350px !important
    }
}
</style>