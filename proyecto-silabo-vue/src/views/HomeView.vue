<template>
  <div class="home-view">
    <div class="options">
      <button @click="navigateTo('abrir')" class="text-hover">Abrir un Sílabo</button>
      <button @click="navigateTo('editar')" class="text-hover">Editar un Sílabo</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateTo(option) {
  if (option === 'abrir') {
    router.push('/abrir-silabo')
  } else if (option === 'editar') {
    router.push('/editar-silabo')
  }
}
</script>

<style scoped>
.home-view {
  text-align: center;
  margin-top: 50px;
}

.options {
  margin-top: 20px;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
