<template>
    <section class="publicaton-top">
        <div class="container publication__container">
            <Box>
                <div class="publicaton-top__left pt-7 ms-5">
                    <span class="text-4xl font-semibold">{{ langtext[$route.params.lan].publications.publicationsHeading }}</span>
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
                    <!-- <select class="select bg-white 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-96 outline-none h-10 border 2xl:mr-5 xl:mr-5 lg:mr-5 md:ml-5 md:mt-5 sm:ms-5 sm:mt-5  border-sky-500    ">
                        <option value="">Barchasi</option>
                        <option class="barchaso" v-for="publicData in publication" :key="publicData.id" value="">
                            {{ publicData.title }}</option>
                    </select> -->
                    <div
                        class="select bg-white 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-96 outline-none h-10 border 2xl:mr-5 xl:mr-5 lg:mr-5 md:ml-5 md:mt-5 sm:ms-5 sm:mt-5  border-sky-500    ">
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
                                    <li v-for=" publicData  in  publicationCategory " :key="publicData.id"
                                        class="px-3 py-2 text-sm duration-300 hover:bg-gray-200" @mousedown="() => {
                                            international = publicData.title
                                            setOption(!isOptionsExpanded)
                                        }
                                            ">
                                        {{ publicData.title }}
                                    </li>
                                </ul>
                            </transition>
                        </div>
                    </div>
                </div>
            </Box>
            <Card class="mt-10 mb-10" v-for=" publicationAll  in  publication " :key="publicationAll.id">
                <div v-if="publicationAll.area === international || international === 'all' || international === publicationAll.category"
                    class="2xl:flex xl:flex 2xl:flex lg:flex md:block sm:block p-5">
                    <img class="mt-6 ms-5" :src="`${publicationAll.image_url}`" alt="" width="150" height="147">
                    <div class="ms-10 flex-direction ">
                        <h1 class="text-2xl font-bold max-w-xl text-2xl	m-0 p-0">{{ publicationAll.title }}</h1>
                        <p class="text-lg opacity-75 mt-2" v-html="`${publicationAll.description}`"></p>
                        <PrimaryButton class="fixedbutton">
                            <a :href="`${publicationAll.file_url}`">
                                Yuklab olish
                            </a>
                        </PrimaryButton>
                    </div>
                </div>
            </Card>
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
                            <a v-for=" pageNumber  in  total_pages " :key="pageNumber"
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
import Card from '../../ui-components/Card.vue';
import CategoryButton from '../../ui-components/CategoryButton.vue';
import { Lang } from '../Lan/Lan';


export default {
    components: { CategoryButton, Card },
    props: {
        publicationCategory: {
            type: Array,
            required: true
        },
        publication: {
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
.publicaton-top {
    margin-top: 100px !important
}

span {
    font-family: "Poppins";
    color: #161c27
}

select option:checked,
option:hover {
    background-color: gray !important;
    color: white;
    padding: 20px !important;
}

h1,
p {
    font-family: sans-serif;
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

.fixedbutton {
    width: 300px;
    margin-top: 20px !important
}

.span-white {
    color: white !important
}

.span-white:hover {
    color: white !important
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