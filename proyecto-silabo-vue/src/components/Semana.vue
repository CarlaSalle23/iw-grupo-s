<template>
  <div class="semana">
    <div class="semana-header">
      <h4>Semana {{ numero }}</h4>
      <button @click="$emit('eliminar')" class="btn-eliminar">Eliminar</button>
    </div>
    
    <div class="semana-content">
      <div class="form-group">
        <label>Contenido:</label>
        <textarea
          v-model="datos.contenido"
          placeholder="Ingrese el contenido de la semana"
          @input="actualizarDatos"
        ></textarea>
      </div>
      
      <div class="form-group">
        <label>Fecha:</label>
        <input
          type="date"
          v-model="datos.fecha"
          @input="actualizarDatos"
        >
      </div>
      
      <div class="form-group">
        <label>Peso (%):</label>
        <input
          type="number"
          v-model="datos.peso"
          min="0"
          max="100"
          @input="actualizarDatos"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  numero: number
  numeroGlobal: number
  semana: {
    contenido: string
    fecha: string
    peso: number
    numeroGlobal: number
  }
}

const props = defineProps<Props>()
const emit = defineEmits(['actualizar', 'eliminar'])

const datos = ref({
  contenido: props.semana.contenido,
  fecha: props.semana.fecha,
  peso: props.semana.peso,
  numeroGlobal: props.numeroGlobal
})

// Auto-completar semana 9 como Examen parcial
watch(() => props.numeroGlobal, (nuevoNumero) => {
  if (nuevoNumero === 9) {
    datos.value.contenido = 'Examen Parcial'
    datos.value.peso = 30 // Establecer un peso por defecto para el examen
    actualizarDatos()
  }
}, { immediate: true })

// También observar cambios en el contenido para mantener la consistencia
watch(() => props.semana.contenido, (nuevoContenido) => {
  datos.value.contenido = nuevoContenido
})

watch(() => props.semana.fecha, (nuevaFecha) => {
  datos.value.fecha = nuevaFecha
})

watch(() => props.semana.peso, (nuevoPeso) => {
  datos.value.peso = nuevoPeso
})

const actualizarDatos = () => {
  emit('actualizar', {
    contenido: datos.value.contenido,
    fecha: datos.value.fecha,
    peso: datos.value.peso,
    numeroGlobal: datos.value.numeroGlobal
  })
}
</script>

<style scoped>
.semana {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 15px;
}

.semana-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.semana-content {
  display: grid;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

label {
  font-weight: bold;
}

textarea {
  width: 100%;
  min-height: 80px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
}

input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn-eliminar {
  background-color: #f44336;
  color: white;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
</style> 