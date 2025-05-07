<template>
  <div class="home">
    <DatosGenerales />
    <Competencias />
    <Sumilla />
    
    <div class="unidades-section">
      <h2>Unidades</h2>
      <div v-for="(unidad, index) in unidades" :key="index">
        <Unidad :numero="index + 1" />
      </div>
      <button @click="agregarUnidad" class="btn-agregar">Agregar Unidad</button>
    </div>

    <FuentesConsulta />
    <FirmaUpload />
    
    <div class="actions">
      <button @click="guardarSilabo" class="btn-guardar">Guardar Sílabo</button>
      <button @click="previewSilabo" class="btn-preview">Vista Previa</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSilaboStore } from '@/stores/silabo'
import DatosGenerales from '@/components/DatosGenerales.vue'
import Competencias from '@/components/Competencias.vue'
import Sumilla from '@/components/Sumilla.vue'
import Unidad from '@/components/Unidad.vue'
import FuentesConsulta from '@/components/FuentesConsulta.vue'
import FirmaUpload from '@/components/FirmaUpload.vue'

const router = useRouter()
const store = useSilaboStore()
const unidades = ref([0]) // Inicialmente una unidad

const agregarUnidad = () => {
  unidades.value.push(unidades.value.length)
  store.agregarUnidad()
}

const guardarSilabo = () => {
  store.guardarSilabo()
  alert('Sílabo guardado exitosamente')
}

const previewSilabo = () => {
  router.push('/preview')
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.unidades-section {
  margin: 2rem 0;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
}

.btn-agregar {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 1rem 0;
}

.btn-guardar {
  background-color: #2196F3;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
}

.btn-preview {
  background-color: #FF9800;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
}

button:hover {
  opacity: 0.9;
}
</style> 