<template>
   <main>
     <h2>内容</h2>
     <router-view></router-view>
   </main>
</template>

<style scoped>
  main {
    background-color: lightgreen;
    flex-grow: 1;
    /*overflow-y: auto;*/
  }
</style>