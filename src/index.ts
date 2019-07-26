import App from 'src/vue-components/App.vue'
import Vue from 'vue'

var elem = document.createElement('div')
elem.id = 'app'
document.body.appendChild(elem)

var vue = new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App></App>'
})
