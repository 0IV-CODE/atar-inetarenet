<script lang="ts">
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'

export default {
  name: 'OpenSource',

  setup() {
    useHead({
      title: 'Open Source | IV Code',
      meta: [
        {
          name: 'description',
          content:
            'Explore open-source software projects built by IV Code using Vue, TypeScript, Capacitor, offline-first architecture, and modern development tools.',
        },
        {
          name: 'keywords',
          content:
            'open source software, vue projects, typescript, capacitor, offline first apps, software engineering',
        },

        // Open Graph
        {
          property: 'og:title',
          content: 'Open Source | IV Code',
        },
        {
          property: 'og:description',
          content:
            'Open-source projects focused on mapping tools, mobile applications, productivity systems, and modern software development.',
        },

        // Twitter
        {
          name: 'twitter:title',
          content: 'Open Source | IV Code',
        },
        {
          name: 'twitter:description',
          content:
            'View open-source projects and development work from IV Code.',
        },
      ],
    })

    const { t, tm } = useI18n()

    return {
      t,
      tm,
    }
  },

  computed: {
    openProjects() {
      return this.tm('openSource.projects') as any[]
    },
  },
}
</script>

<template>
  <v-container class="bg-transparent">
    <!-- Projects -->
    <v-row class="mt-10">
      <v-col v-for="project in openProjects" :key="project.name" cols="12">
        <v-card elevation="0" rounded="xl" class="project-card pa-6 pa-md-8">
          <v-row>
            <v-col cols="12" md="8">
              <div class="d-flex flex-wrap align-center ga-3 mb-4">
                <div class="project-title">
                  {{ project.name }}
                </div>

                <v-chip size="small" color="cyan" variant="outlined">
                  {{ project.status }}
                </v-chip>
              </div>

              <div class="text-cyan text-subtitle-2 mb-3">
                {{ project.type }}
              </div>

              <p class="text-body-1 text-primary text-medium-emphasis mb-6">
                {{ project.desc }}
              </p>

              <div class="d-flex flex-wrap ga-2">
                <v-chip
                  v-for="tag in project.tags"
                  :key="tag"
                  color="white"
                  size="small"
                  variant="tonal"
                >
                  {{ tag }}
                </v-chip>
              </div>
            </v-col>

            <v-col cols="12" md="4">
              <v-card elevation="0" class="stack-card pa-4">
                <p class="text-overline text-cyan mb-3">
                  {{ t('openSource.stack') }}
                </p>

                <div v-for="item in project.stack" :key="item" class="stack-line text-primary">
                  > {{ item }}
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Terminal Footer -->
    <v-card elevation="0" rounded="xl" class="footer-terminal mt-10 pa-5">
      <div>> {{ t('openSource.terminal.scanning') }}</div>

      <div>> {{ t('openSource.terminal.indexed') }}</div>

      <div>> {{ t('openSource.terminal.awaiting') }}</div>

      <div class="text-cyan">> {{ t('openSource.terminal.ready') }}</div>
    </v-card>
  </v-container>
</template>
