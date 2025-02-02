<script setup>
    const propsMuzii = defineProps({
        name:String,
        age:{
            type:Number,
            require: false,
            default:100
        }
    })

    console.log(propsMuzii)
</script>

<template>
    <h3>Footer</h3>
    你的年龄是{{ propsMuzii.age }}
</template>

<style scoped>

</style>