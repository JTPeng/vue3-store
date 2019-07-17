<template>
  <div class="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">4.5</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家90%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <div>Star组件</div>
            <span class="score">4.4</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <div>Star组件</div>
            <span class="score">4.6</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">30分钟</span>
          </div>
        </div>
      </div>

      <div class="split"></div>

      <div>RatingSelect组件</div>

      <div class="rating-wrapper">
        <ul>
          <li class="rating-item">
            <div class="avatar">
              <img
                width="28"
                height="28"
                src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
              />
            </div>
            <div class="content">
              <h1 class="name">xxx</h1>
              <div class="star-wrapper">
                <div>Star组件</div>
                <span class="delivery">30</span>
              </div>
              <p class="text">还可以</p>
              <div class="recommend">
                <span class="iconfont icon-thumb_up"></span>
              </div>
              <div class="time">2016-12-11 12:02:13</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/mixins.styl'
.ratings
  position absolute
  top 225px
  bottom 0
  left 0
  width 100%
  overflow hidden
  background #fff
  .overview
    display flex
    padding 18px 0
    .overview-left
      flex 0 0 137px
      padding 6px 0
      width 137px
      border-right 1px solid rgba(7, 17, 27, 0.1)
      text-align center
      @media only screen and (max-width: 320px)
        flex 0 0 120px
        width 120px
      .score
        margin-bottom 6px
        line-height 28px
        font-size 24px
        color rgb(255, 153, 0)
      .title
        margin-bottom 8px
        line-height 12px
        font-size 12px
        color rgb(7, 17, 27)
      .rank
        line-height 10px
        font-size 10px
        color rgb(147, 153, 159)
    .overview-right
      flex 1
      padding 6px 0 6px 24px
      @media only screen and (max-width: 320px)
        padding-left 6px
      .score-wrapper
        margin-bottom 8px
        font-size 0
        .title
          display inline-block
          line-height 18px
          vertical-align top
          font-size 12px
          color rgb(7, 17, 27)
        .star
          display inline-block
          margin 0 12px
          vertical-align top
        .score
          display inline-block
          line-height 18px
          vertical-align top
          font-size 12px
          color rgb(255, 153, 0)
      .delivery-wrapper
        font-size 0
        .title
          line-height 18px
          font-size 12px
          color rgb(7, 17, 27)
        .delivery
          margin-left 12px
          font-size 12px
          color rgb(147, 153, 159)
  .rating-wrapper
    padding 0 18px
    .rating-item
      display flex
      padding 18px 0
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      .avatar
        flex 0 0 28px
        width 28px
        margin-right 12px
        img
          border-radius 50%
      .content
        position relative
        flex 1
        .name
          margin-bottom 4px
          line-height 12px
          font-size 10px
          color rgb(7, 17, 27)
        .star-wrapper
          margin-bottom 6px
          font-size 0
          .star
            display inline-block
            margin-right 6px
            vertical-align top
          .delivery
            display inline-block
            vertical-align top
            line-height 12px
            font-size 10px
            color rgb(147, 153, 159)
        .text
          margin-bottom 8px
          line-height 18px
          color rgb(7, 17, 27)
          font-size 12px
        .recommend
          line-height 16px
          font-size 0
          .icon-thumb_up, .icon-thumb_down, .item
            display inline-block
            margin 0 8px 4px 0
            font-size 9px
          .icon-thumb_up
            color $yellow
          .icon-thumb_down
            color rgb(147, 153, 159)
          .item
            padding 0 6px
            border 1px solid rgba(7, 17, 27, 0.1)
            border-radius 1px
            color rgb(147, 153, 159)
            background #fff
        .time
          position absolute
          top 0
          right 0
          line-height 12px
          font-size 10px
          color rgb(147, 153, 159)
</style>