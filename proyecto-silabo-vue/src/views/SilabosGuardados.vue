<template>
  <div class="silabos-guardados">
    <h1>Sílabos Guardados</h1>
    
    <div class="silabos-list">
      <div v-for="silabo in silabos" :key="silabo.id" class="silabo-card">
        <div class="silabo-info">
          <h3>{{ silabo.datosGenerales.asignatura }}</h3>
          <p><strong>Código:</strong> {{ silabo.datosGenerales.codigo }}</p>
          <p><strong>Ciclo:</strong> {{ silabo.datosGenerales.ciclo }}</p>
          <p><strong>Fecha de creación:</strong> {{ new Date(silabo.fechaCreacion).toLocaleDateString() }}</p>
        </div>
        <div class="silabo-actions">
          <button @click="editarSilabo(silabo.id)" class="btn-editar">Editar</button>
          <button @click="verSilabo(silabo.id)" class="btn-ver">Ver</button>
          <button @click="eliminarSilabo(silabo.id)" class="btn-eliminar">Eliminar</button>
        </div>
      </div>
    </div>

    <div class="actions">
      <button @click="nuevoSilabo" class="btn-nuevo">Nuevo Sílabo</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSilaboStore } from '@/stores/silabo'

const router = useRouter()
const store = useSilaboStore()

const silabos = computed(() => store.silabos)

onMounted(() => {
  store.cargarSilabos()
})

const editarSilabo = (id: string) => {
  store.cargarSilabo(id)
  router.push('/')
}

const verSilabo = (id: string) => {
  store.cargarSilabo(id)
  router.push('/preview')
}

const eliminarSilabo = (id: string) => {
  if (confirm('¿Está seguro de eliminar este sílabo?')) {
    store.eliminarSilabo(id)
  }
}

const nuevoSilabo = () => {
  store.inicializarSilabo()
  router.push('/')
}
</script>

<style scoped>
.silabos-guardados {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.silabos-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.silabo-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1.5rem;
}

.silabo-info {
  margin-bottom: 1rem;
}

.silabo-info h3 {
  margin-bottom: 0.5rem;
  color: #333;
}

.silabo-info p {
  margin: 0.25rem 0;
  color: #666;
}

.silabo-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-editar {
  background-color: #2196F3;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-ver {
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

.btn-nuevo {
  background-color: #4CAF50;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1rem;
}

.actions {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

button:hover {
  opacity: 0.9;
}
</style> 