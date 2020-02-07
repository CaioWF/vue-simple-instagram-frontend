<template>
  <section id="post-list">
    <div class="posts-container">
      <post-item />
      <post-item />
    </div>
  </section>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
  components: {
    PostItem,
  },
};
</script>

<style lang="stylus" scoped>
section#post-list
  max-width 580px
  margin 0 auto
  padding 0 30px
</style>
