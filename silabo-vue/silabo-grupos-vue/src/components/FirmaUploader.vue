<template>
    <div class="card">
      <label class="block text-sm text-gray-600 mb-2">Subir firma:</label>
      <input type="file" @change="onFileChange" accept=".jpg,.jpeg,.png" class="input" />
      <div v-if="firma" class="signature-preview">
        <p class="text-sm text-gray-500">Vista previa:</p>
        <img :src="firma" alt="Firma cargada" class="w-48 border rounded mt-2" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firma: null
      };
    },
    methods: {
      onFileChange(e) {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = e => {
            this.firma = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      }
    }
  };
  </script>
  