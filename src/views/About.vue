<template>
  <div class="about">
    <h2>About page</h2>
    <h3>Counter: {{ $store.state.counter }} </h3>
    <input type="text" v-model="text">
    <h3>{{ text }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  },
}
</script>