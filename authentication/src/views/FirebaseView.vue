<template>
    <div class="container">

    
    <form class="w-50 mx-auto mt-5">
    <h1 class="mb-4">Firebase Login</h1>
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

let email = ref('');
let password = ref('');

const tryAuth = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            alert('Login successful');
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(`Login failed: ${errorMessage}`);
        });
}

</script>