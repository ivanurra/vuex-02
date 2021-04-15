<template>
  <button @click="decreaseActionJackson">- Decrease</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods: {
        ...mapActions([`decreaseActionJackson`])
    }
}
</script>
