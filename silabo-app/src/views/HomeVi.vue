<template>
  <div class="container py-4 bg-light min-vh-100">
    <!-- Encabezado mejorado -->
    <header class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-4 border-bottom pb-3 text-center">
      <div>
        <h1 class="h4 fw-bold text-primary">📚 Sílabo Académico de {{ silabo.datosGenerales.curso }}</h1>
        <span class="badge bg-info fs-6">{{ silabo.datosGenerales.periodoLectivo }}</span>
      </div>
      <div>
        <div class="fw-semibold text-uppercase">{{ silabo.datosGenerales.docente }}</div>
        <div class="text-muted small">{{ silabo.datosGenerales.correo }}</div>
      </div>
    </header>

  <div class="container my-4">
  <div class="card shadow rounded-4 p-4 text-center">
    <div class="row g-4 mb-3">
      <!-- Facultad -->
      <div class="col-md-4">
        <div class="card bg-primary text-white h-100 border-0">
          <div class="card-body text-center">
            <small class="card-title opacity-75">Facultad</small>
            <h5 class="mb-0 text-center">{{ silabo.datosGenerales.facultad }}</h5>
          </div>
        </div>
      </div>
      <!-- Carrera -->
      <div class="col-md-4">
        <div class="card bg-primary text-white h-100 border-0">
          <div class="card-body">
            <small class="card-title opacity-75">Carrera profesional</small>
            <h5 class="mb-0 text-center">{{ silabo.datosGenerales.carreraProfesional }}</h5>
          </div>
        </div>
      </div>
      <!-- Código y Créditos -->
      <div class="col-md-4">
        <div class="card bg-primary text-white h-100 border-0">
          <div class="card-body">
            <small class="card-title opacity-75">Código de Curso</small>
            <h5 class="mb-0 text-center">{{ silabo.datosGenerales.codigoCurso }}</h5>
            <small>{{ silabo.datosGenerales.numeroCreditos }} créditos</small>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-4 mb-3">
      <!-- Semestre -->
      <div class="col-md-4">
        <div class="card border-primary h-100">
          <div class="card-body">
            <small class="card-title opacity-75">Semestre</small>
            <h5 class="mb-0">{{ silabo.datosGenerales.semestre }}</h5>
          </div>
        </div>
      </div>
      <!-- Área Formación -->
      <div class="col-md-4">
        <div class="card border-primary h-100">
          <div class="card-body">
            <small class="card-title opacity-75">Área de Formación</small>
            <h5 class="mb-0">{{ silabo.datosGenerales.areaFormacion }}</h5>
          </div>
        </div>
      </div>
      <!-- Tipo de Curso -->
      <div class="col-md-4">
        <div class="card border-primary h-100">
          <div class="card-body">
            <small class="card-title opacity-75" >Tipo de Curso</small>
            <h5 class="mb-0">{{ silabo.datosGenerales.tipoCurso }}</h5>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-4 mb-4">
      <!-- Prerrequisitos -->
      <div class="col-md-6">
        <div class="card bg-dark text-white h-100 border-0">
          <div class="card-body">
            <small class="card-title opacity-75">Prerrequisitos</small>
            <h5 class="mb-0">{{ silabo.datosGenerales.preRequisitos }}</h5>
          </div>
        </div>
      </div>
      <!-- Horas -->
      <div class="col-md-6">
        <div class="card bg-dark text-white h-100 border-0">
          <div class="card-body">
            <small class="text-white">Horas Académicas</small>
            <div class="d-flex justify-content-around mt-3">
              <div>
                <div class="fw-bold">Teoría</div>
                <div class="fs-5">{{ silabo.datosGenerales.numeroHoras.teoria }}</div>
              </div>
              <div>
                <div class="fw-bold">Práctica</div>
                <div class="fs-5">{{ silabo.datosGenerales.numeroHoras.practica }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    <!-- Contenido paginado -->
    <div class="content-wrapper position-relative" style="min-height: 60vh;">
      <!-- Página 1: Competencias -->
      <div v-if="currentPage === 1" class="page-content animate__animated animate__fadeIn">
        <div class="card border-0 shadow-sm mb-4">
          <div class="card-header bg-white border-0">
            <h5 class="fw-semibold mb-0">🧠 Competencias del Curso</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li v-for="(comp, i) in silabo.competenciaCurso" :key="i" 
                class="list-group-item d-flex align-items-center">
              <span class="badge bg-primary me-2">{{ i + 1 }}</span>
              {{ comp }}
            </li>
          </ul>
        </div>

        <div class="row g-3">
          <div class="col-md-6">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-white border-0">
                <h5 class="fw-semibold mb-0">🎯 Perfil de Egreso</h5>
              </div>
              <div class="card-body">
                <p class="text-muted mb-0">{{ silabo.competenciaPerfil }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-header bg-white border-0">
                <h5 class="fw-semibold mb-0">📚 Competencias Previas</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li v-for="(prev, i) in silabo.competenciasPrevias" :key="i" 
                    class="list-group-item d-flex align-items-center">
                  <span class="badge bg-secondary me-2">{{ i + 1 }}</span>
                  {{ prev }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Página 2: Unidades -->
      <div v-if="currentPage === 2" class="page-content animate__animated animate__fadeIn">
        <div class="row g-3">
          <div v-for="(unidad, index) in silabo.unidades" :key="index" class="col-md-6 col-lg-4">
            <div class="card h-100 border-primary hover-shadow" 
                 @click="openModal(unidad)"
                 style="cursor: pointer;">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <h5 class="card-title mb-0">📦 Unidad {{ index + 1 }}</h5>
                  <span class="badge bg-primary">{{ unidad.intervaloFechas }}</span>
                </div>
                <p class="text-muted small mb-0">{{ unidad.denominacion }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Página 3: Evaluación -->
      <div v-if="currentPage === 3" class="page-content animate__animated animate__fadeIn">
        <div class="card border-0 shadow-sm mb-4">
          <div class="card-header bg-white border-0">
            <h5 class="fw-semibold mb-0">📊 Sistema de Evaluación</h5>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover align-middle">
                <thead class="table-light">
                  <tr>
                    <th>Tipo</th>
                    <th class="text-center">Peso</th>
                    <th>Fecha</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(criterio, i) in silabo.criteriosEvaluacion" :key="i">
                    <td>{{ criterio.tipo }}</td>
                    <td class="text-center fw-bold text-primary">{{ criterio.peso }}%</td>
                    <td>{{ criterio.fechaConsolidacion }}</td>
                    <td class="small">{{ criterio.descripcion }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navegación mejorada -->
    <div class="d-flex justify-content-between align-items-center mt-4 border-top pt-3">
      <button class="btn btn-outline-primary" 
              @click="changePage(-1)" 
              :disabled="currentPage === 1">
        <i class="bi bi-chevron-left"></i> Anterior
      </button>
      <div class="text-muted small">Página {{ currentPage }} de 3</div>
      <button class="btn btn-primary" 
              @click="changePage(1)" 
              :disabled="currentPage === 3">
        Siguiente <i class="bi bi-chevron-right"></i>
      </button>
    </div>
  
    <!-- Modal de Unidad Mejorado -->
    <div v-if="showModal" class="modal fade show" 
         tabindex="-1" role="dialog" 
         style="display: block">
      <div class="modal-backdrop fade show"></div>
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg">
          <div class="modal-header bg-primary text-white">
            <div class="w-100">
              <h3 class="modal-title h5 mb-1">UNIDAD {{ selectedUnidad.numero }}</h3>
              <h2 class="modal-title h4 fw-bold">{{ selectedUnidad.denominacion }}</h2>
            </div>
            <button type="button" class="btn-close btn-close-white" 
                    @click="closeModal"></button>
          </div>
          
          <div class="modal-body p-4">
            <!-- Sección Superior: Información General -->
            <div class="row mb-4 g-4">
              <div class="col-md-4">
                <div class="bg-light p-3 rounded">
                  <h6 class="fw-semibold text-primary mb-3">
                    <i class="bi bi-calendar-week me-2"></i>Periodo
                  </h6>
                  <p class="mb-0">{{ selectedUnidad.intervaloFechas }}</p>
                </div>
              </div>
              
              <div class="col-md-8">
                <div class="bg-light p-3 rounded">
                  <h6 class="fw-semibold text-primary mb-3">
                    <i class="bi bi-bullseye me-2"></i>Capacidad Principal
                  </h6>
                  <p class="fst-italic mb-0">{{ selectedUnidad.capacidad }}</p>
                </div>
              </div>
            </div>

            <!-- Pestañas para Organizar Contenido -->
            <ul class="nav nav-tabs mb-4" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link" 
                        :class="{ 'active': activeTab === 'semanas' }"
                        @click="activeTab = 'semanas'">
                  <i class="bi bi-calendar-event me-2"></i>Semanas ({{ selectedUnidad.semanas.length }})
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" 
                        :class="{ 'active': activeTab === 'metodologias' }"
                        @click="activeTab = 'metodologias'">
                  <i class="bi bi-journal-check me-2"></i>Metodologías
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" 
                        :class="{ 'active': activeTab === 'fuentes' }"
                        @click="activeTab = 'fuentes'">
                  <i class="bi bi-book me-2"></i>Fuentes
                </button>
              </li>
            </ul>

            <!-- Contenido de Pestañas -->
            <div class="tab-content">
              <!-- Pestaña Semanas -->
              <div class="tab-pane fade" :class="{ 'show active': activeTab === 'semanas' }">
                <div class="row g-3">
                  <div v-for="semana in selectedUnidad.semanas" :key="semana.numero" 
                       class="col-12">
                    <div class="card border-0 shadow-sm">
                      <div class="card-header bg-white">
                        <h5 class="h6 mb-0">Semana {{ semana.numero }}</h5>
                      </div>
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-8">
                            <h6 class="text-muted small mb-2">Contenidos:</h6>
                            <!-- Si semana.contenidos es un array -->
                            <ul class="list-group">
                              <li v-for="(contenido, index) in semana.contenidos" :key="index" class="list-group-item border-0 py-1">
                                {{ contenido }}
                              </li>
                            </ul>
                            
                            <!-- Si por alguna razón no es un array o está vacío -->
                            <p v-if="!Array.isArray(semana.contenidos) || semana.contenidos.length === 0" class="mb-0">
                              {{ semana.contenidos }}
                            </p>
                          </div>
                          <div class="col-md-4">
                            <div class="bg-light p-3 rounded">
                              <h6 class="text-muted small mb-2">Detalles:</h6>
                              <ul class="list-unstyled small mb-0">
                                <li class="mb-1">
                                  <i class="bi bi-clock-history me-2"></i>
                                  {{ semana.horas }} horas
                                </li>
                                <li>
                                  <i class="bi bi-journal-text me-2"></i>
                                  {{ semana.temas }} temas
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pestaña Metodologías -->
              <div class="tab-pane fade" :class="{ 'show active': activeTab === 'metodologias' }">
                <div class="row g-3">
                  <div v-for="(metodologia, index) in selectedUnidad.metodologias" 
                       :key="index" class="col-md-6">
                    <div class="card border-0 shadow-sm h-100">
                      <div class="card-body">
                        <div class="d-flex align-items-start">
                          <span class="badge bg-primary me-3">M{{ index + 1 }}</span>
                          <p class="mb-0">{{ metodologia }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Pestaña Fuentes -->
              <div class="tab-pane fade" :class="{ 'show active': activeTab === 'fuentes' }">
                <div class="list-group">
                  <a v-for="(fuente, index) in selectedUnidad.fuentesConsulta" 
                     :key="index" href="#" class="list-group-item list-group-item-action">
                    <div class="d-flex">
                      <span class="badge bg-primary me-3">F{{ index + 1 }}</span>
                      <div>
                        <h6 class="mb-1">{{ fuente.titulo }}</h6>
                        <p class="small text-muted mb-0">{{ fuente.referencia }}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue';
import silabo from '../data/silabo.json';

const currentPage = ref(1);
const selectedUnidad = ref(null);
const showModal = ref(false);
const activeTab = ref('semanas');

const openModal = (unidad) => {
  selectedUnidad.value = unidad;
  showModal.value = true;
  document.body.classList.add('modal-open');
  activeTab.value = 'semanas';
};

const closeModal = () => {
  showModal.value = false;
  document.body.classList.remove('modal-open');
  setTimeout(() => {
    selectedUnidad.value = null;
  }, 300); // Pequeño retraso para la animación
};

const changePage = (direction) => {
  currentPage.value += direction;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Desactivar el scroll del body cuando el modal está abierto
watch(showModal, (value) => {
  if (value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

// Si es necesario, limpiar el estilo al desmontar el componente
onUnmounted(() => {
  document.body.style.overflow = '';
  document.body.classList.remove('modal-open');
});
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1050;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 1.75rem auto;
  pointer-events: auto;
  z-index: 1050;
}

.page-content {
  animation-duration: 0.3s;
}

.card-title {
  max-width: 80%;
}

.modal-header {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}

.nav-tabs .nav-link {
  border: none;
  border-bottom: 3px solid transparent;
  color: #6c757d;
}

.nav-tabs .nav-link.active {
  color: #0d6efd;
  border-bottom-color: #0d6efd;
  background: transparent;
}

.card-header {
  background: rgba(13, 110, 253, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.list-group-item {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
</style>