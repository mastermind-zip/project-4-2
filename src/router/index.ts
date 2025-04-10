import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/books-overview',
      name: 'books',
      component: () => import('../views/BooksView.vue'),
    },
    {
      path: '/book-details/:id',
      name: 'book-details',
      component: () => import('../views/BookDetails.vue'),
      props: true,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
