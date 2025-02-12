<script setup>
    function mensagem() {
        alert('Executando')
    }
</script>

<template>
    <input type="text" @keyup.enter="mensagem()">
</template>