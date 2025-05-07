<template>
  <div class="sumilla">
    <h2>Sumilla</h2>
    <div class="sumilla-content">
      <textarea
        v-model="contenido"
        placeholder="Ingrese la sumilla del curso..."
        @input="guardarSumilla"
        rows="6"
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const contenido = ref('')

const guardarSumilla = () => {
  // Aquí implementaremos la lógica para guardar la sumilla
  console.log('Sumilla guardada:', contenido.value)
}
</script>

<style scoped>
.sumilla {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.sumilla-content {
  margin-top: 20px;
}

textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1.5;
  resize: vertical;
}

textarea:focus {
  outline: none;
  border-color: #4CAF50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.2);
}
</style> 