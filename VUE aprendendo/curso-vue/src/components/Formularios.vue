<script setup>
    import { ref } from 'vue';

    let texto = ref('');
</script>

<template>
    <h1>V-Model</h1>
    <input type="text" v-model="texto">
    <p>{{ texto }}</p>
</template>