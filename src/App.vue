<template>
  <div class="main">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar/TabBar.vue'
export default {
  components: {
    TabBar
  }
}
</script>

<style scoped lang="scss">
  .main{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
</style>
