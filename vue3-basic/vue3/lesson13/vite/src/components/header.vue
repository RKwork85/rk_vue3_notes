<script setup>

    const  emits= defineEmits(['emitsData',"emitsUserAdd"])
    emits('emitsData', {name:'muzi', age:18})

    const add = () =>{
        emits("emitsUserAdd", 10)
    }

</script>
    
<template>
    <button @click="add">增加年龄</button>
</template>

<style scoped>

</style>