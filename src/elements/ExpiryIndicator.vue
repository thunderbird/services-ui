<script setup lang="ts">
import ExpiryIcon from '@/icons/ExpiryIcon.vue';
import {computed} from "vue";
import { t } from '@/composable/i18n';
import {ExpiryUnitTypes} from "@/definitions";

// component properties
interface Props {
  timer?: number;
  warn?: number;
  unit?: ExpiryUnitTypes;
}
const props = withDefaults(defineProps<Props>(), {
  timer: 10,
  warn: 5,
  unit: ExpiryUnitTypes.Days
})

// Changes label from:
// EXPIRES IN (n) DAYS > 5 days
// EXPIRES IN 1 DAYS == 1 day
// EXPIRED <= 0 days
const timer = computed(() => props.timer);
const warn = computed(() => props.warn); //timers before using the warning color
const status = computed(() => {
  if (timer.value <= 0) {
    return "expired";
  } else if (timer.value < warn.value) {
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
      {{ t(`expiryIndicator.${unit}`, {'n': timer}) }}
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
