import { defineStore } from 'pinia'

export const useUserStore = defineStore('storeUser', {
  state: () => {
    return {
      firstName: 'allen',
      lastName: 'ttk',
      accessToken: 'nothing'
    }
  },
  actions: {
    setToken(value) {
      this.accessToken = value
    },
    setName(value) {
        this.firstName = value
      }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'persistDev',
        storage: window?.localStorage,
        paths: ['accessToken']
      },
      {
        key: 'name',
        storage: window?.localStorage,
        paths: ['firstName', 'lastName']
      }
    ]
  }
})
