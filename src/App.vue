<script lang="ts">
import AppHeader from './layouts/AppHeader.vue'

export default {
  name: 'MainLayout',

  components: {
    AppHeader,
  },
}
</script>

<template>
  <v-layout class="bg-background">
    <AppHeader />

    <v-main>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
