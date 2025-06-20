import { defineStore } from 'pinia'

import isEqual from "lodash/isEqual"
import { ApiGet } from '@/plugins/api'
// // --- --- --- Utilities --- --- ---
import { isEmpty } from '@/utilities/app'

export const UsuariosStore = defineStore('UsuariosStore', {
  state: () => ({
    // --- --- --- View --- --- ---
    action: '' as string,
    // --- --- --- Table --- --- ---
    DataTableFilters: [] as any,
    DataTableHeaders: [] as any,
    DataTableRowsSelected: [] as any,
  }),
  persist: true,
  actions: {
    // Get data -> Form
    async getForm( params = {} ){
      const result: any = await ApiGet('users/form', params)
      return result
    },
    async putStore( form: any, params = {} as any ){
      let result = [] as any
      // result = await ApiPut('users/store', {
      //   ...params, form: form,
      // })
      return result
    }
  },
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
})
