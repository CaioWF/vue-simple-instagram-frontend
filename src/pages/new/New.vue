<template>
  <form id="new-post" @submit.prevent="submit">
    <input type="file" @change="onImageChange" required/>
    <input
      type="text"
      v-model="form.author"
      name="author"
      placeholder="Autor do post"
      required
    />
    <input
      type="text"
      v-model="form.description"
      name="description"
      placeholder="Descrição do post"
      required
    />
    <input
      type="text"
      v-model="form.place"
      name="place"
      placeholder="Local do post"
      required
    />
    <input
      type="text"
      v-model="form.hashtags"
      name="hashtags"
      placeholder="Hashtags do post"
      required
    />
    <button type="submit">Enviar</button>
  </form>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('posts');

export default {
  data: () => ({
    file: {},
  }),
  computed: {
    ...mapState({ form: 'postForm' }),
  },
  methods: {
    ...mapActions(['addPost', 'addImageOnPost']),
    onImageChange(event) {
      this.addImageOnPost(event.target.files[0]);
    },
    submit() {
      this.addPost();
      this.$router.push({ name: 'feed' });
    },
  },
};
</script>

<style lang="stylus" scoped>
form#new-post
  max-width 580px
  margin 30px auto 0
  padding 30px
  background #fff
  border 1px solid #ddd

  display flex
  flex-direction column

  input
    margin-bottom 10px
    outline 0
    transition all 0.2s ease
    &:focus
      box-shadow 0 0 2px #7159c1

  input[type='text']
    height 38px
    border-radius: 4px
    border 1px solid #ddd
    padding 0 20px
    font-size 14px

  button
    padding 10px 20px
    border-radius 4px
    border 0
    background #7159c1
    color #FFF
    font-size 14px
    font-weight bold
    cursor pointer
    outline 0
    transition all 0.2s ease

    &:hover
      opacity 0.8
</style>
