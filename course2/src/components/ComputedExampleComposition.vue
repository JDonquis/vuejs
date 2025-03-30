<template>
<div>
    <input type="text" v-model="message">    
        <h3>{{ message }}</h3>
        <h3>Valor computado {{ reverse }}</h3>
</div>
</template>

<script setup>
    import { ref, computed } from "vue"
    let message = ref('');
    const reverse = computed(() => {
        return message.value.split('').reverse().join('')
    }) 
</script>

<style scoped>
</style>