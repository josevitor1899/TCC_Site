import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: InicioView
  },
  {
    path: '/QuemSomos',
    name: 'QuemSomos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/QuemSomosView.vue')
  },
  {
    path: '/Cadastre-se',
    name: 'Cadastre-se',
    component: () => import('../views/Cadastra-seView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
