<template>
  <div>
    <FooterGuide v-show="$route.meta.isShowFooter" />
    <router-view></router-view>
  </div>
</template>

<script>
// 引入组件
import FooterGuide from "./components/FooterGuide";


export default {
  name: "App",
  // 注册组件
  components: {
    FooterGuide
  },
  mounted() {
  }
};
</script>

<style scope>
</style>
