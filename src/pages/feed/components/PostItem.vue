<template>
  <div class="post-item">
    <header>
      <div class="user-info">
        <span>Caio</span>
        <span class="place">Quixadá</span>
      </div>
      <img src="@/assets/more.svg" alt="Mais">
    </header>

    <img src="http://localhost:3333/files/anime-minimalism-4k-4e-1366x768.jpg" alt="">

    <footer>
      <div class="actions">
        <img src="@/assets/like.svg" alt="">
        <img src="@/assets/comment.svg" alt="">
        <img src="@/assets/send.svg" alt="">
      </div>

      <strong class="likes">900 curtidas</strong>

      <p>
        Um post muito massa
        <span>#vue #learning #top</span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {

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
