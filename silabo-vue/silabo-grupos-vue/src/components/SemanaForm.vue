<template>
    <div class="card">
      <h2 class="text-lg font-semibold mb-2">Gestión de Semanas</h2>
  
      <ul class="mb-4 space-y-2">
        <li v-for="(semana, index) in semanas" :key="index" class="border p-2 rounded shadow-sm">
          <strong>Semana {{ semana.numero }}:</strong> {{ semana.contenido }}
          <button class="btn ml-4 bg-red-500 hover:bg-red-600" @click="eliminarSemana(index)">
            Borrar
          </button>
        </li>
      </ul>
  
      <button class="btn bg-blue-500 hover:bg-blue-600 mb-2" @click="agregarSemana">
        ➕ Agregar nueva semana
      </button>
  
      <button class="btn bg-celeste-400 hover:bg-celeste-600" @click="autoCompletarSemana9">
        ✨ Autocompletar Semana 9
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['semanas'],
    emits: ['update:semanas'],
    methods: {
      agregarSemana() {
        const nuevoNumero = this.semanas.length + 1;
        const nueva = {
          numero: nuevoNumero,
          contenido: 'Nuevo contenido...',
          metodologia: '',
          fuentes: []
        };
        this.$emit('update:semanas', [...this.semanas, nueva]);
      },
      eliminarSemana(index) {
        const copia = [...this.semanas];
        copia.splice(index, 1);
        this.$emit('update:semanas', copia);
      },
      autoCompletarSemana9() {
        const encontrada = this.semanas.find(s => s.numero === 9);
        if (encontrada) {
          encontrada.contenido = 'Examen Parcial';
        } else {
          this.semanas.push({
            numero: 9,
            contenido: 'Examen Parcial',
            metodologia: '',
            fuentes: []
          });
        }
        this.$emit('update:semanas', [...this.semanas]);
      }
    }
  };
  </script>
  