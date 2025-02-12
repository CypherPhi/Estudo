<script setup>
    function mensagem() {
        alert('Deu certo, eventos de click')
    }
</script>

<template>
    <button @click="mensagem()">Clique Aqui</button>
</template>