import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/Router'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import ToastService from "primevue/toastservice"
import Toast from "primevue/toast";
import FloatLabel from "primevue/floatlabel";
import Password from "primevue/password";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import Sidebar from "primevue/sidebar";
import Menu from "primevue/menu";

const app = createApp(App)
app.use(PrimeVue)
app.use(ToastService)
app.use(router)

app.component('Sidebar', Sidebar)
app.component('Menu', Menu)

app.component('Button', Button)
app.component('Password', Password)
app.component('FloatLabel', FloatLabel)
app.component('InputText', InputText)
app.component('InputGroup', InputGroup)
app.component('InputGroupAddon', InputGroupAddon)

app.component('Toast', Toast)
app.mount('#app')
