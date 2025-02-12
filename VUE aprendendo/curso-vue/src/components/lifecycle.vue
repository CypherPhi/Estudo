<script setup>
    import { onMounted, ref } from 'vue';

    let texto = ref('Ola');

    //lifecicle onMounted (depois de montado)
    onMounted(() => {
        setTimeout(() => {
            texto.value = 'Lucas'
        }, 3000)
    });

</script>

<template>
    <h1>{{ texto }}</h1>
</template>