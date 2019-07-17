<template>
  <div class="it_list">
    <ShopHeader />
    <div class="it_item">
      <router-link to="/shop/goods">goods</router-link>
    </div>
    <div class="it_item">
      <router-link to="/shop/ratings">ratings</router-link>
    </div>
    <div class="it_item">
      <router-link to="/shop/info">info</router-link>
    </div>Shop
    <router-view></router-view>
  </div>
</template>

<script>
import ShopHeader from "../../components/ShopHeader";
export default {
  components: {
    ShopHeader
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped></style>