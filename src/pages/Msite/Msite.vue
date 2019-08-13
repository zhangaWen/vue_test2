<template>
    <section class="msite">
        <!--首页头部-->
        <Header :title="address.name || '正在定位中...'">
          <span class="header_search" slot="left">
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span class="header_login" slot="right">
            <span class="header_login_text">登录|注册</span>
          </span>
        </Header>
        <!--首页导航-->
        <nav class="msite_nav">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
                    <a href="javascript:" class="link_to_food" v-for="(c, index) in categorys" :key="index">
                        <div class="food_container">
                          <img :src="'https://fuss10.elemecdn.com'+c.image_url">
                        </div>
                        <span>{{c.title}}</span>
                    </a>
                  </div>
              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination"></div>
            </div>
        </nav>
        <!--首页附近商家-->
        <Shops/>
    </section>
    
</template>
<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    import Shops from '../../components/Shops/Shops.vue'
    import {mapState} from 'vuex'

    
    export default {
      mounted () {
        //分发事件发请求
        this.$store.dispatch('getShops')
        this.$store.dispatch('getCategorys',() => {
          this.$nextTick(()=>{
            new Swiper('.swiper-container',{
              loop: true,
              pagination: {
                el: '.swiper-pagination',
              },
            })
          })
        })
        //轮播
        //swiper创建的时机---必须在列表页面显示之后----1
        // setTimeout(() => {
        //   new Swiper('.swiper-container',{
        //     loop: true,
        //     pagination: {
        //       el: '.swiper-pagination',
        //     },
        //   })
        // }, 1000);
        
      },
      computed: {
        ...mapState(['address','categorys']),
        /**
         * 分类的二维数组
         */
        categorysArr () {
          const bigArray = []
          let smallArray = []
          const {categorys} = this

          categorys.forEach(c => {
            //将小数组添加到大数组
            if(smallArray.length===0){
              bigArray.push(smallArray)
            }
            //将c添加到小数组
            smallArray.push(c)
            if(smallArray.length===8){
              smallArray = []
            } 
          });
          return bigArray
        }
      },
      // watch: {
      //02
      //   categorys () {
      //     this.$nextTick(()=>{
      //       new Swiper('.swiper-container',{
      //         loop: true,
      //         pagination: {
      //           el: '.swiper-pagination',
      //         },
      //       })
      //     })          
      //   }
      // },
      components: {
        Shops
      }       
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/minxins.styl'
  .msite  //首页
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
</style>
