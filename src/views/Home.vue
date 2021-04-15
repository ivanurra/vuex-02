<template>
  <div class="home">
    <!-- <h3>Counter: {{ $store.state.counter }}</h3> -->
    <h3>Counter: {{ counter }}</h3>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {

  },
  computed: {
    ...mapState([`counter`])
  }
}
</script>
