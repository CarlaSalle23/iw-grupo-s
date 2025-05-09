<template>
  <div class="container py-4 bg-light min-vh-100">
    <!-- Encabezado con campos editables -->
    <header class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-4 border-bottom pb-3 text-center">
      <div>
        <h1 class="h4 fw-bold text-primary">
          📚 Sílabo Académico de
          <input v-model="edit.datosGenerales.curso" class="form-control form-control-sm d-inline w-auto" />
        </h1>
        <span class="badge bg-info fs-6">
          <input v-model="edit.datosGenerales.periodoLectivo" class="form-control form-control-sm d-inline w-auto" />
        </span>
      </div>
      <div>
        <div class="fw-semibold text-uppercase">
          <input v-model="edit.datosGenerales.docente" class="form-control form-control-sm d-inline w-auto" />
        </div>
        <div class="text-muted small">
          <input v-model="edit.datosGenerales.correo" class="form-control form-control-sm d-inline w-auto" />
        </div>
      </div>
    </header>
    <!-- Tarjetas editables de Datos Generales -->
    <div class="container my-4">
      <div class="card shadow rounded-4 p-4 text-center">
        <div class="row g-4 mb-3">
          <div class="col-md-4">
            <label class="form-label small opacity-75">Facultad</label>
            <input v-model="edit.datosGenerales.facultad" class="form-control" />
          </div>
          <div class="col-md-4">
            <label class="form-label small opacity-75">Carrera profesional</label>
            <input v-model="edit.datosGenerales.carreraProfesional" class="form-control" />
          </div>
          <div class="col-md-4">
            <label class="form-label small opacity-75">Código de Curso</label>
            <input v-model="edit.datosGenerales.codigoCurso" class="form-control mb-1" />
            <label class="form-label small opacity-75">Créditos</label>
            <input type="number" v-model.number="edit.datosGenerales.numeroCreditos" class="form-control" />
          </div>
        </div>

        <div class="row g-4 mb-3">
          <div class="col-md-4">
            <label class="form-label small opacity-75">Semestre</label>
            <input v-model="edit.datosGenerales.semestre" class="form-control" />
          </div>
          <div class="col-md-4">
            <label class="form-label small opacity-75">Área de Formación</label>
            <input v-model="edit.datosGenerales.areaFormacion" class="form-control" />
          </div>
          <div class="col-md-4">
            <label class="form-label small opacity-75">Tipo de Curso</label>
            <input v-model="edit.datosGenerales.tipoCurso" class="form-control" />
          </div>
        </div>

        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <label class="form-label small opacity-75">Prerrequisitos</label>
            <input v-model="edit.datosGenerales.preRequisitos" class="form-control" />
          </div>
          <div class="col-md-6">
            <label class="form-label small opacity-75">Horas Teoría</label>
            <input type="number" v-model.number="edit.datosGenerales.numeroHoras.teoria" class="form-control mb-2" />
            <label class="form-label small opacity-75">Horas Práctica</label>
            <input type="number" v-model.number="edit.datosGenerales.numeroHoras.practica" class="form-control" />
          </div>
        </div>
        <div class="modal-footer flex flex-col gap-2">
          <label for="signature-upload" class="text-sm font-medium text-gray-600">Firma del docente</label>
          <input 
            id="signature-upload"
            type="file" 
            accept="image/png, image/jpeg" 
            @change="onSignatureUpload" 
            class="file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100
                  transition duration-200"
          />
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
          <li v-for="(comp, i) in edit.competenciaCurso" :key="i" class="list-group-item d-flex align-items-center">
            <span class="badge bg-primary me-2">{{ i + 1 }}</span>
            <input v-model="edit.competenciaCurso[i]" class="form-control form-control-sm" />
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
              <textarea v-model="edit.competenciaPerfil" class="form-control" rows="3"></textarea>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-header bg-white border-0">
              <h5 class="fw-semibold mb-0">📚 Competencias Previas</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li v-for="(prev, i) in edit.competenciasPrevias" :key="i" class="list-group-item d-flex align-items-center">
                <span class="badge bg-secondary me-2">{{ i + 1 }}</span>
                <input v-model="edit.competenciasPrevias[i]" class="form-control form-control-sm" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Página 2: Unidades -->
    <div v-if="currentPage === 2" class="page-content animate__animated animate__fadeIn">
      <div class="row g-3">
        <div v-for="(unidad, index) in edit.unidades" :key="index" class="col-md-6 col-lg-4">
          <div class="card h-100 border-primary hover-shadow" @click="openModal(unidad)" style="cursor: pointer;">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <h5 class="card-title mb-0">📦 Unidad {{ index + 1 }}</h5>
                <span class="badge bg-primary">{{ unidad.intervaloFechas }}</span>
              </div>
              <input v-model="unidad.denominacion" class="form-control form-control-sm mt-2" />
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-4">
        <button class="btn btn-outline-success" @click="addUnidad"><i class="bi bi-plus-lg"></i> Nueva Unidad</button>
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
                <tr v-for="(criterio, i) in edit.criteriosEvaluacion" :key="i">
                  <td><input v-model="criterio.tipo" class="form-control form-control-sm" /></td>
                  <td class="text-center fw-bold text-primary">
                    <input type="number" v-model.number="criterio.peso" class="form-control form-control-sm d-inline w-auto" />%
                  </td>
                  <td><input v-model="criterio.fechaConsolidacion" class="form-control form-control-sm" /></td>
                  <td><input v-model="criterio.descripcion" class="form-control form-control-sm" /></td>
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
    <button class="btn btn-outline-primary" @click="changePage(-1)" :disabled="currentPage === 1">
      <i class="bi bi-chevron-left"></i> Anterior
    </button>
    <div class="text-muted small">Página {{ currentPage }} de 3</div>
    <button class="btn btn-primary" @click="changePage(1)" :disabled="currentPage === 3">
      Siguiente <i class="bi bi-chevron-right"></i>
    </button>
  </div>
