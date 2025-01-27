<template>
    <div>
        <button v-on:click="onClick">Enviar</button>
    </div>
    <br>
    <div @mouseover="mouse()">
        Mouse over
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        onClick(e) {
            console.log('foi', e)
        },
        mouse() {
            console.log('mouse foi')
        }
    }
}
</script>