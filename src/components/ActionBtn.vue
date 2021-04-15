<template>
  <button
    @click="btnAction({status: status, number: 15})"
  >
  {{ btnText }}
  </button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props: {
        status: Boolean
    },
    computed: {
        btnText() {
            return this.status ? 'Increase' : 'Decrease'
        }
    },
    methods: {
        ...mapActions(['btnAction'])
    }
}
</script>
