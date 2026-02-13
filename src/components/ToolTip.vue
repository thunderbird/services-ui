<script setup lang="ts">
// component properties
import { TooltipPosition } from '@/definitions';

// component properties
interface Props {
  alt?: string;
  position?: TooltipPosition;
  dataTestid?: string;
}
withDefaults(defineProps<Props>(), {
  alt: '',
  position: TooltipPosition.Bottom,
  dataTestid: 'tool-tip',
});
</script>

<template>
  <div class="tooltip" :aria-label="alt" :data-testid="dataTestid">
    <div class="tooltip-container">
      <div class="tooltip-body">
        <slot></slot>
      </div>
      <svg
        class="beak"
        :class="position"
        width="29"
        height="6"
        viewBox="0 0 29 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.9142 4.58579C15.1332 5.36683 13.8668 5.36683 13.0858 4.58579L8.5 0L20.5 0L15.9142 4.58579Z"
          fill="currentColor"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.tooltip {
  position: absolute;
  text-wrap: wrap;
  border-radius: 0.5rem;
  background-color: var(--colour-neutral-base);
  font-family: var(--font-sans);
  color: var(--colour-ti-secondary);
  z-index: 100;
  width: max-content;
  max-width: 15rem;
  box-shadow:
    0px 4px 8px 0px rgba(0, 0, 0, 0.14),
    0px 0px 2px 0px rgba(0, 0, 0, 0.12);
}

.tooltip-body {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1rem;
}

.tooltip-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.beak {
  position: absolute;
  color: var(--colour-neutral-base);
  filter: drop-shadow(0px 1px 0px #00000010);
}

.pos-none {
  display: none;
}

.pos-top {
  top: -6px;
  transform: scaleY(-1);

  &.beak {
    filter: drop-shadow(0px -1px 0px #00000010);
  }
}

.pos-bottom {
  top: 100%;
}

.pos-left {
  left: -17px;
  transform: rotateZ(90deg);
}

.pos-right {
  right: -17px;
  transform: rotateZ(-90deg);
}
</style>
