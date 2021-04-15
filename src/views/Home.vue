<template>
  <div class="home">
    <!-- <h3>Counter: {{ $store.state.counter }}</h3> -->
    <h3
    :style="counterColor"
    >{{title}}: {{ counter }}</h3>
    <button @click="increaseActionJackson">+ Increase</button>
    <Btn-decrease />
    <br/>
    <br/>
    <Action-btn :status="true" />
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import ActionBtn from '../components/ActionBtn.vue'
import BtnDecrease from '../components/BtnDecrease.vue'

export default {
  name: 'Home',
  components: {
    BtnDecrease,
    ActionBtn
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
    ...mapMutations(['increase']),
    ...mapActions([`increaseActionJackson`])
  }
}
</script>
