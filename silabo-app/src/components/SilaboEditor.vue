<template>
  <div>
    <!-- SECCIÓN 1: Datos generales y competencias -->
    <div v-if="props.page === 1" class="mb-5">
      <div class="card mb-4">
        <div class="card-header fw-bold">📘 Datos Generales</div>
        <div class="card-body row g-3">
          <div class="col-md-6">
            <label class="form-label">Facultad</label>
            <input v-model="silabo.datosGenerales.facultad" class="form-control" />
          </div>
          <div class="col-md-6">
            <label class="form-label">Carrera Profesional</label>
            <input v-model="silabo.datosGenerales.carreraProfesional" class="form-control" />
          </div>
          <div class="col-md-4">
            <label class="form-label">Semestre</label>
            <input v-model="silabo.datosGenerales.semestre" class="form-control" />
          </div>
          <div class="col-md-4">
            <label class="form-label">Tipo de Curso</label>
            <input v-model="silabo.datosGenerales.tipoCurso" class="form-control" />
          </div>
          <div class="col-md-4">
            <label class="form-label">Créditos</label>
            <input v-model="silabo.datosGenerales.numeroCreditos" class="form-control" />
          </div>
          <div class="col-md-6">
            <label class="form-label">Docente</label>
            <input v-model="silabo.datosGenerales.docente" class="form-control" />
          </div>
          <div class="col-md-6">
            <label class="form-label">Correo</label>
            <input v-model="silabo.datosGenerales.correo" class="form-control" />
          </div>
        </div>
      </div>

      <div class="card mb-4">
        <div class="card-header fw-bold">🧠 Competencia del Curso</div>
        <div class="card-body">
          <div v-for="(comp, i) in silabo.competenciaCurso" :key="i" class="mb-2 d-flex">
            <input v-model="silabo.competenciaCurso[i]" class="form-control me-2" />
            <button class="btn btn-danger" @click="silabo.competenciaCurso.splice(i, 1)">🗑️</button>
          </div>
          <button class="btn btn-success mt-2" @click="silabo.competenciaCurso.push('')">➕ Agregar</button>
        </div>
      </div>

      <div class="card mb-4">
        <div class="card-header fw-bold">🎯 Competencia del Perfil</div>
        <div class="card-body">
          <textarea v-model="silabo.competenciaPerfil" rows="3" class="form-control" />
        </div>
      </div>

      <div class="card">
        <div class="card-header fw-bold">📚 Competencias Previas</div>
        <div class="card-body">
          <div v-for="(prev, i) in silabo.competenciasPrevias" :key="i" class="mb-2 d-flex">
            <input v-model="silabo.competenciasPrevias[i]" class="form-control me-2" />
            <button class="btn btn-danger" @click="silabo.competenciasPrevias.splice(i, 1)">🗑️</button>
          </div>
          <button class="btn btn-success mt-2" @click="silabo.competenciasPrevias.push('')">➕ Agregar</button>
        </div>
      </div>
    </div>

    <!-- SECCIÓN 2: Unidades y semanas -->
    <div v-if="props.page === 2" class="mb-5">
      <div v-for="(unidad, uIndex) in silabo.unidades" :key="uIndex" class="card mb-4">
        <div class="card-header fw-bold">📦 Unidad {{ unidad.numero }}</div>
        <div class="card-body">
          <input v-model="unidad.denominacion" class="form-control mb-2" placeholder="Título de la unidad" />
          <input v-model="unidad.intervaloFechas" class="form-control mb-2" placeholder="Fechas" />
          <textarea v-model="unidad.capacidad" rows="2" class="form-control mb-3" placeholder="Capacidad" />

          <div v-for="(semana, sIndex) in unidad.semanas" :key="sIndex" class="border rounded p-3 mb-3">
            <h6 class="fw-bold">Semana {{ semana.numero }}</h6>
            <div v-for="(contenido, cIndex) in semana.contenidos" :key="cIndex" class="d-flex mb-2">
              <input v-model="semana.contenidos[cIndex]" class="form-control me-2" />
              <button class="btn btn-danger" @click="semana.contenidos.splice(cIndex, 1)">🗑️</button>
            </div>
            <button class="btn btn-success btn-sm me-2" @click="semana.contenidos.push('')">➕ Contenido</button>
            <button class="btn btn-outline-danger btn-sm" @click="unidad.semanas.splice(sIndex, 1)">🗑️ Eliminar semana</button>
          </div>

          <button class="btn btn-secondary btn-sm" @click="this.agregarSemana(uIndex)">➕ Añadir semana</button>
        </div>
      </div>
    </div>

    <!-- SECCIÓN 3: Metodologías y fuentes -->
    <div v-if="props.page === 3" class="mb-5">
      <div v-for="(unidad, uIndex) in silabo.unidades" :key="uIndex" class="card mb-4">
        <div class="card-header fw-bold">📚 Unidad {{ unidad.numero }}: {{ unidad.denominacion }}</div>
        <div class="card-body">
          <h6>Metodologías</h6>
          <div v-for="(met, mIndex) in unidad.metodologias" :key="mIndex" class="mb-2 d-flex">
            <input v-model="unidad.metodologias[mIndex]" class="form-control me-2" />
            <button class="btn btn-danger" @click="unidad.metodologias.splice(mIndex, 1)">🗑️</button>
          </div>
          <button class="btn btn-success btn-sm mb-3" @click="unidad.metodologias.push('')">➕ Metodología</button>

          <h6>Fuentes de Consulta</h6>
          <div v-for="(fuente, fIndex) in unidad.fuentesConsulta" :key="fIndex" class="mb-2">
            <input v-model="fuente.referencia" class="form-control" />
          </div>
          <button class="btn btn-success btn-sm" @click="unidad.fuentesConsulta.push({ tipo: 'libro', referencia: '' })">➕ Fuente</button>
        </div>
      </div>
    </div>

    <!-- SECCIÓN 4: Firma -->
    <div v-if="props.page === 4">
      <div class="card mb-4">
        <div class="card-header fw-bold">✍️ Firma del docente</div>
        <div class="card-body">
          <input type="file" class="form-control" @change="this.handleFileUpload" />
          <img v-if="silabo.firmaDocente" :src="silabo.firmaDocente" class="img-fluid mt-3 border" style="max-width: 300px;" />
        </div>
      </div>

      <button class="btn btn-primary" @click="this.guardarCambios">💾 Guardar Cambios (ver consola)</button>
    </div>
  </div>
</template>

<script>
import silaboJson from '../data/silabo.json'

export default {
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      silabo: JSON.parse(JSON.stringify(silaboJson))
    }
  },
  methods: {
    agregarSemana(unidadIndex) {
      const semanas = this.silabo.unidades[unidadIndex].semanas
      const nuevoNumero = semanas.length ? semanas[semanas.length - 1].numero + 1 : 1
      semanas.push({ numero: nuevoNumero, contenidos: [] })
    },
    handleFileUpload(e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = () => {
        this.silabo.firmaDocente = reader.result
      }
      reader.readAsDataURL(file)
    },
    guardarCambios() {
      console.log('📥 JSON actualizado del silabo:', JSON.stringify(this.silabo, null, 2))
    }
  }
}
</script>

