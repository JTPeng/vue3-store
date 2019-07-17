import Vue from 'vue'
import Validate, { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN' // 引入中文文件

Vue.use(Validate);
// 配置必须的规则
Validator.localize('zh_CN',{
	messages:zh_CN.messages,
	attributes: {
		phone:'手机号', // 手机号
		code:'手机验证码', // 手机验证码
		username:'用户名', // 用户名
		pwd:'密码', // 密码
		captcha:'图形验证码' // 图形验证码
	}
});
// 自定义规则
Validator.extend('phone', {
  validate: value => {
    return /^1\d{10}$/.test(value)
  },
  messages: field => field + '必须是11位手机号码'
})