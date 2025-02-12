<script setup>
    let validacao = true;
</script>

<template>
    <!--Se for verdadeiro e ok se nao for e notok-->
    <p :class="validacao ? 'ok' : 'notok'">Diretiva class</p>
</template>

<style scoped>
    .ok {
        color: green;
    }
    .notok {
        color: red;
    }
</style>