<template>
  <div id="app">
    <project-nav></project-nav>
    <router-view/>
    <h1>This is a test title.</h1>
    <p>This is a test text.</p>
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
      onPageLoaded: "onPageLoaded"
    })
  },
  mounted() {
    this.onPageLoaded();
  }

}
</script>

<style lang="scss" scoped>
p {
  font-size: 1.2rem;
}

</style>
