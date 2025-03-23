<template>
    <div class="post">
        <h1>{{props.title}}</h1>
        <p>
            {{ props.content }}
        </p>
        <input type="text" v-model="message">
        <button @click="$emit('sayHi', message)">Read more</button>
        <button @click="callGenerateAlert(message)">Read more 2</button>

    </div>
</template>

<script setup>
    import { defineProps, defineEmits, ref } from 'vue';

    let message = ref('');

    const emmit = defineEmits([
        'sayHi'
    ])

    const props = defineProps({
        title:String,
        content:String,
    })

    function callGenerateAlert($msg){
        emmit('sayHi',$msg)
    } 

</script>

<style scoped>
    .post{
        width: 300px;
        height: 400px;
        padding: 10px;
        background-color: rgb(108, 176, 235);
    }
</style>