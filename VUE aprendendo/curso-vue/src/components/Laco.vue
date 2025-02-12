<script setup>
    let nomes = ['Luis', 'Lucas', 'Caio', 'Daniela']
</script>

<template>
    <h1>Laços V-FOR</h1>
    <ul>
        <li v-for="pessoa in nomes"> {{ pessoa }}</li>
    </ul>
</template>