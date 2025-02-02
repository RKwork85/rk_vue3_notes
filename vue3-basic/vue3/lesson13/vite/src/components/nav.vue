<script setup>
import { inject } from 'vue';
const provideGrade= inject("provideGrade")
const gradeAdd = inject("provideGradeAdd")
console.log(provideGrade)
</script>
    
<template>
    <h3>这里是Nav导航栏的内容</h3>
    祖父提供的成绩{{ provideGrade }}
    <button @click="gradeAdd">为祖父增加成绩</button>
</template>

<style scoped>

</style>