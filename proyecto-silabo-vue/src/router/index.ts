import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AbrirSilabo from '@/views/SilabosGuardados.vue'
import EditarSilabo from '@/views/EditarSilabo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/abrir-silabo',
    name: 'abrir-silabo',
    component: AbrirSilabo, // Crea esta vista si aún no existe
  },
  {
    path: '/editar-silabo',
    name: 'editar-silabo',
    component: EditarSilabo, // Crea esta vista si aún no existe
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
