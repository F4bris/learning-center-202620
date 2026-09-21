import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primmevue/config';
import Material from '@primeuix/themes/material';
import 'primeflex/primeflex.css';
import 'primicons/primeicons.css';
import ToolTip from 'primevue/ToolTip';
import i18n from "./i18n.js";
import router from "./router.js";


const primeVueLicenseKey = import.meta.env.VITE_PRIME_UI_LICENSE_KEY;
createApp(App)
    .use(PrimeVue, {theme:{preset:Material}, ripple: true, license: primeVueLicenseKey})
    .use(i18n)
    .use(router)
    .mount('#app')
