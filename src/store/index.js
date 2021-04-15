import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 1
  },
  mutations: {
    increase(state) {
      state.counter++;
    },
  },
  actions: {
    increaseActionJackson({commit}) {
      commit('increase')
    }
  },
  modules: {
  }
})
