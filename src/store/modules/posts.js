import api from '@/services/api';

const state = {
  posts: [],
  postForm: {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  },
};

const getters = {

};

const actions = {
  async fetchAllPosts({ commit }) {
    try {
      const response = await api.get('posts');
      commit('setPosts', response.data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
    }
  },
  // eslint-disable-next-line no-shadow
  async addPost({ state, commit }) {
    try {
      const data = new FormData();
      data.append('image', state.postForm.image);
      data.append('author', state.postForm.author);
      data.append('place', state.postForm.place);
      data.append('description', state.postForm.description);
      data.append('hashtags', state.postForm.hashtags);

      await api.post('posts', data);

      commit('cleanForm');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
    }
  },
  addImageOnPost({ commit }, payload) {
    commit('setImageOnPost', payload);
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  setPosts(state, payload) {
    state.posts = payload;
  },
  // eslint-disable-next-line no-shadow
  setImageOnPost(state, payload) {
    state.postForm.image = payload;
  },
  // eslint-disable-next-line no-shadow
  cleanForm(state) {
    state.postForm.image = null;
    state.postForm.author = '';
    state.postForm.place = '';
    state.postForm.description = '';
    state.postForm.hashtags = '';
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
