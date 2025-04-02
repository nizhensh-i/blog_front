import { defineStore } from 'pinia'

export const useMain = defineStore('main', {
  state: () => {
    return {
      test: 'hello word',
      test1: 'hello word1',
      configInfo: {}
    }
  },
  getters: {},
  actions: {}
})

export const useTest = defineStore('test', {
  state: () => {
    return {
      age: 18,
      name: 'yz'
    }
  }
})

export const useTest1 = defineStore('test1', {
  state: () => {
    return {
      age: 18,
      name: 'yz'
    }
  }
})
