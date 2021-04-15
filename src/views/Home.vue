<template>
  <div class="home">
    <!-- <h3>Counter: {{ $store.state.counter }}</h3> -->
    <h3
    :style="counterColor"
    >{{title}}: {{ counter }}</h3>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      title: 'Counter'
    }
  },
  computed: {
    ...mapState([`counter`]),
    counterColor() {
      return [this.counter > 100 ? {'color': 'green'} : {'color': 'red'}]
    }
  }
}
</script>
