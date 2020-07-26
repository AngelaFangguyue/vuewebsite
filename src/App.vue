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

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
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
