import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    jwt: '',
    error:'',
    // Data
  },
  getters: {
    times2(state) {
      return state.counter * 2
    }
    // Computed
  },
  mutations: {
    setCounter(state, value) {
      state.counter = value
    } 
    // set sync
  },
  actions: {
    async login(state, email, password) {
      try {
          const response = await fetch('https://hfp69ilv.directus.app/auth/login', {
              method: 'POST',
              headers: { accept: 'application/json', 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, password })
          });

          const data = await response.json();

          if ('errors' in data) {
              state.error = 'Login failed: ' + data.errors.map(err => err.message).join(', ');
              return false;
          }

          state.jwt = data.data.access_token;
          return true;

      }
      catch (error) {
          state.error = 'Login failed ';
          return false
      }
  }
  }
 
})
