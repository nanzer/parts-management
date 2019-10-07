import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import * as firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false
Vue.use(vuetify)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

var config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
}
firebase.initializeApp(config)