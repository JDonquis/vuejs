<template>
<li class="my-3">
                <div class="flex gap-[30px]">
                    <p class="text-white">{{props.product.name}}</p>
                    <p class="text-white font-semibold">{{ props.product.price }} <span class="text-green-400">$</span></p>
                    <button type="button" @click="$emit('addToBill', props.product)" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Agregar</button>
                </div>
            </li>
</template>

<script setup>
    import { defineProps, defineEmits } from 'vue';

    defineEmits(['addToBill'])

    const props = defineProps({
        product:{
            type:Object,
            required:true
        }
    })
</script>

<style scoped>
</style>