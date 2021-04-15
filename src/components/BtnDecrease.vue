<template>
  <button @click="decreaseActionJackson(50)">Decrease</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods: {
        ...mapActions([`decreaseActionJackson`])
    }
}
</script>
