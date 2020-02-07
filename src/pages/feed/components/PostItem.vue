<template>
  <div class="post-item">
    <header>
      <div class="user-info">
        <span>{{ post.author }}</span>
        <span class="place">{{ post.place }}</span>
      </div>
      <img src="@/assets/more.svg" alt="Mais">
    </header>

    <img :src="`http://localhost:3333/files/${post.image}`" alt="">

    <footer>
      <div class="actions">
        <img src="@/assets/like.svg" alt="">
        <img src="@/assets/comment.svg" alt="">
        <img src="@/assets/send.svg" alt="">
      </div>

      <strong class="likes">{{ post.likes }} curtidas</strong>

      <p>
        {{ post.description }}
        <span>{{ post.hashtags }}</span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style lang="stylus" scoped>
.post-item
  background #FFF
  border 1px solid #DDD
  margin-top 30px

  header
    padding 20px
    display flex
    align-items center
    justify-content space-between

    .user-info
      display flex
      flex-direction column

      :first-child
        font-weight bold
        font-size 13px

      span.place
        font-size 11px
        color #666
        margin-top 3px

  &>img
    width 100%

  footer
    padding 20px

    .actions
      margin-bottom 10px

      img
        height 20px
        margin-right 10px

    p
      font-size 13px
      margin-top 2px
      line-height 18px
      font-weight bold

      span
        color #7159c1
        display block

    .likes
      font-weight 900
</style>
