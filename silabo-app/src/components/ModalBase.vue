<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-xl shadow-xl w-[90%] md:w-[50%]">
        <slot></slot>
        <button class="mt-4 bg-primary text-white px-4 py-2 rounded" @click="$emit('close')">Cerrar</button>
      </div>
    </div>
  </template>
  