<template>
    <div>
        <single-research :singleresearch="singleresearch" :singleresearchArr="singleresearchArr"/>
    </div>
</template>
<script>    

import SingleResearch from '../components/SingleResearch/SingleResearch.vue';
import axios from 'axios';

export default {
    components: {
        SingleResearch
    },
    data() {
        return {
            singleresearch:{},
            singleresearchArr: [],
        }
    },
    methods: {
          async fetchResearch() {
            try {
                const { data } = await axios.get(`https://qlapi.stesting.uz/api/v1/research/${this.$route.params.id}/`, {
                    headers: {
                        'Accept-language': this.$route.params.lan
                    },
                })
                this.singleresearch = data
                const dataResult = data.related
                const newArr = dataResult.map(item => ({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    get_area_display: item.get_area_display,
                    image_url: item.image_url,
                    views: item.views,
                    date: item.date
                })) 
                this.singleresearchArr = newArr
                console.log(this.singleresearch);
                
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.fetchResearch()
    },
}
</script>
<style>
    
</style>