</div>

<!-- Backdrop separado: no intercepta clicks -->
<div
  v-if="showModal"
  class="modal-backdrop fade show"
  style="pointer-events: none;"
></div>

  <!-- Backdrop separado: no intercepta clicks -->
  <div
    v-if="showModal"
    class="modal-backdrop fade show"
    style="pointer-events: none;"
  ></div>

  <!-- Modal encima del backdrop -->
  <div
    v-if="showModal"
    class="modal fade show d-block"
    tabindex="-1"
    role="dialog"
    style="display: block; pointer-events: auto; position: fixed; inset: 0; z-index: 1050; overflow-y: auto;"
    @click.self="closeModal"
  >
    <div
      class="modal-dialog modal-xl modal-dialog-centered"
      style="position: relative; z-index: 1051;"
    >
      <div class="modal-content border-0 shadow-lg">
        <div class="modal-header bg-primary text-white">
          <div class="w-100">
            <h3 class="modal-title h5 mb-1">UNIDAD {{ selectedUnidad.numero }}</h3>
            <input
              v-model="selectedUnidad.denominacion"
              class="form-control form-control-sm bg-white text-dark mt-1"
            />
          </div>
          <button type="button" class="btn-close btn-close-white" @click="closeModal"></button>
        </div>

        <div class="modal-body p-4">
          <!-- Sección Superior: Información General -->
          <div class="row mb-4 g-4">
            <div class="col-md-4">
              <div class="bg-light p-3 rounded">
                <h6 class="fw-semibold text-primary mb-3">
                  <i class="bi bi-calendar-week me-2"></i>Periodo
                </h6>
                <input v-model="selectedUnidad.intervaloFechas" class="form-control form-control-sm" />
              </div>
            </div>
            <div class="col-md-8">
              <div class="bg-light p-3 rounded">
                <h6 class="fw-semibold text-primary mb-3">
                  <i class="bi bi-bullseye me-2"></i>Capacidad Principal
                </h6>
                <textarea v-model="selectedUnidad.capacidad" class="form-control form-control-sm" rows="2"></textarea>
              </div>
            </div>
          </div>

          <!-- Pestañas para Organizar Contenido -->
          <ul class="nav nav-tabs mb-4" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link" :class="{ active: activeTab === 'semanas' }" @click="activeTab = 'semanas'">
                <i class="bi bi-calendar-event me-2"></i>Semanas ({{ selectedUnidad.semanas.length }})
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" :class="{ active: activeTab === 'metodologias' }" @click="activeTab = 'metodologias'">
                <i class="bi bi-journal-check me-2"></i>Metodologías
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" :class="{ active: activeTab === 'fuentes' }" @click="activeTab = 'fuentes'">
                <i class="bi bi-book me-2"></i>Fuentes
              </button>
            </li>
          </ul>

          <!-- Contenido de Pestañas -->
          <div class="tab-content">
            <!-- Semanas -->
            <div class="tab-pane fade" :class="{ 'show active': activeTab === 'semanas' }">
              <div class="row g-3">
                <div v-for="semana in selectedUnidad.semanas" :key="semana.numero" class="col-12">
                  <div class="card border-0 shadow-sm position-relative">
                    <button class="btn btn-sm btn-danger position-absolute top-0 end-0 m-2" @click.stop="removeSemana(semana.numero)"><i class="bi bi-trash"></i></button>
                    <div class="card-header bg-white">
                      <h5 class="h6 mb-0">Semana {{ semana.numero }}</h5>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-8">
                          <h6 class="text-muted small mb-2">Contenidos:</h6>
                          <ul class="list-group">
                            <li v-for="(contenido, idx) in semana.contenidos" :key="idx" class="list-group-item border-0 py-1">
                              <input v-model="semana.contenidos[idx]" class="form-control form-control-sm" />
                            </li>
                          </ul>
                          <button class="btn btn-sm btn-outline-primary mt-2" @click="addContenido(semana.numero)">+ Contenido</button>
                        </div>
                        <div class="col-md-4">
                          <div class="bg-light p-3 rounded">
                            <h6 class="text-muted small mb-2">Detalles:</h6>
                            <ul class="list-unstyled small mb-0">
                              <li class="mb-1">
                                <i class="bi bi-clock-history me-2"></i>
                                <input type="number" v-model.number="semana.horas" class="form-control form-control-sm d-inline w-auto" /> horas
                              </li>
                              <li>
                                <i class="bi bi-journal-text me-2"></i>
                                <input type="number" v-model.number="semana.temas" class="form-control form-control-sm d-inline w-auto" /> temas
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-3">
                <button class="btn btn-outline-success" @click="addSemana"><i class="bi bi-plus-lg"></i> Agregar Semana</button>
              </div>
            </div>

            <!-- Metodologías -->
            <div class="tab-pane fade" :class="{ 'show active': activeTab === 'metodologias' }">
              <div class="row g-3">
                <div v-for="(met, idx) in selectedUnidad.metodologias" :key="idx" class="col-md-6">
                  <div class="card border-0 shadow-sm h-100 d-flex align-items-center p-3">
                    <label class="form-check-label me-2">
                      <input type="checkbox" v-model="selectedUnidad.metodologiasSeleccionadas" :value="met" /> {{ met }}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Fuentes -->
            <div class="tab-pane fade" :class="{ 'show active': activeTab === 'fuentes' }">
              <div class="list-group">
                <div v-for="(f, idx) in selectedUnidad.fuentesConsulta" :key="idx" class="list-group-item">
                  <div class="d-flex">
                    <span class="badge bg-primary me-3">F{{ idx + 1 }}</span>
                    <div class="flex-grow-1">
                      <input v-model="f.titulo" class="form-control form-control-sm mb-1" placeholder="Título" />
                      <input v-model="f.referencia" class="form-control form-control-sm" placeholder="Referencia APA" />
                    </div>
                  </div>
                </div>
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

