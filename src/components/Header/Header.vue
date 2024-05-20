<template>
    <div>
        <header class="header bg-white shadow-md">
            <div class="container flex items-center justify-between">
                <!-- RESPONSIVE -->
                <div>
                    <div class="flex items-center">
                        <button @click="() => { isOpen = !isOpen }" class="hidden nav-hamburger">
                            <img class="nav-hamburger-img" v-if="isOpen === false" src="../../assets/img/hamburger-menu.svg"
                                alt="" width="40" height="40">
                            <img class="nav-hamburger-img" v-if="isOpen === true" src="../../assets/img/close.svg" alt=""
                                width="40" height="40">
                        </button>
                        <RouterLink to="/" class="sm:ms-10 md:mb-2">
                            <img class="header__logo" src="/public/logo.svg" alt="image" width="130" height="28">
                        </RouterLink>
                    </div>
                    <nav :class="isOpen ? 'block' : 'hidden'">
                        <div class="responsive-menu">
                            <ul class="hamburger__list ms-6 w-full">
                                <li class="hamburger__item" v-for="data in headerdata" :key="data.id">

                                  <pre>{{data}}</pre>
                                    <router-link class="hamburger__link" :to="`/${$route.params.lan}/${data.url}`">{{
                                        data.title
                                    }}</router-link>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>

                <!-- RESPONSIVE END -->
                <nav class="sitenav">
                    <ul class="list">
                        <li class="item" v-for="data in headerdata" :key="data.id">
                            <router-link class="link text-black" :to="`/${$route.params.lan}/${data.url}`">{{ data.title
                            }}</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
</template>
<script>

import { RouterLink, RouterView } from 'vue-router';
import axios from "axios"
import { Lang } from '../Lan/Lan';

export default {
    props: {
        fetchFunc: {
            type: Object,
            required: true,
        },
        headerdata: {
            type: Object,
            required: true
        },
        logo: {
            type: String,
            required: false
        },
    },

    data() {
        return {
            isOpen: false,
            active: "none",
            langtext: Lang,
        };
    },

}
</script>
<style scoped>
/* HEADER */
.header__btn {
    padding: 12px 65px;
    background-color: #4f95ff;
    color: white;
    transition: all 0.4s;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
}

.header__btn:hover {
    background-color: #007bff;
    transition: all 0.4s
}

.header {
    z-index: 5;
    display: flex;
    padding: 20px 0px;
    position: fixed;
    top: 0;
    width: 100vw !important;
}

.list {
    display: flex !important;
    list-style: none
}

.item {
    margin-left: 16px
}

.sitenav {
    display: flex;
    align-items: center;
    justify-content: space-between
}

.link {
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    transition: all 0.4s;
    font-size: 15px
}

.link:hover {
    opacity: 0.7;
    transition: all 0.4s
}

.router-link-active {
    color: #007bff
}


/* HEADER END */

/* DROPDOWN */

.dropdown-heading {
    text-decoration: none;
    color: #161c27;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    transition: all 0.4s;
    font-size: 15px
}

.dropdown:hover .dropdown-menu {
    display: block;
}

.dropdown-item {
    margin-top: -6px
}

.dropdown-heading:hover {
    color: #4f95ff !important;
    transition: all 0.4s
}

/* DROPDOWN END */

/* HAMBURGER */

.responsive-menu {
    position: absolute;
    background-color: white;
    height: 786px;
    width: 100vw !important;
    padding: 50px 0px 0px;
    transition: all 0.4s;
    left: 0;
}

.hamburger__link {
    text-decoration: none;
    color: #161c27;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    transition: all 0.4s;
    font-size: 22px;
    text-transform: uppercase;
}

.hamburger__item {
    margin-top: 30px
}

/* HAMBURGER END */


/* RESPONSIVE CSS */
@media only screen and (max-width: 1200px) {
    .header__btn {
        padding: 12px 32px !important;
    }
}

@media only screen and (max-width: 1020px) {

    .nav-hamburger {
        display: block
    }

    .sitenav {
        display: none !important;
    }

    .dropdown-heading {
        text-decoration: none;
        color: #161c27;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        transition: all 0.4s;
        font-size: 22px;
        text-transform: uppercase;
        margin-left: -30px;
        /* margin-top: 30px */
    }

    .btn-dropdown {
        margin-top: 30px !important
    }
}

@media only screen and (max-width: 640px) {
    .header__logo {
        margin-left: 30px !important
    }
}

@media only screen and (max-width: 445px) {
    .header {
        width: 445px !important
    }
}

@media only screen and (max-width: 375px) {
    .header__btn {
        padding: 8px 28px !important;
    }

    .nav-hamburger-img {
        width: 30px !important;
        height: 30px !important;
    }
}

/* RESPONSIVE CSS END */
</style>