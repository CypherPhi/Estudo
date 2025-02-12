<script setup>
    function validarForm(event) {
        alert('Formulario validado')
        // cancela direcionamento
        event.preventDefault();
    }
</script>

<template>
    <form action="" @submit="validarForm()">
        <input type="submit" value="Enviar">
    </form>
</template>