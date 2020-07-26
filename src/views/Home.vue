<template>
  <div class="home">
    <Topnav></Topnav>
    <div class="banner">
      <div class="logo">logo</div>
      <div class="intro">
        <h1>guluUI</h1>
        <h2>基于Vue3和Typescript的UI框架</h2>
        <div class="links">
          <router-link to="/doc">查看文档</router-link>
          <a href="http://github.com">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Topnav from "../components/Topnav.vue";

  export default {
    name: "Home",
    components:{Topnav}
  }
</script>
<style scoped lang="less">
  div.home{
    display: flex;
    flex-direction: column;
    height: 100vh;
    div.intro{
      background-color: lightblue;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 100px 0;
    }
  }
</style>

