<template>
  <div class="home">
    <ly-tab 
    v-model="selectedId"
    :items="items"
    :options="options">

    </ly-tab>
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
      }
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
.home{
  width: 100%;
  height: 100%;
  background-color: purple;
}
</style>