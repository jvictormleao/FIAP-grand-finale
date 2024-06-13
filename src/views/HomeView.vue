<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const user = ref('')

const route = useRoute()
user.value = route.query.id
</script>

<template>
  <main>
    <h2>{{ user }}</h2>
  </main>
</template>

<style>
body {
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 1.25rem;
}

#app {
  display: block; /* Remove o flex display ou qualquer centralização */
  height: 100%;
}
h2 {
  font-size: 1rem;
}
</style>
