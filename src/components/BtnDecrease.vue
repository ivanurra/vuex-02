<template>
  <button @click="decreaseActionJackson">- Decrease</button>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
export default {
    methods: {
        ...mapActions([`decreaseActionJackson`])
    }
}
</script>
