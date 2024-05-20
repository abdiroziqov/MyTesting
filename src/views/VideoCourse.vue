<template>
    <div>
        <video-course-top @onChangePage="onChangePage" :total_pages="total_pages" :page="page" @onChangePrev="onChangePrev" @onChangeNext="onChangeNext" :videoCourse="videoCourse"
            :videoCourseCategory="videoCourseCategory" />
    </div>
</template>
<script>
import VideoCourseTop from '../components/VideoCourseTop/VideoCourseTop.vue';
import axios from 'axios';
export default {
    components: {
        VideoCourseTop,
    },
    data() {
        return {
            videoCourseCategory: [],
            videoCourse: [],
            total_pages: 0,
            page: 1
        }
    },
    methods: {
        async fetchVideoCourseCategory() {
            try {
                const { data } = await axios.get('https://qlapi.stesting.uz/api/v1/videocourse/videocourse-category/',)
                const newArr = data.map(item => ({
                    id: item.id,
                    title: item.title,
                    slug: item.slug
                }))
                this.videoCourseCategory = newArr
            } catch (error) {
                console.log(error);
            }
        },
        async fetchVideoCourse() {
            try {
                const { data } = await axios.get('https://qlapi.stesting.uz/api/v1/videocourse/', {
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
                    video: item.video,
                    views: item.views,
                    direction: item.direction,
                    date: item.date,
                    get_courses_display: item.get_courses_display,
                }))
                this.videoCourse = newArr
                this.total_pages = Math.ceil(data.total_pages)

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

    watch: {
        page() {
            this.fetchVideoCourse()
        }
    },
    mounted() {
        this.fetchVideoCourse()
        this.fetchVideoCourseCategory()
    },
}
</script>
<style></style>