<script setup lang="ts">
import { t } from '@/composable/i18n';

interface Props {
  borderRadius?: string;
  width?: string;
  height?: string;
  isLoading?: boolean;
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
      <span class="skeleton__a11y-message" v-if="isLoading">{{ t('loadingSkeleton.loadingMessage') }}</span>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
/* via https://adrianroselli.com/2020/11/more-accessible-skeletons.html */
.skeleton__a11y-message {
  position: absolute;
  top: auto;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  white-space: nowrap;
}
.skeleton__hide-content {
  visibility: hidden;
}
.skeleton {
  background: var(--colour-ti-base-dark)
    linear-gradient(90deg, var(--colour-ti-base-dark) 25%, var(--colour-ti-muted) 50%, var(--colour-ti-base-dark) 75%);
  background-size: 1000% 1000%;
  cursor: progress;

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
