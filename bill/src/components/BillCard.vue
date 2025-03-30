<template>

<section class="p-5">
    <div class="max-w-[300px]">
        <input type="text" v-model="apiState.searchTerm" id="product" class="bg-gray-100 border border-gray-300 text-white text-sm rounded-lg   block w-full p-1.5 dark:bg-gray-400 dark:border-gray-400 dark:placeholder-white dark:text-white  " placeholder="Buscar Producto" required />
    </div>
    <div class="mt-3">
        <ul class="bg-gray-400 w-sm">
            <ProductSearched 
            v-for="(product,index) in filteredProducts" 
            :key="index"
            :product="product"
            @addToBill="addToBill"
            />
        </ul>
    </div>
    <div class="m-auto mt-5 bg-white w-[500px]">
        <h1 class="text-center font-semibold" >Factura</h1>
        <table class="w-full table-fixed striped">
            <tr>
                <th></th>
                <th></th>
            </tr>
            
            <tr v-for="(product , index) in bill"
            :key="index"
            >
                <td class="py-2">{{ product.name }}</td>
                <td class="text-end">{{ product.price }}$</td>
            </tr>
            
        </table>
        <span>Total: {{ total }}</span>
    </div>
</section>
</template>




<script setup>

import { reactive, computed, ref } from 'vue';
import ProductSearched from "./ProductSearched"

const apiState = reactive({
    products:[],
    searchTerm:''
})

const bill = ref([])
const total = computed(() => {
    if(!bill.value.length > 0)
        return 0;
    
    return bill.value.reduce((sum, product) => sum + product.price, 0);
})

const productsRequested = [
    {
        name: "Jugo de manzana",
        price: 1.5,
    },
    {
        name: "Agua mineral 500ml",
        price: 0.8,
    },
    {
        name: "Café americano",
        price: 2.0,
    },
    {
        name: "Té verde",
        price: 1.2,
    },
    {
        name: "Refresco de cola",
        price: 1.5,
    },
    {
        name: "Batido de fresa",
        price: 3.0,
    },
    {
        name: "Leche chocolatada",
        price: 2.2,
    },
    {
        name: "Zumo de naranja natural",
        price: 2.5,
    },
    {
        name: "Energizante",
        price: 2.8,
    },
    {
        name: "Agua con gas",
        price: 1.0,
    }
];

apiState.products = productsRequested

const filteredProducts = computed(() => {
    if(!apiState.searchTerm)
        return null
    
    return apiState.products.filter(product => product.name.toLowerCase().includes(apiState.searchTerm.toLowerCase()))
})

const addToBill = function($product){
    
        bill.value.push($product);
}

</script>

<style scoped>

  .striped tr:nth-child(even) {
    @apply bg-gray-100;  /* Filas pares */
  }
  .striped tr:nth-child(odd) {
    @apply bg-white;     /* Filas impares */
  }
</style>