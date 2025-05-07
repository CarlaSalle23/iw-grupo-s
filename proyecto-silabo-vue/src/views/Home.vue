<template>
  <div class="home">
    <h1>Sílabo de Ejemplo</h1>

    <section class="section">
      <h2>Datos Generales</h2>
      <pre>{{ JSON.stringify(silaboStore.silaboActual?.datosGenerales, null, 2) }}</pre>
    </section>

    <section class="section">
      <h2>Competencias del Curso</h2>
      <pre>{{ JSON.stringify(silaboStore.silaboActual?.competenciaCurso, null, 2) }}</pre>
    </section>

    <section class="section">
      <h2>Competencia del Perfil de Egreso</h2>
      <pre>{{ silaboStore.silaboActual?.competenciaPerfilEgreso }}</pre>
    </section>

    <section class="section">
      <h2>Competencias Previas</h2>
      <pre>{{ JSON.stringify(silaboStore.silaboActual?.competenciasPrevias, null, 2) }}</pre>
    </section>

    <section class="section">
      <h2>Sumilla</h2>
      <pre>{{ silaboStore.silaboActual?.sumilla }}</pre>
    </section>

    <section class="section">
      <h2>Actividades</h2>
      <pre>{{ JSON.stringify(silaboStore.silaboActual?.actividades, null, 2) }}</pre>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useSilaboStore } from '../stores/silabo'
import DatosGenerales from '../components/DatosGenerales.vue'
import Competencias from '../components/Competencias.vue'
import Sumilla from '../components/Sumilla.vue'
import Unidad from '../components/Unidad.vue'

const silaboStore = useSilaboStore()

onMounted(() => {
  // Cargar el sílabo de ejemplo al montar el componente
  silaboStore.cargarSilaboEjemplo()
})
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.section {
  background: white;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

pre {
  white-space: pre-wrap;
  font-family: 'Courier New', Courier, monospace;
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
}
</style>
