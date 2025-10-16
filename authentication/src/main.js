import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyD3EjmMW7DW0IZDU_MHcfza-9j7g8MCDd0",
    authDomain: "curso-vue-88b39.firebaseapp.com",
    projectId: "curso-vue-88b39",
    storageBucket: "curso-vue-88b39.firebasestorage.app",
    messagingSenderId: "1066422632797",
    appId: "1:1066422632797:web:277156c9ce5f35db7d28b4",
    measurementId: "G-6ZDZQRRLNR"
};
initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
