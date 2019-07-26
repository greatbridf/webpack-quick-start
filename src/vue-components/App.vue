<template>
  <div>
    <p class="test">{{test}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

var message: string = '!IMPORTANT! PLEASE CHECK \'App.vue\' FILE AND REMOVE THIS MESSAGE'
console.log(message)

export default Vue.extend({
  data () {
    return {
      test: 'Greetings from vue!\nDelete these texts to start your journey!'
    }
  }
})
</script>

<style>
.test {
  background: royalblue;
}
</style>
