<template>
   
   <div>
    <h1>Hello Cycle</h1>
   </div>

</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name:"CycleOption",
        data(){

        },
        created(){
            console.log('Created')
        },
        mounted(){
            console.log('mounted')
        },
        updated(){
            console.log('updated')
        },
        unmounted(){
            console.log('unmonted')
        }
    })

</script>

<style scoped>
</style>