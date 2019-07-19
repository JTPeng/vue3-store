import {
  RECEIVE_ADDERSS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORIES
} from '../mutation-types.js';
import { reqAddress, reqCategories, reqShops } from '../../api';
const state = {
  // 经度
  longitude: '113.83786',
  // 纬度
  latitude: '22.62601',
  // 地址
  address: {},
  // 商品分类
  categories: [],
  // 商铺列表
  shops: []
};

const mutations = {
  // 地址
  [RECEIVE_ADDERSS](state, address) {
    state.address = address;
  },
  // 商品分类
  [RECEIVE_CATEGORIES](state, categories) {
    state.categories = categories;
  },
  // 商铺列表
  [RECEIVE_SHOPS](state, shops) {
    state.shops = shops;
  }
};

const actions = {
  // 获取地址
  async getAddress({ commit, state }) {
    const { longitude, latitude } = state;
    const result = await reqAddress(longitude, latitude);
    if (result.code === 0) {
      const address = result.data;
      commit(RECEIVE_ADDERSS, address);
    }
  },
  // 获取商品分类
  async getCategories({ commit }, callback) {
    const result = await reqCategories();
    if (result.code === 0) {
      const categories = result.data;
      commit(RECEIVE_CATEGORIES, categories);
      typeof callback === 'function' && callback();
    }
  },
  // 获取商铺列表
  async getShops({ commit, state }) {
    const { longitude, latitude } = state;
    const result = await reqShops(longitude, latitude);
    if (result.code === 0) {
      const Shops = result.data;
      commit(RECEIVE_SHOPS, Shops);
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
