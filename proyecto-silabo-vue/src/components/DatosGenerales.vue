<template>
  <div class="datos-generales">
    <h2>Datos Generales</h2>
    <form @submit.prevent="guardarDatos">
      <div class="form-group">
        <label for="facultad">Facultad:</label>
        <input type="text" id="facultad" v-model="datos.facultad" required>
      </div>
      <div class="form-group">
        <label for="escuela">Escuela:</label>
        <input type="text" id="escuela" v-model="datos.escuela" required>
      </div>
      <div class="form-group">
        <label for="asignatura">Asignatura:</label>
        <input type="text" id="asignatura" v-model="datos.asignatura" required>
      </div>
      <div class="form-group">
        <label for="codigo">Código:</label>
        <input type="text" id="codigo" v-model="datos.codigo" required>
      </div>
      <div class="form-group">
        <label for="ciclo">Ciclo:</label>
        <input type="text" id="ciclo" v-model="datos.ciclo" required>
      </div>
      <div class="form-group">
        <label for="creditos">Créditos:</label>
        <input type="number" id="creditos" v-model="datos.creditos" required>
      </div>
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const datos = ref({
  facultad: '',
  escuela: '',
  asignatura: '',
  codigo: '',
  ciclo: '',
  creditos: 0
})

const guardarDatos = () => {
  // Aquí implementaremos la lógica para guardar los datos
  console.log('Datos guardados:', datos.value)
}
</script>

<style scoped>
.datos-generales {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style> 