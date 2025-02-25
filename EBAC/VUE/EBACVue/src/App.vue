<script setup>
import { reactive } from 'vue';

const nome = 'gian';
const meuObj = {
  nome: 'gian',
  filmeFavo: 'test1'
}
function dizOla(nome) {
  return `${nome} diz oi`
}

const botaoDesativado = true
const gostaBatman = false

const estado = reactive({
  contador: 0,
  email: '',
  nomes: ['Lucas', 'Luis', 'Pedro'],
  novoNome: '',
})

function incrementar() {
  estado.contador++
}
function decrementar() {
  estado.contador--
}

function preencherEmail(event) {
  estado.email = event.target.value
}

function cadastraNome() {
  estado.nomes.push(novoNome)
}
</script>

<template>
  {{ nome }}
  <br>
  {{ meuObj.filmeFavo }}
  <br>
  {{ dizOla('Luis') }}
  <br>
  <button :disabled="botaoDesativado">Desativado</button>
  <br>
  <h1 v-if="gostaBatman">Gosta</h1>
  <br>
  <br>
  {{ estado.contador }}
  <button @click="incrementar()" type="button">+</button>
  <button @click="decrementar()" type="button">-</button>
  <br>
  {{ estado.email }}
  <input type="email" @keyup="preencherEmail">
  //ou
  <input type="email" @keyup="e => estado.email = e.target.value">
  <br>
  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>
  <br>
  <input @keyup="event => estado.novoNome = event.target.value" type="text" placeholder="Digite um novo nome">
  <button @click="cadastraNome" type="button">Cadastrar</button>

</template>

<style scoped></style>
