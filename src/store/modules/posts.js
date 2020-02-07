import api from '@/services/api';

const state = {
  posts: [],
};

const getters = {

};

const actions = {
  async fetchAllPosts({ commit }) {
    const response = await api.get('posts');
    commit('setPosts', response.data);
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  setPosts(state, payload) {
    state.posts = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
