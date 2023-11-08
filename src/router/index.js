import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePageView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomePageView
    },
    {
      path: '/clases-horarios',
      name: 'horarios',
      component: () => import('../views/ScheduleView.vue')
    },
    {
      path: '/clases-piano',
      name: 'clases-piano',
      component: () => import('../views/PianoClassesView.vue')
    },
    // {
    //   path: '/cursos',
    //   name: 'cursos',
    //   component: () => import('../views/CoursesView.vue')
    // },
    // {
    //   path: '/contacto',
    //   name: 'contacto',
    //   component: () => import('../views/ContactView.vue')
    // }
  ]
})

export default router
