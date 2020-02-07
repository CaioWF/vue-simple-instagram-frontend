<template>
  <div class="feed-container">
    <post-list />
  </div>
</template>

<script>
import PostList from './components/PostList.vue';

export default {
  components: {
    PostList,
  },
};
</script>
