<script setup lang="ts">
// component properties
import { useId } from 'vue';
import { TooltipPosition } from '@/definitions';

// component properties
interface Props {
  position?: TooltipPosition;
  visible?: boolean;
  beak?: boolean;
  dataTestid?: string;
}
withDefaults(defineProps<Props>(), {
  position: TooltipPosition.Bottom,
  visible: undefined, // Explicit undefined default so Vue doesn't auto-cast an absent boolean prop to false.
  beak: true,
  dataTestid: 'tool-tip',
});

// ID shared with consumers so they can wire aria-describedby onto the trigger they slot in.
const tooltipId = useId();
</script>

<template>
  <div class="tooltip-anchor">
    <slot :tooltip-id="tooltipId"></slot>
    <div
      class="tooltip"
      :class="[position, { 'force-visible': visible === true, 'force-hidden': visible === false, 'no-beak': !beak }]"
      role="tooltip"
      :id="tooltipId"
      :data-testid="dataTestid"
    >
      <div class="tooltip-container">
        <div class="tooltip-body">
          <slot name="content"></slot>
        </div>
        <svg class="beak" width="29" height="6" viewBox="0 0 29 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.9142 4.58579C15.1332 5.36683 13.8668 5.36683 13.0858 4.58579L8.5 0L20.5 0L15.9142 4.58579Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tooltip-anchor {
  position: relative;
  display: inline-block;
}

.tooltip {
  --tooltip-gap: 0.5rem;
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
  opacity: 0;
  pointer-events: none;
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

/* Box placement: position names the side the tooltip appears on */
.tooltip.pos-top {
  bottom: calc(100% + var(--tooltip-gap));
  left: 50%;
  transform: translateX(-50%);
}

.tooltip.pos-bottom {
  top: calc(100% + var(--tooltip-gap));
  left: 50%;
  transform: translateX(-50%);
}

.tooltip.pos-left {
  right: calc(100% + var(--tooltip-gap));
  top: 50%;
  transform: translateY(-50%);
}

.tooltip.pos-right {
  left: calc(100% + var(--tooltip-gap));
  top: 50%;
  transform: translateY(-50%);
}

.tooltip.pos-top .beak {
  top: 100%;
}

.tooltip.pos-bottom .beak {
  top: -6px;
  transform: scaleY(-1);
  filter: drop-shadow(0px -1px 0px #00000010);
}

.tooltip.pos-left .beak {
  right: -17px;
  transform: rotateZ(-90deg);
}

.tooltip.pos-right .beak {
  left: -17px;
  transform: rotateZ(90deg);
}

.tooltip.no-beak .beak {
  display: none;
}

.tooltip-anchor:hover .tooltip,
.tooltip-anchor:focus-within .tooltip,
.tooltip.force-visible {
  opacity: 1;
  pointer-events: auto;
  z-index: 110;
}

.tooltip.force-hidden {
  opacity: 0 !important;
  pointer-events: none !important;
}

@media (prefers-reduced-motion: no-preference) {
  .tooltip {
    transition: opacity 250ms ease-out;
  }
}
</style>
