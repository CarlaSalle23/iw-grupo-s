<template>
  <div class="fuentes-consulta">
    <h2>Fuentes de Consulta</h2>
    <div class="fuentes-list">
      <div v-for="(fuente, index) in fuentes" :key="index" class="fuente-item">
        <textarea
          v-model="fuentes[index]"
          placeholder="Ingrese la fuente en formato APA"
          @input="guardarFuentes"
        ></textarea>
        <button @click="eliminarFuente(index)" class="btn-eliminar">Eliminar</button>
      </div>
    </div>
    <button @click="agregarFuente" class="btn-agregar">Agregar Fuente</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fuentes = ref<string[]>([''])

const agregarFuente = () => {
  fuentes.value.push('')
}

const eliminarFuente = (index: number) => {
  fuentes.value.splice(index, 1)
  guardarFuentes()
}

const guardarFuentes = () => {
  console.log('Fuentes guardadas:', fuentes.value)
}
</script>

<style scoped>
.fuentes-consulta {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.fuentes-list {
  margin-bottom: 20px;
}

.fuente-item {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

textarea {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 60px;
  resize: vertical;
}

.btn-agregar {
  background-color: #4CAF50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-eliminar {
  background-color: #f44336;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
</style> 