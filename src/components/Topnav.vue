<template>
  <div class="topnav">
    <span class="toggleAsideicon" @click="toggleAside">ASIDE</span>
    <div class="logo"><router-link to="/">guluUI</router-link></div>
    <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
    </ul>
  </div>
</template>
<script>
  import {inject} from 'vue'
  export default {
    name: "Topnav",
    setup(){

     let  asideVisible = inject("asideVisible")

     const toggleAside = ()=>{
       asideVisible.value = !asideVisible.value//这个地方要加.value
       //console.log(asideVisible);
     }

     return{toggleAside}

    }

  }
</script>
<style scoped lang="less">
  .topnav{
    padding: 20px;
    background-color: pink;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;
  /*  flex-direction: row;*/
  /*justify-content: space-between;*/
  > .toggleAsideicon{
    /*width: 1em;*/
    /*height: 1em;*/
    position: absolute;
    left: 1em;
    top: 1em;
    background-color: orange;
    display: none;
  }
  > .logo{
    max-width: 6em;
    margin-right: auto;
  }
   > .menu{
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
     > li{
       margin: 0 1em
     }
    }
  }
  @media (max-width: 500px) {
    .topnav{
    > .toggleAsideicon{
        display: inline-block;
      }
     > .logo{
        margin: 0 auto;
      }
    > .menu{
        display: none;
      }
    }

  }
</style>