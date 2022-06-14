<template>
  <div id="app">
    <project-nav></project-nav>
    <router-view/>
    <p>This is a test text.</p>
  </div>
</template>

<script>
import ProjectNav from "./components/ProjectNav.vue";

export default {
  name: 'App',
  components: {
    "ProjectNav": ProjectNav,

  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 1rem;
}

</style>
