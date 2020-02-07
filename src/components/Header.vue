<template>
  <header id="main-header">
    <div class="header-content">
      <router-link to="/">
        <img src="../assets/logo.svg" alt="InstaRocket">
      </router-link>
      <router-link to="/new">
        <img src="../assets/camera.svg" alt="EnviarPublicação">
      </router-link>
    </div>
  </header>
</template>

<style lang="stylus" scoped>
height = 72px

header#main-header
  background #fff
  height height
  border-bottom 1px solid #DDD

  .header-content
    max-width 980px
    margin 0 auto
    height height
    padding 0 30px

    display flex
    align-items center
    justify-content space-between

</style>
