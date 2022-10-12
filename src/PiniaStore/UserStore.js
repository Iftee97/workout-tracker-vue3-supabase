import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: null,
  }),

  actions: {
    setUser(payload) {
      this.user = payload ? payload.user : null
    },
  }
})