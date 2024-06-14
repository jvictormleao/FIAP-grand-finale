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
    <a @click="voltar"><v-icon name="io-arrow-back" scale="1.3" /> </a>
    <a @click="deslogar"><v-icon name="ri-door-open-fill" scale="1.3" /></a>
  </header>

  <main class="chamado">
    <form class="chamado" @submit.prevent="abrirChamado">
      <div class="assunto grid">
        <label for="">Assunto: </label>
        <input type="text" v-model="chamado.assunto" placeholder="Assunto" required />
      </div>
      <div class="descricao grid">
        <label for="">Descrição: </label>
        <input type="text" v-model="chamado.descricao" placeholder="Descrição" required />
      </div>
      <div class="numanydesk grid">
        <label for="">Número Anydesk: </label>
        <input type="text" v-model="chamado.numanydesk" placeholder="Número do Anydesk" required />
      </div>
      <button type="submit">Abrir chamado</button>
    </form>
  </main>
</template>

<style scoped>
.grid {
  display: grid;
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
  border-bottom: 1px solid gray;
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
  height: calc(100vh - 5rem);
  width: 100%;
  overflow: hidden;
}

@media (min-width: 601px) {
}
@media (min-width: 0px) and (max-width: 600px) {
}
</style>
