<template>
<div>
    <label for="">Subtotal</label>
    <input type="number" v-model="subTotal">
    <h3>Total impuesto a pagar: {{ totalVat }} ({{ vat }}%)</h3>
</div>
</template>

<script setup>
import { computed, ref } from 'vue';

    const vat = 21
    let subTotal = ref(0)
    const totalVat = computed(() => {
        return (vat * subTotal.value) / 100
    })

</script>

<style scoped>
</style>