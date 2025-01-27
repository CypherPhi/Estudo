<template>
    <div>
        <div>
            two-way data binding
            v-model - formularios
        </div>
        <label>Nome</label> <br>
        <input type="text" v-model="name"> <br>
        {{ name }}
    </div>

    <br>
    <br>

    <div>
        <label for="Sports"></label>
        <select v-model="sports">
            <option value="">Escolha</option>
            <option value="futebol">futebol</option>
            <option value="voley">voley</option>
            <option value="skate">skate</option>
        </select>
        {{ sports }}
    </div>

    <br>
    <br>

    <div>
        <label>Revista</label>
        <input v-model="revista" type="radio" value="Sim">Sim
        <input v-model="revista" type="radio" value="Não">Não

        <br>

        {{ revista }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            sports: 'futebol',
            revista: ''
        }
    }
}
</script>

<style>
</style>