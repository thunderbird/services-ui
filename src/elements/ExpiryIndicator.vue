<script setup lang="ts">
import ExpiryIcon from '@/icons/ExpiryIcon.vue';
import { computed, toRef } from "vue";
import { t } from '@/composable/i18n';
import { ExpiryUnitTypes } from "@/definitions";

// component properties
interface Props {
  timeRemaining?: number;
  warningThreshold?: number;
  timeUnit?: ExpiryUnitTypes;
}
const props = withDefaults(defineProps<Props>(), {
  timeRemaining: 10,
  warningThreshold: 5,
  timeUnit: ExpiryUnitTypes.Days
})

const timeRemaining = toRef(() => props.timeRemaining);
const warningThreshold = toRef(() => props.warningThreshold);
const status = computed(() => {
  if (timeRemaining.value <= 0) {
    return "expired";
  } else if (timeRemaining.value < warningThreshold.value) {
    return "warning";
  } else {
    return "info";
  }
});

</script>

<template>
  <div :class="status" class="expiry-indicator">
    <span class="icon">
      <expiry-icon />
    </span>
    <span class="body">
      {{ t(`expiryIndicator.${timeUnit}`, { 'n': timeRemaining }) }}
    </span>
  </div>
</template>

<style scoped>
@import '@/assets/styles/custom-media.pcss';

.icon {
  margin-top: auto;
  margin-bottom: auto;
}

.body {
  margin: auto;
  font-size: 0.8125rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
}

.expiry-indicator {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.1875rem;
  gap: 0.3125rem;
  border: 0.0625rem solid;
  padding: 0.140625rem 0.28125rem;
}

.info {
  background-color: var(--colour-primary-soft);
  border-color: var(--colour-primary-hover);
  color: var(--colour-primary-hover);
}

.warning {
  background-color: var(--colour-warning-soft);
  border-color: var(--colour-ti-warning);
  color: var(--colour-ti-warning);
}

.expired {
  background-color: var(--colour-neutral-subtle);
  border-color: var(--colour-ti-secondary);
  color: var(--colour-ti-secondary);
}
</style>
