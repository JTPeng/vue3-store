import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT
} from '../mutation-types.js';
import { reqGoods, reqRatings, reqInfo } from '../../api';
import  Vue  from 'vue';
const state = {
  // mock
  // goods食品信息
  goods: [],

  // ratings评价信息
  ratings: [],

  // info商家信息
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
  },
  // food.count++
  [ADD_FOOD_COUNT](state, { food }) {
    if (!food.count) {
      Vue.set(food, 'count', 1);
    } else {
      food.count++;
    }
  },
  // food.count--
  [REDUCE_FOOD_COUNT](state, { food }) {
    food.count--;
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
  },

  // 更新food.count数据
  updateFoodCount({ commit }, { isAdd, food }) {
    if (isAdd) {
      commit(ADD_FOOD_COUNT, { food });
    } else {
      commit(REDUCE_FOOD_COUNT, { food });
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
