<script setup lang="ts">

import StatusInfoIcon from '@/icons/StatusInfoIcon.vue';
import StatusWarningIcon from '@/icons/StatusWarningIcon.vue';

// component properties
interface Props {
  type?: string;
  icon?: boolean;
}
withDefaults(defineProps<Props>(), {
  type: "primary",
  icon: false,
})
</script>

<template>
  <div :class="{ [type]: type }" class="badge">
    <span class="icon" v-if="icon">
      <slot name="icon">
        <status-info-icon v-if="type == 'primary' || type == 'secondary'"/>
        <status-warning-icon v-if="type == 'warning'"/>
      </slot>
    </span>
    <span class="text">
      <slot/>
    </span>
  </div>
</template>

<style scoped>
@import '@/assets/styles/custom-media.pcss';

.icon {
  margin-top: auto;
  margin-bottom: auto;
}

.text {
  margin: auto;
  font-size: 0.8125rem;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
}

.badge {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.1875rem;
  gap: 0.3125rem;
  border: 0.0625rem solid;
  padding: 0.140625rem 0.28125rem;
}

.primary {
  background-color: var(--colour-primary-soft);
  border-color: var(--colour-service-primary-hover);
  color: var(--colour-service-primary-hover);
}

.secondary {
  background-color: var(--colour-neutral-subtle);
  border-color: var(--colour-ti-secondary);
  color: var(--colour-ti-secondary);
}

.warning {
  background-color: var(--colour-warning-soft);
  border-color: var(--colour-ti-warning);
  color: var(--colour-ti-warning);
}
</style>
