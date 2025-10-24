<script setup lang="ts">
import { computed } from 'vue';
import { t } from '@/composable/i18n';

interface Props {
  borderRadius: string;
  width: string;
  height: string;
  isLoading: boolean;
}

withDefaults(defineProps<Props>(), {
  borderRadius: '0.5rem',
  width: 'max-content',
  height: 'max-content',
  isLoading: true,
});
</script>

<template>
  <div :class="{ skeleton: isLoading }" :style="{ width, height, borderRadius }">
    <div :class="{ 'skeleton__hide-content': isLoading }">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.skeleton__hide-content {
  visibility: hidden;
}
.skeleton {
  background-color: var(--colour-ti-base-dark);
  background: linear-gradient(
    90deg,
    var(--colour-ti-base-dark) 25%,
    var(--colour-ti-muted) 50%,
    var(--colour-ti-base-dark) 75%
  );

  background-size: 1000% 1000%;

  @media (prefers-reduced-motion: no-preference) {
    animation: loading-anim 6s ease infinite;
  }
}

@keyframes loading-anim {
  0% {
    background-position: 0 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
