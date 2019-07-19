<template>
  <section class="msite">
    <!--首页头部-->
    <Header class="header" :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">{{
          user._id
            ? user.name
              ? user.name
              : user.phone
              ? user.phone
              : "登录|注册"
            : "登录|注册"
        }}</span>
      </span>
    </Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(caterories, index) in categoryArr"
            :key="index"
          >
            <a
              href="javascript:"
              class="link_to_food"
              v-for="(category, index) in caterories"
              :key="index"
            >
              <div class="food_container">
                <img
                  :src="`https://fuss10.elemecdn.com${category.image_url}`"
                />
              </div>
              <span>{{ category.title }}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <div class="shop_container">
        <ShowList />
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">
// 引入组件
import ShowList from "../../components/ShopList";

// 引入Swiper
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import { mapState } from "vuex";
export default {
  components: {
    ShowList
  },
  async mounted() {
    // 获取商铺列表数据
    this.$store.dispatch("getShops");
    // 获取商品分类列表数据
    await this.$store.dispatch("getCategories");
    // 解决Swiper正常使用 => 方法三:
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        loop: true,
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    });
    /* // 获取商品分类列表数据
    this.$store.dispatch("getCategories",()=>{
      // 解决Swiper正常使用 => 方法二：
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true,
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }); */
    /* new Swiper(".swiper-container", {
      loop: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    }); */
  },
  computed: {
    ...mapState(["address", "categories", "user"]),
    categoryArr() {
      // 得到categories数组
      const { categories } = this.$store.state;
      // 定义外层数组
      const bigArr = [];
      // 定义内层数组
      let smallArr = [];
      categories.forEach(category => {
        if (smallArr.length === 0) {
          bigArr.push(smallArr);
        }
        smallArr.push(category);
        if (smallArr.length === 8) {
          smallArr = [];
        }
      });
      return bigArr;
    }
  }
  /* watch: {
    // 解决Swiper正常使用 => 方法一：
    categories() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: true,
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  } */
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.msite // 首页
  width 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 50px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background #fff
    .shop_header
      padding 10px 10px 0
      .shop_icon
        margin-left 5px
        color #999
      .shop_header_title
        color #999
        font-size 14px
        line-height 20px
    .shop_container
      margin-bottom 50px
</style>
