import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT
} from '../mutation-types.js';
import { reqGoods, reqRatings, reqInfo } from '../../api';
import Vue from 'vue';
const state = {
  // mock
  // goods食品信息
  goods: [],

  // ratings评价信息
  ratings: [],

  // info商家信息
  info: {},

  // 购物车食物数组
  cartFood: []
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
      state.cartFood.push(food);
    } else {
      food.count++;
    }
  },
  // food.count--
  [REDUCE_FOOD_COUNT](state, { food }) {
    food.count--;
    state.cartFood.splice(state.cartFood.indexOf(food), 1);
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
      commit(RECEIVE_RATINGS, { ratings });
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

const getters = {
  // 总数量
  totalCount(state) {
    return state.cartFood.reduce((pre, food) => pre + food.count, 0);
  },
  // 总价格
  totalPrice(state) {
    return state.cartFood.reduce(
      (pre, food) => pre + food.count * food.price,
      0
    );
  },
  // 计算总商家评论数
  totalRatings(state) {
    return state.ratings.length;
  },
  // 总商家推荐评论数
  positiveRatingsCount(state) {
    // rating.rateType === 0 为商家推荐
    return state.ratings.reduce(
      (pre, rating) => pre + (rating.rateType === 0 ? 1 : 0),
      0
    );
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
