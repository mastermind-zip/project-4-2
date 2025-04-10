import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchTerm: '',
  }),
  actions: {
    setSearchTerm(term: string) {
      this.searchTerm = term
    },
  },
})
