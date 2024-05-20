<template>
  <section class="about">
    <div class="">
      <AboutTop :aboutus="aboutus" />
    </div>
  </section>
</template>
<script>
import AboutTop from '../components/AboutTop/AboutTop.vue';
import axios from 'axios';
export default {
  components: {
    AboutTop
  },
  data() {
    return {
      aboutus: {},
    }
  },
  methods: {
    async fetchAboutus() {
      const { data } = await axios.get('https://qlapi.stesting.uz/api/v1/aboutus/', {
        headers: {
          'Accept-language': this.$route.params.lan
        },
      })
      this.aboutus = data
    }
  },
  mounted() {
    this.fetchAboutus()
  }
}
</script>
<style scoped></style>
