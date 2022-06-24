<template>
  <div class="container home">
    <div class="d-flex justify-content-center" v-if="loading">
      <div class="spinner-border" style="width: 5rem; height: 5rem;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else>
      <div class="card mb-4" v-for="post in getPosts" :key="post.id">
        <div class="card-body">
          <h5 class="card-title text-capitalize">{{ post.title }}</h5>
          <p class="card-text text-capitalize">{{ post.body }}</p>
          <a href="#" class="btn btn-primary">Ver detalles</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'HomeView',
  components: {},
  methods: {},
  computed: {
    ...mapGetters({
      loading: "loading",
      getPosts: "getPosts"
    })
  }
}
</script>
