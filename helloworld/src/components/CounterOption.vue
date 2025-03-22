<template>
    <h3>Contador option: <span>{{ counter }}</span></h3>

    <button @click="addCounter">Incrementar</button>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name:'CounterOption',
        components:{},
        data(){
            let counter = 0;
            return {counter}
        },
        methods:{
            addCounter(){
                this.counter++
            },
        }
    })
</script>

<style>
</style>