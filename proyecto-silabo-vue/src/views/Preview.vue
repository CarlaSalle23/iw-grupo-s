<template>
  <div class="preview">
    <div class="preview-header">
      <h1>Vista Previa del Sílabo</h1>
      <button @click="volver" class="btn-volver">Volver a Edición</button>
    </div>

    <div class="preview-content">
      <section class="datos-generales">
        <h2>Datos Generales</h2>
        <div class="datos-grid">
          <div class="dato-item">
            <strong>Facultad:</strong>
            <span>{{ silabo.datosGenerales.facultad }}</span>
          </div>
          <div class="dato-item">
            <strong>Escuela:</strong>
            <span>{{ silabo.datosGenerales.escuela }}</span>
          </div>
          <div class="dato-item">
            <strong>Asignatura:</strong>
            <span>{{ silabo.datosGenerales.asignatura }}</span>
          </div>
          <div class="dato-item">
            <strong>Código:</strong>
            <span>{{ silabo.datosGenerales.codigo }}</span>
          </div>
          <div class="dato-item">
            <strong>Ciclo:</strong>
            <span>{{ silabo.datosGenerales.ciclo }}</span>
          </div>
          <div class="dato-item">
            <strong>Créditos:</strong>
            <span>{{ silabo.datosGenerales.creditos }}</span>
          </div>
        </div>
      </section>

      <section class="competencias">
        <h2>Competencias</h2>
        <div class="competencias-section">
          <h3>Competencias Generales</h3>
          <ul>
            <li v-for="(comp, index) in silabo.competencias.generales" :key="'gen-' + index">
              {{ comp }}
            </li>
          </ul>
        </div>
        <div class="competencias-section">
          <h3>Competencias Específicas</h3>
          <ul>
            <li v-for="(comp, index) in silabo.competencias.especificas" :key="'esp-' + index">
              {{ comp }}
            </li>
          </ul>
        </div>
      </section>

      <section class="sumilla">
        <h2>Sumilla</h2>
        <p>{{ silabo.sumilla }}</p>
      </section>

      <section class="unidades">
        <h2>Unidades</h2>
        <div v-for="(unidad, index) in silabo.unidades" :key="index" class="unidad">
          <h3>Unidad {{ index + 1 }}: {{ unidad.titulo }}</h3>
          
          <div class="metodologias">
            <h4>Metodologías</h4>
            <ul>
              <li v-for="(metodologia, mIndex) in unidad.metodologias" :key="mIndex">
                {{ metodologia }}
              </li>
            </ul>
          </div>

          <div class="semanas">
            <h4>Semanas</h4>
            <table>
              <thead>
                <tr>
                  <th>Semana</th>
                  <th>Contenido</th>
                  <th>Fecha</th>
                  <th>Peso (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(semana, sIndex) in unidad.semanas" :key="sIndex">
                  <td>{{ sIndex + 1 }}</td>
                  <td>{{ semana.contenido }}</td>
                  <td>{{ semana.fecha }}</td>
                  <td>{{ semana.peso }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="fuentes">
        <h2>Fuentes de Consulta</h2>
        <ol>
          <li v-for="(fuente, index) in silabo.fuentesConsulta" :key="index">
            {{ fuente }}
          </li>
        </ol>
      </section>

      <section class="firma" v-if="silabo.firma">
        <h2>Firma del Profesor</h2>
        <img :src="silabo.firma" alt="Firma del profesor" class="firma-img">
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useSilaboStore } from '@/stores/silabo'

const router = useRouter()
const store = useSilaboStore()

const silabo = computed(() => store.$state)

const volver = () => {
  router.push('/')
}
</script>

<style scoped>
.preview {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.btn-volver {
  background-color: #666;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.preview-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

section {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
}

section:last-child {
  border-bottom: none;
}

.datos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.dato-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.competencias-section {
  margin-bottom: 1.5rem;
}

ul, ol {
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th, td {
  padding: 0.75rem;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f5f5f5;
}

.firma-img {
  max-width: 300px;
  margin-top: 1rem;
}

button:hover {
  opacity: 0.9;
}
</style> 