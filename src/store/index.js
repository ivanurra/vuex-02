import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 1
  },
  mutations: {
    increase(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    }
  },
  actions: {
    increaseActionJackson({commit}) {
      commit('increase')
    },
    decreaseActionJackson({commit}) {
      commit('decrease')
    }
  },
  modules: {
  }
})
