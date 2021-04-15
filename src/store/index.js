import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 1
  },
  mutations: {
    increase(state, payload) {
      state.counter = state.counter + payload
    },
    decrease(state, payload) {
      state.counter = state.counter - payload
    }
  },
  actions: {
    increaseActionJackson({ commit }) {
      commit('increase', 10)
    },
    decreaseActionJackson({ commit }, number) {
      commit('decrease', number)
    },
    btnAction({ commit }, object) {
      if (object.status) {
        commit('increase', object.number)
      } else {
        commit('decrease', object.number)
      }
    }
  },
  modules: {
  }
})
