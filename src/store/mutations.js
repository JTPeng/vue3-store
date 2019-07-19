// 包含多个直接修改状态数据的mutation对象方法
// 引入mutation-tyeps的常量类型
import {
  RECEIVE_ADDERSS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORIES,
  RECEIVE_USER,
  RESET_USER
} from "./mutation-types.js"
export default {
  // 地址
  [RECEIVE_ADDERSS](state, address) {
    state.address = address
  },
  // 商品分类
  [RECEIVE_CATEGORIES](state, categories) {
    state.categories = categories
  },
  // 商铺列表
  [RECEIVE_SHOPS](state, shops) {
    state.shops = shops
  },
  // 用户信息
  [RECEIVE_USER](state, user) {
    state.user = user
  },
  // 清除保存的用户信息
  [RESET_USER](state) {
    state.user = {}
  }
}
