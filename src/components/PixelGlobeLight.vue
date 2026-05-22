<script setup lang="ts">
import { shallowRef, onMounted, onBeforeUnmount } from 'vue'
import { useLoop } from '@tresjs/core'
import { BufferAttribute, BufferGeometry, Color, Points } from 'three'

const globeRef = shallowRef<Points | null>(null)

function getPixelCountByCores(cores: number) {
  if (cores <= 2) return 250
  if (cores <= 4) return 350
  if (cores <= 8) return 450
  return 550
}

const testCores: number | null = null

const realCores = navigator.hardwareConcurrency || 4
const cores = testCores ?? realCores
const pixelCount = getPixelCountByCores(cores)

const globeGeometry = new BufferGeometry()
const globePositions: number[] = []

const radius = 2.4

for (let i = 0; i < pixelCount; i++) {
  const phi = Math.acos(2 * Math.random() - 1)
  const theta = Math.random() * Math.PI * 2

  globePositions.push(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.sin(phi) * Math.sin(theta),
    radius * Math.cos(phi),
  )
}

globeGeometry.setAttribute('position', new BufferAttribute(new Float32Array(globePositions), 3))

// Start hidden
globeGeometry.setDrawRange(0, 0)

let loadTimer: number | null = null
let visibleDots = 0

function startProgressiveLoad() {
  const chunkSize = Math.max(10, Math.floor(pixelCount / 35))

  loadTimer = window.setInterval(() => {
    visibleDots += chunkSize

    if (visibleDots >= pixelCount) {
      visibleDots = pixelCount

      if (loadTimer) {
        window.clearInterval(loadTimer)
        loadTimer = null
      }
    }

    globeGeometry.setDrawRange(0, visibleDots)
  }, 35)
}

onMounted(() => {
  startProgressiveLoad()
})

onBeforeUnmount(() => {
  if (loadTimer) {
    window.clearInterval(loadTimer)
  }

  globeGeometry.dispose()
})

const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  if (!globeRef.value) return

  globeRef.value.rotation.y = elapsed * 0.22
  globeRef.value.rotation.x = Math.sin(elapsed * 0.4) * 0.08
})
</script>

<template>
  <TresPerspectiveCamera :position="[0.2, 1.2, 15]" :fov="55" />

  <TresAmbientLight :intensity="1" />

  <TresPointLight :position="[3, 4, 5]" :intensity="2.5" color="#111827" />

  <TresPoints ref="globeRef" :geometry="globeGeometry" :position="[1.6, 6, 0]">
    <TresPointsMaterial :color="new Color('#111827')" :size="0.035" transparent :opacity="0.7" />
  </TresPoints>
</template>
