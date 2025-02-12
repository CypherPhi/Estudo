<script setup>
    let exibir = true;
    let media = 10;
</script>

<template>
    <h1>Condicionais V-IF, V-Else-if e V-else</h1>
    <h2 v-if="exibir">Ola mundo</h2>

    <p v-if="media >= 8">Aprovado</p>
    <p v-else-if="media >= 5">Em exame</p>
    <p v-else>Reprovado</p>
</template>