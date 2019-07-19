import {
	RESET_USER,
	RECEIVE_USER,
} from '../mutation-types.js';
import {
  reqLogout,
} from '../../api';
const state = {
  // 用户信息
  user: {}
};

const mutations = {
  // 用户信息
  [RECEIVE_USER](state, user) {
    state.user = user;
  },
  // 清除保存的用户信息
  [RESET_USER](state) {
    state.user = {};
  }
};

const actions = {
  // 更新用户信息
  async loginOut({ commit }) {
    const result = await reqLogout();
    if (result.code === 0) {
      commit(RESET_USER);
    }
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
