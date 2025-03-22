<template>
<h1>HOLA MUNDO</h1>

<h2>Listado de posts</h2>
<PostContainer/>

<h2>Contadores:</h2>
<CounterOption/>
<CounterComposition/>

<h3>Ejemplo de v-if and v-else</h3>
<ExampleSelective/>

<h3>Ejemplo de v-for</h3>
<ExampleFor/>

<h3>Ejemplo de v-class y V-Style</h3>
<ClassBind/>

<h3>Ejemplo de Model form</h3>
<ModelForm/>

</template>

<script setup>
import PostContainer from './components/PostContainer.vue';
import CounterOption from './components/CounterOption.vue';
import CounterComposition from './components/CounterComposition.vue';
import ExampleSelective from './components/ExampleSelective.vue';
import ExampleFor from './components/ExampleFor.vue';
import ClassBind from './components/ClassBind.vue';
import ModelForm from './components/ModelForm.vue';
</script>

<style>
h1{
  color: green;
}
</style>
