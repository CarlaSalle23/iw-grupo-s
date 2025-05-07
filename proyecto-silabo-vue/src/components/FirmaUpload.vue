<template>
  <div class="firma-upload">
    <h2>Firma del Profesor</h2>
    <div class="upload-container">
      <div v-if="!firmaUrl" class="upload-area" @click="triggerFileInput" @dragover.prevent @drop.prevent="handleDrop">
        <input
          type="file"
          ref="fileInput"
          accept="image/jpeg,image/png"
          @change="handleFileSelect"
          style="display: none"
        >
        <div class="upload-message">
          <i class="fas fa-upload"></i>
          <p>Arrastre una imagen o haga clic para seleccionar</p>
          <p class="upload-hint">Formatos permitidos: JPG, PNG</p>
        </div>
      </div>
      
      <div v-else class="preview-container">
        <img :src="firmaUrl" alt="Firma del profesor" class="firma-preview">
        <button @click="eliminarFirma" class="btn-eliminar">Eliminar Firma</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fileInput = ref<HTMLInputElement | null>(null)
const firmaUrl = ref<string>('')

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    const file = input.files[0]
    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      const reader = new FileReader()
      reader.onload = (e) => {
        firmaUrl.value = e.target?.result as string
      }
      reader.readAsDataURL(file)
    } else {
      alert('Por favor, seleccione una imagen en formato JPG o PNG')
    }
  }
}

const handleDrop = (event: DragEvent) => {
  const file = event.dataTransfer?.files[0]
  if (file) {
    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      const reader = new FileReader()
      reader.onload = (e) => {
        firmaUrl.value = e.target?.result as string
      }
      reader.readAsDataURL(file)
    } else {
      alert('Por favor, seleccione una imagen en formato JPG o PNG')
    }
  }
}

const eliminarFirma = () => {
  firmaUrl.value = ''
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}
</script>

<style scoped>
.firma-upload {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.upload-container {
  margin-top: 20px;
}

.upload-area {
  border: 2px dashed #ddd;
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.upload-area:hover {
  border-color: #4CAF50;
}

.upload-message {
  color: #666;
}

.upload-message i {
  font-size: 48px;
  color: #4CAF50;
  margin-bottom: 10px;
}

.upload-hint {
  font-size: 0.9em;
  color: #999;
  margin-top: 5px;
}

.preview-container {
  text-align: center;
}

.firma-preview {
  max-width: 300px;
  max-height: 200px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn-eliminar {
  background-color: #f44336;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
</style> 