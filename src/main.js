import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import { BootstrapVue } from 'bootstrap-vue'
Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install Vuelidate
Vue.use(Vuelidate)
// Install BootstrapVue
Vue.use(BootstrapVue)
new Vue({
  render: h => h(App),
}).$mount('#app')
