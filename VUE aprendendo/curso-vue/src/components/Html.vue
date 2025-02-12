<script setup>
    let texto = '<p style="color:red">Adicionando Tag HTML</p>'
</script>

<template>
    <h1>V-HTML</h1>
    <div v-html="texto"></div>
    <div>{{ texto }}</div>
</template>