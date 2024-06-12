<script setup>
import { ref, onMounted } from 'vue'
import Login from '../services/login.js'
import { useRouter } from 'vue-router'

const logins = ref([])
const user = ref('')
const pass = ref('')

const router = useRouter()

onMounted(() => {
  Login.listar().then((res) => {
    logins.value = res.data
    console.log(logins.value)
    pass.value - logins.value.password
    console.log(pass)
  })
})

const verlogin = () => {
  const foundUser = logins.value.find(
    (login) => login.login === user.value && login.password === pass.value
  )
  if (foundUser) {
    // Autenticação bem-sucedida, redirecionar para a página home
    router.push('/home')
  } else {
    // Exibir mensagem de erro
    alert('Credenciais inválidas')
  }
}
</script>

<template>
  <div class="login">
    <tr v-for="login of logins" :key="login.id">
      <td>{{ login.name }}</td>
      <td>{{ login.login }}</td>
      <td>{{ login.password }}</td>
    </tr>

    <h2>Login</h2>
    <form @submit.prevent="verlogin">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="user" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="pass" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style></style>
