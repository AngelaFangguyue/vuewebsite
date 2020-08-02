<template>
  <button @click="toggle" :class="{checked:value}"><span></span></button>
</template>

<script lang="ts">


import { ref } from "vue"

  export default {
    name:"Switch",
    props: {
      value: Boolean
    },
    setup(props,context){

      //const checked = ref(true)

      const toggle = ()=>{
        // checked.value = !checked.value
        context.emit("update:value",!props.value)
      }

      // return {checked, toggle}
      return { toggle }
    }
  }
</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  button{
      height: $h;
      width: $h*2;
      border: none;
      background: #bfbfbf;;
      border-radius: $h/2;
      position: relative;
  &:focus{
    outline: none;
  }
  &.checked { background: #1890ff;
   > span{
      left: calc(  #{$h*2 - $h2} - 2px);
    }
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:white;
    border-radius: 100%;
    transition: left 250ms;
  }
    &:active {
      > span { width: $h2 + 4px; }
    }
    &.checked:active {
      > span { width: $h2 + 4px; margin-left: -4px; }
    }
}
  /*.checked{
    //background-color: red;
    //left: calc(  100% - #{$h2} - 2px);
    //left: calc(  20px - #{$h2} );
    left: calc(  #{$h*2 - $h2} - 2px);
  }*/

</style>