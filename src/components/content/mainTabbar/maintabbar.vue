@<template>
  <tab-bar>
      <tab-bar-item path="/home" activecolor="#f50">
        <span slot= "item-icon" class="iconfont">&#xf012b;</span>
        <div slot= "item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="category" activecolor="#f50">
        <span slot= "item-icon" class="iconfont">&#xe7f8;</span>
        <div slot= "item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activecolor="#f50">
        <span  slot= "item-icon" class="iconfont">&#xe70c;</span>
        <div slot= "item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activecolor="#f50">
        <span  slot= "item-icon" class="iconfont">&#xe60d;</span>
        <div slot= "item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/tabbar";
import TabBarItem from "components/common/tabbar/tabbaritem";
export default {
    name: "MainTabBar",
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>
</style>