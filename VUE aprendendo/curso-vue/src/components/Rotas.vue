<script setup>
import { ref, computed } from 'vue';
import Rt1 from './Rt1.vue';
import Rt2 from './Rt2.vue';
import RtError from './RtError.vue';

const routes = {
    '/': Rt1,
    '/pagina2': Rt2,
    '/404': RtError
}

const referenciaRota = ref(window.location.hash)

window.addEventListener('hashchange', () => {
    referenciaRota.value = window.location.hash
});

const currentView = computed(() => {
    return routes[referenciaRota.value.slice(1) || '/'] || RtError
})
</script>

<template>
    <a href="#/">Pag 1</a>
    <a href="#/pagina2"> Pag 2</a>
    <component :is="currentView" />
</template>