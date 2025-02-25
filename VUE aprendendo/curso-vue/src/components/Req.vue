<script setup>
import { ref, onMounted } from 'vue';

let vetor = ref([]);

onMounted(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(retorno => retorno.json()).then(retorno => vetor.value = retorno)
});
</script>

<template>
    <h1>Requisiçoes</h1>
    <table>
        <tr v-for="v in vetor">
            <td>{{ v.userId }}</td>
            <td>{{ v.id }}</td>
            <td>{{ v.title }}</td>
            <td>{{ }}</td>
        </tr>
    </table>
</template>