<script setup>
  import Header from './components/header.vue';
  import {ref} from 'vue'
  const userNumebr = ref(0)
  const receiveData = (value)=>{
    console.log(value)
  }

  const userAdd = (value) =>{
    console.log('接收来的数据为:',value)
    userNumebr.value +=value
  }
</script>

<template>
  <Header  @emitsData="receiveData" @emitsUserAdd=" userAdd"/>
  {{ userNumebr }}
</template>
<style scoped>

</style>

<!-- 子组件中有一个按钮，点击这个按钮，可以控制要增加的数据传递给父组件，父组件得到这个数据，对数据进行处理，实现父组件数据修改 -->