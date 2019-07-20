<template>
  <div class="goods">
    <!-- 左侧 -->
    <div class="menu-wrapper">
      <ul>
        <li
          class="menu-item"
          :class="{ current: currentIndex === index }"
          v-for="(good, index) in goods"
          :key="index"
          @click="leftScroll(index)"
        >
          <img class="icon" :src="good.icon" v-if="good.icon" />
          <span class="text bottom-border-1px">{{ good.name }}</span>
        </li>
      </ul>
    </div>
    <!-- 右侧 -->
    <div class="foods-wrapper">
      <ul ref="rightUl">
        <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
          <h1 class="title">{{ good.name }}</h1>
          <ul>
            <li
              class="food-item bottom-border-1px"
              v-for="(food, index) in good.foods"
              :key="index"
            >
              <div class="icon">
                <img width="57" height="57" :src="food.icon" />
              </div>
              <div class="content">
                <h2 class="name">{{ food.name }}</h2>
                <p class="desc">{{ food.description }}</p>
                <div class="extra">
                  <span class="count">月售{{ food.sellCount }}份</span>
                  <span>好评率{{ food.rating }}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{ food.price }}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <CartControl />
                </div>
              </div>
            </li>
          </ul>
        </li>
        <!-- <li class="food-list food-list-hook">
          <h1 class="title">香浓甜粥</h1>
          <ul>
            <li class="food-item bottom-border-1px">
              <div class="icon">
                <img
                  width="57"
                  height="57"
                  src="http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114"
                />
              </div>
              <div class="content">
                <h2 class="name">红枣山药粥</h2>
                <p class="desc">红枣山药糙米粥,素材包</p>
                <div class="extra">
                  <span class="count">月售17份</span>
                  <span>好评率100%</span>
                </div>
                <div class="price">
                  <span class="now">￥29</span>
                  <span class="old">￥36</span>
                </div>
                <div class="cartcontrol-wrapper">CartControl组件</div>
              </div>
            </li>
          </ul>
        </li> -->
      </ul>
    </div>
    <ShopCart />
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState } from "vuex";
import ShopCart from "../../../components/ShopCart";
import CartControl from "../../../components/CartControl";
export default {
  data() {
    return {
      scrollY: 0, // 右侧列表滚动的距离
      tops: [] // 装载每个food高度的数组
    };
  },
  components: {
    CartControl,
    ShopCart
  },
  async mounted() {
    // 触发actions发送请求 +> 将获得数据更新到vuex数据状态管理的仓库中
    await this.$store.dispatch("getGoods");
    // 初始化滚动条
    this._initScroll();
    // 初始化tops数组
    this._initTops();
  },
  computed: {
    ...mapState({
      goods: state => state.shop.goods
    }),
    currentIndex() {
      const { scrollY, tops } = this;
      // 返回在区间的索引值
      const index = tops.findIndex(
        (top, index) => scrollY >= top && scrollY < tops[index + 1]
      );
      return index;
    }
  },
  methods: {
    _initScroll() {
      new BScroll(".menu-wrapper", {
        click: true
      });
      // 右侧列表
      this.rightScroll = new BScroll(".foods-wrapper", {
        click: true,
        probeType: 1
      });

      this.rightScroll.on("scroll", ({ y }) => {
        this.scrollY = Math.abs(y);
      });
      this.rightScroll.on("scrollEnd", ({ y }) => {
        this.scrollY = Math.abs(y);
      });
    },
    _initTops() {
      const tops = [];
      let top = 0;
      tops.push(top);
      // 获取到右侧列表中的li
      const lists = this.$refs.rightUl.children;
      Array.prototype.slice.call(lists).forEach(list => {
        top += list.clientHeight;
        tops.push(top);
      });
      this.tops = tops;
    },
    leftScroll(index) {
      const scrollY = -this.tops[index];
      this.scrollY = scrollY;
      this.rightScroll.scrollTo(0, scrollY, 300);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/mixins.styl'
.goods
  display flex
  position absolute
  top 225px
  bottom 46px
  width 100%
  background #fff
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      height 54px
      width 56px
      padding 0 12px
      line-height 14px
      &.current
        position relative
        z-index 10
        margin-top -1px
        background #fff
        color $green
        font-weight 700
        .text
          border-none()
      .icon
        display inline-block
        vertical-align top
        width 12px
        height 12px
        margin-right 2px
        background-size 12px 12px
        background-repeat no-repeat
      .text
        display table-cell
        width 56px
        vertical-align middle
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        font-size 12px
  .foods-wrapper
    flex 1
    .title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size 12px
      color rgb(147, 153, 159)
      background #f3f5f7
    .food-item
      display flex
      margin 18px
      padding-bottom 18px
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      &:last-child
        border-none()
        margin-bottom 0
      .icon
        flex 0 0 57px
        margin-right 10px
      .content
        flex 1
        .name
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .desc, .extra
          line-height 10px
          font-size 10px
          color rgb(147, 153, 159)
        .desc
          line-height 12px
          margin-bottom 8px
        .extra
          .count
            margin-right 12px
        .price
          font-weight 700
          line-height 24px
          .now
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old
            text-decoration line-through
            font-size 10px
            color rgb(147, 153, 159)
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom 12px
</style>