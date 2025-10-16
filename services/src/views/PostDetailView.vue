<template>
    <h1>PostDetail</h1>
    <div class="post-container">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
    </div>
    <router-link :to="{name: 'PostList'}">Volver atrás</router-link>
</template>
<script setup>
import PostService from '@/services/PostService';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const service = new PostService();
const post = service.getPost();

onMounted(async () => {
    const route = useRoute();
    const id = route.params.id;
    await service.fetchById(id);
})

</script>