<template>
    <h1>Blog section</h1>
    <ul>
        <li>
            <router-link :to="{name: 'post', params: {
                id:1
                }}">
                post 1
            </router-link>
        </li>
        <li>
            <router-link :to="{name: 'post', params: {
                id:2
                }}">
                post 2
            </router-link>
        </li>
        <li>
            <router-link :to="{name: 'post', params: {
                id:3
                }}">
                post 3
            </router-link>
        </li>
    </ul>
</template>