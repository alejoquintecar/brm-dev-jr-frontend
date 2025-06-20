<template>
  <v-data-table :headers="headers" :items="Registros" fixed-header
    style="max-height: calc(100vh - 64px)!important;min-height: calc(100vh - 64px)!important;">

    <template v-slot:top>
      <slot name="header-top"></slot>
      <template v-if="filtroBasico">
        <v-row class="justify-center mt-1">
          <v-col class="pt-1" cols="12" md="6">
            <v-text-field
              label="Buscar usuario"
              prepend-inner-icon="mdi-magnify"
              @update:modelValue="buscar"
              clearable
            />
          </v-col>
        </v-row>
      </template>
    </template>

    <!-- Reenvia todos los slots dinamicos que el padre declare -->
    <template v-for="(_, name) in $slots" :key="name" v-slot:[name]="slotProps">
      <slot :name="name" v-bind="slotProps"></slot>
    </template>
  </v-data-table>
</template>

<script lang="ts" setup>
  // --- --- --- Props --- --- ---
  defineOptions({ name: 'AppDataTable' })

  export interface AppDataTableProps {
    apiPath: string;
    slots?: any [];
    headers: any [];
    offset?: string;
    filtroBasico?: boolean;
    // Extra
    messageLoad?: string;
    messageUpdate?: string;
  }
  const props = withDefaults(defineProps<AppDataTableProps>(), {
    apiPath: "" as string,
    slots: [] as any,
    headers: [] as any,
    offset: '79.6px',
    filtroBasico: true,
    // Extra
    messageLoad: 'Registros Listados.',
    messageUpdate: 'Registros Actualizados.',
  })

  // --- --- --- App --- --- ---
  import { ApiGet } from '@/plugins/api'
  import { alertToast } from '@/utilities/app'
  import { ref, onMounted } from 'vue' // toRefs, computed, defineEmits, defineExpose
  // --- --- --- Variables --- --- ---
  const Registros = ref([])
  let RegistrosApi = [] as any

  onMounted(() => {
    void getList(false)
  })

  async function getList( bUpdate = true ){

    const oResultApi = await ApiGet(props.apiPath, {  })

    if( oResultApi.status == 200 ){
      RegistrosApi = oResultApi.data
      Registros.value = oResultApi.data
      // AlertToast
      alertToast({
        title: '' as string,
        icon: 'success',
        text: ( bUpdate ) ? props.messageUpdate : props.messageLoad,
        timer: 9500 as number,
        position: 'top-end',
      })
    }else{
      // AlertToast
      alertToast({
        title: '' as string,
        icon: 'warning',
        text: ( bUpdate ) ? props.messageUpdate : props.messageLoad,
        timer: 9500 as number,
        position: 'top-end',
      })
    }

    // AlertToast
    alertToast({
      title: '' as string,
      icon: 'success',
      text: ( bUpdate ) ? props.messageUpdate : props.messageLoad,
      timer: 9500 as number,
      position: 'top-end',
    })
  }

  function buscar(value: any){
    if(value){
      Registros.value = RegistrosApi.filter((u:any) =>
        u.name.toLowerCase().includes(value.toLowerCase())
      )
    }else{
      Registros.value = RegistrosApi
    }
  }

</script>
