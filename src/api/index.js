import ajax from './ajax.js';

const BASE = '/api'
// 1.根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`);

// 2.获取食品分类列表 
export const reqCategories = () => ajax(BASE + '/index_category');

// 3.根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE + '/shops', {
  latitude,
  longitude
});

// http://localhost:5000/search_shops?keyword=a&geohash=40.10038,116.36867
// 4.根据关键字搜索商家列表
// export const reqSearchShops = ({keyword,({longitude,latitude})}) => ajax(BASE + `/search_shops?`{keyword,()})

// 5.用户名密码登陆
export const reqLogin = ({
  name,
  pwd,
  captcha
}) => ajax(BASE + `/login_pwd`, {
  name,
  pwd,
  captcha
}, 'POST')

// 6.发送短信验证码 
export const reqCode = (phone) => ajax(BASE + `/sendcode`, {
  phone
})

// 7.手机号验证码登陆
export const reqMsm = (phone, code) => ajax(BASE + `/login_sms`, {
  phone,
  code
})

// 8.根据会话获取用户信息
export const reqUserMessages = () => ajax(BASE + `/userinfo`);

// 9.一次性验证码
export const reqOnceCode = () => ajax(BASE + `/captcha`)

// 10.用户登出
export const reqLogout = () => ajax(BASE + `/logout`)
