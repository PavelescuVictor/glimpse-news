import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faPaperPlane, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
//import { fas } from '@fortawesome/free-brands-svg-icons'
//import { fas } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch)
library.add(faPaperPlane)
library.add(faChevronUp)
library.add(faFacebookF)
library.add(faInstagram)
library.add(faTwitter)
library.add(faYoutube)
library.add(faLinkedinIn)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
