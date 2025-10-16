<template>
    <div class="container">

    
    <form class="w-50 mx-auto mt-5">
    <h1 class="mb-4">Login / Register</h1>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
    </div>

    <button type="submit" class="btn btn-primary" @click.prevent="tryAuth">Submit</button>
</form>
</div>
</template>

<script setup>
import { ref } from 'vue';
import AuthService from '@/services/AuthService';

let email = ref('');
let password = ref('');

const tryAuth = async () => {
    const authService = new AuthService();
    const response = await authService.login(email.value,password.value)
    if (response) {
        alert('Login successful');
    } else {
        alert('Login failed');
    }
}



</script>