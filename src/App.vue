<template>
  <div>
    <FooterGuide v-show="$route.meta.isShowFooter" />
    <router-view></router-view>
  </div>
</template>

<script>
// 引入组件
import FooterGuide from "./components/FooterGuide";
import { reqUser } from "./api";
import { RECEIVE_USER } from "./store/mutation-types.js";
export default {
  name: "App",
  // 注册组件
  components: {
    FooterGuide
  },
  async mounted() {
    // 获取地址数据对象
    this.$store.dispatch("getAddress");
    // 发送请求获取用户信息---生成了session---sid----cookie--客户端---cookie(sid)------服务端(sid-----userId)
    const result = await reqUser();

    if (result.code === 0) {
      const user = result.data;
      // 更新state中用户信息数据状态
      this.$store.commit(RECEIVE_USER, user);
    }
  }
};
</script>

<style scope>
</style>
