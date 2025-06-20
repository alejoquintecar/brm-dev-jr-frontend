<template>
  <v-container class="fill-height" max-width="900">
    <div>
      <v-img class="mb-4" height="100" src="@/assets/brm.png" />
      <!-- Header -->
      <div class="mb-8 text-center">
        <div class="text-h5 font-weight-light mb-n1">Prueba Técnica</div>
        <h1 class="text-h2 font-weight-bold">Desarrollador Jr. Frontend</h1>
        <h4 class="text-h3 font-weight-bold mt-8 text-primary">Nestor Alejandro Quintero :)</h4>
        <h6 class="text-h6 font-weight-bold mt-8 text-primary">
          <v-btn class="text-none" color="primary" variant="outlined" rounded="xl"
            prepend-icon="mdi-eye-arrow-right-outline" size="x-large"
            :to="{ name: 'usuarios_list' }">
            Ver Prueba
          </v-btn>
          <v-btn class="text-none ms-3" color="primary" variant="outlined" rounded="xl"
            prepend-icon="mdi-google-drive"
            to="https://drive.google.com/drive/folders/1JtHGozmVquQbpXzFSwY5p3pdydLwklol?usp=sharing"
            target="_blank">
            Portafolio
          </v-btn>
        </h6>
      </div>
      <!-- Descripcion -->
        <!-- <template #image>
          <v-img position="top right" />
        </template> -->
        <v-card class="py-4" color="surface-variant" prepend-icon="mdi-rocket-launch-outline" rounded="lg" variant="tonal"
          image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png">
          <template #title>
            <h2 class="text-h5 font-weight-bold">Objetivo:</h2>
          </template>
          <template #subtitle>
            <div class="text-subtitle-1" style="white-space: initial;">
              <p>
                <v-icon class="mdi mdi-menu-right text-primary"/>Desarrollar una pequeña SPA en Vue 3 que consuma una API pública para mostrar un listado de usuarios, permitiendo consultar información más detallada en un modal.
              </p>
              <p>
                <v-icon class="mdi mdi-menu-right text-primary"/>Se evaluará el uso de componentes, diseño responsive, integración de Vuetify, estructura de código, consumo de APIs y presentación visual.
              </p>
              <!-- Change this page by updating <v-kbd>{{ `<HelloWorld />` }}</v-kbd> in <v-kbd>components/HelloWorld.vue</v-kbd>. -->
            </div>
          </template>
        </v-card>

        <v-card class="mx-auto mt-5" prepend-icon="$vuetify">
          <template v-slot:title>
            <span class="font-weight-black text-primary">Requerimientos técnicos</span>
          </template>
          <template v-slot:subtitle>
            <span class="font-weight-black">Tecnologías</span>
          </template>
          <!-- <template v-slot:append>
            <v-btn class="text-none" color="primary" variant="outlined" rounded="xl"
              prepend-icon="mdi-eye-arrow-right-outline" size="x-large"
              :to="{ name: 'usuarios_list' }">
              Ver Prueba
            </v-btn>
          </template> -->

          <v-card-text class="bg-surface-light pt-4">
            <v-row>
              <v-col cols="12" md="6" v-for="(item, index) in aRequerimientos" :key="index">
                <v-card class="mx-auto" :title="item.title" :subtitle="item.subtitle" :prepend-icon="item.icon"/>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <!-- <v-col v-for="link in links" :key="link.href" cols="6">
          <v-card
            class="py-4"
            append-icon="mdi-open-in-new"
            color="surface-variant"
            :href="link.href"
            :prepend-icon="link.icon"
            rel="noopener noreferrer"
            rounded="lg"
            variant="tonal"
            :title="link.title" :subtitle="link.subtitle"
            target="_blank"
          />
        </v-col> -->
      <!-- </v-row> -->
    </div>
  </v-container>
</template>

<script setup lang="ts">
  const aRequerimientos = [
    {
      title: 'Vue 3',
      icon: 'mdi mdi-vuejs text-teal',
      subtitle: 'Composition API o Options API',
    },
    {
      title: 'Vuetify 3',
      icon: 'mdi mdi-vuetify text-light-blue',
      subtitle: '',
    },
    {
      title: 'CSS',
      icon: 'mdi mdi-language-css3 text-blue',
      subtitle: 'Preprocesadores SASS o LESS',
    }
  ]
</script>
