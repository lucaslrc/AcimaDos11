import Vue from 'vue'
import App from './App.vue'
import VueLayers from 'vuelayers'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueLayers)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
