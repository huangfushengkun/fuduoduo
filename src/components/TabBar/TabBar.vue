<template>
  <div class="bottom-tab">
    <router-link exact active-class="active" tag="span" to="/home" class="tab-item">
      <img :src="'/home' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal " alt="">
      <span>首页</span>
    </router-link>
    <router-link exact active-class="active" tag="span" to="/recommend" class="tab-item">
      <img :src="'/recommend' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal " alt="">
      <span>推荐</span>
    </router-link>
    <router-link exact active-class="active" tag="span" to="/search" class="tab-item">
      <img :src="'/search' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal " alt="">
      <span>搜索</span>
    </router-link>
    <router-link exact active-class="active" tag="span" to="/chat" class="tab-item">
      <img :src="'/chat' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal " alt="">
      <span>聊天</span>
    </router-link>
    <router-link exact active-class="active" tag="span" to="/me" class="tab-item">
      <img :src="'/me' === $route.path ? tabBarImgArr[4].selected : tabBarImgArr[4].normal " alt="">
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>

export default {
  components:{},
  props:{},
  data(){
    return {
      tabBarImgArr: [
        {
          normal: require('../../assets/img/icon_home.png'),selected: require('../../assets/img/icon_home_selected.png')
        },{
          normal: require('../../assets/img/icon_intro.png'),selected: require('../../assets/img/icon_intro_selected.png')
        },{
          normal: require('../../assets/img/icon_search.png'),selected: require('../../assets/img/icon_search_selected.png')
        },{
          normal: require('../../assets/img/icon_chat.png'),selected: require('../../assets/img/icon_chat_selected.png')
        },{
          normal: require('../../assets/img/icon_mine.png'),selected: require('../../assets/img/icon_mine_selected.png')
        },
      ]
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped lang="scss">
.active{
  span{
    color: #f30;

  }
  }
.bottom-tab{
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  z-index: 999;
  
  .tab-item{
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
    img{
      width: 35%;
      margin-bottom: 3px;
      
    }
  }
}
</style>