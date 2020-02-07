<template>
  <section id="post-list">
    <div class="posts-container">
      <post-item v-for="post in posts" :key="post._id" :post="post"/>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import PostItem from './PostItem.vue';

const { mapState, mapActions } = createNamespacedHelpers('posts');

export default {
  components: {
    PostItem,
  },
  computed: {
    ...mapState(['posts']),
  },
  created() {
    this.fetchAllPosts();
  },
  methods: {
    ...mapActions(['fetchAllPosts']),
  },
};
</script>

<style lang="stylus" scoped>
section#post-list
  max-width 580px
  margin 0 auto
  padding 0 30px
</style>
