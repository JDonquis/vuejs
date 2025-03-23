<template>

    <div class="container">
        <PostDetail v-for="elm in data" 
        :key="elm.id"
        :id="elm.id"
        :title="elm.title"
        :content="elm.content"
        :link="elm.link"
        @sayHi="generateAlert"
        />
    </div>

</template>

<script setup>
    import PostDetail from './PostDetail.vue';
    let data = [
        {
            id:1,
            title:"Ejemplo 1",
            content:"Texto del ejemplo 1",
            link:"#"
        },
        {
            id:2,
            title:"Ejemplo 2",
            content:"Texto del ejemplo 2",
            link:"#"
        },
        {
            id:3,
            title:"Ejemplo 3",
            content:"Texto del ejemplo 3",
            link:"#"
        },
        {
            id:4,
            title:"Ejemplo 4",
            content:"Texto del ejemplo 4",
            link:"#"
        },
        {
            id:5,
            title:"Ejemplo 5",
            content:"Texto del ejemplo 5",
            link:"#"
        }
        ]

        function generateAlert($msg){
            alert($msg)
        }

</script>

<style scoped>

.container{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
}

</style>