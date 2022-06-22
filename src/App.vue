<template>
  <div id="app">
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
    setTimeout(() => {
      this.loadPosts();
    }, 1000)
    console.log(this.$store.getters.loading);
  }

}
</script>

<style lang="scss" scoped>
p {
  font-size: 1.2rem;
}

</style>
