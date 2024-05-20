<template>
    <section class="publicaton-top">
        <div class="container publication__container">
            <Box>
                <div class="publicaton-top__left pt-7 ms-5">
                    <span class="text-4xl font-semibold">{{ langtext[$route.params.lan].videocourse.videocourseHeading }}</span>
                </div>
            </Box>
            <div class="main-video__container grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-3">
                <div @click="onToggle" v-for="videoCourseData in videoCourse" :key="videoCourseData.id" class="">
                    <a :href="`${videoCourseData.video}`" target="_blank"
                        v-if="videoCourseData.get_courses_display === international || international === 'all' || international === videoCourseData.direction"
                        class="main-video__box shadow-md h-80 flex-direction mt-5 cursor-pointer">
                        <span class="direction bg-neutral-500 p-3 w-16 ms-5 mt-3 absolute text-white">{{
                            videoCourseData.direction }}</span>
                        <div class="gradient">
                            <img class="mt-2" src="../../assets/img/videocover.png" alt="">
                        </div>
                        <div class="backdrop-blur rounded-full absolute mt-20 flex items-center justify-center border">
                            <i class="fa-solid fa-play" style="color: #ffffff;"></i>
                        </div>
                        <p class="font-bold ms-5 text-cyan-950	mt-7">{{ videoCourseData.title }}</p>
                        <div class="h-16 blur-bg flex items-center justify-around">
                            <div class="flex items-center">
                                <i class="fa-regular fa-eye fa-lg" style="color: #808080;"></i>
                                <p class="text-cyan-950	 my-1 text-base	ms-3">{{ videoCourseData.views }}</p>
                            </div>
                            <div class=" flex items-center">
                                <i class="fa-regular fa-calendar fa-lg" style="color: #808080;"></i>
                                <p class="text-cyan-950	 my-1 text-base	ms-3">{{ videoCourseData.date }}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="flex items-center justify-between bg-white px-4 py-3 sm:px-6">

                <div class="sm:flex sm:flex-1 sm:items-center sm:justify-end">

                    <div>
                        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            <a @click="$emit('onChangePrev')"
                                class="relative cursor-pointer inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                <span class="sr-only">Previous</span>
                                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                            <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                            <div v-for="pageNumber in total_pages " :key="pageNumber">

                                <a v-if="pageNumber < page + 3 && pageNumber > page - 3 || (page < 5 && pageNumber <= 5)"
                                    @click="$emit('onChangePage', pageNumber)"
                                    :class="{ 'bg-sky-700 span-white': pageNumber == page }"
                                    class="relative z-10 cursor-pointer inline-flex items-center bg-white-600 px-4 py-2 text-sm font-semibold text-sky-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:out   line-sky-600 border">{{
                                        pageNumber }}</a>

                            </div>
                            <a @click="$emit('onChangeNext')"
                                class="relative cursor-pointer inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Card from '../../ui-components/Card.vue';
import CategoryButton from '../../ui-components/CategoryButton.vue';
import { Lang } from '../Lan/Lan';

export default {
    components: { CategoryButton, Card, },
    props: {
        videoCourseCategory: {
            type: Array,
            required: true
        },
        videoCourse: {
            type: Array,
            required: true
        },
        total_pages: {
            type: Array,
            required: true
        },
        page: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            isOptionsExpanded: false,
            selectedOption: "1x",
            options: ["1x", "2x", "3x", "4x or more"],
            international: "all",
            filterSelect: "Barcha yo'nalishlar",
            isOpen: true,
            pagination: "...",
            langtext: Lang,

        };
    },

    computed: {
        isModalVisible() {
            return this.isOpen;
        }
    },
    methods: {
        setOption(option) {
            this.selectedOption = option;
            this.isOptionsExpanded = false;
        },
        onToggle() {
            this.isOpen = !this.isOpen;
        }
    }
}
</script>
<style scoped>
.publicaton-top {
    margin-top: 100px !important
}

.main-video__container {
    margin-left: 60px
}

.main-video__box {
    width: 311px !important
}

.gradient {
    background: linear-gradient(180deg, rgba(22, 28, 39, .6), rgba(22, 28, 39, 0));
}

span {
    font-family: "Poppins";
}

select option:checked,
option:hover {
    background-color: gray !important;
    color: white;
    padding: 20px !important;
}

.list_box {
    border-radius: 0px 15px 15px 15px
}

img {
    position: relative;
}

.flex-direction {
    -webkit-flex-direction: column !important;
    display: flex;
    flex-direction: column !important;
    justify-content: space-between !important;
}

.flex-direction {
    -webkit-flex-direction: column !important;
    display: flex;
    flex-direction: column !important;
    justify-content: space-between !important;
}

.span-white {
    color: white
}

.span-white:hover {
    color: white
}

.backdrop-blur {
    width: 50px;
    height: 50px;
    margin-left: 130px
}


@media only screen and (max-width: 1020px) {
    .flex-direction {
        margin-left: 20px !important;
        margin-top: 20px
    }

    .flex-direction p {
        margin-top: 10px !important
    }
}

@media only screen and (max-width: 768px) {
    .select {
        margin-left: 15% !important
    }

    .btn-category {
        margin-left: 15% !important;
        width: 384px !important;
        margin-top: 20px
    }
}

@media only screen and (max-width: 640px) {
    .select {
        width: 384px !important;
        margin-top: 20px
    }

    .btn-category {
        margin-left: 15% !important;
        width: 384px !important;
        margin-top: 20px
    }
}

@media only screen and (max-width: 600px) {
    .select {
        width: 300px !important;
        margin-top: 20px;
        margin-left: 20px !important
    }

    .btn-category {
        margin-left: 20px !important;
        width: 300px !important;
        margin-top: 20px
    }

    .main-video__container {
        margin-left: -10px
    }
}

@media only screen and (max-width: 500px) {
    .container {
        width: 400px !important
    }

    .fixedbutton {
        width: 250px !important;
    }

}
</style>