<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import PixelGlobeDark from './PixelGlobeDark.vue'
import PixelGlobeLight from './PixelGlobeLight.vue'

// this middle man handles lazy load after ModeB loading icon, so it's more efficient
defineProps<{
  themeName: string
}>()
</script>

<template>
  <TresCanvas v-if="themeName === 'dark'" clear-color="#000000" class="three-canvas">
    <PixelGlobeDark />
  </TresCanvas>

  <TresCanvas v-else clear-color="#ffffff" class="three-canvas">
    <PixelGlobeLight />
  </TresCanvas>
</template>
