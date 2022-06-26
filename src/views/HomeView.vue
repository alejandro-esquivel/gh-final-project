<template>
  <div class="container home">
    <div v-if="loading">
      <div class="card mb-4" aria-hidden="true" v-for="i in 10" :key="i">
        <div class="card-header">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
        </div>
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
          </p>
          <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="card mb-4" v-for="post in getPosts" :key="post.id">
        <div class="card-body">
          <h5 class="card-title text-capitalize">{{ post.title }}</h5>
          <p class="card-text text-capitalize">{{ post.body }}</p>
          <router-link :to="'/posts/'+post.id" class="btn btn-primary">Ver detalles</router-link>
<!--          <a href="#" class="btn btn-primary">Ver detalles</a>-->
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
