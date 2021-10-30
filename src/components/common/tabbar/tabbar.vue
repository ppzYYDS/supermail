@<template>
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
@font-face {
  font-family: "iconfont";
  src: url('~assets/img/tabbar/iconfont.ttf') format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* tabbar */
#tab-bar {
  display: flex;
  background-color: #ebebeb;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>