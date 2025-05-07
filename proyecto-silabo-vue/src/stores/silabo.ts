import { defineStore } from 'pinia'

interface Semana {
  contenido: string
  fecha: string
  peso: number
  numeroGlobal: number
}

interface Unidad {
  titulo: string
  metodologias: string[]
  semanas: Semana[]
}

interface Silabo {
  id: string
  datosGenerales: {
    facultad: string
    escuela: string
    asignatura: string
    codigo: string
    ciclo: string
    creditos: number
  }
  competencias: {
    generales: string[]
    especificas: string[]
  }
  sumilla: string
  unidades: Unidad[]
  fuentesConsulta: string[]
  firma: string
  fechaCreacion: string
}

export const useSilaboStore = defineStore('silabo', {
  state: (): { silabos: Silabo[], silaboActual: Silabo | null } => ({
    silabos: [],
    silaboActual: null
  }),

  actions: {
    inicializarSilabo() {
      this.silaboActual = {
        id: crypto.randomUUID(),
        datosGenerales: {
          facultad: '',
          escuela: '',
          asignatura: '',
          codigo: '',
          ciclo: '',
          creditos: 0
        },
        competencias: {
          generales: [''],
          especificas: ['']
        },
        sumilla: '',
        unidades: [],
        fuentesConsulta: [''],
        firma: '',
        fechaCreacion: new Date().toISOString()
      }
    },

    actualizarDatosGenerales(datos: Silabo['datosGenerales']) {
      if (this.silaboActual) {
        this.silaboActual.datosGenerales = datos
        this.guardarSilabo()
      }
    },

    actualizarCompetencias(competencias: Silabo['competencias']) {
      if (this.silaboActual) {
        this.silaboActual.competencias = competencias
        this.guardarSilabo()
      }
    },

    actualizarSumilla(sumilla: string) {
      if (this.silaboActual) {
        this.silaboActual.sumilla = sumilla
        this.guardarSilabo()
      }
    },

    agregarUnidad() {
      if (this.silaboActual) {
        this.silaboActual.unidades.push({
          titulo: '',
          metodologias: [''],
          semanas: []
        })
        this.guardarSilabo()
      }
    },

    actualizarUnidad(index: number, unidad: Unidad) {
      if (this.silaboActual) {
        this.silaboActual.unidades[index] = unidad
        this.guardarSilabo()
      }
    },

    eliminarUnidad(index: number) {
      if (this.silaboActual) {
        this.silaboActual.unidades.splice(index, 1)
        this.guardarSilabo()
      }
    },

    actualizarFuentesConsulta(fuentes: string[]) {
      if (this.silaboActual) {
        this.silaboActual.fuentesConsulta = fuentes
        this.guardarSilabo()
      }
    },

    actualizarFirma(firma: string) {
      if (this.silaboActual) {
        this.silaboActual.firma = firma
        this.guardarSilabo()
      }
    },

    guardarSilabo() {
      if (this.silaboActual) {
        const index = this.silabos.findIndex(s => s.id === this.silaboActual?.id)
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

    cargarSilabo(id: string) {
      const silabo = this.silabos.find(s => s.id === id)
      if (silabo) {
        this.silaboActual = { ...silabo }
      }
    },

    eliminarSilabo(id: string) {
      this.silabos = this.silabos.filter(s => s.id !== id)
      localStorage.setItem('silabos', JSON.stringify(this.silabos))
    }
  }
}) 