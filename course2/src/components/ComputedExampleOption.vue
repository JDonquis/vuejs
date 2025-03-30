<template>
    <div>
        <input type="text" v-model="message">    
        <h3>{{ message }}</h3>
        <h3>Valor computado {{ reverse }}</h3>

    </div>
</template>

<script>
import { defineComponent } from 'vue';

    export default defineComponent({
        name:'ComputedExampleOption.vue',
        data(){
            return {
                message:'',
            }
        },
        computed:{
            reverse(){
                return this.message.split('').reverse().join('')
            }
        }
    })

</script>

<style scoped>
</style>