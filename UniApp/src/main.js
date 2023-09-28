//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './Routes'
createApp(App).use(router).mount('#app')

//Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//icons
import {aliases,mdi} from "vuetify/lib/iconsets/mdi";
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    icons: {
        defaultSet:"mdi",
        aliases,
        sets:{
            mdi
        }},
        components,
        directives,
    })
createApp(App).use(vuetify).mount('#app')




