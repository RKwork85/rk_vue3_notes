<script setup>
  import Header from './components/header.vue';
  import Footer from './components/footer.vue';
  import {reactive} from 'vue'
  const propsMuzi = reactive({
    name:'muzi',
    age:18
  })
  const addAge = () => {
    propsMuzi.age++
    console.log(propsMuzi.age)
}
</script>

<template>
  <Header propsName="muzi"  propsAge="18"/>
  <Footer v-bind="propsMuzi"/>

  <button @click="addAge">增加年龄</button>
</template>

<style scoped>

</style>

<!-- 父传子：header 数组 -->
<!-- 父传子：footer 对象 -->
 <!-- 实现父组件控制传递给子组件的数据， 在子组件页面上的增加 -->
