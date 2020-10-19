import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes } from './routes'
import store  from './store/store'
import firebase from 'firebase'
Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});

var firebaseConfig = {
  apiKey: "AIzaSyDv6J-9AdEp4EEiqmJ-lBzQqJMd5ZNfkdc",
  authDomain: "fir-auth-3c7ca.firebaseapp.com",
  databaseURL: "https://fir-auth-3c7ca.firebaseio.com",
  projectId: "fir-auth-3c7ca",
  storageBucket: "fir-auth-3c7ca.appspot.com",
  messagingSenderId: "920514279264",
  appId: "1:920514279264:web:0e8dcd486a843b82c7d005"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  render: h => h(App),
  router, 
  store,
}).$mount('#app')
