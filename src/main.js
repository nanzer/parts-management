import Vue from 'vue';
import firebase from 'firebase/app';
import { firestorePlugin } from 'vuefire';
import App from './App.vue';
import router from './router';
import 'firebase/firestore';
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";

Vue.use(vuetify);

Vue.use(firestorePlugin);

firebase.initializeApp({
  apiKey: 'AIzaSyBDzV4P9F41xw2WNPufOxH7VppLfdHFhCk',
  authDomain: 'part-number-database.firebaseapp.com',
  databaseURL: 'https://part-number-database.firebaseio.com',
  projectId: 'part-number-database',
  storageBucket: 'part-number-database.appspot.com',
  messagingSenderId: '43859282854',
  appId: '1:43859282854:web:6a21f7f4f79436b6405d67',
});

//  es-lint-disable-next-line
export const db = firebase.firestore();

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
