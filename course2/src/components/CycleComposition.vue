<template>
<div></div>
</template>

<script setup>
    import { onMounted, onUpdated } from 'vue';

    onMounted(() => {
        console.log('Composition Mounted')
    })

    onUpdated(() => {
        console.log('Composition Updated')
    })

</script>

<style scoped>
</style>