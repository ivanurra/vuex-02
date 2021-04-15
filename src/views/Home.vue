<template>
  <div class="home">
    <!-- <h3>Counter: {{ $store.state.counter }}</h3> -->
    <h3
    :style="counterColor"
    >{{title}}: {{ counter }}</h3>
    <button @click="increase">+ Increase</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

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
      return [this.counter > 10 ? {'color': 'green'} : {'color': 'red'}]
    }
  },
  methods: {
    ...mapMutations(['increase'])
  }
}
</script>