<!-- Botón para descargar JSON modificado -->
<div class="text-end mb-4">
  <button class="btn btn-success" @click="downloadJSON">
    💾 Sobrescribir JSON
  </button>
</div>

</template>

<script setup>
import { ref, reactive, watch, onUnmounted } from 'vue';
import original from '../data/silabo.json';

// reactive copy del JSON
const edit = reactive(JSON.parse(JSON.stringify(original)));
const currentPage = ref(1);
const changePage = (direction) => {
  const next = currentPage.value + direction;
  if (next >= 1 && next <= 3) {
    currentPage.value = next;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// modal
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
  setTimeout(() => selectedUnidad.value = null, 300);
};

// Semanas
function addSemana() {
  const unidad = selectedUnidad.value;
  const nextNum = unidad.semanas.length ? Math.max(...unidad.semanas.map(s=>s.numero))+1 : 1;
  unidad.semanas.push({ numero: nextNum, contenidos: [''], horas: 0, temas: 0 });
}
function removeSemana(num) {
  selectedUnidad.value.semanas = selectedUnidad.value.semanas.filter(s=>s.numero!==num);
}
function addContenido(numeroSemana) {
  const semana = selectedUnidad.value.semanas.find(s=>s.numero===numeroSemana);
  semana.contenidos.push('');
}

// Autocompletar semana 9
watch(() => selectedUnidad.value, u => {
  if (u) {
    const s9 = u.semanas.find(s=>s.numero===9);
    if (s9) { s9.contenidos = ['Examen Parcial']; s9.horas=2; s9.temas=1; }
  }
});

// Metodologías seleccionadas
// Inicializar array si no existe
watch(() => selectedUnidad.value, u => { if (u && !u.metodologiasSeleccionadas) u.metodologiasSeleccionadas = []; });

// Firma
function onSignatureUpload(e) {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader(); reader.onload = () => { edit.firma = reader.result; };
  reader.readAsDataURL(file);
}

// bloquear scroll cuando modal abierto
watch(showModal, (val) => document.body.style.overflow = val ? 'hidden' : '');

// descarga JSON
const downloadJSON = () => {
  const dataStr = JSON.stringify(edit, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'silabo.json';
  a.click();
  URL.revokeObjectURL(url);
};

// limpieza al desmontar
onUnmounted(() => {
  document.body.style.overflow = '';
  document.body.classList.remove('modal-open');
});

const addUnidad = () => {
  const nuevaUnidad = {
    numero: edit.unidades.length + 1,
    denominacion: '',
    intervaloFechas: '',
    capacidad: '',
    semanas: [],
    metodologias: [
      'Aprendizaje basado en problemas',
      'Estudio de casos',
      'Aprendizaje colaborativo',
      'Clases expositivas',
    ],
    metodologiasSeleccionadas: [],
    fuentesConsulta: [],
  };
  edit.unidades.push(nuevaUnidad);
  selectedUnidad.value = nuevaUnidad;
  showModal.value = true;
  activeTab.value = 'semanas';
};

</script>

<style scoped>
.form-control-sm {
  display: inline-block;
  width: auto;
  padding: 0.2rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
}
</style>