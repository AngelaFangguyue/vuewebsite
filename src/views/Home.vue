<template>
<!--  <div class="home">-->
  <div>
    <Topnav/>
    <div class="banner">
      <div class="intro">
        <h1>guluUI</h1>
        <h2>基于Vue3和Typescript的UI框架</h2>
        <div class="actions">
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
  /*div.home{*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*   height: 100vh;*/
  /*  div.intro{*/
  /*    background-color: lightblue;*/
  /*    display: flex;*/
  /*    flex-direction: column;*/
  /*    justify-content: center;*/
  /*    align-items: center;*/
  /*    padding: 100px 0;*/
  /*  }*/
  /*}*/

  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: lightgreen;
    > .actions{
      padding: 8px 0;
      a {
        margin:0 8px;
        background: #fff;
        display: inline-block;
        @h: 28px;
        height: @h;
        line-height: @h;
        border-radius: @h/2;
        padding: 0 8px;
      }
    }
  }
</style>

