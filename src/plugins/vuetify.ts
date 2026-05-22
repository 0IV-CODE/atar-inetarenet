// src/plugins/vuetify.ts

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { useI18n } from 'vue-i18n'
import { i18n } from './i18n'


// Only Vuetify components used in your current Home, Contact, Layout, Header
import {
  VApp,
  VAppBar,
  VBtn,
  VBtnToggle,
  VCard,
  VCardText,
  VCardTitle,
  VCol,
  VChip,
  VContainer,
  VDialog,
  VIcon,
  VLayout,
  VList,
  VListItem,
  VListItemTitle,
  VMain,
  VMenu,
  VRow,
  VSwitch,
  VTextarea,
  VSpacer,
} from 'vuetify/components'

import {
  Ripple,
} from 'vuetify/directives'

// MDI icons
import {
  mdiAccountHardHat,
  mdiAndroid,
  mdiApi,
  mdiBullseyeArrow,
  mdiCellphone,
  mdiCellphoneLink,
  mdiChartLine,
  mdiClockOutline,
  mdiClose,
  mdiCloudCheckOutline,
  mdiCloudOffOutline,
  mdiCodeTags,
  mdiDatabaseOutline,
  mdiFileTreeOutline,
  mdiGestureTap,
  mdiLan,
  mdiLayersOutline,
  mdiMenu,
  mdiMonitor,
  mdiMonitorDashboard,
  mdiPackageVariant,
  mdiRocketLaunch,
  mdiServer,
  mdiShieldAccountOutline,
  mdiSitemap,
  mdiSync,
  mdiTableCog,
  mdiViewDashboardOutline,
  mdiWeb,
} from '@mdi/js'

export default createVuetify({
  components: {
    VApp,
    VAppBar,
    VBtn,
    VBtnToggle,
    VCard,
    VCardText,
    VCardTitle,
    VCol,
    VChip,
    VContainer,
    VDialog,
    VIcon,
    VLayout,
    VList,
    VListItem,
    VListItemTitle,
    VMain,
    VMenu,
    VRow,
    VSwitch,
    VTextarea,
    VSpacer,
  },

  directives: {
    Ripple,
  },

  theme: {
    defaultTheme: 'dark',

    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#ffffff',
          secondary: '#9e9e9e',
          ctext: '#4dd0e1',
          background: '#000000',
          surface: '#111111',
        },
      },

      light: {
        dark: false,
        colors: {
          primary: '#212121',
          secondary: '#757575',
          ctext: '#212121',
          background: '#ffffff',
          surface: '#f5f5f5',
        },
      },
    },
  },

  icons: {
    defaultSet: 'mdi',

    aliases: {
      ...aliases,

      // required defaults you use
      close: mdiClose,
      menu: mdiMenu,
      Menu: mdiMenu,

      // stats
      clockOutline: mdiClockOutline,
      databaseOutline: mdiDatabaseOutline,
      layersOutline: mdiLayersOutline,
      cellphone: mdiCellphone,

      // website
      bullseyeArrow: mdiBullseyeArrow,
      sitemap: mdiSitemap,
      codeTags: mdiCodeTags,
      rocketLaunch: mdiRocketLaunch,
      fileTreeOutline: mdiFileTreeOutline,
      viewDashboardOutline: mdiViewDashboardOutline,
      server: mdiServer,

      // systems
      accountHardHat: mdiAccountHardHat,
      tableCog: mdiTableCog,
      chartLine: mdiChartLine,
      web: mdiWeb,
      shieldAccountOutline: mdiShieldAccountOutline,
      monitorDashboard: mdiMonitorDashboard,
      cloudCheckOutline: mdiCloudCheckOutline,

      // mobile
      cellphoneLink: mdiCellphoneLink,
      cloudOffOutline: mdiCloudOffOutline,
      gestureTap: mdiGestureTap,
      android: mdiAndroid,
      api: mdiApi,
      sync: mdiSync,

      // windows
      monitor: mdiMonitor,
      packageVariant: mdiPackageVariant,
      lan: mdiLan,
    },

    sets: {
      mdi,
    },
  },

  locale: {
    adapter: createVueI18nAdapter({
      i18n,
      useI18n,
    }),
  },

})
