/* eslint-disable no-underscore-dangle */
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
  like({ commit }, { id }) {
    commit('setLike', id);
  },
  // eslint-disable-next-line no-shadow
  SOCKET_POST({ commit }, payload) {
    commit('SOCKET_POST', payload);
  },
  // eslint-disable-next-line no-shadow
  SOCKET_LIKE({ commit }, payload) {
    commit('SOCKET_LIKE', payload);
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
  async setLike(payload, id) {
    try {
      await api.post(`/posts/${id}/like`);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
    }
  },
  // eslint-disable-next-line no-shadow
  SOCKET_POST(state, payload) {
    state.posts = [payload, ...state.posts];
  },
  // eslint-disable-next-line no-shadow
  SOCKET_LIKE(state, payload) {
    state.posts = state.posts.map(post => (post._id === payload._id ? payload : post));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
