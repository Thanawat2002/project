import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore('snackbar', {
  state: () => ({
    _snackbar: {
      active: false,
      text: '',
      type: 'success'
    }
  }),
  actions: {
    setSnackbar (payload) {
      this._snackbar = payload
    }
  },
  getters: {
    snackbar: (state) => state._snackbar
  }
})
