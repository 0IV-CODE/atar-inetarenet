<script lang="ts">
import { useHead } from '@unhead/vue'
import { markRaw } from 'vue'
import { useMainStore } from '../stores/main'
import ModeB from '../components/ModeB.vue'

type PerformanceMode = 'three-now' | 'three-delayed'

export default {
  name: 'HomeView',

  components: {
    ModeB,
  },

  data: () => ({
    activeComponent: null as any,
    isCheckingMode: false,
    checkTimer: null as number | null,
    showModeB: false,
  }),

  setup() {
    const mainSt = useMainStore()

    useHead({
      title: 'IV Code | Full-Stack Developer',
      meta: [
        {
          name: 'description',
          content:
            'Full-stack developer focused on manufacturing systems, internal tools, and web applications.',
        },
      ],
    })

    return {
      mainSt,
    }
  },

  mounted() {
    this.startPerformanceMode()
    this.watchConnectionChanges()
  },

  beforeUnmount() {
    this.removeConnectionWatcher()

    if (this.checkTimer) {
      window.clearTimeout(this.checkTimer)
      this.checkTimer = null
    }
  },

  methods: {
    startPerformanceMode() {
      const mode = this.getBestPerformanceMode()

      if (this.checkTimer) {
        window.clearTimeout(this.checkTimer)
        this.checkTimer = null
      }

      // If ThreeModeA has already loaded before,
      // skip ModeB and load ThreeModeA directly.
      if (this.mainSt.hasLoadedThree) {
        this.showModeB = false
        this.loadThreeMode()
        return
      }

      // If ModeB has already been shown once,
      // do not show it again on route return.
      if (this.mainSt.hasShownModeB) {
        this.showModeB = false
        this.loadThreeMode()
        return
      }

      // First visit only: show ModeB as loading/fallback.
      this.showModeB = true
      this.mainSt.markModeBShown()

      if (mode === 'three-now') {
        this.loadThreeMode()
        return
      }

      this.checkTimer = window.setTimeout(() => {
        this.loadThreeMode()
      }, 3000)
    },

    async loadThreeMode() {
      if (this.isCheckingMode) return

      this.isCheckingMode = true

      try {
        const mod = await import('../components/ThreeModeA.vue')

        this.activeComponent = markRaw(mod.default)
        this.showModeB = false
        this.mainSt.markThreeLoaded()
      } catch (error) {
        console.error('ThreeModeA failed to load:', error)

        this.activeComponent = null

        // Only show ModeB if it has never been shown before.
        this.showModeB = !this.mainSt.hasShownModeB

        if (this.showModeB) {
          this.mainSt.markModeBShown()
        }
      } finally {
        this.isCheckingMode = false
      }
    },

    getBestPerformanceMode(): PerformanceMode {
      const connection = this.getConnection()

      const cores = navigator.hardwareConcurrency || 4
      const memory = (navigator as any).deviceMemory || 8

      if (connection?.saveData) return 'three-delayed'
      if (cores < 4) return 'three-delayed'

      if ('deviceMemory' in navigator && memory < 4) {
        return 'three-delayed'
      }

      if (!connection) return 'three-delayed'

      if (connection.effectiveType === '4g') {
        return 'three-now'
      }

      return 'three-delayed'
    },

    getConnection() {
      return (
        (navigator as any).connection ||
        (navigator as any).mozConnection ||
        (navigator as any).webkitConnection
      )
    },

    watchConnectionChanges() {
      const connection = this.getConnection()

      if (!connection) return

      connection.addEventListener('change', this.debouncedUpgradeCheck)
    },

    removeConnectionWatcher() {
      const connection = this.getConnection()

      if (!connection) return

      connection.removeEventListener('change', this.debouncedUpgradeCheck)
    },

    debouncedUpgradeCheck() {
      if (this.checkTimer) {
        window.clearTimeout(this.checkTimer)
        this.checkTimer = null
      }

      this.checkTimer = window.setTimeout(() => {
        this.startPerformanceMode()
      }, 500)
    },
  },
}
</script>

<template>
  <component :is="activeComponent" v-if="activeComponent" />

  <ModeB v-else-if="showModeB" />
</template>
