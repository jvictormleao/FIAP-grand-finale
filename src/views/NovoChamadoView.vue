<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Chamado from '../services/chamado'

const route = useRoute()
const router = useRouter()

const chamado = ref({
  assunto: '',
  descricao: '',
  usuario: route.params.name,
  departamento: route.params.department,
  numanydesk: '',
  status: 'em aberto'
})

const abrirChamado = () => {
  Chamado.salvar(chamado.value)
    .then((res) => {
      console.log(res)
      alert('Chamado aberto com sucesso')
      router.back()
    })
    .catch((err) => {
      console.log(err)
    })
}

const voltar = () => {
  router.back()
}

const deslogar = () => {
  router.push('/')
}
</script>

<template>
  <header class="novochamado">
    <a @click="voltar"><v-icon name="io-arrow-back" scale="1.3" /> VOLTAR</a>
    <a @click="deslogar"><v-icon name="ri-door-open-fill" scale="1.3" /> LOGOUT</a>
  </header>

  <main class="chamado">
    <form id="chamado" class="chamado" @submit.prevent="abrirChamado">
      <header>
        <h2>Novo chamado</h2>
      </header>
      <div class="form-content">
        <label for="assunto">Assunto: </label>
        <input id="assunto" type="text" v-model="chamado.assunto" placeholder="Assunto" required />
      </div>
      <div class="form-content">
        <label for="descricao">Descrição: </label>
        <!-- Suggested code may be subject to a license. Learn more: ~LicenseLog:799106906. -->
        <textarea
          id="descricao"
          form="chamado"
          v-model="chamado.descricao"
          placeholder="Descrição"
        ></textarea>
      </div>
      <div class="form-content">
        <label for="numanydesk">Número Anydesk: </label>
        <input
          id="numanydesk"
          type="text"
          v-model="chamado.numanydesk"
          placeholder="Número do Anydesk"
          required
        />
      </div>
      <button type="submit">Abrir chamado</button>
    </form>
  </main>
</template>

<style scoped>
div.form-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.3rem;
}

div.form-content input {
  background-color: transparent;
  border-radius: 0.2rem;
  padding: 0.1rem;
  font-size: 1rem;
}

#descricao {
  width: 15rem;
  height: 5rem;
  resize: none;
  padding: 0.1rem;
  font-size: 1rem;
  border-radius: 0.2rem;
}
header.novochamado {
  position: fixed;
  z-index: 100;
  background-color: white;
  top: 0;
  left: 0;
  min-width: 100%;
  max-width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
}

header.novochamado a:nth-child(1) {
  margin-left: 1rem;
}
header.novochamado a:nth-child(2) {
  margin-right: 1rem;
}
main.chamado {
  margin-top: 4rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}
form#chamado {
  display: grid;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);
}

form#chamado header {
  font:
    700 0.825rem 'Poppins',
    sans-serif;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
  border-bottom: 1px solid gray;
}
form#chamado button {
  background-color: green;
  border-radius: 0.4rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  color: white;
  font-size: 1rem;
}
form#chamado button:hover {
  background-color: darkgreen;
}

@media (min-width: 0) and (max-width: 600px) {
  main.chamado {
    height: calc(100vh - 5rem);
  }
}
</style>
