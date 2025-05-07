<template>
  <div class="unidad">
    <h2>Unidad {{ numero }}</h2>
    <div class="unidad-content">
      <div class="form-group">
        <label for="titulo">Título de la Unidad:</label>
        <input type="text" id="titulo" v-model="titulo" @input="guardarUnidad">
      </div>
      
      <div class="metodologias">
        <h3>Metodologías</h3>
        <div class="metodologia-list">
          <div v-for="(metodologia, index) in metodologias" :key="index" class="metodologia-item">
            <input type="text" v-model="metodologias[index]" placeholder="Ingrese metodología" @input="guardarUnidad">
            <button @click="eliminarMetodologia(index)" class="btn-eliminar">Eliminar</button>
          </div>
        </div>
        <button @click="agregarMetodologia" class="btn-agregar">Agregar Metodología</button>
      </div>

      <div class="semanas">
        <h3>Semanas</h3>
        <div v-for="(semana, index) in semanas" :key="index" class="semana-item">
          <Semana
            :numero="index + 1"
            :numeroGlobal="semana.numeroGlobal"
            :semana="semana"
            @actualizar="actualizarSemana(index, $event)"
            @eliminar="eliminarSemana(index)"
          />
        </div>
        <button @click="agregarSemana" class="btn-agregar">Agregar Semana</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Semana from './Semana.vue'
import { useSilaboStore } from '@/stores/silabo'

interface Props {
  numero: number
}

const props = defineProps<Props>()
const store = useSilaboStore()

const titulo = ref('')
const metodologias = ref<string[]>([''])
const semanas = ref<Array<{
  contenido: string
  fecha: string
  peso: number
  numeroGlobal: number
}>>([])

// Inicializar datos desde el store si existen
onMounted(() => {
  const unidadActual = store.silaboActual?.unidades[props.numero - 1]
  if (unidadActual) {
    titulo.value = unidadActual.titulo
    metodologias.value = [...unidadActual.metodologias]
    semanas.value = [...unidadActual.semanas]
  }
})

// Calcular el número global inicial basado en las semanas anteriores
const calcularNumeroGlobalInicial = () => {
  let totalSemanasAnteriores = 0
  for (let i = 0; i < props.numero - 1; i++) {
    const unidadAnterior = store.silaboActual?.unidades[i]
    if (unidadAnterior) {
      totalSemanasAnteriores += unidadAnterior.semanas.length
    }
  }
  return totalSemanasAnteriores + 1
}

const agregarMetodologia = () => {
  metodologias.value.push('')
  guardarUnidad()
}

const eliminarMetodologia = (index: number) => {
  metodologias.value.splice(index, 1)
  guardarUnidad()
}

const agregarSemana = () => {
  const numeroGlobal = calcularNumeroGlobalInicial() + semanas.value.length
  semanas.value.push({
    contenido: '',
    fecha: '',
    peso: 0,
    numeroGlobal
  })
  guardarUnidad()
}

const eliminarSemana = (index: number) => {
  semanas.value.splice(index, 1)
  // Actualizar números globales
  semanas.value.forEach((semana, idx) => {
    semana.numeroGlobal = calcularNumeroGlobalInicial() + idx
  })
  guardarUnidad()
}

const actualizarSemana = (index: number, datos: any) => {
  semanas.value[index] = datos
  guardarUnidad()
}

const guardarUnidad = () => {
  const unidad = {
    titulo: titulo.value,
    metodologias: metodologias.value,
    semanas: semanas.value
  }
  store.actualizarUnidad(props.numero - 1, unidad)
}

// Observar cambios en el store para mantener sincronización
watch(() => store.silaboActual?.unidades[props.numero - 1], (nuevaUnidad) => {
  if (nuevaUnidad) {
    titulo.value = nuevaUnidad.titulo
    metodologias.value = [...nuevaUnidad.metodologias]
    semanas.value = [...nuevaUnidad.semanas]
  }
}, { deep: true })
</script>

<style scoped>
.unidad {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.metodologias, .semanas {
  margin-top: 20px;
}

.metodologia-item, .semana-item {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
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