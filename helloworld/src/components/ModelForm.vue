<template>
    <h3>{{ inputText }}</h3>
    <form action="">
        <input type="text" v-model="inputText">
        <input type="checkbox" v-model="agree"> Acepto los terminos y condiciones
        <select v-model="country" name="" id="">
            <option value="1">Spain</option>
            <option value="2">UK</option>
            <option value="3">Italy</option>
            <option value="4">France</option>

        </select>
    </form>
</template>

<script setup>
    import { ref } from 'vue';
    let inputText = ref('')
    let agree = ref(true)
    let country = ref('2')


</script>

<style scoped>

</style>