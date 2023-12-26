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
      name: 'piano classes',
      component: () => import('../views/PianoClassesView.vue')
    },
    {
      path: '/clases-teoria-musical',
      name: 'musical theory classes',
      component: () => import('../views/MusicalTheoryClassesView.vue')
    },
    {
      path: '/cursos',
      name: 'courses',
      component: () => import('../views/CoursesView.vue')
    },
    {
      path: '/blog-musical',
      name: 'blog-musical',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/blog-musical/por-donde-empezar',
      name: 'blog-1',
      component: () => import('../views/BlogViews/PorDondeEmpezarBlogView.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'auto',
      };
    } else {
      return { top: 0, behavior: 'auto' };
    }
  },
})

export default router
