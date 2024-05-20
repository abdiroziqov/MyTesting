<template>
    <div>
        <ResearchTop @onChangePrev="onChangePrev" @onChangeNext="onChangeNext" @onChangePage="onChangePage" :page="page" :total_pages="total_pages" :researchCategory="researchCategory" :research="research"/>
    </div>
</template>
<script>
import ResearchTop from '../components/ResearchTop/ResearchTop.vue';
import axios from 'axios';
export default {
    components: {
        ResearchTop
    },
    data() {
        return {
            research: [],
            researchCategory: [],
            total_pages: 0,
            page: 1
        }
    },
      methods: {
        async fetchResearchCategory() {
            try {
                const { data } = await axios.get('http://qlapi.stesting.uz/api/v1/research/research-category/', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                const newArr = data.map(item => ({
                    id: item.id,
                    title: item.title,
                    slug: item.slug
                }))
                this.researchCategory = newArr
            } catch (error) {
                console.log(error);
            }
        },
        async fetchResearch() {
            try {
                const { data } = await axios.get('https://qlapi.stesting.uz/api/v1/research/', {
                    headers: {
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
                    date: item.date,
                    views: item.views,
                }))
                this.total_pages = Math.ceil(data.total_pages)
                this.research = newArr
            } catch (error) {
                console.log(error);
            }
        },
        onChangePage(pageNumber) {
            this.page = pageNumber
        },
        onChangePrev() {
            this.page--
        },
        onChangeNext() {
            this.page++
        }
    },
    mounted(){
        this.fetchResearch(),
        this.fetchResearchCategory()
    }
}
</script>
<style scoped>
    
</style>