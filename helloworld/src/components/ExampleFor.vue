<template>
    <ul>
        <li v-for="(country, index) in countries" :key="index">
            {{ country.code }} - {{ country.name }}
        </li>
    </ul>
</template>

<script setup>
    import {ref} from 'vue';
    let countries = ref([
        {
            code:'Sp',
            name:'Spain'
        },
        {
            code:'Fr',
            name:'France'
        },
        {
            code:'UK',
            name:'UK',
        },
        {
            code:'It',
            name:'Italy'
        },
        {
            code:'Po',
            name:'Portugal'
        },
    ])
</script>

<style>

</style>