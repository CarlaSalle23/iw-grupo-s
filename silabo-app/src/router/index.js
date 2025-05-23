import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeVi.vue'
import Edit from '../views/EditView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/edit', name: 'Edit', component: Edit }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
