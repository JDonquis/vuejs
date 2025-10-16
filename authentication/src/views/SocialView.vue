<template>
    <h1>Social view</h1>
    <button class="btn btn-outline-secondary" @click="loginGoogle">Login with Google</button>
    <button class="btn btn-outline-secondary" @click="loginFacebook" >Login with Facebook</button>

</template>

<script setup>

import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const loginFacebook = async () => {
    const auth = getAuth();
    try {
        signInWithPopup(auth, facebookProvider).then((result) => {
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            console.log('Access Token:', accessToken);
            alert('User signed in successfully!');
        }).catch((error) => {
            alert('Error during sign-in: ' + error.message);
        });

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.error('Error during sign-in:', errorCode, errorMessage, email, credential);
    }
};

const loginGoogle = async () => {
    const auth = getAuth();
    try {
        signInWithPopup(auth, googleProvider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log('Access Token:', token);
            alert('User signed in successfully!');
        }).catch((error) => {
            alert('Error during sign-in: ' + error.message);
        });

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error('Error during sign-in:', errorCode, errorMessage, email, credential);
    }
};

</script>