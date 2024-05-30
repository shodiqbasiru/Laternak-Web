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
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import Card from "primevue/card";
import Dialog from "primevue/dialog";
import FileUpload from "primevue/fileupload";
import InputNumber from "primevue/inputnumber";
import { VueQueryPlugin } from '@tanstack/vue-query'
import DialogService from 'primevue/dialogservice';



const app = createApp(App)
app.use(PrimeVue)
app.use(ToastService)
app.use(router)
app.use(VueQueryPlugin)
app.use(DialogService)

app.component('Dialog',Dialog)
app.component('Card', Card)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)

app.component('Sidebar', Sidebar)
app.component('Menu', Menu)

app.component('Button', Button)
app.component('Password', Password)
app.component('FloatLabel', FloatLabel)
app.component('InputText', InputText)
app.component('InputNumber', InputNumber)
app.component('InputGroup', InputGroup)
app.component('InputGroupAddon', InputGroupAddon)
app.component('FileUpload', FileUpload)

app.component('Toast', Toast)
app.mount('#app')
