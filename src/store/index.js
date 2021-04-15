import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 1
  },
  mutations: {
    increase(state) {
      state.counter++;
    },
    decrease(state, payload) {
      state.counter = state.counter - payload
    }
  },
  actions: {
    increaseActionJackson({commit}) {
      commit('increase')
    },
    decreaseActionJackson({commit}, number) {
      commit('decrease', number)
    }
  },
  modules: {
  }
})
