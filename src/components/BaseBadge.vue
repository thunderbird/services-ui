<script setup lang="ts">
import { BaseBadgeTypes } from '@/definitions';

// component properties
interface Props {
  type?: BaseBadgeTypes;
  dataTestid?: string;
}
withDefaults(defineProps<Props>(), {
  type: BaseBadgeTypes.Primary,
  dataTestid: 'badge',
});
</script>

<template>
  <div :class="{ [type]: type }" class="badge" :data-testid="dataTestid">
    <span class="icon" v-if="$slots?.icon">
      <slot name="icon" />
    </span>
    <span class="text">
      <slot />
    </span>
  </div>
</template>

<style scoped>
@import '@/assets/styles/custom-media.pcss';

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}

.text {
  margin: auto;
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  white-space: nowrap;
}

.badge {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  gap: 0.25rem;
  border: 1px solid transparent;
  padding: 0.25rem 0.75rem;

  &:has(.icon) {
    padding-inline-start: 0.25rem;
  }
}

/* Types / Variants */

.primary {
  background-color: var(--colour-accent-blue);
  color: var(--colour-ti-base);
}

.subscription {
  background: color-mix(in srgb, var(--colour-accent-blue), transparent 80%);
  color: var(--colour-ti-brand);
}

.pending {
  background-color: var(--colour-warning-soft);
  border-color: var(--colour-warning-default);
  color: var(--colour-ti-warning);
}

.set {
  background-color: var(--colour-ti-secondary);
  color: var(--colour-surface-base);
}

.verified {
  background-color: var(--colour-success-soft);
  border-color: var(--colour-ti-success);
  color: var(--colour-ti-success);

  .icon {
    color: var(--colour-success-default);
  }
}

.emails {
  background-color: var(--colour-surface-deep);
  color: var(--colour-ti-base);

  .icon {
    color: var(--colour-ti-secondary);
  }
}

.not-set {
  background-color: transparent;
  border-color: var(--colour-ti-critical);
  color: var(--colour-ti-critical);
}

.default {
  background-color: var(--colour-surface-subtle);
  color: var(--colour-ti-base);

  .icon {
    color: var(--colour-ti-muted);
  }
}

.counter {
  background-color: var(--colour-surface-subtle);
  color: var(--colour-ti-secondary);
  padding: 0.25rem 0.5rem;
  font-variant-numeric: tabular-nums;
}
</style>
