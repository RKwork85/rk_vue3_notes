<script setup>
import Nav from './nav.vue'
import { inject } from 'vue';

    const data = inject("provideMuzi")
    console.log(data)
</script>
    
<template>
    <h3>这里是header的内容</h3>
    <Nav />
</template>

<style scoped>

</style>