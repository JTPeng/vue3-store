// 包含多个间接修改状态数据的actions对象方法

import { RECEIVE_ADDERSS, RECEIVE_SHOPS, RECEIVE_CATEGORIES, RESET_USER } from './mutation-types.js';
import { reqAddress, reqCategories, reqShops, reqLogout } from '../api';
export default {
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
	},
	// 更新用户信息
	async loginOut({ commit }) {
		const result = await reqLogout();
		if (result.code === 0) {
			commit(RESET_USER);
		}
	}
}