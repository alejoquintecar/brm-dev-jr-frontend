<template>
  <AppDataTable ref="RefAppTable"
    :headers="aHeaders" api-path="users">
    <!-- :customSlots="['avatar', ]" -->
    <template #item.avatar="{ item }">
      <v-avatar icon="$vuetify" size="66"
        :image="`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name}`"
      />
    </template>
    <template #item.acciones="{ item }">
      <v-tooltip text="Ver mas">
        <template v-slot:activator="{ props }">
          <v-btn class="px-1" color="blue" rounded="xl" v-bind="props"
            @click="modalCrud(item)">
            <v-icon color="white" icon="mdi-eye-outline" size="x-large"></v-icon>
          </v-btn>
        </template>
      </v-tooltip>
    </template>
  </AppDataTable>
</template>

<script lang="ts" setup>
  // --- --- --- App --- --- ---
  import { ref } from 'vue' // onMounted, defineExpose
  // --- --- --- Stores --- --- ---
  import { UsuariosStore } from './UsuariosStore'
  const oViewStore = UsuariosStore()
  // --- --- --- Variables --- --- ---
  import { aHeaders } from '@/constants/DataTable/usuarios'
  const RefAppTable = ref<any>(null)



  // --- --- --- Funciones --- --- ---
  const modalCrud = (item: any) => {
    oViewStore.action = 'ver'
    oViewStore.DataTableRowsSelected = item
  }

</script>
