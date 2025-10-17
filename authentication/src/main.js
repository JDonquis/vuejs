import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { initializeApp } from "firebase/app";
import VueCookies from 'vue-cookies'
import VueSession from 'vue-session'
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
createApp(App).use(VueCookies, {
    expires: '1d',
})
.use(VueSession)
.use(router).mount('#app')


/*
$cookies.set('theme', 'default');
$cookies.get('theme');
$cookies.remove('theme');
$cookies.isKey('theme');
$cookies.keys();
*/

/*
$session.start();
$session.set('theme', 'default');
$session.get('theme');
$session.id();
$session.renew();
$session.destroy();
*/