<template>
  <!-- --- --- --- Views --- --- --- -->
  <ViewList ref="RefViewList"
    v-if="['list', 'ver', 'new', 'edit'].includes(oViewStore.action)"
  />
  <ViewCrud
    v-if="['ver', 'new', 'edit'].includes(oViewStore.action)"
  />
</template>

<script lang="ts" setup>
// --- --- --- Component --- --- ---
  import ViewList from './ViewList.vue'
  import ViewCrud from './ViewCrud.vue'
  // --- --- --- Stores --- --- ---
  import { UsuariosStore } from './UsuariosStore'
  const oViewStore = UsuariosStore()
  // AppStore
  import { AppStore } from '@/stores/AppStore.ts'
  const oAppStore = AppStore()

  oAppStore.Breadcrumbs = [
    { title: 'Inicio', disabled: false, href: '/' },
    { title: 'Usuarios', disabled: true },
    { title: 'Listado', disabled: true },
  ] as any

  // --- --- --- Funciones --- --- ---
  onMounted(() => {
    oViewStore.action = 'list'
  })

</script>
