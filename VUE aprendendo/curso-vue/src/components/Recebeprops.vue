<script setup>
    //obter props (nome tem que ser o mesmo da onde esta recebendo o valor)
    const props = defineProps(['nome', 'idade', 'cidade', 'cidades', 'alerta'])

</script>

<template>
    <h1>Nome: {{ nome }}</h1>
    <h1>Idade: {{ idade }}</h1>
    <h1>Cidade: {{ cidade }}</h1>
    <ul>
        <li v-for="cidadeNome in cidades"> {{ cidadeNome }}</li>
    </ul>
    <button @click="alerta">Clique</button>
</template>