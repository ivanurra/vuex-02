<template>
  <div class="home">
    <h3
      :style="counterColor"
    >
      {{title}}: {{ counter }}
    </h3>
    <button @click="increaseActionJackson" class="btn-plus">Increase</button>
    <Btn-decrease class="btn-minor"/>
    <br/>
    <br/>
    <Action-btn :status="true" class="btn-plus" />
    <Action-btn :status="false" class="btn-minor"/>
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

<style scoped>
.btn-plus{
  background-color: crimson;
  color: white;
}
.btn-minor{
  background-color:teal;
  color: white;
}
</style>
