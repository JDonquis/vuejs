<template>
    <ul class="posts-list">
        <router-link v-for="post in posts" :key="post.id" :to="{name: 'post', params: {id: post.id}}">
            <li >
                {{ post.title }}
            </li>
        </router-link>

    </ul>
</template>
<script setup>
import PostService from '@/services/PostService';
import { onMounted } from 'vue';

const service = new PostService();
const posts = service.getPosts();

onMounted(async () => {
    await service.fetchAll()
})

</script>


<style scoped lang="scss">



.posts-list{
    width: 95vw;
    height: 75px;
    padding: 20px;
    list-style-type: none;

    a{
        text-decoration: none;
        li{
        padding: 10px;
        width: 100%;
        border: 1px solid;
        color: $green;
        }
    }
}

 

</style>