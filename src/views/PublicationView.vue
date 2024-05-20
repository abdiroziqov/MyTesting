<template>
    <div>
        <PublicationTop @onChangePrev="onChangePrev" @onChangeNext="onChangeNext" @onChangePage="onChangePage" :page="page" :total_pages="total_pages" :publication="publication" :publicationCategory="publicationCategory"/> 
    </div>
</template>
<script>
import { RouterView } from 'vue-router';
import PublicationTop from '../components/PublicationTop/PublicationTop.vue';
import axios from 'axios';
export default {
    components: { RouterView, PublicationTop },
    data() {
        return {
            publicationCategory: [],
            publication: [],
            page: 1,
            total_pages: 0,
        }
    },
      methods: {
        async fetchPublicationCategory() {
            try {
                const { data } = await axios.get('https://qlapi.stesting.uz/api/v1/publication/category/',)
                const newArr = data.map(item => ({
                    id: item.id,
                    title: item.title,
                    slug: item.slug
                }))
                this.publicationCategory = newArr
            } catch (error) {
                console.log(error);
            }
        },
        async fetchPublication() {
            try {
                const { data } = await axios.get('https://qlapi.stesting.uz/api/v1/publication/', {
                    headers :{
                        'Accept-language': this.$route.params.lan
                    },
                    params: {
                        page: this.page,
                    }
                })
                const dataResult = data.results
                const newArr = dataResult.map(item => ({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    image_url: item.image_url,
                    area: item.get_area_display,
                    category: item.category,
                }))
                this.total_pages = Math.ceil(data.total_pages)
                this.publication = newArr
            } catch (error) {
                console.log(error);
            }
        },
        onChangePage(pageNumber){
            this.page = pageNumber
        },
        onChangePrev(){
            this.page--
        },
        onChangeNext(){
            this.page++
        }
    },
    watch: {
        page(){
            this.fetchPublication()
        }
    },
    mounted(){
        this.fetchPublicationCategory()
        this.fetchPublication()
    }
}
</script>
<style>
    
</style>