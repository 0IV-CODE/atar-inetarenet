<script lang="ts">
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'

export default {
  name: 'AppHeader',

  setup() {
    const theme = useTheme()
    const { locale, t } = useI18n()

    return {
      theme,
      locale,
      t,
    }
  },

  data: () => ({
    menuOpen: false,
    darkMode: false,

    languages: [
      { label: 'English', value: 'en' },
      { label: 'Español', value: 'es' },
      { label: 'Français', value: 'fr' },
    ],
  }),

  computed: {
    navRoutes() {
      const allowedRoutes = ['/', '/contact', '/opensource']

      return this.$router
        .getRoutes()
        .filter((route) => {
          return route.path && allowedRoutes.includes(route.path) && route.name
        })
        .map((route) => ({
          name: String(route.name),
          path: route.path,
          label: this.cleanRouteName(route.path),
        }))
    },

    currentLanguageLabel() {
      return this.languages.find((language) => language.value === this.locale)?.label || 'English'
    },
  },

  watch: {
    darkMode(val) {
      this.theme.change(val ? 'dark' : 'light')
    },
  },

  mounted() {
    this.darkMode = this.theme.global.name.value === 'dark'
  },

  methods: {
    cleanRouteName(path: string) {
      const labels: Record<string, string> = {
        '/': this.t('app.home'),
        '/contact': this.t('app.contact'),
        '/opensource': this.t('app.openSource'),
      }

      return labels[path] || path
    },

    changeLanguage(lang: 'en' | 'es' | 'fr') {
      this.locale = lang
    },

    goToRoute(path: string) {
      this.$router.push(path)
      this.menuOpen = false
    },

    isActive(path: string) {
      return this.$route.path === path
    },
  },
}
</script>

<template>
  <div>
    <v-app-bar
      :class="
        theme.global.name.value === 'dark'
          ? 'app-header-gradient-black'
          : 'app-header-gradient-white'
      "
      density="compact"
      elevation="0"
      flat
      location="top"
    >
      <template #append>
        <!-- Shows all routes on md and larger screens -->
        <div class="d-none d-md-flex align-center">
          <v-btn
            v-for="route in navRoutes"
            :key="route.path"
            :active="isActive(route.path)"
            :color="isActive(route.path) ? 'secondary' : undefined"
            variant="text"
            @click="goToRoute(route.path)"
          >
            {{ route.label }}
          </v-btn>
        </div>

        <!-- Dark mode switch always in app bar -->
        <v-switch
          v-model="darkMode"
          :label="darkMode ? $t('app.darkMode') : $t('app.lightMode')"
          hide-details
          inset
          color="secondary"
          density="compact"
          class="mx-2 d-none d-md-flex"
        />

        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props" prepend-icon="$web" variant="text">
              {{ $t('app.language') }}
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="language in languages"
              :key="language.value"
              :active="locale === language.value"
              @click="changeLanguage(language.value)"
            >
              <v-list-item-title>
                {{ language.label }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Under md, keep mobile menu -->
        <v-btn class="d-flex d-md-none" prepend-icon="$Menu" @click="menuOpen = true">
          {{ $t('app.menu') }}
        </v-btn>
      </template>
    </v-app-bar>

    <v-dialog v-model="menuOpen" fullscreen transition="dialog-bottom-transition">
      <v-card class="bg-background" rounded="0">
        <v-card-title>
          <v-row align="end" no-gutters>
            <v-col>
              <p class="text-h6 font-weight-bold ma-0">
                {{ $t('app.menu') }}
              </p>
            </v-col>

            <v-col cols="auto">
              <v-btn icon variant="tonal" size="small" @click="menuOpen = false">
                <v-icon icon="$close" />
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-text>
          <v-list class="bg-transparent">
            <v-list-item
              v-for="route in navRoutes"
              :key="route.path"
              class="mb-2 rounded-sm"
              :active="isActive(route.path)"
              :color="isActive(route.path) ? 'secondary' : undefined"
              @click="goToRoute(route.path)"
            >
              <v-list-item-title class="font-weight-medium">
                {{ route.label }}
              </v-list-item-title>
            </v-list-item>
          </v-list>

          <!-- Dark mode switch always in app bar -->
          <v-switch
            v-model="darkMode"
            :label="darkMode ? $t('app.darkMode') : $t('app.lightMode')"
            hide-details
            inset
            color="secondary"
            density="compact"
            class="mx-2"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.app-header-gradient-black {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%) !important;
}

.app-header-gradient-white {
  background: linear-gradient(
    to bottom,
    rgb(255, 255, 255) 50%,
    rgba(255, 255, 255, 0) 100%
  ) !important;
}
</style>
