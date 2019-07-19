import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
} from '../mutation-types.js';
import {
  reqGoods,
  reqRatings,
  reqInfo
} from '../../api';
const state = {
  // mock
  // goods信息
  goods: [],

  // ratings信息
  ratings: [],

  // info信息
  info: {}
};

const mutations = {
  // goods信息
  [RECEIVE_GOODS](state, { goods }) {
    state.goods = goods;
  },
  // ratings信息
  [RECEIVE_RATINGS](state, { ratings }) {
    state.ratings = ratings;
  },
  // info信息
  [RECEIVE_INFO](state, { info }) {
    state.info = info;
  }
};

const actions = {
  // goods信息
  async getGoods({ commit }) {
    const result = await reqGoods();
    if (result.code === 0) {
      const goods = result.data;
      commit(RECEIVE_GOODS, { goods });
    }
  },
  // ratings信息
  async getRatings({ commit }) {
    const result = await reqRatings();
    if (result.code === 0) {
      const ratings = result.data;
      commit(RECEIVE_GOODS, { ratings });
    }
  },
  // info信息
  async getInfo({ commit }) {
    const result = await reqInfo();
    if (result.code === 0) {
      const info = result.data;
      commit(RECEIVE_INFO, { info });
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
