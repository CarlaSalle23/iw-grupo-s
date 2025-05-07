<template>
  <div class="competencias">
    <h2>Competencias</h2>
    <div class="competencia-section">
      <h3>Competencias Generales</h3>
      <div v-for="(comp, index) in competenciasGenerales" :key="'gen-' + index" class="competencia-item">
        <textarea
          v-model="competenciasGenerales[index]"
          placeholder="Ingrese la competencia general"
          @input="guardarCompetencias"
        ></textarea>
        <button @click="eliminarCompetencia('general', index)" class="btn-eliminar">Eliminar</button>
      </div>
      <button @click="agregarCompetencia('general')" class="btn-agregar">Agregar Competencia General</button>
    </div>

    <div class="competencia-section">
      <h3>Competencias Específicas</h3>
      <div v-for="(comp, index) in competenciasEspecificas" :key="'esp-' + index" class="competencia-item">
        <textarea
          v-model="competenciasEspecificas[index]"
          placeholder="Ingrese la competencia específica"
          @input="guardarCompetencias"
        ></textarea>
        <button @click="eliminarCompetencia('especifica', index)" class="btn-eliminar">Eliminar</button>
      </div>
      <button @click="agregarCompetencia('especifica')" class="btn-agregar">Agregar Competencia Específica</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const competenciasGenerales = ref<string[]>([''])
const competenciasEspecificas = ref<string[]>([''])

const agregarCompetencia = (tipo: 'general' | 'especifica') => {
  if (tipo === 'general') {
    competenciasGenerales.value.push('')
  } else {
    competenciasEspecificas.value.push('')
  }
}

const eliminarCompetencia = (tipo: 'general' | 'especifica', index: number) => {
  if (tipo === 'general') {
    competenciasGenerales.value.splice(index, 1)
  } else {
    competenciasEspecificas.value.splice(index, 1)
  }
  guardarCompetencias()
}

const guardarCompetencias = () => {
  // Aquí implementaremos la lógica para guardar las competencias
  console.log('Competencias guardadas:', {
    generales: competenciasGenerales.value,
    especificas: competenciasEspecificas.value
  })
}
</script>

<style scoped>
.competencias {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.competencia-section {
  margin-bottom: 30px;
}

.competencia-item {
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
  margin-top: 10px;
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