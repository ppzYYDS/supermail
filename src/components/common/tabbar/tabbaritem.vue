@<template>
  <div class="tab-bar-item" @click="itemclick()" :style="activestyle">
    <div ><slot name="item-icon"></slot></div>
    <div><slot name="item-text"></slot></div>
    
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
     path: String ,
     activecolor: {
         type: String,
         default: 'red',
     }
  }, 
  computed: {
      isactive () {
          //判断传进来的path是否点击的path相等返回true indexOf（） ！==1 返回true
          return this.$route.path.indexOf(this.path) !== -1
      },
      activestyle () {
          return this.isactive ? {color: this.activecolor} : {}
      }
  },
  methods: {
      itemclick () {
          console.log("点击");
          this.$router.push(this.path).catch(err => err)
      }
  }
};
</script>

<style>
 .tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}
 .tab-bar-item span{
       width: 24px;
       display:inline-block;
       height: 24px;
       vertical-align: middle;
       margin-bottom: 1px; 
       font-size: 20px;
       margin-top: 5px;
}
</style>