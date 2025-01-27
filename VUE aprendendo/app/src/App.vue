<template>
  <div v-show="showFirstName">Nome: {{ name }} <br> Sobrenome: {{ sobrenome }}</div>
  <div v-if="access === 'admin'">Admin</div>
  <div v-else-if="access === 'master'">Master</div>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <div>
    <h1 :class="{'title': false}">
      Curso VUE 3
    </h1>
  </div>

  <img v-bind:src="enderecoimg" v-bind:alt="imgAlt">

  <div v-for="obj in todos" v-bind:key="obj.id" class="todos-item">
    {{ obj.title }}
  </div>

  <ModelExemplo />

  <br>
  <br>
  <br>
  
  <EventsExemplo />
 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ModelExemplo from './components/ModelExemplo.vue'
import EventsExemplo from './components/EventsExemplo.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ModelExemplo,
    EventsExemplo
  },
  data() {
    return {
      ShowHeader: true,
      classvar: 'title',
      name: 'Lucas',
      sobrenome: 'Saatkamp', 
      showFirstName: true,
      access: 'master',
      imgAlt: 'foto',
      enderecoimg:'https://placehold.co/600x400',
      todos: [
                {
                  "userId": 1,
                  "id": 1,
                  "title": "delectus aut autem",
                  "completed": false
                },
                {
                  "userId": 1,
                  "id": 2,
                  "title": "quis ut nam facilis et officia qui",
                  "completed": false
                },
                {
                  "userId": 1,
                  "id": 3,
                  "title": "fugiat veniam minus",
                  "completed": false
                },
                {
                  "userId": 1,
                  "id": 4,
                  "title": "et porro tempora",
                  "completed": true
                },
                {
                  "userId": 1,
                  "id": 5,
                  "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                  "completed": false
                }
      ]
    }
  }
}
</script>

<style>
.title {
  font-size: 20px;
  color: red;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.todos-item {
  background: #2c3e50;
  margin: 0 0 5px 0;
  padding: 3px 6px;
  color: blanchedalmond;
}
</style>
