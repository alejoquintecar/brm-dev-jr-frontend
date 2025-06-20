<template>
  <v-app-bar color="blue">
    <template v-slot:prepend>
      <v-btn class="text-none bg-white" color="white" rounded="0"
        style="height: 100%;"
        :to="{ name: 'inicio' }">
        <v-img width="115" src="@/assets/brm.png" />
      </v-btn>
      <!-- <v-app-bar-nav-icon>
      </v-app-bar-nav-icon> -->
    </template>
    <v-app-bar-title class="align-center">
      <div class="d-flex justify-center w-100">
        <v-breadcrumbs class="text-h9" :items="oAppStore.Breadcrumbs" />
      </div>
    </v-app-bar-title>
    <!-- <template v-slot:append>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template> -->
  </v-app-bar>
</template>

<script setup lang="ts">
  // --- --- --- Stores --- --- ---
  import { AppStore } from '@/stores/AppStore.ts'
  const oAppStore = AppStore()
</script>

<!-- <style scoped lang="sass">
</style> -->
