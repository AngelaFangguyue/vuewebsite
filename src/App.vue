<template>
<!--  <img alt="Vue logo" src="./assets/logo.png" />-->
<!--  <HelloWorld msg="Hello Vue 3.0 + Vite" />-->
<!--  <div id='nav'>-->
<!--    <router-link to='/'> Home</router-link>-->
<!--    <router-link to='/doc'>Contact </router-link>-->
<!--  </div>-->
  <router-view />
</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'*/

import {ref,provide} from "vue";
import router from "./router";


export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  setup(a,b){
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width > 500 )

    provide("asideVisible",asideVisible)
    //console.log(asideVisible);
    //console.log("a:",a,"b:",b);


    if(width<=500){
      router.afterEach(()=>{
        //if(asideVisible.value===true){
          console.log("App路由守卫:",asideVisible);
          asideVisible.value = false
       // }
      })
    }

      //
          //    router.afterEach(() => {
          //         if (width <= 500) {
          //              menuVisible.value = false;
          //            }
          //      })
          //其实先判断和后判断是一样的
      //
    //return { asideVisible }//由于没用到，所以没必要return

  }
}
</script>
<style>
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  ul,ol{

    list-style: none;
    color: inherit;
  }
  a{
    text-decoration: none;
    color: inherit;
  }

</style>
