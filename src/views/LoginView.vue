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
    <header>
      <span class="div"></span>
    </header>
    <tr v-for="login of logins" :key="login.id">
      <td>{{ login.name }}</td>
      <td>{{ login.login }}</td>
      <td>{{ login.password }}</td>
    </tr>

    <h2>Login</h2>
    <form @submit.prevent="verlogin">
      <div class="input">
        <label for="username">Username:</label>
        <input type="text" v-model="user" />
      </div>
      <div class="input">
        <label for="password">Password:</label>
        <input type="password" v-model="pass" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px; /* ou a largura que desejar */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
</style>
