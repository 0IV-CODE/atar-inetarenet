<script lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useDisplay, useTheme } from 'vuetify'
import { TresCanvas } from '@tresjs/core'
import { defineAsyncComponent, shallowRef } from 'vue'

type ResultStat = {
  value: number
  start: number
  end: number
  suffix: string
  label: string
  icon: string
}

type BuildFlowType = 'website' | 'system' | 'mobile' | 'windows'

type BuildPathKey =
  | 'simpleWebsite'
  | 'complexWebsite'
  | 'internalSystem'
  | 'externalSystem'
  | 'offlineMobile'
  | 'onlineMobile'
  | 'localWindows'
  | 'networkWindows'

type BuildNode = {
  title: string
  subtitle: string
  icon: string
  detail: string
}

type BuildPath = {
  label: string
  nodes: BuildNode[]
}

type BuildFlows = Record<BuildFlowType, Record<string, BuildPath>>

export default {
  name: 'HomeView',

  components: {
    AsyncThreeGlobe: defineAsyncComponent(() => import('../components/AsyncThreeGlobe.vue')),
  },

  setup() {
    const display = useDisplay()
    const theme = useTheme()

    const showThree = shallowRef(false)

    return {
      display,
      theme,
      showThree,
    }
  },

  data(): {
    activeFlow: BuildFlowType
    activePath: BuildPathKey
    activeNodeIndex: number
    buildFlows: BuildFlows
    resultsStats: ResultStat[]
  } {
    return {
      activeFlow: 'website',
      activePath: 'simpleWebsite',
      activeNodeIndex: 0,

      buildFlows: {
        website: {
          simpleWebsite: {
            label: 'home.paths.simpleWebsite',
            nodes: [
              {
                title: 'home.nodes.website.simple.generalInfo.title',
                subtitle: 'home.nodes.website.simple.generalInfo.subtitle',
                icon: '$bullseyeArrow',
                detail: 'home.nodes.website.simple.generalInfo.detail',
              },
              {
                title: 'home.nodes.website.simple.layout.title',
                subtitle: 'home.nodes.website.simple.layout.subtitle',
                icon: '$sitemap',
                detail: 'home.nodes.website.simple.layout.detail',
              },
              {
                title: 'home.nodes.website.simple.build.title',
                subtitle: 'home.nodes.website.simple.build.subtitle',
                icon: '$codeTags',
                detail: 'home.nodes.website.simple.build.detail',
              },
              {
                title: 'home.nodes.website.simple.launch.title',
                subtitle: 'home.nodes.website.simple.launch.subtitle',
                icon: '$rocketLaunch',
                detail: 'home.nodes.website.simple.launch.detail',
              },
            ],
          },

          complexWebsite: {
            label: 'home.paths.complexWebsite',
            nodes: [
              {
                title: 'home.nodes.website.complex.generalInfo.title',
                subtitle: 'home.nodes.website.complex.generalInfo.subtitle',
                icon: '$bullseyeArrow',
                detail: 'home.nodes.website.complex.generalInfo.detail',
              },
              {
                title: 'home.nodes.website.complex.architecture.title',
                subtitle: 'home.nodes.website.complex.architecture.subtitle',
                icon: '$fileTreeOutline',
                detail: 'home.nodes.website.complex.architecture.detail',
              },
              {
                title: 'home.nodes.website.complex.interactiveUi.title',
                subtitle: 'home.nodes.website.complex.interactiveUi.subtitle',
                icon: '$viewDashboardOutline',
                detail: 'home.nodes.website.complex.interactiveUi.detail',
              },
              {
                title: 'home.nodes.website.complex.production.title',
                subtitle: 'home.nodes.website.complex.production.subtitle',
                icon: '$server',
                detail: 'home.nodes.website.complex.production.detail',
              },
            ],
          },
        },

        system: {
          internalSystem: {
            label: 'home.paths.internalSystem',
            nodes: [
              {
                title: 'home.nodes.system.internal.generalInfo.title',
                subtitle: 'home.nodes.system.internal.generalInfo.subtitle',
                icon: '$accountHardHat',
                detail: 'home.nodes.system.internal.generalInfo.detail',
              },
              {
                title: 'home.nodes.system.internal.database.title',
                subtitle: 'home.nodes.system.internal.database.subtitle',
                icon: '$databaseOutline',
                detail: 'home.nodes.system.internal.database.detail',
              },
              {
                title: 'home.nodes.system.internal.tools.title',
                subtitle: 'home.nodes.system.internal.tools.subtitle',
                icon: '$tableCog',
                detail: 'home.nodes.system.internal.tools.detail',
              },
              {
                title: 'home.nodes.system.internal.improve.title',
                subtitle: 'home.nodes.system.internal.improve.subtitle',
                icon: '$chartLine',
                detail: 'home.nodes.system.internal.improve.detail',
              },
            ],
          },

          externalSystem: {
            label: 'home.paths.externalSystem',
            nodes: [
              {
                title: 'home.nodes.system.external.generalInfo.title',
                subtitle: 'home.nodes.system.external.generalInfo.subtitle',
                icon: '$web',
                detail: 'home.nodes.system.external.generalInfo.detail',
              },
              {
                title: 'home.nodes.system.external.auth.title',
                subtitle: 'home.nodes.system.external.auth.subtitle',
                icon: '$shieldAccountOutline',
                detail: 'home.nodes.system.external.auth.detail',
              },
              {
                title: 'home.nodes.system.external.portal.title',
                subtitle: 'home.nodes.system.external.portal.subtitle',
                icon: '$monitorDashboard',
                detail: 'home.nodes.system.external.portal.detail',
              },
              {
                title: 'home.nodes.system.external.deploy.title',
                subtitle: 'home.nodes.system.external.deploy.subtitle',
                icon: '$cloudCheckOutline',
                detail: 'home.nodes.system.external.deploy.detail',
              },
            ],
          },
        },

        mobile: {
          offlineMobile: {
            label: 'home.paths.offlineMobile',
            nodes: [
              {
                title: 'home.nodes.mobile.offline.generalInfo.title',
                subtitle: 'home.nodes.mobile.offline.generalInfo.subtitle',
                icon: '$cellphone',
                detail: 'home.nodes.mobile.offline.generalInfo.detail',
              },
              {
                title: 'home.nodes.mobile.offline.localData.title',
                subtitle: 'home.nodes.mobile.offline.localData.subtitle',
                icon: '$cloudOffOutline',
                detail: 'home.nodes.mobile.offline.localData.detail',
              },
              {
                title: 'home.nodes.mobile.offline.mobileUi.title',
                subtitle: 'home.nodes.mobile.offline.mobileUi.subtitle',
                icon: '$gestureTap',
                detail: 'home.nodes.mobile.offline.mobileUi.detail',
              },
              {
                title: 'home.nodes.mobile.offline.package.title',
                subtitle: 'home.nodes.mobile.offline.package.subtitle',
                icon: '$android',
                detail: 'home.nodes.mobile.offline.package.detail',
              },
            ],
          },

          onlineMobile: {
            label: 'home.paths.onlineMobile',
            nodes: [
              {
                title: 'home.nodes.mobile.online.generalInfo.title',
                subtitle: 'home.nodes.mobile.online.generalInfo.subtitle',
                icon: '$cellphoneLink',
                detail: 'home.nodes.mobile.online.generalInfo.detail',
              },
              {
                title: 'home.nodes.mobile.online.api.title',
                subtitle: 'home.nodes.mobile.online.api.subtitle',
                icon: '$api',
                detail: 'home.nodes.mobile.online.api.detail',
              },
              {
                title: 'home.nodes.mobile.online.experience.title',
                subtitle: 'home.nodes.mobile.online.experience.subtitle',
                icon: '$sync',
                detail: 'home.nodes.mobile.online.experience.detail',
              },
              {
                title: 'home.nodes.mobile.online.release.title',
                subtitle: 'home.nodes.mobile.online.release.subtitle',
                icon: '$rocketLaunch',
                detail: 'home.nodes.mobile.online.release.detail',
              },
            ],
          },
        },

        windows: {
          localWindows: {
            label: 'home.paths.localWindows',
            nodes: [
              {
                title: 'home.nodes.windows.local.generalInfo.title',
                subtitle: 'home.nodes.windows.local.generalInfo.subtitle',
                icon: '$monitor',
                detail: 'home.nodes.windows.local.generalInfo.detail',
              },
              {
                title: 'home.nodes.windows.local.data.title',
                subtitle: 'home.nodes.windows.local.data.subtitle',
                icon: '$databaseOutline',
                detail: 'home.nodes.windows.local.data.detail',
              },
              {
                title: 'home.nodes.windows.local.desktopUi.title',
                subtitle: 'home.nodes.windows.local.desktopUi.subtitle',
                icon: '$viewDashboardOutline',
                detail: 'home.nodes.windows.local.desktopUi.detail',
              },
              {
                title: 'home.nodes.windows.local.installer.title',
                subtitle: 'home.nodes.windows.local.installer.subtitle',
                icon: '$packageVariant',
                detail: 'home.nodes.windows.local.installer.detail',
              },
            ],
          },

          networkWindows: {
            label: 'home.paths.networkWindows',
            nodes: [
              {
                title: 'home.nodes.windows.network.generalInfo.title',
                subtitle: 'home.nodes.windows.network.generalInfo.subtitle',
                icon: '$lan',
                detail: 'home.nodes.windows.network.generalInfo.detail',
              },
              {
                title: 'home.nodes.windows.network.server.title',
                subtitle: 'home.nodes.windows.network.server.subtitle',
                icon: '$server',
                detail: 'home.nodes.windows.network.server.detail',
              },
              {
                title: 'home.nodes.windows.network.desktopClient.title',
                subtitle: 'home.nodes.windows.network.desktopClient.subtitle',
                icon: '$monitorDashboard',
                detail: 'home.nodes.windows.network.desktopClient.detail',
              },
              {
                title: 'home.nodes.windows.network.deploy.title',
                subtitle: 'home.nodes.windows.network.deploy.subtitle',
                icon: '$rocketLaunch',
                detail: 'home.nodes.windows.network.deploy.detail',
              },
            ],
          },
        },
      },

      resultsStats: [
        {
          value: 0,
          start: 0,
          end: 5,
          suffix: '+',
          label: 'home.stats.years',
          icon: '$clockOutline',
        },
        {
          value: 0,
          start: 0,
          end: 10000,
          suffix: '+',
          label: 'home.stats.records',
          icon: '$databaseOutline',
        },
        {
          value: 0,
          start: 0,
          end: 100,
          suffix: '+',
          label: 'home.stats.features',
          icon: '$layersOutline',
        },
        {
          value: 0,
          start: 0,
          end: 100,
          suffix: '%',
          label: 'home.stats.mobile',
          icon: '$cellphone',
        },
      ],
    }
  },

  computed: {
    activeFlowPaths(): Record<string, BuildPath> {
      return this.buildFlows[this.activeFlow]
    },

    activePathNodes(): BuildNode[] {
      return this.activeFlowPaths[this.activePath]?.nodes || []
    },

    activeNode(): BuildNode {
      return this.activePathNodes[this.activeNodeIndex] || this.activePathNodes[0]
    },

    isLightTheme(): boolean {
      return this.theme.global.name.value === 'light'
    },
  },

  mounted(): void {
    gsap.registerPlugin(ScrollTrigger)

    this.animateIntro()
    this.animateStatsSection()
    this.animateProcessSection()

    // Let page content fully render first
    window.setTimeout(() => {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          this.showThree = true
        })
      } else {
        // Older browsers fallback
        window.setTimeout(() => {
          this.showThree = true
        }, 2000)
      }
    }, 1200)
  },

  beforeUnmount(): void {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  },

  methods: {
    animateIntro(): void {
      gsap.from(this.$refs.introLabel, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: 'power2.out',
      })

      gsap.from(this.$refs.introTitle, {
        opacity: 0,
        y: 34,
        duration: 0.9,
        delay: 0.15,
        ease: 'power2.out',
      })

      gsap.from(this.$refs.introText, {
        opacity: 0,
        y: 28,
        duration: 0.8,
        delay: 0.35,
        ease: 'power2.out',
      })

      gsap.from(this.$refs.introActions, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        delay: 0.55,
        ease: 'power2.out',
      })
    },

    animateStatsSection(): void {
      gsap.from(this.$refs.statsSection, {
        opacity: 0,
        y: 28,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: this.$refs.statsSection as Element,
          start: 'top 70%',
          once: true,
          onEnter: () => {
            this.animateStats()
          },
        },
      })
    },

    animateProcessSection(): void {
      gsap.from(this.$refs.processSection, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: this.$refs.processSection as Element,
          start: 'top 85%',
          once: true,
        },
      })
    },

    animateNodeDetail(): void {
      gsap.from(this.$refs.nodeDetail, {
        opacity: 0,
        y: 14,
        duration: 0.35,
        ease: 'power2.out',
      })
    },

    setFlow(flow: BuildFlowType): void {
      this.activeFlow = flow
      this.activeNodeIndex = 0

      if (flow === 'website') this.activePath = 'simpleWebsite'
      if (flow === 'system') this.activePath = 'internalSystem'
      if (flow === 'mobile') this.activePath = 'offlineMobile'
      if (flow === 'windows') this.activePath = 'localWindows'

      this.$nextTick(() => {
        this.animateNodeDetail()
      })
    },

    setPath(path: BuildPathKey): void {
      this.activePath = path
      this.activeNodeIndex = 0

      this.$nextTick(() => {
        this.animateNodeDetail()
      })
    },

    setNode(index: number): void {
      this.activeNodeIndex = index

      this.$nextTick(() => {
        this.animateNodeDetail()
      })
    },

    animateStats(): void {
      this.resultsStats.forEach((stat, index) => {
        stat.value = stat.start

        const step = Math.max(1, Math.ceil((stat.end - stat.start) / 40))

        setTimeout(() => {
          const timer = setInterval(() => {
            if (stat.value >= stat.end) {
              stat.value = stat.end
              clearInterval(timer)
              return
            }

            stat.value += step

            if (stat.value > stat.end) {
              stat.value = stat.end
            }
          }, 50)
        }, index * 250)
      })
    },
  },
}
</script>

