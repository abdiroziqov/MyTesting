<template>
  <div>
    <Header :headerdata="dataArr1.list" :logo="dataArr1.logo" :fetchFunc="fetchHeader" />
    <router-view />
    <div style="margin-top: 200px !important;">
      <FooterSection :footerinfo="footerinfo" />
      <FooterBottom :footerinfo="footerinfo" :headerdata="dataArr1.list" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import axios from "axios"
import { RouterView } from 'vue-router'
import FooterSection from './components/FooterSection/FooterSection.vue'
import FooterBottom from './components/footerBottom/footerBottom.vue'

export default {
  components: {
    Header,
    FooterSection,
    RouterView,
    FooterBottom,
  },
  data() {
    return {
      footerinfo: {},
      dataArr1: {
        list: [],
        logo: "",
      },
    }
  },
  methods: {
    async fetchHeader(lang = null) {
      if (lang == null) {
        lang = this.$route.params.lan
      }
      try {
        const { data } = await axios.get('https://qlapi.stesting.uz/api/v1/menu/', {
          headers: {
            'Accept-Language': lang
          },
        })

        this.footerinfo = data.footer.footer_info
        const dataArr = data.header_menu

        // Remove items with id 5 and 3
        const filteredArr = dataArr.filter(item => item.id !== 5 && item.id !== 3)

        const newArr = filteredArr.map(item => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          url: item.url
        }))
        this.dataArr1.list = newArr
        this.dataArr1.logo = data.logo_url

      } catch (error) {
        console.error("Error fetching header data", error);
      }
    }
  },
  created() {
    setTimeout(() => {
      this.fetchHeader()
    }, 0);
  }
}
</script>



<style>
.tranform-default {
  transform: rotate(270deg);
  /* margin-top: -300px; */
  margin-left: -80px; 
  position: fixed;
  top: 500px !important;
  bottom: 300px !important
}

@media only screen and (max-width: 640px) {
    .tranform-default{
      display: none !important;
    }
}
</style>
