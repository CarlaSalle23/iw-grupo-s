<template>
    <div id="silabo-section" class="container mx-auto px-4 py-6 space-y-6">
      <h1 class="text-2xl font-bold text-blue-800">Sílabo del Curso</h1>
  
      <div class="card">
        <h2 class="text-lg font-semibold">Competencias del Curso</h2>
        <ul class="list-disc ml-5 mt-2">
          <li v-for="(comp, index) in silabo.competenciasCurso" :key="index">
            {{ comp }}
            <button class="text-red-500 ml-2" @click="borrarCompetencia(index)">Borrar</button>
          </li>
        </ul>
      </div>
  
      <semana-form :semanas="silabo.semanas" @update:semanas="silabo.semanas = $event" />
  
      <unidad
        v-for="(semana, index) in silabo.semanas"
        :key="index"
        :semana="semana"
      />
  
      <firma-uploader />
  
      <div class="card">
        <h2 class="text-lg font-semibold mb-2">Fechas de Consolidación</h2>
        <ul class="list-disc ml-5">
          <li v-for="(fecha, tipo) in silabo.fechasConsolidacion" :key="tipo">
            {{ tipo }}: {{ fecha }}
          </li>
        </ul>
      </div>
  
      <div class="card">
        <h2 class="text-lg font-semibold mb-2">Fuentes de Consulta (IEEE)</h2>
        <ul class="references-list">
          <li v-for="ref in silabo.referencias" :key="ref">{{ ref }}</li>
        </ul>
      </div>
  
      <button class="btn bg-green-500 hover:bg-green-600 mt-4" @click="exportToPDF">
        📄 Exportar a PDF
      </button>
    </div>
  </template>
  
  <script>
  import SemanaForm from '../components/SemanaForm.vue';
  import Unidad from '../components/Unidad.vue';
  import FirmaUploader from '../components/FirmaUploader.vue';
  import jsPDF from 'jspdf';
  import html2canvas from 'html2canvas';
  
  export default {
    components: { SemanaForm, Unidad, FirmaUploader },
    data() {
      return {
        silabo: {
          competenciasCurso: [],
          semanas: [],
          fechasConsolidacion: {},
          referencias: []
        }
      };
    },
    methods: {
      borrarCompetencia(index) {
        this.silabo.competenciasCurso.splice(index, 1);
      },
      async exportToPDF() {
        const element = document.getElementById('silabo-section');
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
        pdf.save('silabo.pdf');
      }
    },
    mounted() {
      fetch('/data/silabo.json')
        .then(r => r.json())
        .then(data => {
          this.silabo = data;
        });
    }
  };
  </script>
  