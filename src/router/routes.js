
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/HomeMe.vue') },
      { path: '/about', component: () => import('src/pages/AboutMe.vue')},
      { path: '/projects', component: () => import('src/pages/ProjectsMe.vue')},
      { path: '/contact', component: () => import('src/pages/ContactMe.vue')}
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes



