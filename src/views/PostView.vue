<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "PostView",
  data() {
    return {}
  },
  mounted() {
    console.log(this.$route.params?.post);
  }
}
</script>

<style scoped>

</style>