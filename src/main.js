import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
