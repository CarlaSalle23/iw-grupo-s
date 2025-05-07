import { defineStore } from 'pinia'
import { silaboEjemplo } from '../data/silaboData'

interface NroHoras {
  teoria: string
  practica: string
}

interface Docente {
  nombre: string
  correo: string
  firma: string | null
}

interface DatosGenerales {
  facultad: string
  semestre: string
  areaFormacion: string
  tipoCurso: string
  carreraProfesional: string
  nroCreditos: string
  preRequisitos: string
  periodoLectivo: string
  nroHoras: NroHoras
  codigoCurso: string
  docente: Docente
}

interface Semana {
  numero: number
  contenido: string
}

interface FuenteConsulta {
  tipo: string
  referencia: string
}

interface Unidad {
  id: number
  denominacion: string
  fechaInicio: string
  fechaFin: string
  capacidad: string
  semanas: Semana[]
  metodologias: string[]
  fuentesConsulta: FuenteConsulta[]
}

interface Actividades {
  investigacionFormativa: string
  responsabilidadSocial: string
}

interface CriterioEvaluacion {
  evaluacion: string
  peso: string
  fechaConsolidacion: string
  descripcion: string
}

interface Silabo {
  datosGenerales: DatosGenerales
  competenciaCurso: string[]
  competenciaPerfilEgreso: string
  competenciasPrevias: string[]
  sumilla: string
  unidades: Unidad[]
  actividades: Actividades
  criteriosEvaluacion: CriterioEvaluacion[]
}

export const useSilaboStore = defineStore('silabo', {
  state: (): { silabos: Silabo[]; silaboActual: Silabo | null } => ({
    silabos: [silaboEjemplo],
    silaboActual: null,
  }),

  actions: {
    inicializarSilabo() {
      this.silaboActual = {
        datosGenerales: {
          facultad: '',
          semestre: '',
          areaFormacion: '',
          tipoCurso: '',
          carreraProfesional: '',
          nroCreditos: '',
          preRequisitos: '',
          periodoLectivo: '',
          nroHoras: {
            teoria: '',
            practica: '',
          },
          codigoCurso: '',
          docente: {
            nombre: '',
            correo: '',
            firma: null,
          },
        },
        competenciaCurso: [],
        competenciaPerfilEgreso: '',
        competenciasPrevias: [],
        sumilla: '',
        unidades: [],
        actividades: {
          investigacionFormativa: '',
          responsabilidadSocial: '',
        },
        criteriosEvaluacion: [],
      }
    },

    cargarSilaboEjemplo() {
      this.silaboActual = { ...silaboEjemplo }
      this.guardarSilabo()
    },

    actualizarDatosGenerales(datos: DatosGenerales) {
      if (this.silaboActual) {
        this.silaboActual.datosGenerales = datos
        this.guardarSilabo()
      }
    },

    actualizarCompetencias(
      competenciaCurso: string[],
      competenciaPerfilEgreso: string,
      competenciasPrevias: string[],
    ) {
      if (this.silaboActual) {
        this.silaboActual.competenciaCurso = competenciaCurso
        this.silaboActual.competenciaPerfilEgreso = competenciaPerfilEgreso
        this.silaboActual.competenciasPrevias = competenciasPrevias
        this.guardarSilabo()
      }
    },

    actualizarSumilla(sumilla: string) {
      if (this.silaboActual) {
        this.silaboActual.sumilla = sumilla
        this.guardarSilabo()
      }
    },

    actualizarUnidad(unidad: Unidad) {
      if (this.silaboActual) {
        const index = this.silaboActual.unidades.findIndex((u) => u.id === unidad.id)
        if (index !== -1) {
          this.silaboActual.unidades[index] = unidad
        } else {
          this.silaboActual.unidades.push(unidad)
        }
        this.guardarSilabo()
      }
    },

    actualizarActividades(actividades: Actividades) {
      if (this.silaboActual) {
        this.silaboActual.actividades = actividades
        this.guardarSilabo()
      }
    },

    actualizarCriteriosEvaluacion(criterios: CriterioEvaluacion[]) {
      if (this.silaboActual) {
        this.silaboActual.criteriosEvaluacion = criterios
        this.guardarSilabo()
      }
    },

    guardarSilabo() {
      if (this.silaboActual) {
        const index = this.silabos.findIndex((s) => s === this.silaboActual)
        if (index !== -1) {
          this.silabos[index] = { ...this.silaboActual }
        } else {
          this.silabos.push({ ...this.silaboActual })
        }
        localStorage.setItem('silabos', JSON.stringify(this.silabos))
      }
    },

    cargarSilabos() {
      const silabosGuardados = localStorage.getItem('silabos')
      if (silabosGuardados) {
        this.silabos = JSON.parse(silabosGuardados)
      }
    },

    cargarSilabo(index: number) {
      if (this.silabos[index]) {
        this.silaboActual = { ...this.silabos[index] }
      }
    },
  },
})
