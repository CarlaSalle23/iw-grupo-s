<template>
    <div class="mt-2">
      <label class="block text-sm text-gray-600 mb-1">Metodología:</label>
      <select class="input" v-model="modelValue" @change="$emit('update:modelValue', modelValue)">
        <option disabled value="">Seleccione una metodología</option>
        <option>Clase magistral</option>
        <option>Práctica guiada</option>
        <option>Aprendizaje basado en proyectos</option>
        <option>Laboratorio</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    props: ['modelValue'],
    emits: ['update:modelValue']
  };
  </script>
  