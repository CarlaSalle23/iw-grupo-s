<template>
    <div class="card">
      <h3 class="font-medium text-blue-700">Unidad de la Semana {{ semana.numero }}</h3>
      <input
        class="input mt-2"
        v-model="semana.contenido"
        placeholder="Contenido específico"
      />
      <metodologia-selector v-model="semana.metodologia" />
    </div>
  </template>
  
  <script>
  import MetodologiaSelector from './MetodologiaSelector.vue';
  
  export default {
    components: { MetodologiaSelector },
    props: ['semana']
  };
  </script>
  