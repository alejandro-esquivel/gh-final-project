<template>
  <div id="app" style="">
    <project-nav></project-nav>
    <router-view/>
  </div>
</template>

<script>
import ProjectNav from "./components/ProjectNav.vue";
import {mapActions} from "vuex";

export default {
  name: 'App',
  components: {
    "ProjectNav": ProjectNav,
  },
  methods: {
    ...mapActions({
      loadPosts: "loadPosts"
    })
  },
  mounted() {
    // Aquí simulo un retardo en la obtención de los datos para comprobar que el spinner funciona.
    setTimeout(() => {
      this.loadPosts();
    }, 500)
    console.log(this.$store.getters.loading);
  }

}
</script>

<style lang="scss" scoped>
p {
  font-size: 1.2rem;
}

</style>
