<script setup>
import { reactive } from 'vue';

const estado = reactive(
    {
        filtro: 'todas',
        tarefaTemp: '',
        tarefas: [{
            titulo: 'Estudar',
            finalizada: false
        },
        {
            titulo: 'Fazer compras',
            finalizada: false
        },
        {
            titulo: 'Lavar o carro',
            finalizada: false
        },
        {
            titulo: 'Passear com o cachorro',
            finalizada: true
        }
        ]
    })

const getTarefasPendentes = () => {
    return estado.tarefas.filter(tarefa => tarefa.finalizada === false)
}

const getTarefasFinalizadas = () => {
    return estado.tarefas.filter(tarefa => tarefa.finalizada === true)
}


const getTarefasFiltradas = () => {
    const { filtro } = estado;
    switch (filtro) {
        case 'pendentes':
            return getTarefasPendentes();
        case 'finalizadas':
            return getTarefasFinalizadas();
        default:
            return estado.tarefas;
    }
}

const cadastraTarefa = () => {
    const tarefaaNova = {
        titulo: estado.tarefaTemp,
        finalizada: false
    }
    estado.tarefas.push(tarefaaNova);
    estado.tarefaTemp = '';
}
</script>

<template>
    <div class="container">
        <header class="p-5 mb-4 mt-4 bg-light rounded-3">
            <h1>Minhas tarefas</h1>
            <p>Voce possui {{ getTarefasPendentes().length }} tarefas pendentes</p>
        </header>
        <form @submit.prevent="cadastraTarefa">
            <div class="row">
                <div class="col">
                    <input required type="text" placeholder="Digite a descrição da tarefa" class="form-control"
                        @change="evento => estado.tarefaTemp = evento.target.value" :value="estado.tarefaTemp">
                </div>
                <div class="col-md-1">
                    <button class="btn btn-primary" type="submit">Cadastrar</button>
                </div>
                <div class="col-md-2">
                    <select @change="evento => estado.filtro = evento.target.value" class="form-control">
                        <option value="todas">Todas tarefas</option>
                        <option value="pendentes">pendentes</option>
                        <option value="finalizadas">Finalizadas</option>
                    </select>
                </div>
            </div>
        </form>
        <ul class="list-group mt-4">
            <li class="list-group-item" v-for="tarefa in getTarefasFiltradas()">
                <input type="checkbox" :id="tarefa.titulo" @change="evento => tarefa.finalizada = evento.target.checked"
                    :checked="tarefa.finalizada">
                <label :class="{ done: tarefa.finalizada }" class="ms-3" :for="tarefa.titulo">{{ tarefa.titulo
                    }}</label>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>
