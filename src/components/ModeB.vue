<template>
  <div class="mode-loader-wrap">
    <div class="loader" />

    <span class="loader-text"> Loading </span>
  </div>
</template>

<style scoped>
.mode-loader-wrap {
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;

  pointer-events: none;
  overflow: hidden;
}

.loader {
  width: 60px;
  aspect-ratio: 2;

  --dot-color: rgb(var(--v-theme-primary));

  --_g: no-repeat radial-gradient(circle closest-side, var(--dot-color) 90%, transparent);

  background:
    var(--_g) 0% 50%,
    var(--_g) 50% 50%,
    var(--_g) 100% 50%;

  background-size: calc(100% / 3) 50%;

  opacity: 0.9;

  animation: loaderDots 1s infinite linear;
}

.loader-text {
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.08em;

  color: rgb(var(--v-theme-on-background));

  opacity: 0.75;

  animation: textPulse 1.5s infinite ease-in-out;
}

@keyframes loaderDots {
  20% {
    background-position:
      0% 0%,
      50% 50%,
      100% 50%;
  }

  40% {
    background-position:
      0% 100%,
      50% 0%,
      100% 50%;
  }

  60% {
    background-position:
      0% 50%,
      50% 100%,
      100% 0%;
  }

  80% {
    background-position:
      0% 50%,
      50% 50%,
      100% 100%;
  }

  100% {
    background-position:
      0% 50%,
      50% 50%,
      100% 50%;
  }
}

@keyframes textPulse {
  0%,
  100% {
    opacity: 0.45;
  }

  50% {
    opacity: 0.9;
  }
}
</style>
