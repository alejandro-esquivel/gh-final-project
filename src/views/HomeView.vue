<template>
  <div class="home">
    <p v-if="loading">This is loading</p>
    <ul v-else>
      <li v-for="post in getPosts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
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
