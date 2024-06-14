<script setup>
import { ref, onMounted } from 'vue'
import Login from '../services/login'
import { useRouter } from 'vue-router'

const logins = ref([])
const user = ref('')
const pass = ref('')

const router = useRouter()

onMounted(() => {
  Login.listar().then((res) => {
    console.log(res)
    logins.value = res.data
  })
})

const verlogin = () => {
  const foundUser = logins.value.find(
    (login) => login.login === user.value && login.password === pass.value
  )
  if (foundUser) {
    // Autenticação bem-sucedida, redirecionar para a página home
    router.push({
      name: 'home',
      params: { name: foundUser.name, department: foundUser.department }
    })
  } else {
    // Exibir mensagem de erro
    alert('Credenciais inválidas')
  }
}
</script>

<template>
  <main class="login">
    <div class="login">
      <header>
        <h2>Login</h2>
        <h2>EasyCall</h2>
      </header>

      <form class="form-login" @submit.prevent="verlogin">
        <div class="form-content">
          <label for="username">Username:</label>
          <input type="text" v-model="user" />
        </div>
        <div class="form-content">
          <label for="password">Password:</label>
          <input type="password" v-model="pass" required />
        </div>
        <div class="form-content">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped>
main.login {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
}
div.login {
  display: grid;
  gap: 0.2rem;
  width: 16.25rem; /* ou a largura que desejar */
  padding: 1.25rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
.login header {
  font:
    700 0.825rem 'Poppins',
    sans-serif;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
  border-bottom: 1px solid gray;
}
.login .form-login {
  display: grid;
  gap: 0.5rem;
}
.login .form-content {
  display: grid;
  gap: 0.2rem;
}

.login .form-content input {
  background-color: transparent;
  border-radius: 0.2rem;
  padding: 0.1rem;
  font-size: 1rem;
}

.login .form-content button {
  background-color: green;
  border-radius: 0.4rem;
  color: white;
  font-size: 1.2rem;
}
.login .form-content button:hover {
  background-color: darkgreen;
}
</style>
