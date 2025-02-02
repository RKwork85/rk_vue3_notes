<script setup>

  import Header from './components/header.vue'
  import {provide, ref, reactive} from 'vue'

  const muzi =reactive({
    "name": 'muzihhh',
    "age": 18
  })
  const grade = ref(88)
  const gradeAdd = () =>{
    grade.value += 1
  }
  provide("provideMuzi", muzi)
  provide("provideGrade", grade)
  provide('provideGradeAdd', gradeAdd)
</script>

<template>
  <h1>这里是父组件内容</h1>
   祖父的成绩{{ grade }}

  <Header />
</template>
<style scoped>

</style>

<!-- 子组件中有一个按钮，点击这个按钮，可以控制要增加的数据传递给父组件，父组件得到这个数据，对数据进行处理，实现父组件数据修改 -->