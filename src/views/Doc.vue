<template>
  <div class="doc">
    <Topnav></Topnav>
  <div class="content">
<!--    <aside>边栏</aside>-->
<!--    <main>内容</main>-->
    <Aside></Aside>
    <Main></Main>
  </div>
  </div>
</template>

<script>
  import Topnav from "../components/Topnav.vue"
  import Aside  from "../components/doc/Aside.vue"
  import Main  from "../components/doc/Main.vue"

  export default {
    name: "Doc",
    components:{ Topnav, Aside, Main}
  }
</script>

<style lang="less" scoped>
  .doc{
    background-color: orangered;
    display: flex;
    flex-direction: column;
    height: 100vh;
    .topnav{
      background-color: pink;
    }
    .content {
      flex-grow: 1;
      display: flex;
      max-width: 1000px;
      width: 100%;
      margin: 0 auto;
      /*> aside {*/
      /*background-color: lightblue;*/
      /*  width: 200px;*/

      /*}*/
      /*> main {*/
      /*  background-color: lightgreen;*/
      /*  flex-grow: 1;*/
      /*}*/
    }
  }

</style>

