<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Chamado from '../services/chamado'

const chamados = ref([])

const route = useRoute()
const router = useRouter()
route.params.id

onMounted(() => {
  Chamado.listar(route.params.id).then((res) => {
    chamados.value = res.data
  }).catch((err) => {
    console.log(err)
  })
})

const novochamado = () => {
  router.push('/novochamado')
}

const deslogar = () => {
  router.push('/')
}

const toggleWrap = (chamado) => {
    chamado.wrapunwrap = !chamado.wrapunwrap;
}

</script>

<template>
  <header class="home">
    <a @click="novochamado">Novo chamado</a>
    <a @click="deslogar">Sair</a>
  </header>
  <main class="home">
    <div class="chamados" v-for="chamado of chamados" :key="chamado.id" :class="{ 'wrap': chamado.wrapunwrap, '': !chamado.wrapunwrap }">
      <h2 class="header">{{chamado.assunto}}</h2>
      <p>Descrição: {{chamado.descricao}}</p>
      <p>Título: {{chamado.numanydesk}}</p>
      <p>Status: {{chamado.status}}</p>
      <span @click="toggleWrap(chamado)" :class="{ 'wrap': chamado.wrapunwrap, '': !chamado.wrapunwrap }">V</span>
    </div>
  </main>
</template>

<style>


body {
  width: 100%;
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}
@media (max-width: 600px){

  main.home {
  margin-top: 4rem;
  display:flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
  width: 100%;
  overflow: hidden;
}
  header.home {
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

header.home a:nth-child(1) {
  margin-left: 1rem;
}
header.home a:nth-child(2) {
  margin-right: 1rem;
}

div.chamados {
  position:relative;
  background-color: red;
  border: 1px solid black;
  overflow-y: hidden;
  padding: 0.5rem 1rem;
  margin: 0;
  transition: max-height 0.5s ease-in-out; /* Adicione uma transição para max-height */
  max-height: 100px; /* Defina max-height igual ao valor inicial de height */
}

div.chamados.wrap {
  max-height: 500px;
  overflow-y: scroll;
}

div.chamados span {
  position: absolute;
  bottom: 4px;
  right: 4px;
  cursor: pointer;
}

div.chamados span.wrap {
  
  transform: rotate(180deg);
}

div.chamados .header {
  margin: 0;
  padding: 0 0 0.2rem 0.2rem;
  border-bottom: 1px solid gray;
}

h2 {
  font-size: 1rem;
}
}
</style>
