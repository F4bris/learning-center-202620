import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primmevue/config';
import Material from '@primeuix/themes/material';
import 'primeflex/primeflex.css';
import 'primicons/primeicons.css';
import ToolTip from 'primevue/ToolTip';


const primeVueLicenseKey = import.meta.env.VITE_PRIME_UI_LICENSE_KEY;
createApp(App)
    .use(PrimeVue, {theme:{preset:Material}, ripple: true, license: primeVueLicenseKey})
    .mount('#app')
