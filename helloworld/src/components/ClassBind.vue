<template>
    <p :class="{
        'danger':hasError,
    }">El mensaje se ha enviado satisfactoriamente</p>

<p :style="{
        backgroundColor:'#ccc',
        color:c
    }">V bind con style</p>

    <button @click="changeColor">Cambiar color</button>


</template>

<script setup>
    import {ref} from 'vue';
    let hasError = true;
    let c = ref('#fff');

    const changeColor = () =>{
        c.value = '#ff0000'
    }

</script>

<style>
    .danger{
        color:red;
    }
</style>