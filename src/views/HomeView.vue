<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const user = ref('')

const route = useRoute()
const router = useRouter()
user.value = route.query.id

const novochamado = () => {
  router.push('/novochamado')
}

const deslogar = () => {
  router.push('/')
}

</script>

<template>
  <header class="home">
    <a @click="novochamado">Novo chamado</a>
    <a @click="deslogar">Sair</a>
  </header>
  <main class="home">
  </main>
</template>

<style>


body {
  width: 100%;
  height: 100vh;
  padding: 0;
}
@media (max-width: 400px){
  main.home {
  margin: 0;
  padding: 0 1rem;
  display: grid;
  height: 100%;
  width: 100%;
}
  header.home {
  position: fixed;
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

h2 {
  font-size: 1rem;
}
}
</style>
