// 包含多个直接修改状态数据的mutation对象方法
// 引入mutation-tyeps的常量类型
import {
	RECEIVE_ADDERSS,
	RECEIVE_SHOPS,
	RECEIVE_CATEGORIES
} from './mutation-types.js';
export default {
	// 地址
	[RECEIVE_ADDERSS](state, address) {
		state.address = address;
	},
	// 商品分类
	[RECEIVE_CATEGORIES](state, categories) {
		state.categorys = categories;
	},
	// 商铺列表
	[RECEIVE_SHOPS](state, shops) {
		state.shops = shops
	}
}