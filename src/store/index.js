// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    users: null,
    appointment: null
  },
  getters: {
    users: (state) => {
      return state.users
    },
    isAuthenticated: (state) => {
      return !!state.users
    },
    appointment: (state) => {
      return state.appointment
    }
  },
  mutations: {
    users (state, users) {
      state.users = users
    },
    appointment (state, appointment) {
      state.appointment = appointment
    }
  },
  actions: {
    users (context, users) {
      context.commit('users', users)
    },
    appointment (context, appointment) {
      context.commit('appointment', appointment)
    }
  },
  modules: {}
})
