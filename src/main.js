import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import PrimeVue from 'primmevue/config';
import Material from '@primeuix/themes/material';
import 'primeflex/primeflex.css';
import 'primicons/primeicons.css';
import ToolTip from 'primevue/tooltip';
import i18n from "./i18n.js";
import router from "./router.js";
import pinia from "./pinia.js";


const primeVueLicenseKey = import.meta.env.VITE_PRIME_UI_LICENSE_KEY;
createApp(App)
    .use(PrimeVue, {theme:{preset:Material}, ripple: true, license: primeVueLicenseKey})
    .use(i18n)
    .use(router)
    .use(pinia)
    .mount('#app')
