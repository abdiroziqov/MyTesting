<template >
    <section class="research">
        <div class="container research__container">
            <Box>
                <div class="publicaton-top__left pt-7 ms-5">
                    <span class="text-4xl font-semibold">{{ langtext[$route.params.lan].research.researchHeading }}</span>
                </div>
                <div class="2xl:flex xl:flex lg:flex md:block sm:block items-center justify-between mt-2">
                    <div class="2xl:flex xl:flex lg:flex md:flex sm:block">
                        <div>
                            <CategoryButton :class="{ 'bg-sky-500 span-white': international === 'XALQARO' }" @click="() => {
                                international = 'XALQARO'
                            }" class="ml-5 btn-category">
                                {{ langtext[$route.params.lan].publications.publicationsInternational }}
                            </CategoryButton>
                        </div>
                        <div>
                            <CategoryButton :class="{ 'bg-sky-500 span-white': international === 'MILLIY' }" @click="() => {
                                international = 'MILLIY'
                            }" class="ml-5 btn-category">
                                {{ langtext[$route.params.lan].publications.publicationsNational }}
                            </CategoryButton>
                        </div>
                    </div>
                    <div
                        class="select z-10 bg-white 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-96 outline-none h-10 border 2xl:mr-5 xl:mr-5 lg:mr-5 md:ml-5 md:mt-5 sm:ms-5 sm:mt-5  border-sky-500    ">
                        <div class="relative text-lg">
                            <button class="flex items-center justify-between px-3 py-2 bg-white w-full  rounded-lg"
                                @click="isOptionsExpanded = !isOptionsExpanded" @blur="isOptionsExpanded = false">
                                <span class="text-sm opacity-50">
                                    <span v-if="international === 'all'">
                                        {{ langtext[$route.params.lan].publications.publicationsFilterHeading }}
                                    </span>
                                    <span v-else>
                                        {{ international }}
                                    </span>
                                </span>
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    class="h-4 w-4 transform transition-transform duration-200 ease-in-out"
                                    :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <transition enter-active-class="transform transition duration-500 ease-custom"
                                enter-class="-translate-y-1/2 scale-y-0 opacity-0"
                                enter-to-class="translate-y-0 scale-y-100 opacity-100"
                                leave-active-class="transform transition duration-300 ease-custom"
                                leave-class="translate-y-0 scale-y-100 opacity-100"
                                leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
                                <ul v-show="isOptionsExpanded"
                                    class="absolute list_box left-0 right-0 mb-4 mt-2 bg-white rounded shadow-lg overflow-hidden border">
                                    <li @mousedown="() => {
                                        international = 'all'
                                    }" class="px-3 py-2 text-sm duration-300 hover:bg-gray-200">
                                        {{ langtext[$route.params.lan].publications.publicationsFilterAll }}
                                    </li>
                                    <li v-for="researchData in researchCategory " :key="researchData.id"
                                        class="px-3 py-2 text-sm duration-300 hover:bg-gray-200" @mousedown="() => {
                                            international = videoCourseData.title
                                            setOption(!isOptionsExpanded)
                                        }
                                            ">
                                        {{ researchData.title }}
                                    </li>
                                </ul>
                            </transition>
                        </div>
                    </div>
                </div>
            </Box>
            <div class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-2">
                <router-link v-for="data in research" :key="data.id" class="" :to="`news/${data.id}`">
                    <div class="research__box bg-white  h-80 shadow-md hover:shadow-lg sm:m-auto"
                        v-if="data.area === international || international === 'all' || international === data.category"
                        :class="{ 'h1-hidden': data.category.length === 0 }">
                        <img class="research-img" :src="`${data.image_url}`" alt="">
                        <div class="backdrop-blur h-16 blur-bg flex items-center justify-around">
                            <div class="">
                                <i class="fa-regular fa-eye fa-lg" style="color: #ffffff;"></i>
                                <p class="text-white my-1 text-base	">{{ data.views }}</p>
                            </div>
                            <div class="">
                                <i class="fa-regular fa-calendar fa-lg" style="color: #ffffff;"></i>
                                <p class="text-white my-1 text-base	">{{ data.date }}</p>
                            </div>
                        </div>
                        <p class="research-link__title">{{ data.title.substring(0, 47) }}...</p>
                        <span class="research-link_span">{{ data.description.substring(0, 79) }}...</span>
                    </div>
                </router-link>
                <div class="hidden">
                    <h1>Info yo'q</h1>
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
                            <a v-for="pageNumber in total_pages " :key="pageNumber"
                                :class="{ 'bg-sky-700 span-white': pageNumber == page }"
                                @click="$emit('onChangePage', pageNumber)"
                                class="relative z-10 cursor-pointer inline-flex items-center bg-white-600 px-4 py-2 text-sm font-semibold text-sky-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:out   line-sky-600 border">{{
                                    pageNumber }}</a>
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
import { RouterLink } from 'vue-router';
import { Lang } from '../Lan/Lan';

export default {
    props: {
        researchCategory: {
            type: Array,
            required: true
        },
        research: {
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
            langtext: Lang,
        };
    },
    methods: {
        setOption(option) {
            this.selectedOption = option;
            this.isOptionsExpanded = false;
        },
    }
}
</script>
<style scoped>
.research {
    margin-top: 100px !important
}

.research__box {
    width: 226px !important;
    margin-bottom: 30px
}

.h1-hidden {
    display: block !important
}

.research-img {
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 226px;
    height: 170px;
    -o-object-fit: cover;
    object-fit: cover
}

.research-link__title {
    font-family: "Poppins";
    font-weight: 600;
    color: #161c27;
    font-size: 14px;
    margin: 0;
    padding: 0;
    margin-left: 10px;
    margin-top: 20px;
    max-width: 500px;
    line-height: 20px !important;
}

.research-link_span {
    font-size: 14px;
    color: #73777d;
    font-family: "Poppins";
    font-weight: 400;
    margin-left: 10px !important;
    max-width: 220px !important;
    line-height: 23px;
    position: absolute;
}

.blur-bg {
    margin-top: -60px !important
}

.backdrop-blur p {
    font-family: "Poppins";
    font-weight: 400;
}

.span-white {
    color: white !important
}

.span-white:hover {
    color: white !important
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

    .research__box {
        width: 400px !important;
    }

    .research-img {
        width: 400px !important
    }
}

@media only screen and (max-width: 600px) {
    .container {
        width: 500px !important;
    }

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
}

@media only screen and (max-width: 500px) {
    .container {
        width: 400px !important;
    }

    .research_box {
        margin: 0 auto !important;
        margin-top: 20px !important;
    }

    .research {
        background-color: transparent;

    }
}
</style>