<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Chamado from '../services/chamado'

const chamados = ref([])

const route = useRoute()
const router = useRouter()

onMounted(() => {
  listar()
})
const listar = () => {
  Chamado.listar()
    .then((res) => {
      chamados.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
}
const novochamado = () => {
  router.push({
    name: 'novochamado',
    params: { name: route.params.name, department: route.params.department }
  })
}

const deslogar = () => {
  router.push('/')
}

const deletar = (id) => {
  Chamado.deletar(id)
    .then((res) => {
      console.log('Chamado excluido com sucesso:', res)
      listar()
    })
    .catch((err) => {
      console.log(err)
    })
}

const toggleWrap = (chamado) => {
  chamado.wrapunwrap = !chamado.wrapunwrap
}
</script>

<template>
  <header class="home">
    <a @click="novochamado"><v-icon name="bi-plus-square-fill" scale="1.3" /> NOVO CHAMADO </a>
    <a @click="deslogar"><v-icon name="ri-door-open-fill" scale="1.3" /> LOGOUT</a>
  </header>
  <main class="home">
    <div
      class="chamados"
      v-for="chamado of chamados"
      :key="chamado.id"
      :class="{ wrap: chamado.wrapunwrap, '': !chamado.wrapunwrap }"
    >
      <h2 class="header">
        {{ chamado.assunto }} <v-icon id="del" name="bi-trash-fill" @click="deletar(chamado.id)" />
      </h2>
      <p class="content">{{ chamado.descricao }}</p>
      <p class="user">{{ chamado.usuario }}({{ chamado.departamento }})</p>
      <div class="footer">
        <p>Anydesk: {{ chamado.numanydesk }}</p>
        <p>Status: {{ chamado.status }}</p>
      </div>

      <v-icon
        id="wrap"
        name="ri-arrow-drop-down-fill"
        scale="2"
        @click="toggleWrap(chamado)"
        :class="{ wrap: chamado.wrapunwrap, '': !chamado.wrapunwrap }"
      />
    </div>
  </main>
</template>

<style>
div.chamados #wrap {
  cursor: pointer;
  position: absolute;
  bottom: -4px;
  right: 0;
}

div.chamados #wrap.wrap {
  transform: rotate(180deg);
}
div.chamados #del {
  cursor: pointer;
  position: absolute;
  top: 6px;
  right: 10px;
}

body {
  width: 100%;
  height: calc(100vh - 5rem);
  padding-left: 1rem;
  padding-right: 1rem;
}

a {
  cursor: pointer;
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

@media (min-width: 601px) {
  h2 {
    font-size: 1.4rem;
  }
  main.home {
    margin-top: 4rem;
    padding-bottom: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Define duas colunas com largura igual */
    gap: 1rem;
    width: 100%;
  }
  div.chamados {
    border-radius: 0.5rem;
    position: relative;
    background-color: white;
    border: 1px solid black;
    overflow-y: hidden;
    padding: 0.2rem 1rem;
    transition: max-height 0.5s ease-in-out; /* Adicione uma transição para max-height */
    max-height: 100px; /* Defina max-height igual ao valor inicial de height */
  }

  div.chamados {
    border-radius: 0.5rem;
    position: relative;
    background-color: white;
    border: 1px solid black;
    overflow-y: hidden;
    padding: 0.3rem 1rem;
    width: auto;
    margin: 0;
    transition: max-height 0.3s ease-in-out; /* Adicione uma transição para max-height */
    max-height: 100px; /* Defina max-height igual ao valor inicial de height */
  }

  div.chamados.wrap {
    max-height: 1000px;
    overflow-y: visible;
  }

  div.chamados .header {
    padding: 0 0 0.2rem 0.25rem;
    border-bottom: 1px solid gray;
  }

  div.chamados .content {
    padding: 0 0.25rem;
  }

  div.chamados .user {
    padding: 0 0.25rem;
  }

  div.chamados .footer {
    display: flex;
    justify-content: space-between;
    padding: 0 0.25rem;
  }
}
@media (min-width: 0px) and (max-width: 600px) {
  main.home {
    margin-top: 4rem;
    padding-bottom: 1rem;
    gap: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    overflow: hidden;
  }

  div.chamados {
    border-radius: 0.5rem;
    position: relative;
    background-color: white;
    border: 1px solid black;
    overflow-y: hidden;
    padding: 0.5rem 1rem;
    width: auto;
    margin: 0;
    transition: max-height 0.3s ease-in-out; /* Adicione uma transição para max-height */
    max-height: 100px; /* Defina max-height igual ao valor inicial de height */
  }

  div.chamados.wrap {
    max-height: 1000px;
    overflow-y: visible;
  }

  div.chamados .header {
    padding: 0 0 0.2rem 0.25rem;
    border-bottom: 1px solid gray;
  }

  div.chamados .content {
    padding: 0.5rem 0.25rem 1rem 0.25rem;
  }

  div.chamados .user {
    padding: 0.5rem 0.25rem 1rem 0.25rem;
  }

  div.chamados .footer {
    display: flex;
    justify-content: space-between;
    padding: 0 0.25rem;
  }

  h2 {
    font-size: 1rem;
  }
}
</style>
