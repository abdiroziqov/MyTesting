import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Autocounter from 'vue3-autocounter';
import uiComponents from './ui-components'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Vuex from "vuex";

const app = createApp(App)
    .component('vue3-autocounter', Vue3Autocounter)

uiComponents.map(component => {
    app.component(component.name, component)
})

app.use(router)

app.mount('#app')
