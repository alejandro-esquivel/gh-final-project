import Vue from 'vue'
import Vuex from 'vuex'
import posts from "./modules/posts";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: true,
  },
  getters: {
    loading(state) {
      return state.isLoading;
    }
  },
  mutations: {
    setLoading(state, loadingState) {
      state.isLoading = loadingState;
    }
  },
  actions: {},
  modules: {posts}
})
