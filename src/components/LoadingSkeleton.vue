<script setup lang="ts">
import { t } from '@/composable/i18n';
import { AnimationTypes } from "@/definitions";

interface Props {
  borderRadius?: string;
  width?: string;
  height?: string;
  isLoading?: boolean;
  animationType?: AnimationTypes;
}

const props = withDefaults(defineProps<Props>(), {
  borderRadius: '0.5rem',
  width: 'max-content',
  height: 'max-content',
  isLoading: true,
  animationType: AnimationTypes.Scan,
});
</script>

<template>
  <div :class="{ skeleton: isLoading, [props.animationType]: true }" :style="{ width, height, borderRadius }">
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
  cursor: progress;

  &.scan {
    background: var(--colour-ti-base-dark)
      linear-gradient(90deg, transparent 25%, var(--colour-user-graphite) 50%, transparent 75%);
    background-size: 1000% 1000%;

    @media (prefers-reduced-motion: no-preference) {
      animation: scan-animation 6s ease infinite;
    }
  }

  &.pulse {
    position: relative;
    overflow: hidden;

    background: var(--colour-ti-base-dark);

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: .1px;
      height: .1px;
      border-radius: 9999px;
      background-color: var(--colour-ti-base-dark);
      
      @media (prefers-reduced-motion: no-preference) {
        animation: pulse-animation 3s ease infinite;
      }
    }
  }
}

@keyframes scan-animation {
  0% {
    background-position: 0 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

@keyframes pulse-animation {
  50% {
    box-shadow: 0 0 0 0 var(--colour-user-graphite);
  }
  100% {
    box-shadow: 0 0 0 20px transparent;
  }
}
</style>
