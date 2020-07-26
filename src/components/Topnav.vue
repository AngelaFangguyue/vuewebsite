<template>
  <div class="topnav">
    <div class="logo"><router-link to="/">guluUI</router-link></div>
    <ul class="menu">
        <li>文档</li>
        <li>捐款</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "Topnav"
  }
</script>
<style scoped lang="less">
  .topnav{
    padding: 20px;
    background-color: pink;
    display: flex;
  /*  flex-direction: row;*/
  /*justify-content: space-between;*/
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
</style>