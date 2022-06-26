<template>
  <div class="container col-4">
    <div class="card" v-if="!loading">
      <div class="card-header">
        <p class="card-text">{{ post.id }}</p>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{ post.body }}</p>
        <router-link to="/" class="btn btn-primary">Volver</router-link>
      </div>
    </div>
    <div class="card" aria-hidden="true" v-else>
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
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "PostView",
  data() {
    return {
      post: {}
    }
  },
  props: ["postId"],
  computed: {
    ...mapGetters({
      getPostById: 'getPostById',
      loading: 'loading'
    }),
    postById() {
      return this.getPostById(parseInt(this.postId));
    }
  },
  watch: {
    // Vigilamos el estado "loading", que por defecto está en true.
    // Una vez su estado cambia a false, se establecerá el valor del post.
    loading() {
      console.log(this.postById);
      this.post = this.postById;
    }
  },
  mounted() {
    // Si accedemos a la página del post mediante un enlace, como los posts estarán ya guardados en el store
    // solo hace falta establecer el valor de post con el método computado que lo obtiene del store
    this.post = this.postById;
  }
}
</script>
