<template>
<!--  <div class="doc">-->
<!--    <Topnav></Topnav>-->
<!--  <div class="content">-->
<!--&lt;!&ndash;    <aside>边栏</aside>&ndash;&gt;-->
<!--&lt;!&ndash;    <main>内容</main>&ndash;&gt;-->
<!--    <Aside v-if="asideVisible"></Aside>-->
<!--    <Main></Main>-->
<!--  </div>-->
<!--  </div>-->
<!--  111-->
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Inout 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/form">Form 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
  import Topnav from "../components/Topnav.vue"
  // import Aside  from "../components/doc/Aside.vue"
  // import Main  from "../components/doc/Main.vue"
  import { inject } from "vue";
  import router from "../router";

  export default {
    name: "Doc",
    components:{ Topnav},//, Aside, Main},
    setup(){
      let asideVisible = inject("asideVisible")
      //console.log(asideVisible);

      // if(document.documentElement.clientWidth<=500){
      //   router.afterEach(()=>{
      //     if(asideVisible.value===true){
      //       console.log("Doc路由守卫:",asideVisible);
      //       asideVisible.value = !asideVisible.value
      //     }
      //   })
      // }



      //console.log("document.documentElement.clientWidth:",document.documentElement.clientWidth)
      return { asideVisible }
    }
  }
</script>

<style lang="less" scoped>
  /*.doc{*/
  /*  background-color: orangered;*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*  height: 100vh;*/
  /*  .topnav{*/
  /*    background-color: pink;*/
  /*  }*/
  /*  .content {*/
  /*    flex-grow: 1;*/
  /*    display: flex;*/
  /*    max-width: 1000px;*/
  /*    width: 100%;*/
  /*    margin: 0 auto;*/
  /*    !*> aside {*!*/
  /*    !*background-color: lightblue;*!*/
  /*    !*  width: 200px;*!*/

  /*    !*}*!*/
  /*    !*> main {*!*/
  /*    !*  background-color: lightgreen;*!*/
  /*    !*  flex-grow: 1;*!*/
  /*    !*}*!*/
  /*    overflow-y: visible;*/
  /*  }*/
  /*}*/
/////////////////////////
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    > .nav {
      flex-shrink: 0;
    }
    > .content {
      flex-grow: 1;
      padding-top: 60px;
      padding-left: 156px;
      @media (max-width: 500px) {
        padding-left: 0;
      }
    }
  }
  .content {
    display: flex;
    > aside {
      flex-shrink: 0;
    }
    > main {
      flex-grow: 1;
      padding: 16px;
      background: lightgreen;
    }
  }
  aside {
    background: lightblue;
    width: 150px;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    > h2 {
      margin-bottom: 4px;
    }
    > ol {
      > li {
        padding: 4px 0;
      }
    }
  }
  main {
    overflow: auto;
  }
</style>

