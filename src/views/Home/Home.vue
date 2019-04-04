<template>
  <div class="home">
    <ly-tab 
    class="fixd"
    v-model="selectedId"
    :items="items"
    :options="options"
    @change="handleChange">
    </ly-tab>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  components:{},
  props:{},
  data(){
    return {
      selectedId: 0,//选中的id
      items: [
        {label: '热门'},{label: '服饰'},{label: '鞋包'},
        {label: '母婴'},{label: '百货'},{label: '食品'},
        {label: '内衣'},{label: '男装'},{label: '电器'},
      ],
      options: {
        activeColor: '#e9232c', //设置选中颜色
      },
      //二级路由路径
      pathArr: [
        '/home/hot','/home/dress','/home/box','/home/mbaby',
        '/home/general','/home/food','/home/shirt','/home/man','/home/ele'
      ]
    }
  },
  watch:{},
  computed:{},
  methods:{
    //二级路由点击事件函数
    handleChange (item,index) {
      console.log(item,index)
      this.$router.replace(this.pathArr[index])
    }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped lang="scss">
.home{
  width: 100%;
  height: 100%;
  background-color: purple;
  .fixd{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 900;
  }
}
</style>