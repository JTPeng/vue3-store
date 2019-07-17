// 引入组件
import MSite from '../pages/MSite';
import Order from '../pages/Order';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Shop from '../pages/Shop';
import Goods from '../pages/Shop/Goods';
import Ratings from '../pages/Shop/Ratings';
import Info from '../pages/Shop/Info';
export default [
	{
		path:'/msite',
		component:MSite,
		meta:{
			isShowFooter:true
		}
	},
	{
		path:'/order',
		component:Order,
		meta:{
			isShowFooter:true
		}
	},
	{
		path:'/search',
		component:Search,
		meta:{
			isShowFooter:true
		}
	},
	{
		path:'/profile',
		component:Profile,
		meta:{
			isShowFooter:true
		}
	},
	{
		path:'/login',
		component:Login
	},
	{
		path:'/shop',
		component:Shop,
		children:[
			{
				path:'/shop/goods',
				component:Goods
			},
			{
				path:'/shop/ratings',
				component:Ratings
			},
			{
				path:'/shop/info',
				component:Info
			},
			{
				path:'',
				redirect:'/shop/goods'
			},
		]
	},
	{
		path:'',
		redirect:'/msite'
	}
]