<template>
  <v-container fluid class="pa-0 home-shell">
    <AsyncThreeGlobe v-if="showThree" :theme-name="theme.global.name.value" />

    <v-row class="ma-0 align-center">
      <v-col cols="12" md="10" lg="8" class="px-5 px-md-12">
        <v-card class="bg-transparent" elevation="0" height="200" />

        <v-card class="bg-transparent" elevation="0" max-width="760">
          <p ref="introLabel" class="text-overline text-ctext mb-3">
            {{ $t('home.brand') }}
          </p>

          <h1 ref="introTitle" class="text-h3 text-primary text-md-h1 font-weight-bold mb-4">
            {{ $t('home.title') }}
          </h1>

          <p ref="introText" class="text-h6 text-primary text-medium-emphasis mb-6">
            {{ $t('home.subtitle') }}
          </p>

          <v-row ref="introActions" class="ma-0 ga-3">
            <v-btn color="ctext" rounded="xl" size="large" to="/contact" class="text-white">
              {{ $t('home.contactMe') }}
            </v-btn>

            <v-btn color="primary" variant="outlined" rounded="xl" size="large" to="/opensource">
              {{ $t('home.openSource') }}
            </v-btn>
          </v-row>
        </v-card>

        <v-card class="bg-transparent" elevation="0" height="125" />

        <div ref="statsSection">
          <v-card class="bg-transparent" elevation="0" max-width="760">
            <p class="text-overline text-ctext mb-3">
              {{ $t('home.results') }}
            </p>

            <h2 class="text-h4 text-primary text-md-h2 font-weight-bold mb-4">
              {{ $t('home.resultsTitle') }}
            </h2>

            <p class="text-body-1 text-md-h6 text-primary text-medium-emphasis mb-8">
              {{ $t('home.resultsText') }}
            </p>

            <v-row class="ma-n2">
              <v-col v-for="item in resultsStats" :key="item.label" cols="6" md="6" class="pa-2">
                <v-card
                  class="bg-surface border pa-4 pa-md-5 rounded-xl stat-card"
                  elevation="0"
                  min-height="120"
                >
                  <div class="d-inline-flex pa-0">
                    <v-icon :icon="item.icon" size="25" class="mb-0 mr-4" />

                    <p class="text-ctext font-weight-bold mt-0">
                      {{
                        item.end >= 10000 && item.value >= 10000
                          ? '10K'
                          : item.value.toLocaleString()
                      }}{{ item.suffix }}
                    </p>
                  </div>

                  <p class="text-body-2 text-medium-emphasis ma-0">
                    {{ $t(item.label) }}
                  </p>
                </v-card>
              </v-col>
            </v-row>

            <v-card class="bg-surface border mt-6 pa-5 rounded-xl result-note-card" elevation="0">
              <p class="text-overline text-ctext mb-2">
                {{ $t('home.builtFor') }}
              </p>

              <p class="text-body-1 text-primary text-medium-emphasis mb-0">
                {{ $t('home.builtForText') }}
              </p>
            </v-card>
          </v-card>
        </div>

        <v-card class="bg-transparent" elevation="0" height="125" />

        <div ref="processSection">
          <v-card class="bg-transparent mt-12" elevation="0" max-width="500">
            <p class="text-overline text-ctext mb-3">
              {{ $t('home.process') }}
            </p>

            <h2 class="text-h3 text-primary text-md-h2 font-weight-bold mb-4">
              {{ $t('home.processTitle') }}
            </h2>

            <p class="text-h6 text-primary text-medium-emphasis mb-6">
              {{ $t('home.processText') }}
            </p>

            <div class="d-flex flex-column">
              <v-btn-toggle
                v-model="activeFlow"
                mandatory
                rounded="xl"
                :variant="theme.global.name.value === 'dark' ? 'outlined' : 'elevated'"
                :color="theme.global.name.value === 'dark' ? 'ctext' : 'primary'"
                class="mb-4"
                @update:model-value="setFlow"
              >
                <v-btn value="website">
                  {{ $t('home.flow.website') }}
                </v-btn>

                <v-btn value="system">
                  {{ $t('home.flow.system') }}
                </v-btn>

                <v-btn value="mobile">
                  {{ $t('home.flow.mobile') }}
                </v-btn>

                <v-btn value="windows">
                  {{ $t('home.flow.windows') }}
                </v-btn>
              </v-btn-toggle>

              <v-btn-toggle
                v-model="activePath"
                mandatory
                rounded="xl"
                :variant="theme.global.name.value === 'dark' ? 'outlined' : 'elevated'"
                :color="theme.global.name.value === 'dark' ? 'ctext' : 'primary'"
                class="mb-4"
                @update:model-value="setPath"
              >
                <v-btn v-for="(path, key) in activeFlowPaths" :key="key" :value="key">
                  {{ $t(path.label) }}
                </v-btn>
              </v-btn-toggle>
            </div>
          </v-card>

          <v-card class="process-board pa-6 rounded-xl" elevation="0" max-width="900" height="700">
            <v-row class="ma-0 align-center">
              <template
                v-for="(node, index) in activePathNodes"
                :key="`${activePath}-${node.title}`"
              >
                <v-col cols="12" class="pa-0">
                  <v-card
                    class="node-card pa-2 rounded-lg cursor-pointer"
                    :class="{ 'node-card-active': activeNodeIndex === index }"
                    elevation="0"
                    :width="display.xs ? 250 : 100"
                    @click="setNode(index)"
                  >
                    <div class="d-flex">
                      <v-icon
                        :color="theme.global.name.value === 'dark' ? 'ctext' : 'background'"
                        size="15"
                        class="mb-0"
                        :icon="node.icon"
                      />

                      <p class="text-caption text-white font-weight-bold mt-n1 ml-2 mb-0">
                        {{ $t(node.title) }}
                      </p>
                    </div>

                    <p class="text-medium-emphasis my-0 text-white" style="font-size: 12px">
                      {{ $t(node.subtitle) }}
                    </p>
                  </v-card>
                </v-col>

                <v-col
                  v-if="index < activePathNodes.length - 1"
                  cols="2"
                  class="pa-0 mx-9 d-flex justify-center"
                >
                  <div class="node-line">
                    <span />
                  </div>
                </v-col>
              </template>
            </v-row>

            <v-card
              v-if="activeNode"
              ref="nodeDetail"
              :key="`${activePath}-${activeNode.title}-detail`"
              class="bg-transparent border mt-6 pa-4 rounded-xl"
              elevation="0"
            >
              <div class="d-flex align-center mb-2">
                <v-icon
                  :color="theme.global.name.value === 'dark' ? 'ctext' : 'background'"
                  class="mr-2"
                  :icon="activeNode.icon"
                />

                <p class="text-h6 text-white font-weight-bold mb-0">
                  {{ $t(activeNode.title) }}
                </p>
              </div>

              <p class="text-body-2 text-medium-emphasis mb-0 text-white">
                {{ $t(activeNode.detail) }}
              </p>
            </v-card>
          </v-card>
        </div>

        <v-card class="bg-transparent py-16" elevation="0">
          <v-card class="bg-transparent mx-auto" max-width="980" elevation="0">
            <p class="text-overline text-ctext mb-6">isaac@iv-code:~&gt; ./open_channel.sh</p>

            <button class="ascii-cta" type="button" @click="$router.push('/contact')">
              <pre class="ascii ascii-default">
      ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
      ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
      ██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║
      ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║
      ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║
      ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝

      ███╗   ███╗███████╗
      ████╗ ████║██╔════╝
      ██╔████╔██║█████╗
      ██║╚██╔╝██║██╔══╝
      ██║ ╚═╝ ██║███████╗
      ╚═╝     ╚═╝╚══════╝
              </pre>

              <pre class="ascii ascii-hover">
      ██████╗██╗     ██╗ ██████╗██╗  ██╗
      ██╔════╝██║     ██║██╔════╝██║ ██╔╝
      ██║     ██║     ██║██║     █████╔╝
      ██║     ██║     ██║██║     ██╔═██╗
      ╚██████╗███████╗██║╚██████╗██║  ██╗
      ╚═════╝╚══════╝╚═╝ ╚═════╝╚═╝  ╚═╝

      ███╗   ███╗███████╗
      ████╗ ████║██╔════╝
      ██╔████╔██║█████╗
      ██║╚██╔╝██║██╔══╝
      ██║ ╚═╝ ██║███████╗
      ╚═╝     ╚═╝╚══════╝
              </pre>
            </button>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.home-shell {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.three-canvas {
  position: fixed !important;
  inset: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
}

.process-board {
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  border: 1px solid rgba(0, 229, 255, 0.25);
  background-color: rgba(0, 0, 0, 0.72);
  background-image: radial-gradient(rgba(0, 229, 255, 0.24) 1px, transparent 1px);
  background-size: 22px 22px;
}

.node-card {
  border: 1px solid rgba(0, 229, 255, 0.55);
  background: rgba(0, 20, 32, 0.88);
  box-shadow: 0 0 22px rgba(0, 229, 255, 0.14);
}

.node-line {
  width: 2px;
  height: 24px;
  background: rgba(0, 229, 255, 0.45);
  position: relative;
  flex-shrink: 0;
  margin: auto;
}

.node-line span {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) rotate(135deg);
  bottom: -2px;
  width: 10px;
  height: 10px;
  border-top: 2px solid rgba(0, 229, 255, 0.85);
  border-right: 2px solid rgba(0, 229, 255, 0.85);
}

.cursor-pointer {
  cursor: pointer;
}

.node-card-active {
  border-color: rgba(0, 229, 255, 1);
  background: rgba(0, 48, 72, 0.95);
  box-shadow: 0 0 30px rgba(0, 229, 255, 0.28);
}

.stat-card {
  transition:
    transform 0.25s ease,
    border-color 0.25s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 229, 255, 0.45);
}

.result-note-card {
  border-color: rgba(0, 229, 255, 0.25);
}

.ascii-cta {
  width: 100%;
  overflow-x: auto;
  text-align: left;
  background: transparent;
  border: 0;
  cursor: pointer;
  color: rgb(var(--v-theme-ctext));
}

.ascii {
  margin: 0;
  font-family: monospace;
  font-size: clamp(0.45rem, 1.25vw, 0.95rem);
  line-height: 1.05;
  white-space: pre;
}

.ascii-hover {
  display: none;
}

.ascii-cta:hover .ascii-default {
  display: none;
}

.ascii-cta:hover .ascii-hover {
  display: block;
}
</style>
