<template>
    <div>
        <GuideTop :guide="guide"/>
    </div>
</template>
<script>
import GuideTop from '../components/GuideTop/GuideTop.vue';
import axios from 'axios';

export default {
    components: { GuideTop },
    data() {
        return {
            guide: [],
        }
    },
      methods: {
        async fetchGuide() {
            try {
                const { data } = await axios.get(`https://qlapi.stesting.uz/api/v1/instruction/`, {
                    headers: {
                        'Accept-language': this.$route.params.lan
                    },
                })
                const newArr = data.map(item => ({
                    id: item.id,
                    title: item.title,
                    text: item.text,
                    video: item.video,
                    order: item.order
                }))
                this.guide = newArr

            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.fetchGuide()
    },
}
</script>
<style>
    
</style>