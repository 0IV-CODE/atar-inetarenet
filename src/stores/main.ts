import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    hasShownModeB: false,
    hasLoadedThree: false,
  }),

  actions: {
    markModeBShown() {
      this.hasShownModeB = true
    },

    markThreeLoaded() {
      this.hasLoadedThree = true
    },
  },
})
