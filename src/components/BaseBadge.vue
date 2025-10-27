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
}

.text {
  margin: auto;
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
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

.set {
  background-color: var(--colour-ti-secondary);
  color: var(--colour-neutral-base);
}

.primary {
  background-color: var(--colour-accent-blue);
  color: var(--colour-ti-base);
}

.subscription {
  background: color-mix(in srgb, var(--colour-primary-default-dark), transparent 80%);
  color: var(--colour-ti-secondary);

  .icon {
    color: var(--colour-primary-default);
  }
}

.pending {
  background-color: var(--colour-warning-soft);
  border-color: var(--colour-warning-default);
  color: var(--colour-ti-secondary);

  .icon {
    color: var(--colour-ti-warning);
  }
}

.not-set {
  background-color: var(--colour-danger-soft);
  border-color: var(--colour-ti-critical);
  color: var(--colour-ti-secondary);

  .icon {
    color: var(--colour-danger-default);
  }
}

.verified {
  background-color: var(--colour-success-soft);
  border-color: var(--colour-ti-success);
  color: var(--colour-ti-secondary);

  .icon {
    color: var(--colour-ti-success);
  }
}

.emails {
  background-color: var(--colour-neutral-border);
  color: var(--colour-ti-base);

  .icon {
    color: var(--colour-ti-secondary);
  }
}

.default {
  background-color: var(--colour-neutral-lower);
  color: var(--colour-ti-base);

  .icon {
    color: var(--colour-ti-muted);
  }
}

.counter {
  background: color-mix(in srgb, var(--colour-ti-highlight), transparent 60%);
  color: var(--colour-ti-base);
  padding: 0.25rem 0.5rem;
  font-variant-numeric: tabular-nums;
}
</style>
