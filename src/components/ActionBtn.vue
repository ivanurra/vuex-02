<template>
  <button> {{ btnText }} </button>
</template>

<script>
export default {
    props: {
        status: Boolean
    },
    computed: {
        btnText() {
            return this.status ? 'Increase' : 'Decrease'
        }
    }
}
</script>
