import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // --- --- --- Public App --- --- ---
  { path: '/', component: () => import('@/layouts/default.vue'),
    children: [
      { // Inicio
        name: 'inicio', component: () => import('@/pages/index.vue'),
        path: '/', meta: { auth: true, permission: true },
      },
    ],
  },
  { path: '/usuarios/', component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { // Usuarios
        name: 'usuarios_list', component: () => import('@/pages/Usuarios/ViewIndex.vue'),
        path: 'list', meta: { auth: true, permission: true },
      },
    ],
  },
  { path: '/:catchAll(.*)*', component: () => import('@/pages/ErrorNotFound.vue') },
]

export default routes
