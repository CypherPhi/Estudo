<script setup>
    import Recebeprops from './Recebeprops.vue';

    let cidade = 'Votuporanga';
    let cidades = ['Votuporanga', 'Cardoso'];

    function mensagem() {
        alert('Funçao na Props');
    }
</script>

<template>
    <Recebeprops nome="Lucas" idade="24" :cidade="cidade" :cidades="cidades" :alerta="mensagem"/>
</template>