<template>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import PostService from '@/services/PostService';
const service = new PostService();
const post = service.getDetailPost();

let postID = ref('');

onMounted(() => {
    const route = useRoute();
    postID.value = route.params.id;
    service.fetchById(postID.value);
});

</script>