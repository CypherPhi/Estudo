<script>
export default {
  data() {
    return {
      valor1: 0,
      valor2: 0,
      resultado: 0,
      operacao: "+",
    };
  },
  methods: {
    calcular() {
      console.log(this.valor1, this.valor2, this.operacao);
      if (this.operacao === "+") {
        this.resultado = this.valor1 + this.valor2
      } else if (this.operacao === "-") {
        this.resultado = this.valor1 - this.valor2
      } else if (this.operacao === "X") {
        this.resultado = this.valor1 * this.valor2
      } else if (this.operacao === "%") {
        this.resultado = this.valor1 / this.valor2
      }
    }
  }
};
</script>

<template>
  <div class="container text-center">
    <h1>Calculadora</h1>
    <div class="row">
      <div class="col-4">
        <input type="number" placeholder="Digite um valor" class="form-control" v-model="valor1" @change="calcular()" />
        <h1>{{ valor1 }}</h1>
      </div>
      <div class="col-4">
        <select class="ps-4 pe-4 pt-2 pb-2" v-model="operacao" @change="calcular">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="X">*</option>
          <option value="%">/</option>
        </select>
        {{ operacao }}
      </div>
      <div class="col-4">
        <input type="number" placeholder="Digite um valor" class="form-control" @change="calcular()" v-model="valor2" />
        <h1>{{ valor2 }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        {{ resultado }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
