const postsModule = {
  state() {
    return {
      posts: []
    }
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    getPostById: (state) => (id) => {
      return state.posts.find(post => post.id === id)
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    }
  },
  actions: {
    async loadPosts(context) {
      try {
        // Hacemos una petición GET a la API de los posts.
        const {data} = await this._vm.$http.get(
          'https://jsonplaceholder.typicode.com/posts'
        );

        context.commit('setPosts', data);
        context.commit('setLoading', false);
      } catch (error) {
        console.error(error)
      }
    }
  }
}

export default postsModule;