<template>
  <v-dialog v-model="dialogActive" max-width="1300">
    <template v-slot:default="{ isActive }">
      <v-card>
        <template v-slot:title>
          <div class="w-100 text-center">
            <span class="font-weight-black text-blue">Detalle Usuario</span>
          </div>
        </template>
        <v-divider :thickness="2"></v-divider>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6" lg="4" v-if="form.address">
              <v-text-field v-model="form.address.street" label="Dirección" variant="solo"
                :readonly="oViewStore.action == 'ver'">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <v-text-field v-model="form.phone" label="Teléfono" variant="solo"
                :readonly="oViewStore.action == 'ver'">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6" lg="4" v-if="form.company">
              <v-text-field v-model="form.company.name" label="Compañía" variant="solo"
                :readonly="oViewStore.action == 'ver'">
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <v-text-field v-model="form.website" label="Sitio web" variant="solo"
                :readonly="oViewStore.action == 'ver'">
              </v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="border">
          <v-btn class="text-none text-h8" text="Cerrar" variant="tonal" color="warning" size="large" rounded="xl"
            append-icon="mdi-close-circle-outline"
            @click="formCancelar();">
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
  // --- --- --- App --- --- ---
  import { ref } from 'vue'
  // --- --- --- Stores --- --- ---
  import { UsuariosStore } from './UsuariosStore'
  const oViewStore = UsuariosStore()
  // --- --- --- Variables --- --- ---
  const form = ref<any>([])
  const dialogActive = ref<boolean>(true)
  let registroId = null as any
  // --- --- --- Funciones --- --- ---
  onMounted(() => {

    form.value = oViewStore.DataTableRowsSelected
    if( ['edit'].includes(oViewStore.action) ){
      registroId = oViewStore.DataTableRowsSelected.id
    }

    if( !['ver', 'list'].includes(oViewStore.action) ){
      void oViewStore.getForm({
        id: registroId
      })
      // .then(( result: any) => {|
      //   // if( result.status == 200 ){

      //   // }
      // })
    }

  })

  // const formGuardar = () => {
  //   void oViewStore.putStore( form.value ).then( (result: any) => {
  //     console.log( result )
  //     if( result.status == 200 ){
  //       oViewStore.action = 'list'
  //       emit('guardar-crud')
  //     }
  //   })
  // }

  const formCancelar = () => {
    oViewStore.action = 'list'
  }

</script>
